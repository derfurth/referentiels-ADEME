-- insert a fake statut.
-- depends on:
-- - 11-insert_fake_epcis.sql
-- - 10-insert_fake_user.sql
insert into
    action_statut(collectivite_id, action_id, avancement, concerne, modified_by)
    values (1, 'cae_1.1.1.1.1', 'fait', true, '17440546-f389-4d4f-bfdb-b0c94a1bd0f9');


insert into
    score(collectivite_id, action_id, points, potentiel, referentiel_points, concerne, previsionnel, total_taches_count, completed_taches_count)
    values (1, 'cae_1.1.1.1.1', 90, 90, 100, true, 100, 0, 0 );

-- TODO insert scores into client_scores
-- insert into
--     score(collectivite_id, action_id, points, potentiel, referentiel_points, concerne, previsionnel, total_taches_count, completed_taches_count)
--     values (1, 'cae_1.1.1.1', 90, 200, 200, true, 100, 4, 1 )
--     on conflict on constraint score_pkey do update
--         set points = 22, potentiel = 200, referentiel_points = 200, concerne = true, previsionnel = 100,
--             total_taches_count = 4, completed_taches_count = 1
--     ;
