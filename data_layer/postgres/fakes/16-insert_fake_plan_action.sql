truncate table axe cascade;

insert into axe (nom, collectivite_id, parent)
values ('Plan Vélo 2020-2024',1,null), -- id 1
       ('Axe 1 : Sécurité : développer les aménagements cyclables et améliorer la sécurité routière', 1, 1), -- id 2
       ('Axe 2 : Sûreté : mieux lutter contre le vol', 1, 1), -- id 3
       ('Axe 3 : Créer un cadre incitatif reconnaissant pleinement l’usage du vélo comme un mode de transport vertueux', 1, 1), -- id 4
       ('Axe 4 : Développer une culture vélo', 1, 1), -- id 5
       ('4.1 : Pratiquer le vélo en toute sécurité', 1, 5), -- id 6
       ('4.2 : Déployer des plans de mobilité scolaires', 1, 5), -- id 7
       ('4.2.1 : Apprendre le vélo aux enfants', 1, 7), -- id 8
       ('4.2.1.1 : Faire passer permis vélo aux CM2', 1, 8), -- id 9
       ('4.3 : Développer l’activité physique pour la santé', 1, 5), -- id 10
       ('4.4 : Inclure de nouvelles mobilités dans l’organisation de la mobilité', 1, 5), -- id 11
       ('Plan Vélo 2024-2028',1,null), -- id 12
       ('Axe 1 : Sécurité : développer les aménagements cyclables et améliorer la sécurité routière', 1, 12), -- id 13
       ('Axe 2 : Sûreté : mieux lutter contre le vol', 1, 12), -- id 14
       ('Axe 3 : Créer un cadre incitatif reconnaissant pleinement l’usage du vélo comme un mode de transport vertueux', 1, 12), -- id 15
       ('Axe 4 : Développer une culture vélo', 1, 12), -- id 16
       ('4.1 : Pratiquer le vélo en toute sécurité', 1, 16), -- id 17
       ('4.2 : Déployer des plans de mobilité scolaires', 1, 16), -- id 18
       ('4.2.1 : Apprendre le vélo aux enfants', 1, 18), -- id 19
       ('4.2.1.1 : Faire passer permis vélo aux CM2', 1, 19), -- id 20
       ('4.3 : Développer l’activité physique pour la santé', 1, 16), -- id 21
       ('4.4 : Inclure de nouvelles mobilités dans l’organisation de la mobilité', 1, 16); -- id 22


insert into fiche_action (titre, description, thematiques, piliers_eci, collectivite_id)
values ('Permis vélo CM2 école TET 2020-2024',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        array [
            'Bâtiments'::fiche_action_thematiques
            ],
        array [
            'Écoconception'::fiche_action_piliers_eci,
            'Recyclage'::fiche_action_piliers_eci
            ],
        1), -- id 1
       ('Casques et gilets réfléchissants gratuits pour les mineurs 2020-2024', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[],1), -- id 2
       ('Course de vélo 2020-2024', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 3
       ('Ramassage scolaire à vélo 2020-2024', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 4
       ('Ajouter caméra de surveillance au parking à vélo 2020-2024', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 5,
       ('Arranger la piste cyclable 2020-2024', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 6
       ('Permis vélo CM2 école TET 2024-2028','', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 7
       ('Casques et gilets réfléchissants gratuits pour les mineurs 2024-2028', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[],1), -- id 8
       ('Course de vélo 2024-2028', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 9
       ('Ramassage scolaire à vélo 2024-2028', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 10
       ('Ajouter caméra de surveillance au parking à vélo 2024-2028', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 11,
       ('Arranger la piste cyclable 2024-2028', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1), -- id 12
       ('Envoyer les nouvelles consignes de tri', '', array []::fiche_action_thematiques[], array []::fiche_action_piliers_eci[], 1) -- id 13
;

select ajouter_fiche_action_dans_un_axe(1, 9);
select ajouter_fiche_action_dans_un_axe(2, 6);
select ajouter_fiche_action_dans_un_axe(3, 10);
select ajouter_fiche_action_dans_un_axe(4, 4);
select ajouter_fiche_action_dans_un_axe(5, 3);
select ajouter_fiche_action_dans_un_axe(6, 2);
select ajouter_fiche_action_dans_un_axe(7, 20);
select ajouter_fiche_action_dans_un_axe(8, 17);
select ajouter_fiche_action_dans_un_axe(9, 21);
select ajouter_fiche_action_dans_un_axe(10, 15);
select ajouter_fiche_action_dans_un_axe(11, 14);
select ajouter_fiche_action_dans_un_axe(12, 13);

select ajouter_partenaire(1, (select pt.*::partenaire_tag from (select null as id, 'Super partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(1, (select pt.*::partenaire_tag from (select null as id, 'Ultra partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(2, (select pt.*::partenaire_tag from (select null as id, 'Giga partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(3, (select pt.*::partenaire_tag from (select null as id, 'Super partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(4, (select pt.*::partenaire_tag from (select null as id, 'Ultra partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(5, (select pt.*::partenaire_tag from (select null as id, 'Giga partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(6, (select pt.*::partenaire_tag from (select null as id, 'Super partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(7, (select pt.*::partenaire_tag from (select null as id, 'Ultra partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(7, (select pt.*::partenaire_tag from (select null as id, 'Giga partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(8, (select pt.*::partenaire_tag from (select null as id, 'Super partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(9, (select pt.*::partenaire_tag from (select null as id, 'Ultra partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(10, (select pt.*::partenaire_tag from (select null as id, 'Giga partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(11, (select pt.*::partenaire_tag from (select null as id, 'Giga partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(11, (select pt.*::partenaire_tag from (select null as id, 'Super partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(12, (select pt.*::partenaire_tag from (select null as id, 'Ultra partenaire' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_partenaire(13, (select pt.*::partenaire_tag from (select null as id, 'Giga partenaire' as nom, 1 as collectivite_id) pt limit 1));

select ajouter_structure(1, (select pt.*::structure_tag from (select null as id, 'Super structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(1, (select pt.*::structure_tag from (select null as id, 'Ultra structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(2, (select pt.*::structure_tag from (select null as id, 'Giga structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(3, (select pt.*::structure_tag from (select null as id, 'Super structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(4, (select pt.*::structure_tag from (select null as id, 'Ultra structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(5, (select pt.*::structure_tag from (select null as id, 'Giga structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(6, (select pt.*::structure_tag from (select null as id, 'Super structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(7, (select pt.*::structure_tag from (select null as id, 'Ultra structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(7, (select pt.*::structure_tag from (select null as id, 'Giga structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(8, (select pt.*::structure_tag from (select null as id, 'Super structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(9, (select pt.*::structure_tag from (select null as id, 'Ultra structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(10, (select pt.*::structure_tag from (select null as id, 'Giga structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(11, (select pt.*::structure_tag from (select null as id, 'Giga structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(11, (select pt.*::structure_tag from (select null as id, 'Super structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(12, (select pt.*::structure_tag from (select null as id, 'Ultra structure' as nom, 1 as collectivite_id) pt limit 1));
select ajouter_structure(13, (select pt.*::structure_tag from (select null as id, 'Giga structure' as nom, 1 as collectivite_id) pt limit 1));

select ajouter_pilote(1, (select pe.*::personne from (select 'Lou Piote' as nom, 1 as collectivite_id, null as tag_id, null as user_id) pe limit 1));
select ajouter_pilote(1, (select pe.*::personne from (select null as nom, 1 as collectivite_id, null as tag_id, '17440546-f389-4d4f-bfdb-b0c94a1bd0f9' as user_id) pe limit 1));
select ajouter_pilote(2, (select pe.*::personne from (select 'Lou Piote' as nom, 1 as collectivite_id, null as tag_id, null as user_id) pe limit 1));
select ajouter_pilote(3, (select pe.*::personne from (select 'Harry Cot' as nom, 1 as collectivite_id, null as tag_id, null as user_id) pe limit 1));
select ajouter_pilote(4, (select pe.*::personne from (select 'Harry Cot' as nom, 1 as collectivite_id, null as tag_id, null as user_id) pe limit 1));

select ajouter_referent(1, (select pe.*::personne from (select 'Harry Cot' as nom, 1 as collectivite_id, null as tag_id, null as user_id) pe limit 1));
select ajouter_referent(2, (select pe.*::personne from (select null as nom, 1 as collectivite_id, null as tag_id, '17440546-f389-4d4f-bfdb-b0c94a1bd0f9' as user_id) pe limit 1));
select ajouter_referent(4, (select pe.*::personne from (select 'Lou Piote' as nom, 1 as collectivite_id, null as tag_id, null as user_id) pe limit 1));
select ajouter_referent(5, (select pe.*::personne from (select 'Harry Cot' as nom, 1 as collectivite_id, null as tag_id, null as user_id) pe limit 1));
select ajouter_referent(6, (select pe.*::personne from (select 'Harry Cot' as nom, 1 as collectivite_id, null as tag_id, null as user_id) pe limit 1));

select ajouter_action(1, 'eci_2.1');
select ajouter_action(2, 'eci_2.1');
select ajouter_action(3, 'eci_2.1');
select ajouter_action(4, 'eci_2.1');
select ajouter_action(5, 'eci_2.1');

insert into personne_tag (nom, collectivite_id)
values ('Yo Low', 1),
       ('Judes Low', 1);

insert into structure_tag (nom, collectivite_id)
values ('Disneyland', 1),
       ('Parc Estérix', 1);

insert into partenaire_tag (nom, collectivite_id)
values ('Particulier', 1),
       ('Particulière', 1);