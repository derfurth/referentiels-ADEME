-- Deploy tet:stats/vues_BI to pg

BEGIN;

create materialized view stats.evolution_indicateur_referentiel
as
with indicateurs as (select collectivite_id,
                            indicateur_id,
                            min(modified_at) as first_modified_at
                     from indicateur_resultat
                              join stats.collectivite_active using (collectivite_id)
                     group by collectivite_id, indicateur_id)
select first_day as mois,
       count(*)  as indicateurs
from stats.monthly_bucket m
         left join indicateurs on indicateurs.first_modified_at <= last_day
group by first_day
order by first_day;

create view stats_evolution_indicateur_referentiel
as
select *
from stats.evolution_indicateur_referentiel;

create materialized view stats.evolution_resultat_indicateur_referentiel
as
select first_day as mois,
       count(*)  as resultats
from stats.monthly_bucket m
         left join indicateur_resultat ir on ir.modified_at <= last_day
         join stats.collectivite_active using (collectivite_id)
group by first_day
order by first_day;

create view stats_evolution_resultat_indicateur_referentiel
as
select *
from stats.evolution_resultat_indicateur_referentiel;

create materialized view stats.evolution_resultat_indicateur_personnalise
as
select first_day as mois,
       count(*)  as resultats
from stats.monthly_bucket m
         left join indicateur_personnalise_resultat ipr on ipr.modified_at <= last_day
         join stats.collectivite_active using (collectivite_id)
group by first_day
order by first_day;

create view stats_evolution_resultat_indicateur_personnalise
as
select *
from stats.evolution_resultat_indicateur_personnalise;

create materialized view stats.engagement_collectivite
as
select collectivite_id,
       coalesce(cot.actif, false) as cot,
       coalesce(eci.etoiles, 0)   as etoiles_eci,
       coalesce(cae.etoiles, 0)   as etoiles_cae
from stats.collectivite c
         left join cot using (collectivite_id)
         left join lateral (select etoiles
                            from labellisation l
                            where l.collectivite_id = c.collectivite_id
                              and referentiel = 'eci') eci on true
         left join lateral (select etoiles
                            from labellisation l
                            where l.collectivite_id = c.collectivite_id
                              and referentiel = 'cae') cae on true;

create view stats_engagement_collectivite
as
select *
from stats.engagement_collectivite;


create or replace function
    stats.refresh_views()
    returns void
as
$$
begin
    refresh materialized view stats.collectivite;
    refresh materialized view stats.collectivite_utilisateur;
    refresh materialized view stats.collectivite_referentiel;
    refresh materialized view stats.collectivite_labellisation;
    refresh materialized view stats.collectivite_plan_action;
    refresh materialized view stats.collectivite_action_statut;
    refresh materialized view stats.evolution_activation;
    refresh materialized view stats.rattachement;
    refresh materialized view stats.utilisateur;
    refresh materialized view stats.evolution_utilisateur;
    refresh materialized view stats.connection;
    refresh materialized view stats.evolution_connection;
    refresh materialized view stats.carte_collectivite_active;
    refresh materialized view stats.evolution_total_activation_par_type;
    refresh materialized view stats.collectivite_actives_et_total_par_type;
    refresh materialized view stats.evolution_nombre_utilisateur_par_collectivite;
    refresh materialized view stats.carte_epci_par_departement;
    refresh materialized view stats.pourcentage_completude;
    refresh materialized view stats.evolution_collectivite_avec_minimum_fiches;
    refresh materialized view stats.evolution_indicateur_referentiel;
    refresh materialized view stats.evolution_resultat_indicateur_referentiel;
    refresh materialized view stats.evolution_resultat_indicateur_personnalise;
    refresh materialized view stats.engagement_collectivite;
end ;
$$ language plpgsql security definer;

COMMIT;
