-- Deploy tet:utils/automatisation to pg

BEGIN;

-- Vue d'un utilisateur pour un crm
create view users_crm as
select p.prenom                              as prenom,
       p.nom                                 as nom,
       p.email                               as email,
       p.telephone                           as telephone,
       u.created_at                          as creation,
       u.last_sign_in_at                     as derniere_connexion
from dcp p
         join auth.users u on u.id = p.user_id;

-- Vue d'un utilisateur pour un crm
create view collectivites_crm as
select unaccent(c.nom) as nom,
       c.collectivite_id,
       c.code_siren_insee,
       c.completude_cae,
       c.completude_eci,
       dep.libelle as departement_name,
       reg.libelle as region_name,
       c.population as population_totale,
       c.type_collectivite
from collectivite_card c
         join imports.departement dep on c.departement_code = dep.code
         join imports.region reg on c.region_code = reg.code;

-- Vue lien collectivite - utilisateur pour un crm
create view collectivite_membre_crm as
select dcp.email,
       coalesce(c.code, e.siren, '') as code_siren_insee,
       pcm.collectivite_id,
       pcm.user_id
from private_collectivite_membre pcm
         join dcp on dcp.user_id = pcm.user_id
         left join commune c on pcm.collectivite_id = c.collectivite_id
         left join epci e on pcm.collectivite_id = e.collectivite_id;

-- Envoie l'utilisateur modifié à n8n
create or replace function send_users_json_n8n() returns trigger as $$
declare
    to_send jsonb;
begin
    to_send = to_jsonb((select jsonb_build_array(u.*)
                        from users_crm u
                        where u.email = new.email));
    perform http_post(
            'https://territoires.app.n8n.cloud/webhook/7727c971-f11b-4f16-9a65-06e4c77e05b4',
            to_send::varchar,
            'application/json'::varchar
        );
    return new;
end;
$$ language plpgsql security definer;
comment on function send_users_json_n8n is
    'Envoie le json de l''enregistrement dcp upsert à n8n';

-- Envoie la collectivite modifié à n8n
create or replace function send_collectivites_json_n8n() returns trigger as $$
declare
    to_send jsonb;
begin
    to_send = to_jsonb((select jsonb_build_array(c.*)
                        from collectivites_crm c
                        where c.collectivite_id = new.collectivite_id));
    perform http_post(
            'https://territoires.app.n8n.cloud/webhook/72c7d554-91af-4b9f-a50a-d2cb358e2429',
            to_send::varchar,
            'application/json'::varchar
        );
    return new;
end;
$$ language plpgsql security definer;
comment on function send_collectivites_json_n8n is
    'Envoie le json de l''enregistrement collectivite upsert à n8n';

-- Envoie le lien collectivite utilisateur modifié à n8n
create or replace function send_collectivite_membre_json_n8n() returns trigger as $$
declare
    to_send jsonb;
begin
    to_send = to_jsonb((select jsonb_build_array(c.*)
                        from collectivite_membre_crm c
                        where c.user_id = new.user_id
                        and c.collectivite_id =new.collectivite_id));
    perform http_post(
            'https://territoires.app.n8n.cloud/webhook/0c2cc85e-5c38-44ed-a373-117e53125eb6',
            to_send::varchar,
            'application/json'::varchar
        );
    return new;
end;
$$ language plpgsql security definer;
comment on function send_collectivite_membre_json_n8n is
    'Envoie le json de lien entre collectivite et utilisateur upsert à n8n';

-- Trigger sur la table dcp
create trigger dcp_upsert_automatisation
    after insert or update
    on dcp
    for each row
execute procedure send_users_json_n8n();

-- Trigger sur la table commune
create trigger commune_upsert_automatisation
    after insert or update
    on public.commune
    for each row
execute procedure send_collectivites_json_n8n();

-- Trigger sur la table epci
create trigger epci_upsert_automatisation
    after insert or update
    on public.epci
    for each row
execute procedure send_collectivites_json_n8n();

-- Trigger sur la table private_collectivite_membre
create trigger collectivite_membre_upsert_automatisation
    after insert or update
    on private_collectivite_membre
    for each row
execute procedure send_collectivite_membre_json_n8n();

COMMIT;
