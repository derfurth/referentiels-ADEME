-- Verify tet:labellisation/audit on pg

BEGIN;

select collectivite_id, referentiel, audit, is_cot
from audits
where false;

ROLLBACK;
