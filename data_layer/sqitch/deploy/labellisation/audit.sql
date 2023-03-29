-- Deploy tet:labellisation/audit to pg
BEGIN;

create function labellisation_cloturer_audit(
    audit_id integer,
    date_fin timestamptz default current_timestamp
)
    returns labellisation.audit
as
$$
declare
    audit labellisation.audit;
begin
    -- si l'utilisateur n'est pas le service role
    if not is_service_role()
    then -- alors on renvoie un code 403
        perform set_config('response.status', '403', true);
        raise 'Seul le service role peut clôturer l''audit.';
    end if;

    update labellisation.audit
    set date_fin = labellisation_cloturer_audit.date_fin
    where id = audit_id
    returning * into audit;

    return audit;
end;
$$ language plpgsql security definer;
comment on function labellisation_cloturer_audit is
    'Clôture un audit.';

create function
    labellisation_peut_commencer_audit(audit_id integer)
    returns bool
begin
    atomic
    select count(*) > 0
    from audit_auditeur aa
    where aa.audit_id = labellisation_peut_commencer_audit.audit_id
      and aa.auditeur = auth.uid();
end;
comment on function labellisation_peut_commencer_audit is
    'Vrai si l''utilisateur peut commencer un audit.';

COMMIT;
