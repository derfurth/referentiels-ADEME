-- Verify tet:retool/labellisation on pg

BEGIN;


select id, en_cours,
       collectivite_id,
       referentiel,
       etoiles,
       nom,
       sujet,
       envoyee_le,
       date,
       modified_at,
       demandeur_prenom,
       demandeur_nom,
       demandeur_email,
       demandeur_fonction
from retool_labellisation_demande
where false;

ROLLBACK;
