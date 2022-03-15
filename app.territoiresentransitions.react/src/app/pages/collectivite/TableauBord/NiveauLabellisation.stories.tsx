import {Story, Meta} from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import {
  NiveauLabellisation,
  TNiveauLabellisationProps,
} from './NiveauLabellisation';

export default {
  component: NiveauLabellisation,
} as Meta;

const Template: Story<TNiveauLabellisationProps> = args => (
  <NiveauLabellisation {...args} />
);

export const NonLabellisePasDeDonnees = Template.bind({});
NonLabellisePasDeDonnees.args = {
  labellisation: {},
};

export const NonLabellise = Template.bind({});
NonLabellise.args = {
  labellisation: {
    0: {
      collectivite_id: 1,
      etoiles: 0,
      score_realise: 0.1,
      score_programme: 0.62,
    },
  },
};

export const UneEtoile = Template.bind({});
UneEtoile.args = {
  labellisation: {
    1: {
      collectivite_id: 1,
      etoiles: 1,
      obtenue_le: new Date('2022-03-14T09:43:00.251Z'),
      score_realise: 0.2,
      score_programme: 0.62,
    },
  },
};

export const DeuxEtoilesPossibles = Template.bind({});
DeuxEtoilesPossibles.args = {
  labellisation: {
    1: {
      collectivite_id: 1,
      etoiles: 1,
      obtenue_le: new Date('2022-03-14T09:43:00.251Z'),
      score_realise: 0.36,
      score_programme: 0.62,
    },
  },
};

export const DeuxEtoiles = Template.bind({});
DeuxEtoiles.args = {
  labellisation: {
    1: {
      collectivite_id: 1,
      etoiles: 1,
      obtenue_le: new Date('2020-03-14T09:43:00.251Z'),
      score_realise: 0.2,
      score_programme: 0.45,
    },
    2: {
      collectivite_id: 1,
      etoiles: 2,
      obtenue_le: new Date('2022-03-14T09:43:00.251Z'),
      score_realise: 0.37,
      score_programme: 0.62,
    },
  },
};

export const DeuxEtoilesScoreNul = Template.bind({});
DeuxEtoilesScoreNul.args = {
  labellisation: {
    1: {
      collectivite_id: 1,
      etoiles: 2,
      obtenue_le: new Date('2020-03-14T09:43:00.251Z'),
      score_realise: null,
      score_programme: null,
    },
    2: {
      collectivite_id: 1,
      etoiles: 2,
      obtenue_le: new Date('2022-03-14T09:43:00.251Z'),
      score_realise: null,
      score_programme: null,
    },
  },
};

// la 2ème étoile est renseignée mais pas la 1ère : le tooltip de la 1ère va
// afficher uniquement "Reconnaissance obtenue"
export const DeuxEtoilesDirectement = Template.bind({});
DeuxEtoilesDirectement.args = {
  labellisation: {
    2: {
      collectivite_id: 1,
      etoiles: 2,
      obtenue_le: new Date('2022-03-14T09:43:00.251Z'),
      score_realise: null,
      score_programme: null,
    },
  },
};

// bien que la spec dise "Cas particulier deuxième étoile...", la règle doit
// s'appliquer aux autres étoiles quand le score requis est dépassé (sinon le
// tooltip "Plus que ...% à réaliser..." va afficher une valeur négative !)
export const TroisEtoilesPossibles = Template.bind({});
TroisEtoilesPossibles.args = {
  labellisation: {
    1: {
      collectivite_id: 1,
      etoiles: 1,
      obtenue_le: new Date('2020-03-14T09:43:00.251Z'),
      score_realise: 0.2,
      score_programme: 0.45,
    },
    2: {
      collectivite_id: 1,
      etoiles: 2,
      obtenue_le: new Date('2022-03-14T09:43:00.251Z'),
      score_realise: 0.7,
      score_programme: 0.75,
    },
  },
};

export const TroisEtoiles = Template.bind({});
TroisEtoiles.args = {
  labellisation: {
    1: {
      collectivite_id: 1,
      etoiles: 1,
      obtenue_le: new Date('2018-03-14T09:43:00.251Z'),
      score_realise: 0.2,
      score_programme: 0.45,
    },
    2: {
      collectivite_id: 1,
      etoiles: 2,
      obtenue_le: new Date('2020-03-14T09:43:00.251Z'),
      score_realise: 0.37,
      score_programme: 0.62,
    },
    3: {
      collectivite_id: 1,
      etoiles: 3,
      obtenue_le: new Date('2022-03-14T09:43:00.251Z'),
      score_realise: 0.51,
      score_programme: 0.62,
    },
  },
};

export const QuatreEtoiles = Template.bind({});
QuatreEtoiles.args = {
  labellisation: {
    ...TroisEtoiles.args.labellisation,
    4: {
      collectivite_id: 1,
      etoiles: 4,
      obtenue_le: new Date('2023-03-14T09:43:00.251Z'),
      score_realise: 0.65,
      score_programme: 0.8,
    },
  },
};

export const CinqEtoiles = Template.bind({});
CinqEtoiles.args = {
  labellisation: {
    ...QuatreEtoiles.args.labellisation,
    5: {
      collectivite_id: 1,
      etoiles: 5,
      obtenue_le: new Date('2024-03-14T09:43:00.251Z'),
      score_realise: 0.75,
      score_programme: 0.8,
    },
  },
};
