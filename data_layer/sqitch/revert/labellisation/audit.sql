-- Deploy tet:labellisation/audit to pg
BEGIN;

-- Table audit
alter table audit
add column auditeur uuid references auth.users;

drop table audit_auditeur;

create or replace function labellisation.upsert_action_audit()
    returns trigger as
$$
declare
    found_audit          audit;
    existing_audit_state labellisation.action_audit_state;

begin
    if not have_edition_acces(new.collectivite_id)
    then
        perform set_config('response.status', '403', true);
        raise 'L''utilisateur n''a pas de droit en édition sur la collectivité.';
    end if;

    found_audit = labellisation.current_audit(
            new.collectivite_id,
            (select ar.referentiel
             from action_relation ar
             where ar.id = new.action_id)
        );

    if found_audit is null
    then
        raise 'Pas d''audit en cours.';
    end if;

    if found_audit.auditeur != auth.uid()
    then
        perform set_config('response.status', '403', true);
        raise 'L''utilisateur n''est pas auditeur sur l''audit de la collectivité.';
    end if;

    select *
    from labellisation.action_audit_state
    where audit_id = found_audit.id
      and collectivite_id = new.collectivite_id
      and action_id = new.action_id
    into existing_audit_state;

    if existing_audit_state is null
    then
        insert into labellisation.action_audit_state (audit_id, action_id, collectivite_id, avis, ordre_du_jour, statut)
        values (found_audit.id, new.action_id, new.collectivite_id, coalesce(new.avis, ''), new.ordre_du_jour, new.statut);
    else
        update labellisation.action_audit_state
        set avis          = coalesce(new.avis, ''),
            ordre_du_jour = new.ordre_du_jour,
            statut        = new.statut
        where id = existing_audit_state.id;
    end if;

    return new;
end;
$$ language plpgsql security definer;


create or replace trigger upsert
    instead of insert
    on public.action_audit_state
    for each row
execute procedure labellisation.upsert_action_audit();

-- Récupère les données d'avant la migration
do $$
    declare
        migraudit migration.audit;
    begin
        for migraudit in select * from migration.audit
            loop
                update public.audit
                set auditeur = migraudit.auditeur
                where id = migraudit.id;
            end loop;
    end
$$;

drop table migration.audit;

COMMIT;
