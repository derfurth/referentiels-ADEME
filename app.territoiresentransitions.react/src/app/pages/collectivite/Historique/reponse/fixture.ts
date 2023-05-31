import {THistoriqueItem} from '../types';

export const fakeReponseChoix: THistoriqueItem = {
  type: 'reponse',
  collectivite_id: 1,
  modified_by_id: '17440546-f389-4d4f-bfdb-b0c94a1bd0f9',
  previous_modified_by_id: null,
  modified_at: '2022-08-18T13:47:30.205174+00:00',
  previous_modified_at: null,
  action_id: null,
  action_ids: null,
  avancement: null,
  previous_avancement: null,
  avancement_detaille: null,
  previous_avancement_detaille: null,
  concerne: null,
  previous_concerne: null,
  precision: null,
  previous_precision: null,
  question_id: 'voirie_1',
  question_type: 'choix',
  reponse: "Oui sur l'ensemble du territoire",
  modified_by_nom: 'Yolo Dodo',
  tache_identifiant: null,
  tache_nom: null,
  action_identifiant: null,
  action_nom: null,
  question_formulation: 'La collectivité a-t-elle la compétence voirie ?',
  thematique_id: 'mobilite',
  thematique_nom: 'Mobilité',
  previous_reponse: null,
  justification: null,
  previous_justification: null,
};

export const fakeReponseChoix2: THistoriqueItem = {
  ...fakeReponseChoix,
  previous_reponse: "Oui sur l'ensemble du territoire",
  reponse:
    "Oui uniquement sur les trottoirs, parkings ou zones d'activités et industrielles",
};

export const fakeReponseBinaire: THistoriqueItem = {
  type: 'reponse',
  collectivite_id: 1,
  modified_by_id: '17440546-f389-4d4f-bfdb-b0c94a1bd0f9',
  previous_modified_by_id: null,
  modified_at: '2022-08-18T13:47:14.396201+00:00',
  previous_modified_at: null,
  action_id: null,
  action_ids: null,
  avancement: null,
  previous_avancement: null,
  avancement_detaille: null,
  previous_avancement_detaille: null,
  concerne: null,
  previous_concerne: null,
  precision: null,
  previous_precision: null,
  question_id: 'dechets_3',
  question_type: 'binaire',
  reponse: false,
  modified_by_nom: 'Yolo Dodo',
  tache_identifiant: null,
  tache_nom: null,
  action_identifiant: null,
  action_nom: null,
  question_formulation:
    'La collectivité est-elle chargée de la réalisation d\'un "Programme local de prévention des déchets ménagers et assimilés" (PLPDMA) du fait de sa compétence collecte et/ou par délégation d\'une autre collectivité ?',
  thematique_id: 'dechets',
  thematique_nom: 'Déchets',
  previous_reponse: null,
  justification: null,
  previous_justification: null,
};

export const fakeReponseBinaire2: THistoriqueItem = {
  ...fakeReponseBinaire,
  previous_reponse: false,
  reponse: true,
};

export const fakeReponseProportion: THistoriqueItem = {
  type: 'reponse',
  collectivite_id: 1,
  modified_by_id: '17440546-f389-4d4f-bfdb-b0c94a1bd0f9',
  previous_modified_by_id: null,
  modified_at: '2022-08-18T15:10:37.202555+00:00',
  previous_modified_at: null,
  action_id: null,
  action_ids: null,
  avancement: null,
  previous_avancement: null,
  avancement_detaille: null,
  previous_avancement_detaille: null,
  concerne: null,
  previous_concerne: null,
  precision: null,
  previous_precision: null,
  question_id: 'dev_eco_2',
  question_type: 'proportion',
  reponse: 0.25,
  tache_identifiant: null,
  tache_nom: null,
  action_identifiant: null,
  action_nom: null,
  modified_by_nom: 'Yolo Dodo',
  question_formulation:
    'Quelle est la part de la collectivité dans la structure compétente en matière de développement économique ?',
  thematique_id: 'developpement_economique',
  thematique_nom: 'Développement économique',
  previous_reponse: null,
  justification: null,
  previous_justification: null,
};

export const fakeReponseProportion2: THistoriqueItem = {
  ...fakeReponseProportion,
  previous_reponse: 0.25,
  reponse: 0.5,
};
