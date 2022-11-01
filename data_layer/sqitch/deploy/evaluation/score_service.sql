-- Deploy tet:evaluation/score_service to pg

BEGIN;

create table evaluation.service_configuration
(
    evaluation_endpoint       varchar                   not null,
    personnalisation_endpoint varchar                   not null,
    created_at                timestamptz default now() not null
);

create view evaluation.service_reponses
as
with r as (select q.id                                                                 as question_id,
                  coalesce(rb.collectivite_id, rp.collectivite_id, rc.collectivite_id) as collectivite_id,
                  case
                      when q.type = 'binaire'
                          then
                          case
                              when rb.reponse
                                  then jsonb_build_object('id', q.id,
                                                          'value', 'OUI')
                              else
                                  jsonb_build_object('id', q.id,
                                                     'value', 'NON')
                              end
                      when q.type = 'proportion'
                          then jsonb_build_object('id', q.id,
                                                  'value', rp.reponse)
                      when q.type = 'choix'
                          then jsonb_build_object('id', q.id,
                                                  'value', rc.reponse)
                      end                                                              as reponse
           from question q
                    left join reponse_binaire rb on rb.question_id = q.id and rb.reponse is not null
                    left join reponse_proportion rp on rp.question_id = q.id and rp.reponse is not null
                    left join reponse_choix rc on rc.question_id = q.id and rc.reponse is not null)
select r.collectivite_id,
       jsonb_agg(r.reponse) as reponses
from r
where r.collectivite_id is not null
group by r.collectivite_id;

create view evaluation.service_regles
as
select action_id,
       jsonb_agg(jsonb_build_object('type', pr.type, 'formule', formule)) as regles
from personnalisation_regle pr
group by action_id;

alter table client_scores
    alter column score_created_at set default CURRENT_TIMESTAMP;

-- todo remove deprecated triggers
drop trigger if exists after_action_statut_insert on action_statut;
-- drop function after_action_statut_insert_write_event;
-- drop table action_statut_update_event;

create materialized view evaluation.service_referentiel
as
with computed_points as (select referentiel,
                                jsonb_agg(jsonb_build_object(
                                        'referentiel', ar.referentiel,
                                        'action_id', acp.action_id,
                                        'value', value
                                    )) as data
                         from action_computed_points acp
                                  join action_relation ar on acp.action_id = ar.id
                         group by referentiel),
     children as (select referentiel,
                         jsonb_agg(jsonb_build_object(
                                 'referentiel', referentiel,
                                 'action_id', ac.id,
                                 'children', children)) as data
                  from action_children ac
                           join action_relation ar on ac.id = ar.id
                  group by referentiel)

select c.referentiel,
       json_build_object(
               'action_level', case when c.referentiel = 'cae' then 3 else 2 end,
               'children', c.data,
               'computed_points', p.data
           ) as data
from children c
         left join computed_points p on c.referentiel = p.referentiel;
comment on materialized view evaluation.service_referentiel
    is 'Les référentiels au format json pour l''évaluation par le business.'
        'Coûteuse à construire elle est rafraichie lors de la mise à jour des référentiels';


-- Modifie le trigger de mise à jour du contenu suite à l'insertion de json.
create or replace function
    private.upsert_referentiel_after_json_insert()
    returns trigger
as
$$
declare
begin
    -- Met à jour le contenu.
    perform private.upsert_actions(new.definitions, new.children);
    -- Rafraichit la vue des référentiels utilisée pour l'évaluation.
    refresh materialized view evaluation.service_referentiel;
    return new;
end;
$$ language plpgsql
    -- Nécessite les droits sur la vue matérialisée pour la rafraichir.
    security definer;


create view evaluation.service_statuts
as
select collectivite_id,
       referentiel,
       jsonb_agg(jsonb_build_object(
               'action_id', action_id,
               'detailed_avancement',
               case
                   when avancement = 'fait' then jsonb_build_object(
                           'fait', 1.0,
                           'programme', 0.0,
                           'pas_fait', 0.0
                       )
                   when avancement = 'programme' then jsonb_build_object(
                           'fait', 0.0,
                           'programme', 1.0,
                           'pas_fait', 0.0
                       )
                   when avancement = 'pas_fait' then jsonb_build_object(
                           'fait', 0.0,
                           'programme', 0.0,
                           'pas_fait', 1.0
                       )
                   when avancement = 'detaille' then jsonb_build_object(
                           'fait', avancement_detaille[1],
                           'programme', avancement_detaille[2],
                           'pas_fait', avancement_detaille[3]
                       )
                   end,
               'concerne', concerne
           )) as data
from action_statut
         left join action_relation on action_statut.action_id = action_relation.id
group by collectivite_id, referentiel;


create or replace function
    evaluation.evaluate_statuts(
    in collectivite_id integer,
    in referentiel referentiel,
    in scores_table varchar,
    out status integer,
    out content_type varchar,
    out http_header http_header[],
    out content varchar
)
as
$$
with payload as (select evaluate_statuts.collectivite_id,
                        r.referentiel,
                        evaluate_statuts.scores_table as scores_table,
                        jsonb_build_object(
                                'statuts', coalesce(s.data, to_jsonb('{}'::jsonb[])), -- si il n'y a pas de statuts
                                'referentiel', r.data,
                                'consequences', jsonb_build_object() -- todo
                            )                         as payload
                 from evaluation.service_referentiel as r
                          left join evaluation.service_statuts s
                                    on s.referentiel = r.referentiel
                                        and s.collectivite_id = evaluate_statuts.collectivite_id
                 where r.referentiel = evaluate_statuts.referentiel),
     configuration as (select *
                       from evaluation.service_configuration
                       order by created_at desc
                       limit 1)

select post.*
from configuration -- si il n'y a aucune configuration on ne fait pas d'appel
         join payload on true
         left join lateral (select *
                            from http_post(
                                    configuration.evaluation_endpoint,
                                    to_jsonb(payload.*)::varchar,
                                    'application/json'::varchar
                                )
    ) as post on true
$$
    language sql
    security definer
    set search_path = public, extensions;


create or replace function
    evaluation.evaluate_regles(
    in collectivite_id integer,
    in consequences_table varchar,
    in scores_table varchar,
    out status integer,
    out content_type varchar,
    out http_header http_header[],
    out content varchar
)
as
$$
with -- les payloads pour le calculs des scores des référentiels
     evaluation_payload as (select evaluate_regles.collectivite_id,
                                   r.referentiel,
                                   evaluate_regles.scores_table as scores_table,
                                   jsonb_build_object(
                                           'statuts',
                                           coalesce(s.data, to_jsonb('{}'::jsonb[])), -- si il n'y a pas de statuts
                                           'referentiel', r.data,
                                           'consequences', jsonb_build_object() -- todo
                                       )                        as payload
                            from evaluation.service_referentiel as r
                                     left join evaluation.service_statuts s
                                               on s.referentiel = r.referentiel
                                                   and s.collectivite_id = evaluate_regles.collectivite_id),

     -- la payload de personnalisation qui contient les payloads d'évaluation.
     personnalisation_payload as (select ci.id                                                       as collectivite_id,
                                         evaluate_regles.consequences_table                          as consequences_table,
                                         jsonb_build_object(
                                                 'identite', jsonb_build_object('population', ci.population,
                                                                                'type', ci.type,
                                                                                'localisation',
                                                                                ci.localisation), -- si il n'y a pas de statuts
                                                 'regles',
                                                 (select jsonb_agg(to_jsonb(sr)) from evaluation.service_regles sr),
                                                 'reponses',
                                                 (select reponses
                                                  from evaluation.service_reponses sr
                                                  where sr.collectivite_id = ci.id)
                                             )                                                       as payload,
                                         (select jsonb_agg(to_jsonb(ep)) from evaluation_payload ep) as evaluation_payloads
                                  from collectivite_identite ci
                                  where ci.id = evaluate_regles.collectivite_id),
     configuration as (select *
                       from evaluation.service_configuration
                       order by created_at desc
                       limit 1)

select post.*
from configuration -- si il n'y a aucune configuration on ne fait pas d'appel
         join personnalisation_payload on true
         left join lateral (
    -- appel le business avec la payload.
    select *
    from http_post(
            configuration.personnalisation_endpoint,
            to_jsonb(personnalisation_payload.*)::varchar,
            'application/json'::varchar
        )
    ) as post on true
$$
    language sql
    security definer
-- permet d'utiliser l'extension http depuis un trigger
    set search_path = public, extensions;


create or replace function after_reponse_call_business() returns trigger as
$$
declare
begin
    perform evaluation.evaluate_regles(
            new.collectivite_id,
            'personnalisation_consequence',
            'client_scores'
        );
    return new;
end
$$ language plpgsql security definer;

create trigger after_reponse_insert
    after insert or update
    on reponse_binaire
    for each row
execute procedure after_reponse_call_business();

create trigger after_reponse_insert
    after insert or update
    on reponse_choix
    for each row
execute procedure after_reponse_call_business();

create trigger after_reponse_insert
    after insert or update
    on reponse_proportion
    for each row
execute procedure after_reponse_call_business();

create or replace function after_action_statut_call_business() returns trigger as
$$
declare
    relation action_relation%ROWTYPE;
begin
    select * into relation from action_relation where id = new.action_id limit 1;
    perform evaluation.evaluate_statuts(new.collectivite_id, relation.referentiel, 'client_scores');
    return new;
end
$$ language plpgsql security definer;

create trigger after_action_statut_insert
    after insert or update
    on action_statut
    for each row
execute procedure after_action_statut_call_business();

COMMIT;
