-- Deploy tet:dcp to pg
-- requires: base

BEGIN;

alter table dcp
    drop column cgu_acceptees_le;
    drop function accepter_cgu;
COMMIT;
