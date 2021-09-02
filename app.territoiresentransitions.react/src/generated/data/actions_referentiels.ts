import {ActionReferentiel} from '../models/action_referentiel';

export const actions: ActionReferentiel[] = [
  new ActionReferentiel({
    id: 'citergie__1.1.1',
    id_nomenclature: '1.1.1',
    nom: 'D\u00e9finir la vision, les objectifs et la strat\u00e9gie Climat-Air-Energie',
    description:
      '\u003cp\u003eLa collectivit\u00e9 d\u00e9finit une vision climat-air-\u00e9nergie, y associe des objectifs qualitatifs et quantitatifs d\u00e9clin\u00e9s dans ses politiques sectorielles. Elle affirme son engagement en mati\u00e8re de climat, d\u2019air et d\u0027\u00e9nergie en s\u0027impliquant dans des r\u00e9seaux et des d\u00e9marches ambitieuses et reconnues  et en d\u00e9finissant des objectifs plus ambitieux que les objectifs nationaux minimums. Ces objectifs sont d\u00e9finis clairement dans un document sp\u00e9cifique.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 d\u00e9finit une strat\u00e9gie climat-air-\u00e9nergie d\u00e9taillant la vision qu\u0027elle s\u0027est fix\u00e9e et structur\u00e9e autour d\u0027objectifs \u00e0 moyen et long termes et de cibles interm\u00e9diaires de r\u00e9duction des consommations et \u00e9missions. Un programme d\u2019actions op\u00e9rationnel y est associ\u00e9, \u00e9labor\u00e9 en coh\u00e9rence avec les objectifs fix\u00e9s.\u003c/p\u003e\n',
    thematique_id: 'strategie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.1.1.1',
        id_nomenclature: '1.1.1.1',
        nom: 'Formaliser la vision et les engagements',
        description: '',
        thematique_id: 'strategie',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.1.1.1',
            id_nomenclature: '1.1.1.1.1',
            nom: 'Formaliser une vision et des engagements dans une d\u00e9cision de politique g\u00e9n\u00e9rale (d\u00e9lib\u00e9ration)',
            description:
              '\u003cp\u003eUne vision et des engagements sont formalis\u00e9s dans une d\u00e9cision de politique g\u00e9n\u00e9rale (d\u00e9lib\u00e9ration).\u003c/p\u003e\n\u003cp\u003ePour les oblig\u00e9s PCAET la valorisation de la vision et des engagements va au-del\u00e0 des obligations r\u00e9glementaires.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.1.2',
            id_nomenclature: '1.1.1.1.2',
            nom: 'S\u0027engager dans des d\u00e9marches ambitieuses et reconnues (TEPOS, Convention des Maires)',
            description:
              '\u003cp\u003eEngagement dans une d\u00e9marche telle que Territoires \u00e0 \u00e9nergie positive (TEPOS du r\u00e9seau CLER) ou la Convention des maires (Programme de l\u0027Union Europ\u00e9enne)).\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.1.2',
        id_nomenclature: '1.1.1.2',
        nom: 'D\u00e9finir les principaux objectifs \u00e9nerg\u00e9tiques et climatiques',
        description: '',
        thematique_id: 'strategie',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.1.2.1',
            id_nomenclature: '1.1.1.2.1',
            nom: 'D\u00e9finir des objectifs \u00e9nerg\u00e9tiques et climatiques directeurs chiffr\u00e9s',
            description:
              '\u003cp\u003eCes objectifs sont en relation avec les objectifs r\u00e9gionaux (SRCAE/SRADDET), nationaux (au moins aussi ambitieux) et internationaux (Convention des Maires), et couvrant a minima les th\u00e9matiques inscrites dans la r\u00e9glementation PCAET :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eR\u00e9duction des \u00e9missions de gaz \u00e0 effet de serre du territoire\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eR\u00e9duction de la consommation d\u2019\u00e9nergie finale\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eProduction et consommation des \u00e9nergies renouvelables, valorisation des potentiels d\u2019\u00e9nergies de r\u00e9cup\u00e9ration et de stockage\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eLivraison d\u2019\u00e9nergie renouvelable et de r\u00e9cup\u00e9ration par les r\u00e9seaux de chaleur\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eR\u00e9duction des \u00e9missions de polluants atmosph\u00e9riques et de leur concentration, limitation de l\u0027exposition des populations\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eAdaptation au changement climatique/Stockage de carbone sur le territoire\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eObjectifs de productions bio-sourc\u00e9es \u00e0 usages autres qu\u0027alimentaires\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003e\u00c9volution coordonn\u00e9e des r\u00e9seaux \u00e9nerg\u00e9tiques\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.2.2',
            id_nomenclature: '1.1.1.2.2',
            nom: 'Adapter les objectifs \u00e9nerg\u00e9tiques et climatiques chiffr\u00e9s au territoire',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.2.3',
            id_nomenclature: '1.1.1.2.3',
            nom: 'D\u00e9finir des objectifs concernant la lutte contre la pollution de l\u2019air',
            description:
              '\u003cp\u003eCes objectifs correspondent a minima aux objectifs r\u00e9gionaux, nationaux et europ\u00e9ens qui fixent des valeurs cibles, des valeurs limites ainsi que des seuils d\u2019information et d\u2019alerte.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.1.3',
        id_nomenclature: '1.1.1.3',
        nom: 'D\u00e9tailler la strat\u00e9gie et les objectifs \u00e9nerg\u00e9tiques et climatiques par secteurs d\u2019activit\u00e9s (sc\u00e9narios)',
        description:
          '\u003cp\u003ePour les oblig\u00e9s PCAET :\u00a0la forme des objectifs est pr\u00e9cis\u00e9e et suivie r\u00e9guli\u00e8rement : la collectivit\u00e9 doit traduire ces engagements en ordre de grandeurs concrets et op\u00e9rationnels (exemple r\u00e9nover XX logements d\u2019ici \u00e0 2030 soit XX logements par an).\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.1.3.1',
            id_nomenclature: '1.1.1.3.1',
            nom: 'D\u00e9tailler des sc\u00e9narios prospectifs et des objectifs chiffr\u00e9s dans la strat\u00e9gie',
            description:
              '\u003cp\u003eCes sc\u00e9narios prospectifs et ces objectifs chiffr\u00e9s permettant de mesurer les efforts \u00e0 faire par la collectivit\u00e9.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.3.2',
            id_nomenclature: '1.1.1.3.2',
            nom: 'D\u00e9tailler les objectifs chiffr\u00e9s pour chaque secteur d\u2019activit\u00e9',
            description:
              '\u003cp\u003eSecteurs d\u0027activit\u00e9s: R\u00e9sidentiel, Tertiaire, Transport routier, Autres transports, Agriculture, D\u00e9chets, Industrie hors branche \u00e9nergie.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.3.3',
            id_nomenclature: '1.1.1.3.3',
            nom: 'D\u00e9tailler les objectifs chiffr\u00e9s \u00e0 atteindre \u00e0 l\u2019horizon 2020, 2030 et 2050 par secteurs d\u2019activit\u00e9s',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.3.4',
            id_nomenclature: '1.1.1.3.4',
            nom: 'D\u00e9finir des objectifs particuli\u00e8rement ambitieux dans les domaines de la planification de l\u2019am\u00e9nagement, du b\u00e2timent et des transports',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.3.5',
            id_nomenclature: '1.1.1.3.5',
            nom: 'D\u00e9tailler les objectifs de d\u00e9veloppement pour chaque fili\u00e8re de production d\u2019\u00e9nergies renouvelables',
            description:
              '\u003cp\u003eLe d\u00e9veloppement des fili\u00e8res de production d\u0027\u00e9nergies renouvelable doit \u00eatre possible sur le territoire (coh\u00e9rent avec les potentiels).\u003c/p\u003e\n\u003cp\u003eLe d\u00e9tail diff\u00e9rencie les objectifs pour la chaleur, l\u0027\u00e9lectricit\u00e9 et les biocarburants.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.3.6',
            id_nomenclature: '1.1.1.3.6',
            nom: 'Mettre en \u00e9vidence les cons\u00e9quences en mati\u00e8re d\u2019emploi et de co\u00fbt de l\u2019inaction dans la strat\u00e9gie',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.1.4',
        id_nomenclature: '1.1.1.4',
        nom: 'Pr\u00e9ciser la strat\u00e9gie sur la qualit\u00e9 de l\u2019air',
        description: '',
        thematique_id: 'strategie',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.1.4.1',
            id_nomenclature: '1.1.1.4.1',
            nom: 'Faire appara\u00eetre une hi\u00e9rarchisation des actions dans la strat\u00e9gie sur la qualit\u00e9 de l\u0027air',
            description:
              '\u003cp\u003eCette hi\u00e9rarchisation des actions dans la strat\u00e9gie qualit\u00e9 de l\u0027air est faite en fonction des enjeux du territoire (transports, agriculture, chauffage...) et des zones particuli\u00e8rement sensibles.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.4.2',
            id_nomenclature: '1.1.1.4.2',
            nom: 'R\u00e9aliser un chiffrage des impacts du programme d\u0027actions sur la qualit\u00e9 de l\u0027air',
            description:
              '\u003cp\u003eA minima identification des actions \u00e0 impact \u0026quot;positif\u0026quot;, \u0026quot;n\u00e9gatif\u0026quot;, \u0026quot;neutre\u0026quot;) pour adopter une approche multi-crit\u00e8res dans la prise de d\u00e9cision.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.4.3',
            id_nomenclature: '1.1.1.4.3',
            nom: 'Quantifier les actions en termes d\u0027\u00e9missions de polluants atmosph\u00e9riques \u00e9vit\u00e9es (En zone PPA)',
            description:
              '\u003cp\u003eEn zone de Plan de Protection de l\u0027Atmosph\u00e8re (PPA), la quantification doit \u00eatre faite conform\u00e9ment \u00e0 la r\u00e9glementation (au moins pour les actions les plus significatives).\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.1.5',
        id_nomenclature: '1.1.1.5',
        nom: 'D\u00e9cliner la strat\u00e9gie climat-air-\u00e9nergie de mani\u00e8re op\u00e9rationnelle en coh\u00e9rence avec les objectifs',
        description:
          '\u003cp\u003eLa strat\u00e9gie climat-air-\u00e9nergie est d\u00e9clin\u00e9e clairement de mani\u00e8re op\u00e9rationnelle, en coh\u00e9rence avec les objectifs, pour chaque axe : actions et sous-t\u00e2ches / r\u00e9partition des responsabilit\u00e9s entre les acteurs internes et/ou externes \u00e0 la collectivit\u00e9 (services et noms identifi\u00e9s) / calendrier / budget / indicateur de suivi\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 30,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.1.6',
        id_nomenclature: '1.1.1.6',
        nom: 'Diffuser la vision, les objectifs et la strat\u00e9gie Climat-Air-Energie',
        description:
          '\u003cp\u003eLes m\u00e9canismes de concertation mis en place sont \u00e9valu\u00e9s plus pr\u00e9cis\u00e9ment dans la mesure 6.5.1.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.1.6.1',
            id_nomenclature: '1.1.1.6.1',
            nom: 'Comparer annuellement les objectifs au rythme r\u00e9el de mise en \u0153uvre sur le territoire',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.6.2',
            id_nomenclature: '1.1.1.6.2',
            nom: 'Reprendre les objectifs dans les documents de planification',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.6.3',
            id_nomenclature: '1.1.1.6.3',
            nom: 'Communiquer en interne et en externe pour diffuser et partager la vision',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.6.4',
            id_nomenclature: '1.1.1.6.4',
            nom: 'R\u00e9pondre \u00e0 des appels \u00e0 projets climat-air-\u00e9nergie',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.1.7',
        id_nomenclature: '1.1.1.7',
        nom: '\u00c9valuer et valoriser les r\u00e9sultats de cette politique climat-air-\u00e9nergie',
        description:
          '\u003cp\u003eLes valeurs et les \u00e9volutions des indicateurs concernant les productions d\u0027\u00e9nergie renouvelable sont \u00e9valu\u00e9es dans les actions d\u00e9di\u00e9es.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 35,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.1.7.1',
            id_nomenclature: '1.1.1.7.1',
            nom: 'R\u00e9duire la consommation \u00e9nerg\u00e9tique totale du territoire',
            description:
              '\u003cp\u003eL\u0027indicateur mesurant la consommation \u00e9nerg\u00e9tique totale du territoire est en diminution et sur une trajectoire compatible avec les objectifs \u00e0 long terme.\u003c/p\u003e\n\u003cp\u003eLa consommation \u00e9nerg\u00e9tique totale du territoire correspond \u00e0 la somme des consommations des secteurs \u00e9tudi\u00e9s selon les exigences r\u00e9glementaires PCAET.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.7.2',
            id_nomenclature: '1.1.1.7.2',
            nom: 'R\u00e9duire les \u00e9missions annuelles de gaz \u00e0 effet de serre du territoire',
            description:
              '\u003cp\u003eL\u0027indicateur mesurant les \u00e9missions annuelles de GES du territoire est en diminution et sur une trajectoire compatible avec les objectifs \u00e0 long terme.\u003c/p\u003e\n\u003cp\u003eLes \u00e9missions annuelles de GES du territoire correspondent \u00e0 la somme des \u00e9missions des secteurs \u00e9tudi\u00e9s selon les exigences r\u00e9glementaires PCAET.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.1.7.3',
            id_nomenclature: '1.1.1.7.3',
            nom: 'R\u00e9duire les \u00e9missions annuelles des 6 polluants atmosph\u00e9riques r\u00e8glementaires de l\u0027arr\u00eat\u00e9 PCAET (NOx ; PM10 ; PM2,5 ; COV ; SO2 et ammoniac)',
            description:
              '\u003cp\u003eLes indicateurs annuels d\u0027\u00e9missions des 6 polluants atmosph\u00e9riques r\u00e8glementaires de l\u0027arr\u00eat\u00e9 PCAET (NOx, PM10, PM2,5, COV, SO2 et ammoniac), sont en diminution et sur une trajectoire compatible avec les objectifs \u00e0 long terme.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.1.2',
    id_nomenclature: '1.1.2',
    nom: 'R\u00e9aliser le diagnostic Climat-Air-\u00c9nergie du territoire',
    description:
      '\u003cp\u003eLa collectivit\u00e9 effectue r\u00e9guli\u00e8rement (tous les 3 \u00e0 6 ans) une analyse de sa situation climat-air-\u00e9nergie pour son territoire.\u003c/p\u003e\n\u003cp\u003eCette analyse est r\u00e9alis\u00e9e de mani\u00e8re quantitative et qualitative, tous secteurs confondus (r\u00e9sidentiel, tertiaire, transport routier, autres transports, agriculture, d\u00e9chets, industrie hors branche \u00e9nergie, branche \u00e9nergie.\u003c/p\u003e\n\u003cp\u003eDe mani\u00e8re chiffr\u00e9e, le bilan pr\u00e9sente notamment :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eles consommations et productions d\u0027\u00e9nergie, notamment renouvelable\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles \u00e9missions de gaz \u00e0 effet de serre\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles \u00e9missions et les concentrations (dans les zones sensibles) de polluants atmosph\u00e9riques\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela s\u00e9questration de dioxyde de carbone\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'strategie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.1.2.1',
        id_nomenclature: '1.1.2.1',
        nom: 'Formaliser les engagements, recenser et synth\u00e9tiser les donn\u00e9es et \u00e9tudes existantes',
        description:
          '\u003cp\u003eNota : Il est \u00e9valu\u00e9 dans cette action la r\u00e9alisation d\u0027un bilan GES \u0026quot;territoire\u0026quot;. Ce type de bilan est obligatoire pour les EPCI\u0026gt;50000 habitants (fin 2016) et \u0026gt;20000 habitants (fin 2018).\u003c/p\u003e\n\u003cp\u003eLes collectivit\u00e9s oblig\u00e9es ne sont pas \u00e9valu\u00e9es sur cette action de base (1.1.2.1) mais uniquement sur les actions de mise en \u0153uvre (1.1.2.2 \u00e0 1.1.2.5).\u003c/p\u003e\n\u003cp\u003eLes communes et EPCI inf\u00e9rieurs \u00e0 ces seuils d\u00e9cidant de r\u00e9aliser ce type de bilan (ou \u0153uvrant pour la d\u00e9clinaison communale du bilan de l\u0027EPCI) peuvent \u00eatre valoris\u00e9s sur la base.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.2.1.1',
            id_nomenclature: '1.1.2.1.1',
            nom: 'Formaliser les engagements par une d\u00e9cision politique (d\u00e9lib\u00e9ration)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.1.2',
            id_nomenclature: '1.1.2.1.2',
            nom: 'D\u00e9dier des ressources humaines internes au diagnostic et/ou d\u00e9cider de confier une mission externe',
            description:
              '\u003cp\u003eBudget allou\u00e9, lettre d\u0027engagement, inscription dans la fiche de poste\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.1.3',
            id_nomenclature: '1.1.2.1.3',
            nom: 'Mettre en place une base d\u0027indicateurs du diagnostic',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.1.4',
            id_nomenclature: '1.1.2.1.4',
            nom: 'Recueillir les donn\u00e9es \u00e9nerg\u00e9tiques territoriales, GES et polluants atmosph\u00e9riques existantes qui concernent le territoire',
            description:
              '\u003cp\u003eLes donn\u00e9es \u00e9nerg\u00e9tiques territoriales, GES et polluants atmosph\u00e9riques existantes qui concernent le territoire son recueillies (cf. art.179 LTECV, SCoT, PLU, PDM, PLH, Agenda 21, d\u00e9clinaisons locales du PRSE, PPA, enqu\u00eates m\u00e9nages, Bilans Carbone, audits \u00e9nerg\u00e9tiques, \u00e9tudes des acteurs locaux (Observatoire r\u00e9gional de l\u2019\u00e9nergie, Agence R\u00e9gionale de l\u2019Environnement - ARE, ALEC, AASQA, etc.).\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.1.5',
            id_nomenclature: '1.1.2.1.5',
            nom: 'Participer \u00e0 la collecte et transmission des donn\u00e9es pour les diagnostics r\u00e9alis\u00e9s \u00e0 l\u2019\u00e9chelle intercommunale (communes uniquement)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.2.2',
        id_nomenclature: '1.1.2.2',
        nom: 'R\u00e9aliser un bilan climat-air-\u00e9nergie complet (diversit\u00e9 des indicateurs)',
        description:
          '\u003cp\u003eNota : L\u2019analyse de la vuln\u00e9rabilit\u00e9 au changement climatique est \u00e9valu\u00e9e dans la mesure 1.1.3.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.2.2.1',
            id_nomenclature: '1.1.2.2.1',
            nom: 'Disposer d\u0027un inventaire des \u00e9missions de GES et de polluants atmosph\u00e9riques',
            description:
              '\u003cp\u003eConform\u00e9ment \u00e0 la r\u00e9glementation : r\u00e9sidentiel, tertiaire, transport routier, autres transports, agriculture, d\u00e9chets, industrie hors branche \u00e9nergie, branche \u00e9nergie (hors production d\u2019\u00e9lectricit\u00e9, de chaleur et de froid pour les \u00e9missions de gaz \u00e0 effet de serre, dont les \u00e9missions correspondantes sont comptabilis\u00e9es au stade de la consommation)\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.2.2',
            id_nomenclature: '1.1.2.2.2',
            nom: 'Estimer la s\u00e9questration nette de dioxyde de carbone et de ses possibilit\u00e9s de d\u00e9veloppement',
            description:
              '\u003cp\u003eDoit identifier au moins les sols agricoles et la for\u00eat.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.2.3',
            id_nomenclature: '1.1.2.2.3',
            nom: 'Analyser la consommation \u00e9nerg\u00e9tique finale du territoire et le potentiel de r\u00e9duction de celle-ci.',
            description:
              '\u003cp\u003eL\u0027analyse doit distinguer les besoins de chaleur, d\u0027\u00e9lectricit\u00e9 et de carburant.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.2.4',
            id_nomenclature: '1.1.2.2.4',
            nom: 'Pr\u00e9senter les enjeux des r\u00e9seaux de distribution et de transport d\u2019\u00e9lectricit\u00e9, de gaz et de chaleur.',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.2.5',
            id_nomenclature: '1.1.2.2.5',
            nom: 'Analyser les productions \u00e9nerg\u00e9tiques renouvelables sur le territoire et leur potentiel de d\u00e9veloppement.',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.2.3',
        id_nomenclature: '1.1.2.3',
        nom: 'Adopter et pr\u00e9senter une m\u00e9thodologie claire',
        description: '',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.2.3.1',
            id_nomenclature: '1.1.2.3.1',
            nom: 'Les unit\u00e9s utilis\u00e9es sont celles exig\u00e9es r\u00e9glementairement.',
            description:
              '\u003cp\u003eLes unit\u00e9s utilis\u00e9es sont celles exig\u00e9es r\u00e9glementairement :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eTonnes de dioxyde de carbone \u00e9quivalent pour les gaz \u00e0 effet de serre, en utilisant les pouvoirs de r\u00e9chauffement globaux (PRG) retenus par le \u00ab p\u00f4le de coordination nationale \u00bb institu\u00e9 par l\u2019article R.229-49 ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eGWh pour les diff\u00e9rentes productions et consommations d\u2019\u00e9nergie, en retenant le pouvoir calorifique inf\u00e9rieur pour les combustibles ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eMW pour les puissances install\u00e9es de production d\u2019\u00e9nergie renouvelable ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eTonnes et \u03bcg/m3 pour les \u00e9missions et concentrations de polluants atmosph\u00e9riques.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.3.2',
            id_nomenclature: '1.1.2.3.2',
            nom: 'Expliciter la prise en compte ou non des \u00e9missions indirectes',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.3.3',
            id_nomenclature: '1.1.2.3.3',
            nom: 'Expliciter les sources et les donn\u00e9es (ann\u00e9e, acteurs, p\u00e9rim\u00e8tres)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.2.4',
        id_nomenclature: '1.1.2.4',
        nom: 'R\u00e9aliser un diagnostic allant au-del\u00e0 des exigences r\u00e9glementaires',
        description:
          '\u003cp\u003ePour les communes : D\u00e9clinaison communale des principaux indicateurs, \u0026quot;zoom\u0026quot; g\u00e9ographique sur certaines th\u00e9matiques\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.2.4.1',
            id_nomenclature: '1.1.2.4.1',
            nom: 'Prendre en compte les \u00e9missions indirectes',
            description:
              '\u003cp\u003eLes \u00e9missions indirectes sont li\u00e9es \u00e0 la fabrication des produits achet\u00e9s et consomm\u00e9s par les acteurs du territoire.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.4.2',
            id_nomenclature: '1.1.2.4.2',
            nom: 'Identifier les concentrations des principaux polluants et les populations expos\u00e9es \u00e0 des d\u00e9passements de normes',
            description:
              '\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eIdentifier les concentrations des principaux polluants (a minima dans les zones identifi\u00e9es comme sensibles)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eIdentifier les populations expos\u00e9es \u00e0 des d\u00e9passements de normes (ou valeurs guides) en mati\u00e8re de qualit\u00e9 de l\u0027air\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.4.3',
            id_nomenclature: '1.1.2.4.3',
            nom: 'D\u00e9tailler finement l\u0027analyse de chaque secteur',
            description:
              '\u003cp\u003eExemple : distinction des d\u00e9placements domicile-travail et de transit, analyse du parc b\u00e2ti\u2026\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.2.5',
        id_nomenclature: '1.1.2.5',
        nom: 'Valoriser les r\u00e9sultats en interne et en externe',
        description: '',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.2.5.1',
            id_nomenclature: '1.1.2.5.1',
            nom: 'Analyser les \u00e9volutions constat\u00e9es',
            description:
              '\u003cp\u003eImpact m\u00e9t\u00e9orologique, crise \u00e9conomique et industrielle, r\u00e9novations, renouvellement parc d\u0027installations de chauffage...\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.5.2',
            id_nomenclature: '1.1.2.5.2',
            nom: 'Suivre l\u0027\u00e9volution de la consommation en fonction des \u00e9nergies',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.5.3',
            id_nomenclature: '1.1.2.5.3',
            nom: 'Pr\u00e9senter les indicateurs aux agents et aux \u00e9lus',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.5.4',
            id_nomenclature: '1.1.2.5.4',
            nom: 'R\u00e9aliser l\u0027appropriation des r\u00e9sultats par les communes pour les diagnostics \u00e0 l\u2019\u00e9chelle de l\u2019EPCI',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.5.5',
            id_nomenclature: '1.1.2.5.5',
            nom: 'Communiquer les indicateurs aux acteurs du territoire et aux citoyens',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.5.6',
            id_nomenclature: '1.1.2.5.6',
            nom: 'Utiliser les indicateurs pour prioriser les actions et orienter la politique de la collectivit\u00e9',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.2.5.7',
            id_nomenclature: '1.1.2.5.7',
            nom: 'Mettre \u00e0 jour r\u00e9guli\u00e8rement les indicateurs',
            description:
              '\u003cp\u003eLes indicateurs sont tenus r\u00e9guli\u00e8rement \u00e0 jour avec un pas de temps adapt\u00e9 \u00e0 chaque indicateur.\u003c/p\u003e\n\u003cp\u003eEn cas de demande de labellisation, les indicateurs sont \u00e0 jour au moment de la demande de labellisation\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.1.3',
    id_nomenclature: '1.1.3',
    nom: 'R\u00e9aliser un diagnostic de vuln\u00e9rabilit\u00e9 et s\u2019engager dans un programme d\u0027adaptation au changement climatique du territoire',
    description:
      '\u003cp\u003eLa collectivit\u00e9 analyse les impacts potentiels du changement climatique et la vuln\u00e9rabilit\u00e9 de son territoire et s\u2019engage dans une de\u0301marche d\u2019adaptation.\u003c/p\u003e\n\u003cp\u003eLes sujets abord\u00e9s sont par exemple :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003egestion des risques (inondation, \u00e9rosion, etc.), en lien avec les Plans de Pr\u00e9vention des Risques par exemple\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eadaptation des normes constructives (confort d\u0027\u00e9t\u00e9) et lutte contre les \u00eelots de chaleur\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003es\u00e9curit\u00e9 de la population et des touristes\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003es\u00e9cheresse, feux de for\u00eat\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003elimitation du recours \u00e0 la climatisation des b\u00e2timents\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eimpact sur l\u2019approvisionnement en eau et plus g\u00e9n\u00e9ralement sur les r\u00e9seaux d\u2019eau\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eimpact sur les activit\u00e9s agricoles, industrielles et touristiques\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eimpact sur les moyens de production d\u2019\u00e9nergie conventionnels et renouvelables\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eCes sujets sont abord\u00e9s avec les acteurs locaux et les conclusions sont int\u00e9gr\u00e9es dans la strat\u00e9gie climat-air-\u00e9nergie de la collectivit\u00e9.\u003c/p\u003e\n',
    thematique_id: 'strategie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.1.3.1',
        id_nomenclature: '1.1.3.1',
        nom: 'Formaliser l\u2019int\u00e9r\u00eat de la collectivit\u00e9 dans sa volont\u00e9 de r\u00e9duire la vuln\u00e9rabilit\u00e9 du territoire au changement climatique',
        description: '',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.3.1.1',
            id_nomenclature: '1.1.3.1.1',
            nom: 'Prendre en compte les \u00e9tudes r\u00e9alis\u00e9es au niveau r\u00e9gional ou interr\u00e9gional (SRCAE/SRADDET, \u00e9tudes MEDCIE ou autre), voire national (PNACC2)',
            description:
              '\u003cp\u003eS\u2019assurer que la prise en compte est r\u00e9elle (au-del\u00e0 de l\u0027\u00e9criture de quelques lignes pour remplir l\u2019obligation l\u00e9gale).\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.1.2',
            id_nomenclature: '1.1.3.1.2',
            nom: 'Allouer un budget et/ou des moyens humains',
            description:
              '\u003cp\u003eLettre d\u0027engagement, inscription dans la fiche de poste, et/ou formation \u00e0 l\u2019utilisation de l\u2019outil\nTACCT\n(Trajectoires d\u2019Adaptation au Changement Climatique des Territoires) par exemple.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.3.2',
        id_nomenclature: '1.1.3.2',
        nom: 'Conna\u00eetre la vuln\u00e9rabilit\u00e9 du territoire au changement climatique',
        description:
          '\u003cp\u003eCette \u00e9tude justifie des entretiens avec les acteurs du territoire (secteurs du b\u00e2timent, de la sant\u00e9, du tourisme, de l\u2019agriculture et de la for\u00eat, syndicats et gestionnaires d\u2019infrastructures et r\u00e9seaux d\u2019eau, d\u2019\u00e9nergie, de transport, etc.) et n\u2019est pas seulement r\u00e9alis\u00e9e \u00e0 partir de bibliographie.\u003c/p\u003e\n\u003cp\u003eLes impacts du changement climatique sur le territoire, observ\u00e9s et potentiels, sont hi\u00e9rarchis\u00e9s (sensibilit\u00e9 X exposition).\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.3.2.1',
            id_nomenclature: '1.1.3.2.1',
            nom: 'Conna\u00eetre les \u00e9volutions climatiques du territoire',
            description:
              '\u003cp\u003eConna\u00eetre les \u00e9volutions climatiques en termes de temp\u00e9rature, pluviom\u00e9trie, etc. en se basant sur les donn\u00e9es et travaux de M\u00e9t\u00e9o France et des observatoires locaux et al\u00e9as induits (inondations, incendies, temp\u00eates, vague de chaleur, \u2026).\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.2.2',
            id_nomenclature: '1.1.3.2.2',
            nom: 'Conna\u00eetre les impacts \u00e9conomiques du changement climatique sur le territoire',
            description:
              '\u003cp\u003eLiens avec les activit\u00e9s touristiques, industrielles et agricoles, potentiel ENR, mobilit\u00e9\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.2.3',
            id_nomenclature: '1.1.3.2.3',
            nom: 'Conna\u00eetre les impacts sociaux du changement climatique sur le territoire',
            description:
              '\u003cp\u003eVuln\u00e9rabilit\u00e9 en fonction des \u00e2ges : maladie, personnes \u00e2g\u00e9es, jeunes enfants, etc.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.2.4',
            id_nomenclature: '1.1.3.2.4',
            nom: 'Conna\u00eetre les impacts en termes de biodiversit\u00e9',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.2.5',
            id_nomenclature: '1.1.3.2.5',
            nom: 'Conna\u00eetre les impacts sur les r\u00e9seaux : eau, assainissement, approvisionnement en \u00e9nergie',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.2.6',
            id_nomenclature: '1.1.3.2.6',
            nom: 'Conna\u00eetre les impacts sur l\u2019am\u00e9nagement\u00a0: \u00eelots de chaleurs urbains',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.3.3',
        id_nomenclature: '1.1.3.3',
        nom: 'Adopter un programme d\u2019actions d\u2019adaptation et int\u00e9grer les effets du changement climatique dans les comp\u00e9tences et les politiques de la collectivit\u00e9',
        description:
          '\u003cp\u003eLa prise en compte de l\u2019adaptation au changement climatique dans des actions op\u00e9rationnelles plus pr\u00e9cises est \u00e9valu\u00e9e dans les mesures d\u00e9di\u00e9es (op\u00e9rations d\u2019am\u00e9nagement, b\u00e2timents publics, eaux pluviales\u2026).\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.3.3.1',
            id_nomenclature: '1.1.3.3.1',
            nom: 'D\u00e9finir un programme d\u2019actions sp\u00e9cifique ou int\u00e9grer de fa\u00e7on transversale forte l\u2019adaptation dans le programme d\u2019actions climat-air-\u00e9nergie',
            description:
              '\u003cp\u003eLe programme d\u0027actions d\u0027adaptation au changement climatique doit pr\u00e9ciser les comp\u00e9tences de la collectivit\u00e9 \u00e0 mobiliser et les partenaires mobilisables pour agir.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.3.2',
            id_nomenclature: '1.1.3.3.2',
            nom: 'Valoriser l\u2019\u00e9tude de vuln\u00e9rabilit\u00e9 et communiquer en priorite\u0301 aupr\u00e8s des acteurs leviers de changement',
            description:
              '\u003cp\u003eLes acteurs leviers du changement sont les personnes ressources et les parties prenantes.\u003c/p\u003e\n\u003cp\u003eFaire apparai\u0302tre les opportunite\u0301s pour le territoire de s\u2019engager dans l\u2019action d\u2019adaptation (ex: renforcer l\u2019adaptation du territoire et/ou am\u00e9liorer sa robustesse, son attractivit\u00e9, son cadre de vie, prot\u00e9ger son \u00e9conomie, assurer la s\u00e9curit\u00e9 des personnes, am\u00e9liorer la performance de sa politique environnementale, etc.).\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.3.3',
            id_nomenclature: '1.1.3.3.3',
            nom: 'Int\u00e9grer les \u00e9l\u00e9ments de r\u00e9silience climatique dans les documents de planification structurants',
            description:
              '\u003cp\u003eLes \u00e9l\u00e9ments de r\u00e9silience climatique (ex: trame verte et bleue, v\u00e9g\u00e9talisation, dispositif de rafra\u00eechissement, \u2026) sont int\u00e9gr\u00e9s dans les documents de planification structurants (PLU, SCOT, PDM, PLH, PAPI, PPR...).\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.1.3.4',
        id_nomenclature: '1.1.3.4',
        nom: 'Mettre en place un pilotage ope\u0301rationnel de suivi et d\u2019\u00e9valuation de la politique territoriale d\u2019adaptation au changement climatique',
        description: '',
        thematique_id: 'strategie',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.1.3.4.1',
            id_nomenclature: '1.1.3.4.1',
            nom: 'Structurer et mettre en \u0153uvre d\u2019une de\u0301marche de suivi-e\u0301valuation',
            description:
              '\u003cp\u003eSoit dans le cadre du PCAET, soit en utilisant l\u2019outil\nTACCT\nou \u00e9quivalent.\u003c/p\u003e\n\u003cp\u003eSi une vuln\u00e9rabilit\u00e9 majeure a \u00e9t\u00e9 identifi\u00e9e sur une th\u00e9matique dont la collectivit\u00e9 dispose d\u2019une comp\u00e9tence obligatoire (exemple\u00a0: gestion du risque inondation), une attention particuli\u00e8re devra \u00eatre port\u00e9e sur ce secteur dans le suivi-e\u0301valuation.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.1.3.4.2',
            id_nomenclature: '1.1.3.4.2',
            nom: 'R\u00e9aliser une revue de suivi p\u00e9riodique pour mesurer les progr\u00e8s et l\u2019\u00e9tat d\u2019avancement de la politique d\u2019adaptation au changement climatique',
            description:
              '\u003cp\u003eApplication effective des mesures d\u2019adaptation, personnes sensibilis\u00e9es, moyens et disponibilit\u00e9s des services urbanisme/gestion des risques naturels/b\u00e2timents, etc.\u003c/p\u003e\n\u003cp\u003eBudget alloue\u0301 aux actions d\u2019adaptation, ad\u00e9quation avec le PLU, le SCOT etc.\u003c/p\u003e\n\u003cp\u003eCe suivi peut \u00eatre int\u00e9gr\u00e9 \u00e0 une d\u00e9marche type PCAET.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.2.1',
    id_nomenclature: '1.2.1',
    nom: 'Mettre en place un sch\u00e9ma directeur des \u00e9nergies et des r\u00e9seaux de chaleur',
    description:
      '\u003cp\u003eLa collectivit\u00e9 dispose d\u2019une programmation \u00e9nerg\u00e9tique (sch\u00e9ma directeur des \u00e9nergies), \u00e0 l\u2019\u00e9chelle territoriale, avec des indications et strat\u00e9gies concr\u00e8tes pour :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003er\u00e9duire la consommation et am\u00e9liorer l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003emettre en \u0153uvre l\u0027ensemble du potentiel de production d\u0027\u00e9nergie renouvelable locale n\u00e9cessaire pour remplir les objectifs du territoire ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eaugmenter l\u0027utilisation des \u00e9nergies renouvelables (plan de d\u00e9veloppement des \u00e9nergies renouvelables, sch\u00e9ma de d\u00e9veloppement \u00e9olien \u2026) ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ed\u00e9velopper les r\u00e9seaux de chaleur/froid renouvelable et de r\u00e9cup\u00e9ration (sch\u00e9ma directeur de r\u00e9seau de chaleur) ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003er\u00e9duire les \u00e9missions de gaz \u00e0 effet de serre associ\u00e9es aux consommations et productions \u00e9nerg\u00e9tiques ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ecoordonner les diff\u00e9rentes d\u00e9marches sectorielles et notamment la planification urbaine ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003elimiter, voire \u00e9viter dans les zones sensibles, les antagonismes avec les objectifs de pr\u00e9servation de la qualit\u00e9 de l\u0027air.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eLa programmation \u00e9nerg\u00e9tique comporte une cartographie consignant les secteurs g\u00e9ographiques de d\u00e9veloppement prioritaires des \u00e9nergies renouvelables ou de r\u00e9cup\u00e9ration de chaleur (production ou approvisionnement par un r\u00e9seau de chaleur).\u003c/p\u003e\n\u003cp\u003eCette programmation est dot\u00e9e d\u0027un dispositif de suivi/contr\u00f4le avec des objectifs.\u003c/p\u003e\n',
    thematique_id: 'energie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.2.1.1',
        id_nomenclature: '1.2.1.1',
        nom: 'Organiser le pilotage',
        description: '',
        thematique_id: 'energie',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.1.1.1',
            id_nomenclature: '1.2.1.1.1',
            nom: 'D\u00e9signer un \u00e9lu r\u00e9f\u00e9rent et un technicien responsable',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.1.2',
            id_nomenclature: '1.2.1.1.2',
            nom: 'D\u00e9l\u00e9guer la comp\u00e9tence sch\u00e9ma directeur des \u00e9nergies et des r\u00e9seaux de chaleur \u00e0 l\u2019intercommunalit\u00e9',
            description:
              '\u003cp\u003eD\u00e9l\u00e9guer si possible la comp\u00e9tence \u00e0 l\u2019intercommunalit\u00e9 pour g\u00e9rer de mani\u00e8re plus coordonn\u00e9e et coh\u00e9rente l\u2019am\u00e9nagement du territoire et le d\u00e9veloppement des \u00e9nergies renouvelables\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.1.3',
            id_nomenclature: '1.2.1.1.3',
            nom: 'Prendre la d\u00e9cision (d\u00e9lib\u00e9rer) de r\u00e9aliser l\u0027\u00e9tude en interne ou de confier une mission externe',
            description:
              '\u003cp\u003eLa d\u00e9cision (d\u00e9lib\u00e9ration) doit allouer un budget ou des ressources humaines pour cette \u00e9tude.\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.1.2',
        id_nomenclature: '1.2.1.2',
        nom: 'Etudier la faisabilit\u00e9 de d\u00e9veloppement des r\u00e9seaux de chaleur sur le territoire',
        description:
          '\u003cp\u003eDans les DOM, la mesure est appliqu\u00e9e aux r\u00e9seaux de froid.\u003c/p\u003e\n',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.1.2.1',
            id_nomenclature: '1.2.1.2.1',
            nom: 'Etudier la faisabilit\u00e9 des r\u00e9seaux de chaleur aliment\u00e9s en \u00e9nergies renouvelables et de r\u00e9cup\u00e9ration',
            description:
              '\u003cp\u003eA minima pour les b\u00e2timents et \u00e9quipements publics et/ou \u00e9tudier la faisabilit\u00e9 d\u0027un raccordement pour tous les b\u00e2timents publics situ\u00e9s \u00e0 moins de 500 m\u00e8tres d\u2019un r\u00e9seau de chaleur existant majoritairement aliment\u00e9 par des \u00e9nergies renouvelables et de r\u00e9cup\u00e9ration (EnR\u0026amp;R).\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.2.2',
            id_nomenclature: '1.2.1.2.2',
            nom: 'Elargir la r\u00e9flexion en menant une \u00e9tude de faisabilit\u00e9 de cr\u00e9ation d\u2019un r\u00e9seau de chaleur alimentant les b\u00e2timents publics et priv\u00e9s.',
            description:
              '\u003cp\u003eEn l\u2019absence d\u2019une densit\u00e9 \u00e9nerg\u00e9tique suffisante (densit\u00e9 \u00e9nerg\u00e9tique pr\u00e9conis\u00e9e sup\u00e9rieure \u00e0 1,5 MWh/ml, source : ADEME), cette \u00e9tude n\u2019est pas n\u00e9cessaire.\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.1.3',
        id_nomenclature: '1.2.1.3',
        nom: 'Etudier les potentiels de d\u00e9veloppement des \u00e9nergies renouvelables et de r\u00e9cup\u00e9ration sur le territoire',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.1.3.1',
            id_nomenclature: '1.2.1.3.1',
            nom: 'Prendre en compte et quantifier tous les potentiels de d\u00e9veloppement',
            description:
              '\u003cp\u003eLes \u00e9tudes sont orient\u00e9es selon les sp\u00e9cificit\u00e9s du territoire (exemple enjeu du chauffage au bois individuel en territoire rural).\u003c/p\u003e\n\u003cp\u003eLa multiplication des projets est encourag\u00e9e.\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.3.2',
            id_nomenclature: '1.2.1.3.2',
            nom: '\u00c9tablir un plan d\u0027approvisionnement territorial en bois \u00e9nergie (collectivit\u00e9s m\u00e9tropolitaines)',
            description:
              '\u003cp\u003ePermet de conna\u00eetre la disponibilit\u00e9 en bois \u00e9nergie, la demande sp\u00e9cifique au territoire, ainsi que les consommateurs potentiels, pour organiser localement l\u0027approvisionnement des chaufferies bois, tout en limitant les risques de conflit d\u0027usage.\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.1.4',
        id_nomenclature: '1.2.1.4',
        nom: 'Etablir un sch\u00e9ma directeur pour la cr\u00e9ation/extension-densification d\u0027un r\u00e9seau de chaleur (collectivit\u00e9s m\u00e9tropolitaines)',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.1.4.1',
            id_nomenclature: '1.2.1.4.1',
            nom: 'Prendre en compte de mani\u00e8re globale tous les projets pr\u00e9sents sur le territoire (HLM, gros ensembles, industrie\u2026)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.4.2',
            id_nomenclature: '1.2.1.4.2',
            nom: 'Pr\u00e9voir l\u0027extension du r\u00e9seau de chaleur et l\u0027\u00e9volution vers un mix \u00e9nerg\u00e9tique sup\u00e9rieur \u00e0 50 % d\u2019\u00e9nergies renouvelables',
            description:
              '\u003cp\u003eEn pr\u00e9sence d\u2019un r\u00e9seau de chaleur existant, l\u0027extension du r\u00e9seau de chaleur est pr\u00e9vue ainsi que l\u0027\u00e9volution vers un mix \u00e9nerg\u00e9tique sup\u00e9rieur \u00e0 50 % d\u2019\u00e9nergies renouvelables (si ce mix n\u0027est pas encore atteint).\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.1.5',
        id_nomenclature: '1.2.1.5',
        nom: 'D\u00e9terminer les secteurs g\u00e9ographiques prioritaires de d\u00e9veloppement des \u00e9nergies renouvelables et de r\u00e9cup\u00e9ration',
        description:
          '\u003cp\u003eLes secteurs de d\u00e9veloppement d\u00e9termin\u00e9s permettent :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eune utilisation majoritaire des rejets thermiques disponibles et des \u00e9nergies renouvelables produites localement, avec indication des cons\u00e9quences (notamment sur la qualit\u00e9 de l\u0027air, en lien avec l\u0027analyse des impacts du changement climatique, \u00e0 la fois sur la production, hydraulique par exemple, et sur les besoins, en \u00e9t\u00e9 par exemple),\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ele d\u00e9veloppement de r\u00e9seaux de chaleur, de froid, etc, en distinguant les zones propices aux cr\u00e9ations de nouveaux r\u00e9seaux et/ou les zones favorables \u00e0 la densification et aux extensions (densit\u00e9 \u00e9nerg\u00e9tique pr\u00e9conis\u00e9e sup\u00e9rieure \u00e0 1,5 MWh/ml, source : ADEME).\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
        thematique_id: 'energie',
        points: 20,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.1.6',
        id_nomenclature: '1.2.1.6',
        nom: 'Coordonner les diff\u00e9rentes d\u00e9marches de planification sectorielle',
        description: '',
        thematique_id: 'energie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.1.6.1',
            id_nomenclature: '1.2.1.6.1',
            nom: 'Int\u00e9grer les secteurs prioritaires de d\u00e9veloppement des \u00e9nergies renouvelables et de r\u00e9cup\u00e9ration aux documents d\u2019urbanisme et dans les projets d\u2019am\u00e9nagement',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.6.2',
            id_nomenclature: '1.2.1.6.2',
            nom: 'En pr\u00e9sence d\u2019un r\u00e9seau de chaleur, \u00e9tudier l\u2019int\u00e9r\u00eat de proc\u00e9der \u00e0 son classement et le faire si cela est pertinent',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.6.3',
            id_nomenclature: '1.2.1.6.3',
            nom: 'Int\u00e9grer des mesures de ma\u00eetrise de la demande en \u00e9nergie',
            description:
              '\u003cp\u003eInt\u00e9grer des mesures de ma\u00eetrise de la demande en \u00e9nergie afin de dimensionner et localiser les installations de fa\u00e7on coh\u00e9rente vis-\u00e0-vis des b\u00e2timents ayant vocation \u00e0 devenir moins consommateurs d\u2019\u00e9nergie qu\u2019aujourd\u2019hui.\u003c/p\u003e\n\u003cp\u003e(ou prendre en compte les mesures pr\u00e9vues \u00e0 ce sujet sur le territoire, notamment dans la mesure 1.2.4\nOrganiser et planifier l\u2019augmentation des performances climat-air-\u00e9nergie des b\u00e2timents r\u00e9sidentiels et tertiaires\net 6.2.2\nPr\u00e9venir et lutter contre la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique\n)\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.1.7',
        id_nomenclature: '1.2.1.7',
        nom: 'Communiquer les r\u00e9sultats et associer les acteurs du territoire',
        description: '',
        thematique_id: 'energie',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.1.7.1',
            id_nomenclature: '1.2.1.7.1',
            nom: 'Mettre \u00e0 disposition de l\u2019ensemble des parties prenantes du territoire la programmation \u00e9nerg\u00e9tique',
            description:
              '\u003cp\u003eLa programmation \u00e9nerg\u00e9tique mise \u00e0 disposition comprend \u00e9tudes de potentiel, de faisabilit\u00e9 et de d\u00e9veloppement des ENR pour une appropriation et d\u00e9clinaison des objectifs \u00e0 une \u00e9chelle inf\u00e9rieure (commune, entreprise, particulier, etc.)\u003c/p\u003e\n\u003cp\u003eUn interlocuteur est d\u00e9sign\u00e9, capacit\u00e9 \u00e0 pr\u00e9senter la strat\u00e9gie, etc.\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.7.2',
            id_nomenclature: '1.2.1.7.2',
            nom: 'Soigner la port\u00e9e et la forme des \u00e9tudes r\u00e9alis\u00e9es',
            description:
              '\u003cp\u003eUne restitution sous forme de cartes est privil\u00e9gi\u00e9e pour donner \u00e0 voir les possibilit\u00e9s de d\u00e9veloppement des diff\u00e9rentes fili\u00e8res sur chaque secteur.\u003c/p\u003e\n',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.7.3',
            id_nomenclature: '1.2.1.7.3',
            nom: 'Associer les d\u00e9cideurs, les repr\u00e9sentants d\u0027int\u00e9r\u00eats et la soci\u00e9t\u00e9 civile',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.1.7.4',
            id_nomenclature: '1.2.1.7.4',
            nom: 'Associer les investisseurs potentiels',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.2.2',
    id_nomenclature: '1.2.2',
    nom: 'Organiser les mobilit\u00e9s sur le territoire',
    description:
      '\u003cp\u003eLa collectivit\u00e9 dispose d\u2019une planification des d\u00e9placements sur son territoire (plan de mobilit\u00e9, plan de mobilit\u00e9 simplifi\u00e9 , \u2026) avec des indications concr\u00e8tes et des orientations strat\u00e9giques pour :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003er\u00e9duire le trafic motoris\u00e9 individuel \u2013 l\u2019autosolisme\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003epromouvoir les modes actifs (marche, v\u00e9lo, ), l\u0027intermodalit\u00e9 et les mobilit\u00e9s partag\u00e9es\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ePromouvoir une logistique urbaine durable\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003epromouvoir les carburants alternatifs (\u00e9lectrique batterie, bioGNV, hydrog\u00e8ne) et l\u2019hippomobilit\u00e9, d\u00e9velopper l\u2019offre d\u2019infrastructures de recharge\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003erendre accessible la mobilit\u00e9 pour tous et sur l\u2019ensemble du territoire\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003epromouvoir/\u00e9tendre les transports publics\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003elutter contre la pollution sonore et l\u2019\u00e9talement urbain\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eorganiser les conditions d\u2019approvisionnement de l\u2019agglom\u00e9ration\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003er\u00e9glementer la localisation des \u00e9quipements et am\u00e9nagements g\u00e9n\u00e9rateurs de trafic (centres commerciaux, \u00e9coles \u2026) en fonction de leur desserte en transport en commun, modes actifs...\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003elimiter les \u00e9missions de polluants atmosph\u00e9riques li\u00e9s aux d\u00e9placements\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003epr\u00e9server la biodiversit\u00e9...\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eCette planification est spatialis\u00e9e et est dot\u00e9e d\u0027un dispositif de suivi et de contr\u00f4le avec des objectifs, du suivi et de l\u0027\u00e9valuation de la politique de mobilit\u00e9 des collectivit\u00e9s (dont impact sur les gaz \u00e0 effet de serre et les polluants atmosph\u00e9riques), en associant l\u2019ensemble des acteurs concern\u00e9s.\u003c/p\u003e\n\u003cp\u003eLe plan de mobilit\u00e9 devra \u00eatre \u00e9labor\u00e9 en tenant compte de la coordination strat\u00e9gique et op\u00e9rationnelle entre l\u2019AOM locale et la r\u00e9gion.\u003c/p\u003e\n\u003cp\u003eLe PDM doit\u00a0 \u00eatre compatible avec le PCAET ou prendre en compte les PCAET s\u2019il y en a plusieurs dans le p\u00e9rim\u00e8tre du PDM.\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.2.2.1',
        id_nomenclature: '1.2.2.1',
        nom: 'Acter la volont\u00e9 politique de mettre en place une d\u00e9marche de planification des d\u00e9placements',
        description:
          '\u003cp\u003e(0% pour les AOM \u0026gt;100 000 habitants)\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.2.1.1',
            id_nomenclature: '1.2.2.1.1',
            nom: 'Prendre la comp\u00e9tence d\u2019organisation de la mobilit\u00e9 (pour les communaut\u00e9s de communes)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.1.2',
            id_nomenclature: '1.2.2.1.2',
            nom: 'D\u00e9cider (d\u00e9lib\u00e9ration) de r\u00e9aliser la d\u00e9marche de planification des d\u00e9placements (PDM, PDMS)',
            description:
              '\u003cp\u003eAllocation de budget pour une mission externe (diagnostic, \u00e9laboration compl\u00e8te de la planification\u2026)\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.1.3',
            id_nomenclature: '1.2.2.1.3',
            nom: 'Disposer d\u2019une planification ant\u00e9rieure ou s\u0027approprier les enjeux et proposition lors de l\u2019\u00e9laboration des documents structurants par l\u2019intercommunalit\u00e9 (communes)',
            description:
              '\u003cp\u003eAppropriation des enjeux, interlocuteur d\u00e9sign\u00e9\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.2.2',
        id_nomenclature: '1.2.2.2',
        nom: '\u00c9tablir un diagnostic mobilit\u00e9 dans une approche concert\u00e9e',
        description:
          '\u003cp\u003eLa r\u00e9alisation d\u2019enqu\u00eate-m\u00e9nage est \u00e9valu\u00e9e dans la mesure 4.1.1.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.2.2.1',
            id_nomenclature: '1.2.2.2.1',
            nom: 'Quantifier les flux de mobilit\u00e9 gr\u00e2ce \u00e0 des comptages et/ou une mod\u00e9lisation et identifier les zones \u00e0 enjeux importants',
            description:
              '\u003cp\u003eZones \u00e0 enjeux importants en mati\u00e8re de mobilit\u00e9 : zones g\u00e9n\u00e9ratrices de d\u00e9placements\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.2.2',
            id_nomenclature: '1.2.2.2.2',
            nom: 'Traduire de fa\u00e7on spatialis\u00e9e (carte) les orientations',
            description:
              '\u003cp\u003eSi possible la traduction spatiale est r\u00e9alis\u00e9e dans une approche environnementale globale (ex : SIG permettant de croiser/mutualiser les donn\u00e9es d\u00e9placement, air, bruit)\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.2.3',
            id_nomenclature: '1.2.2.2.3',
            nom: '\u00c9valuer les GES et polluants atmosph\u00e9riques li\u00e9s aux d\u00e9placements sur le p\u00e9rim\u00e8tre du plan de mobilit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.2.4',
            id_nomenclature: '1.2.2.2.4',
            nom: 'Associer les acteurs du territoire dans une proc\u00e9dure concert\u00e9e lors de l\u2019\u00e9laboration ou r\u00e9vision du plan de mobilit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.2.5',
            id_nomenclature: '1.2.2.2.5',
            nom: 'V\u00e9rifier la compatibilit\u00e9 avec le PCAET ou prendre en compte les PCAET s\u2019il y en a plusieurs dans le p\u00e9rim\u00e8tre du plan de mobilit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.2.6',
            id_nomenclature: '1.2.2.2.6',
            nom: 'Assurer une coordination strat\u00e9gique et op\u00e9rationnelle entre l\u2019AOM locale et la r\u00e9gion pour d\u00e9finir la politique de mobilit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.2.7',
            id_nomenclature: '1.2.2.2.7',
            nom: 'Soumettre le plan pour avis aux AOM limitrophes afin d\u2019am\u00e9liorer la collaboration au-del\u00e0 du ressort territorial',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.2.8',
            id_nomenclature: '1.2.2.2.8',
            nom: 'Mettre en coh\u00e9rence la politique de mobilit\u00e9 avec celle de l\u2019urbanisme local, d\u00e9clin\u00e9e par le plan local d\u2019urbanisme (PLU)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.2.9',
            id_nomenclature: '1.2.2.2.9',
            nom: 'Bien identifier et int\u00e9grer a minima les enjeux de mobilit\u00e9 dans les documents de planification et programmes existants (PLU, PLH, PDMS \u2026)',
            description:
              '\u003cp\u003eMoins de formalisme est exig\u00e9 pour les collectivit\u00e9s rurales\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.2.3',
        id_nomenclature: '1.2.2.3',
        nom: 'Planifier des actions pour limiter l\u2019usage de la voiture individuelle',
        description:
          '\u003cp\u003eLa gestion des flux de marchandises sur le territoire est \u00e9valu\u00e9e dans la mesure 4.2.3.\u003c/p\u003e\n\u003cp\u003eLa planification comprend les diff\u00e9rentes actions suivantes\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.2.3.1',
            id_nomenclature: '1.2.2.3.1',
            nom: 'Expliciter les mesures pour diminuer \u00e0 la source les besoins de d\u00e9placements motoris\u00e9s (lien avec la politique d\u2019urbanisme)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.3.2',
            id_nomenclature: '1.2.2.3.2',
            nom: 'Pr\u00e9ciser le raccordement aux transports en commun des zones g\u00e9n\u00e9ratrices de trafic mal desservies',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.3.3',
            id_nomenclature: '1.2.2.3.3',
            nom: 'Planifier de fa\u00e7on raisonn\u00e9e le stationnement',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.3.4',
            id_nomenclature: '1.2.2.3.4',
            nom: 'Pr\u00e9ciser les mesures pour d\u00e9velopper le covoiturage et l\u0027autopartage (parkings, places r\u00e9serv\u00e9es...), le d\u00e9ploiement de services v\u00e9los et la mobilit\u00e9 \u00e9lectrique',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.3.5',
            id_nomenclature: '1.2.2.3.5',
            nom: 'Expliciter les mesures pour ralentir ou diminuer le trafic motoris\u00e9',
            description:
              '\u003cp\u003eCr\u00e9ation de zones adapt\u00e9es \u00e0 une limitation 30 km/h ou des zones \u00e0 circulation restreinte, etc. en visant un apaisement du trafic et la limitation des \u0026quot;\u00e0-coups\u0026quot; et la congestion \u00e9mettrice de polluants atmosph\u00e9riques\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.2.4',
        id_nomenclature: '1.2.2.4',
        nom: 'Prioriser le d\u00e9veloppement des modes alternatifs de d\u00e9placement \u00e0 la voiture dans la planification',
        description:
          '\u003cp\u003eLes sujets trait\u00e9s sont adapt\u00e9s aux enjeux et au contexte local : en milieu rural ou p\u00e9riurbain notamment, et en l\u2019absence de possibilit\u00e9s d\u2019action directe sur les transports en commun, la planification est centr\u00e9e sur les mobilit\u00e9s partag\u00e9es , et sur l\u2019optimisation de solutions existantes ou adapt\u00e9es au milieu rural (bus scolaires, navette \u00e0 la demande, covoiturage, sch\u00e9ma directeur touristique, flotte d\u2019auto-partage\u2026).\u003c/p\u003e\n\u003cp\u003eUn travail collaboratif peut \u00eatre men\u00e9 avec les p\u00f4les urbains polarisant la majorit\u00e9 des d\u00e9placements et donc de mener une r\u00e9flexion conjointe \u00e0 une \u00e9chelle plus large afin d\u0027avoir davantage de leviers pour promouvoir les  mobilit\u00e9s partag\u00e9es et l\u0027intermodalit\u00e9 (notamment en entr\u00e9e du p\u00f4le urbain).\u003c/p\u003e\n\u003cp\u003eLa mise en place de mesures d\u0027animation pour accompagner l\u0027\u00e9volution des comportements de mobilit\u00e9 est pr\u00e9vue dans l\u2019action 4.1.1.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.2.4.1',
            id_nomenclature: '1.2.2.4.1',
            nom: 'Planifier le r\u00e9seau pi\u00e9tonnier',
            description:
              '\u003cp\u003eDoit int\u00e9grer l\u0027accessibilit\u00e9, endroits dangereux, lacunes, etc.\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.4.2',
            id_nomenclature: '1.2.2.4.2',
            nom: 'Planifier les chemins menant \u00e0 l\u0027\u00e9cole et la gestion de l\u2019espace autour des \u00e9coles',
            description:
              '\u003cp\u003eExpliciter les actions pour permettre un meilleur partage des modes de d\u00e9placements.\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.4.3',
            id_nomenclature: '1.2.2.4.3',
            nom: 'Planifier le r\u00e9seau cyclable (existence d\u0027un sch\u00e9ma d\u0027am\u00e9nagements cyclables ou d\u2019un plan v\u00e9lo)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.4.4',
            id_nomenclature: '1.2.2.4.4',
            nom: 'Planifier la continuit\u00e9 des itin\u00e9raires cyclables et pi\u00e9tons',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.4.5',
            id_nomenclature: '1.2.2.4.5',
            nom: 'Planifier les transports publics (lignes, arr\u00eats, etc.)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.4.6',
            id_nomenclature: '1.2.2.4.6',
            nom: 'Porter attention \u00e0 l\u2019intermodalit\u00e9 dans la planification',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.4.7',
            id_nomenclature: '1.2.2.4.7',
            nom: 'Favoriser le d\u00e9veloppement du covoiturage et de l\u0027autopartage',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.4.8',
            id_nomenclature: '1.2.2.4.8',
            nom: 'Organiser et optimiser les usages des v\u00e9hicules \u00e9lectriques',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.4.9',
            id_nomenclature: '1.2.2.4.9',
            nom: 'Envisager l\u2019hippomobilit\u00e9 pour certains usages sp\u00e9cifiques',
            description:
              '\u003cp\u003eHippomobilit\u00e9 = D\u00e9placements \u00e0 cheval (exemples : transport d\u2019enfants, collecte des d\u00e9chets dans les corbeilles du centre, sur les plages, transport de public, d\u00e9bardage, etc\u2026)\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.2.5',
        id_nomenclature: '1.2.2.5',
        nom: 'Suivre les actions mises en \u0153uvre et atteindre des r\u00e9sultats significatifs',
        description:
          '\u003cp\u003e(40% pour les AOM \u0026gt;100 000 hab)\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.2.5.1',
            id_nomenclature: '1.2.2.5.1',
            nom: 'Int\u00e9grer des mesures organisationnelles et de suivi',
            description:
              '\u003cp\u003ePr\u00e9sence d\u0027un tableau de bord indiquant le calendrier, le budget et les acteurs pr\u00e9vus pour chaque action, les gains estim\u00e9s en termes de GES et de polluants atmosph\u00e9riques\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.5.2',
            id_nomenclature: '1.2.2.5.2',
            nom: '\u00c9valuer le document au moins tous les 5 ans',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.5.3',
            id_nomenclature: '1.2.2.5.3',
            nom: 'Cr\u00e9er un observatoire des d\u00e9placements',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.5.4',
            id_nomenclature: '1.2.2.5.4',
            nom: 'Diminuer ou stabiliser les d\u00e9placements en voiture particuli\u00e8re (part modale de la voiture)',
            description:
              '\u003cp\u003eDiminution ou stabilisation d\u2019un indicateur mesurant les d\u00e9placements en voiture particuli\u00e8re (part modale de la voiture) (10% des points ou 20% pour les PDM).\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.2.5.5',
            id_nomenclature: '1.2.2.5.5',
            nom: 'Obtenir un impact b\u00e9n\u00e9fique de la programmation sur la diminution de la pollution atmosph\u00e9rique',
            description:
              '\u003cp\u003eEstim\u00e9 \u00e0 partir d\u0027outils comme \u0026quot;Motiv\u0027Air\u0026quot; pour l\u0027utilisation des modes actifs\u003c/p\u003e\n',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.2.3',
    id_nomenclature: '1.2.3',
    nom: 'D\u00e9finir et mettre en oeuvre la strat\u00e9gie de pr\u00e9vention et de gestion des d\u00e9chets',
    description:
      '\u003cp\u003eLa politique locale de pr\u00e9vention et de gestion des d\u00e9chets est d\u00e9finie, mise en \u0153uvre, suivie et \u00e9valu\u00e9e.\u003c/p\u003e\n\u003cp\u003eElle int\u00e8gre la r\u00e9alisation d\u2019un programme local de pr\u00e9vention des d\u00e9chets m\u00e9nagers et assimil\u00e9s (r\u00e9emploi et r\u00e9utilisation, la gestion de proximit\u00e9 des biod\u00e9chets, la lutte contre le gaspillage alimentaire, la r\u00e9duction \u00e0 la source \u2026), la collecte et le traitement des d\u00e9chets m\u00e9nagers et assimil\u00e9s (fili\u00e8re de collecte s\u00e9par\u00e9e et de recyclages des emballages et des papiers, collecte s\u00e9par\u00e9e et valorisation organique des biod\u00e9chets, autres fili\u00e8res de collecte et recyclage notamment via les d\u00e9ch\u00e8teries, \u2026), dans le cadre du service public.\u003c/p\u003e\n\u003cp\u003eLa tarification incitative du service aux usagers (par la taxe ou la redevance) doit  favoriser la r\u00e9duction des d\u00e9chets et les fili\u00e8res de recyclage, et constitue un outil d\u2019optimisation du service d\u00e9chets.\u003c/p\u003e\n',
    thematique_id: 'dechets',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.2.3.1',
        id_nomenclature: '1.2.3.1',
        nom: 'D\u00e9finir une strat\u00e9gie de pr\u00e9vention et de gestion des d\u00e9chets et sensibiliser les acteurs \u00e0 la pr\u00e9vention et au tri des d\u00e9chets',
        description: '',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.3.1.1',
            id_nomenclature: '1.2.3.1.1',
            nom: 'Communiquer r\u00e9guli\u00e8rement vers la population et les acteurs socio-\u00e9conomiques pour inciter \u00e0 la r\u00e9duction des d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.1.2',
            id_nomenclature: '1.2.3.1.2',
            nom: 'Pratiquer et rendre visible la collecte s\u00e9par\u00e9e des emballages et papiers dans tous les lieux publics',
            description:
              '\u003cp\u003eAction d\u0027exemplarit\u00e9\u003c/p\u003e\n\u003cp\u003eLieux publics (exemples : m\u00e9diath\u00e8ques, parcs et jardins,\u2026)\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.1.3',
            id_nomenclature: '1.2.3.1.3',
            nom: 'Disposer d\u0027un programme local de pr\u00e9vention',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.1.4',
            id_nomenclature: '1.2.3.1.4',
            nom: '\u00c9tablir un r\u00e8glement de collecte, suivre les co\u00fbts du service, \u00e9tablir un rapport annuel sur les co\u00fbts et performances du service (comp\u00e9tence collecte)',
            description:
              '\u003cp\u003eAction applicable pour les collectivit\u00e9s ayant la comp\u00e9tence collecte\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.1.5',
            id_nomenclature: '1.2.3.1.5',
            nom: 'Suivre les co\u00fbts du service, \u00e9tablir un rapport annuel sur les co\u00fbts et performances du service (comp\u00e9tence traitement)',
            description:
              '\u003cp\u003eAction applicable pour les collectivit\u00e9s ayant la comp\u00e9tence traitement\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.1.6',
            id_nomenclature: '1.2.3.1.6',
            nom: ': Pr\u00e9venir (sensibilisation des agents, des services, etc.) et g\u00e9rer les d\u00e9chets conforme \u00e0 la r\u00e9glementation, r\u00e9employer et recycler les d\u00e9chets occasionn\u00e9s par les construction/d\u00e9construction des b\u00e2timents, respecter l\u2019obligation de tri 5 flux pour les services (inter)communaux. (Hors comp\u00e9tences collecte et traitement (commune ou communaut\u00e9 de commune))',
            description:
              '\u003cp\u003eAction applicable pour les collectivit\u00e9s n\u0027ayant ni la comp\u00e9tence collecte, ni la comp\u00e9tence traitement (commune ou communaut\u00e9 de commune)\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.3.2',
        id_nomenclature: '1.2.3.2',
        nom: 'Mettre en \u0153uvre une politique locale de pr\u00e9vention et de gestion des d\u00e9chets ambitieuse et tourn\u00e9e vers l\u2019\u00e9conomie circulaire',
        description: '',
        thematique_id: 'dechets',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.3.2.1',
            id_nomenclature: '1.2.3.2.1',
            nom: 'Engager des actions allant au-del\u00e0 des obligations r\u00e9glementaires et mobiliser les acteurs pour r\u00e9duire, r\u00e9utiliser, r\u00e9parer, recycler, valoriser les ressources/les d\u00e9chets',
            description:
              '\u003cp\u003eA partir d\u2019un diagnostic sur le territoire (flux, co\u00fbts, acteurs, actions de pr\u00e9vention d\u00e9j\u00e0 engag\u00e9es, identification des gisements de d\u00e9chets, d\u00e9finition des potentiels de r\u00e9duction, mobilisation et coop\u00e9ration des acteurs, etc.), compl\u00e9t\u00e9 d\u2019\u00e9tudes de faisabilit\u00e9, engager des actions allant au-del\u00e0 des obligations r\u00e9glementaires et mobilisant les acteurs (habitants, acteurs publics, acteurs \u00e9conomiques, associations, etc.) pour r\u00e9duire, r\u00e9utiliser, r\u00e9parer, recycler, valoriser les ressources/les d\u00e9chets en veillant \u00e0 limiter les gaz \u00e0 effet de serre et la pollution atmosph\u00e9rique.\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.2',
            id_nomenclature: '1.2.3.2.2',
            nom: 'Engager une d\u00e9marche de pr\u00e9vention ambitieuse',
            description:
              '\u003cp\u003eObjectif de production de d\u00e9chets inf\u00e9rieure \u00e0 100 kg/hab/an, objectif de division par deux des quantit\u00e9s d\u2019ordures m\u00e9nag\u00e8res r\u00e9siduelles sur 5 \u00e0 10 ans, etc.).\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.3',
            id_nomenclature: '1.2.3.2.3',
            nom: 'Travailler en \u00e9troite collaboration avec ses partenaires et participer \u00e0 la construction des objectifs de la strat\u00e9gie et du programme d\u2019actions en cas de transfert de comp\u00e9tences (partiel ou total)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.4',
            id_nomenclature: '1.2.3.2.4',
            nom: 'Mettre en place la tarification incitative (comp\u00e9tence collecte)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.5',
            id_nomenclature: '1.2.3.2.5',
            nom: 'Favoriser le r\u00e9emploi et la r\u00e9utilisation (comp\u00e9tence collecte)',
            description:
              '\u003cp\u003ePar exemple par des initiatives du type \u00ab bourses d\u2019\u00e9changes \u00bb, \u00e9laboration et/ou diffusion d\u2019un annuaire des structures de r\u00e9emploi et des artisans r\u00e9parateurs\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.6',
            id_nomenclature: '1.2.3.2.6',
            nom: 'D\u00e9velopper les zones de r\u00e9emploi en d\u00e9ch\u00e8terie et/ou accompagner la cr\u00e9ation d\u2019une recyclerie attenante \u00e0 une d\u00e9ch\u00e8terie, etc. (comp\u00e9tence collecte)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.7',
            id_nomenclature: '1.2.3.2.7',
            nom: 'Optimiser le service de collecte (comp\u00e9tence collecte)',
            description:
              '\u003cp\u003eExtension de la collecte s\u00e9par\u00e9e des emballages \u00e0 tous les plastiques, g\u00e9n\u00e9ralisation du tri \u00e0 la source des biod\u00e9chets, etc.\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.8',
            id_nomenclature: '1.2.3.2.8',
            nom: 'Mettre en \u0153uvre des fili\u00e8re r\u00e9emploi ou de nouvelles fili\u00e8res de recyclage en d\u00e9ch\u00e8terie (comp\u00e9tence collecte)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.9',
            id_nomenclature: '1.2.3.2.9',
            nom: 'D\u00e9finir la limite du service public, articulation service public/offre priv\u00e9e (comp\u00e9tence collecte)',
            description:
              '\u003cp\u003eD\u00e9finir la limite du service public, articulation service public/offre priv\u00e9e (comp\u00e9tence collecte) qui permet une r\u00e9partition pertinente des r\u00f4les facilitant, pour les producteurs de d\u00e9chets non m\u00e9nagers (entreprises, administrations, services communaux) le respect de leurs nouvelles obligations (tri 5 flux, reprise des mat\u00e9riaux de construction -  d\u00e9ch\u00e8teries professionnelle, gros producteurs de biod\u00e9chets).\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.10',
            id_nomenclature: '1.2.3.2.10',
            nom: 'Animer les entreprises du territoire (comp\u00e9tence collecte)',
            description:
              '\u003cp\u003ePromotion de l\u0027\u00e9cologie industrielle et territoriale, de la gestion collective des d\u00e9chets, etc.\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.11',
            id_nomenclature: '1.2.3.2.11',
            nom: 'Etudier la fr\u00e9quence, les itin\u00e9raires de collecte et la motorisation des v\u00e9hicules d\u00e9di\u00e9s \u00e0 la collecte des d\u00e9chets (comp\u00e9tence collecte)',
            description:
              '\u003cp\u003eEtudier la fr\u00e9quence, les itin\u00e9raires de collecte et la motorisation des v\u00e9hicules d\u00e9di\u00e9s \u00e0 la collecte des d\u00e9chets (privil\u00e9gier l\u2019\u00e9lectrification en cas de collectivit\u00e9 produisant de l\u2019\u00e9lectricit\u00e9 renouvelable et le bioGNV pour les v\u00e9hicules lourds) pour limiter les consommations d\u0027\u00e9nergie et les \u00e9missions de GES, et de polluants atmosph\u00e9riques.\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.12',
            id_nomenclature: '1.2.3.2.12',
            nom: 'Mettre en place une tarification incitative \u00e0 la pr\u00e9vention et au recyclage (comp\u00e9tence traitement)',
            description:
              '\u003cp\u003eEntre syndicat de traitement et de collecte, et avec les fournisseurs du syndicat de traitement\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.13',
            id_nomenclature: '1.2.3.2.13',
            nom: 'Ins\u00e9rer des clauses de r\u00e9duction annuelle des quantit\u00e9s incin\u00e9r\u00e9es et enfouies dans les contrats de D\u00e9l\u00e9gation de Service Public (DSP) (comp\u00e9tence traitement)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.14',
            id_nomenclature: '1.2.3.2.14',
            nom: 'Augmenter le recyclage / les nouvelles fili\u00e8res de valorisation mati\u00e8re (hors TMB) (pl\u00e2tre, encombrants, meubles/bois) (comp\u00e9tence traitement)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.15',
            id_nomenclature: '1.2.3.2.15',
            nom: 'Etendre les consignes de tri \u00e0 tous les plastiques (comp\u00e9tence traitement)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.16',
            id_nomenclature: '1.2.3.2.16',
            nom: 'Privil\u00e9gier les d\u00e9bouch\u00e9s locaux pour minimiser le transport et permettre un d\u00e9veloppement \u00e9conomique local (comp\u00e9tence traitement)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.17',
            id_nomenclature: '1.2.3.2.17',
            nom: 'Tri des macro-d\u00e9chets en amont des incin\u00e9rateurs et d\u00e9charges pour retirer ceux qui peuvent \u00eatre recycl\u00e9s (comp\u00e9tence traitement)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.18',
            id_nomenclature: '1.2.3.2.18',
            nom: 'Disposer d\u0027une installation de valorisation des d\u00e9chets organiques (compostage ou m\u00e9thanisation) (comp\u00e9tence traitement)',
            description:
              '\u003cp\u003eNota : Installation \u00e9valu\u00e9e en mesure 3.3.5\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.19',
            id_nomenclature: '1.2.3.2.19',
            nom: 'Etudier et mettre en place les transferts possibles par voie ferroviaire ou fluviale des d\u00e9chets entre les sites de regroupement et les sites de traitement  (comp\u00e9tence traitement)',
            description:
              '\u003cp\u003eDans le cas du transport fluvial, veiller aux \u00e9missions de polluants atmosph\u00e9riques des bateaux utilis\u00e9s, moins r\u00e9glement\u00e9s que le transport routier.\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.20',
            id_nomenclature: '1.2.3.2.20',
            nom: 'Mettre en place des actions de pr\u00e9vention et de r\u00e9duction des d\u00e9chets au sein des services (hors comp\u00e9tences collecte et traitement)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.21',
            id_nomenclature: '1.2.3.2.21',
            nom: 'Animer les entreprises du territoire',
            description:
              '\u003cp\u003eMise en \u0153uvre par les acteurs \u00e9conomiques d\u2019une dynamique d\u2019\u00e9cologie industrielle et territoriale et/ou de gestion collective des d\u00e9chets, etc.\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.2.22',
            id_nomenclature: '1.2.3.2.22',
            nom: 'Prendre en compte l\u0027objectif national de recycler 70% des d\u00e9chets du BTP et mettre en \u0153uvre des actions pour y contribuer',
            description:
              '\u003cp\u003eA minima pour les chantiers publics (taux de recyclage sup\u00e9rieur ou \u00e9gal \u00e0 70%) et de mani\u00e8re plus large, participation de la collectivit\u00e9 \u00e0 la coordination/mise en place de la fili\u00e8re priv\u00e9e de collecte et de valorisation des d\u00e9chets du BTP (identification de sites propices, facturation d\u0027un service de reprise de d\u00e9chets dans les d\u00e9chetteries publiques selon les capacit\u00e9s d\u0027accueil, contrat entre collectivit\u00e9s et distributeurs...).\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.3.3',
        id_nomenclature: '1.2.3.3',
        nom: 'Suivre annuellement et atteindre les objectifs',
        description:
          '\u003cp\u003eLe premier item compte pour 10% de la note, les autres sur 5%.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.3.3.1',
            id_nomenclature: '1.2.3.3.1',
            nom: 'Produire moins de d\u00e9chets m\u00e9nagers et assimil\u00e9s que la moyenne nationale, voire moins que les territoires pionniers en France',
            description:
              '\u003cp\u003eProduire moins de d\u00e9chets m\u00e9nagers et assimil\u00e9s que la moyenne nationale (573 kg/hab.an) et se comparer par rapport aux territoires pionniers en France (480 kg/hab.an) (DMA avec d\u00e9blais et gravats)\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.3.2',
            id_nomenclature: '1.2.3.3.2',
            nom: 'Diminuer la production des d\u00e9chets m\u00e9nagers et assimil\u00e9s',
            description:
              '\u003cp\u003eA comparer avec l\u0027objectif national de r\u00e9duction de 10% entre 2010 et 2020, soit -1% par an.\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.3.3',
            id_nomenclature: '1.2.3.3.3',
            nom: 'Produire moins d\u2019ordures m\u00e9nag\u00e8res r\u00e9siduelles que la moyenne nationale, voire moins que les territoires pionniers en France',
            description:
              '\u003cp\u003eProduire moins d\u2019ordures m\u00e9nag\u00e8res r\u00e9siduelles que la moyenne nationale (265 kg/hab.an) et se comparer par rapport aux territoires pionniers en France (120 kg d\u2019OMR).\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.3.4',
            id_nomenclature: '1.2.3.3.4',
            nom: 'Atteindre un % de valorisation mati\u00e8re et organique des d\u00e9chets m\u00e9nagers et assimil\u00e9s sup\u00e9rieur \u00e0 la moyenne nationale, voire sup\u00e9rieur au meilleur score Cit\u0027ergie',
            description:
              '\u003cp\u003e\u00c9volution du % de valorisation mati\u00e8re et organique des d\u00e9chets m\u00e9nagers et assimil\u00e9s, en comparaison avec la moyenne nationale de 39% (2011) et une cible de 55 % (meilleur score Cit\u0027ergie 2014)\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.3.3.5',
            id_nomenclature: '1.2.3.3.5',
            nom: 'Progresser dans le taux de recyclage des d\u00e9chets du BTP',
            description:
              '\u003cp\u003eA minima ceux produits par les chantiers de la collectivit\u00e9, mais dans l\u0027id\u00e9al, ceux produits par toute la fili\u00e8re BTP locale\u003c/p\u003e\n',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.2.4',
    id_nomenclature: '1.2.4',
    nom: 'Planifier la r\u00e9novation  des b\u00e2timents r\u00e9sidentiels et tertiaires et la construction durable sur le territoire',
    description:
      '\u003cp\u003eLa collectivit\u00e9 poss\u00e8de un ou des dispositifs structurant la politique de construction et de r\u00e9novation des b\u00e2timents (r\u00e9sidentiels et tertiaires) sur son territoire, visant \u00e0 promouvoir la performance climat-air-\u00e9nergie.\u003c/p\u003e\n\u003cp\u003eCette politique hi\u00e9rarchise les priorit\u00e9s d\u2019actions, et fixe des objectifs chiffr\u00e9s op\u00e9rationnels et territorialis\u00e9s (nombre, type de b\u00e2timents et niveau de performances\u2026), en accord avec les objectifs nationaux (d\u00e9clinaison du plan de r\u00e9novation \u00e9nerg\u00e9tique de l\u2019habitat notamment).\u003c/p\u003e\n\u003cp\u003eLa strat\u00e9gie locale est formalis\u00e9e : dans un programme local de l\u2019habitat (PLH), dans une strat\u00e9gie de r\u00e9novation du tertiaire ou dans les documents de cadrage  d\u2019un espace conseil FAIRE, par exemple. Elle est construite de fa\u00e7on transversale et int\u00e9gr\u00e9e avec la planification des d\u00e9placements, l\u2019am\u00e9nagement du territoire, la planification urbaine et le plan climat air \u00e9nergie territorial.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.2.4.1',
        id_nomenclature: '1.2.4.1',
        nom: 'Prendre en compte les enjeux climat-air-\u00e9nergie dans la strat\u00e9gie "habitat"',
        description: '',
        thematique_id: 'batiments',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.4.1.1',
            id_nomenclature: '1.2.4.1.1',
            nom: 'Disposer d\u0027un Programme Local de l\u0027Habitat (PLH) n\u2019ayant pas plus de 6 ans et anticiper son renouvellement',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.1.2',
            id_nomenclature: '1.2.4.1.2',
            nom: 'Prendre en compte les enjeux environnementaux dans le programme local de l\u0027habitat (PLH)',
            description:
              '\u003cp\u003eLa ma\u00eetrise des d\u00e9placements, la limitation de la consommation \u00e9nerg\u00e9tique et des ressources naturelles (parmi lesquelles le foncier), la qualit\u00e9 de l\u2019air (int\u00e9rieur et ext\u00e9rieur) sont bien pr\u00e9sentes dans le PLH (ou \u00e9quivalent) \u00e0 c\u00f4t\u00e9 des pr\u00e9occupations sociales ou \u00e9conomiques traditionnelles.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.1.3',
            id_nomenclature: '1.2.4.1.3',
            nom: 'Int\u00e9grer dans le diagnostic du Programme Local de l\u0027Habitat (ou \u00e9quivalent) des \u00e9l\u00e9ments sur la performance \u00e9nerg\u00e9tique du parc b\u00e2ti',
            description:
              '\u003cp\u003eCollecte de donn\u00e9es locales permettant de r\u00e9aliser une cartographie du parc b\u00e2ti par type de b\u00e2timent, enqu\u00eate sur les travaux de r\u00e9novation effectu\u00e9s, etc.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.1.4',
            id_nomenclature: '1.2.4.1.4',
            nom: 'Indiquer la r\u00e9novation thermique de l\u0027habitat comme un objectif prioritaire du Programme Local de l\u0027Habitat',
            description:
              '\u003cp\u003eLa r\u00e9novation thermique est inscrite dans le programme local de l\u0027habitat (ou \u00e9quivalent) ou dans d\u2019autres programmes (ex : PIG, convention SARE (espace conseil FAIRE)) et projets (ex : projets ANRU \u2013 Agence Nationale pour la R\u00e9novation Urbaine, projets de territoires d\u2019un PETR).\u003c/p\u003e\n\u003cp\u003eCet enjeu est identifi\u00e9 sp\u00e9cifiquement et non noy\u00e9 dans le document.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.1.5',
            id_nomenclature: '1.2.4.1.5',
            nom: 'Identifier l\u0027adaptation au changement climatique (et plus particuli\u00e8rement le confort d\u0027\u00e9t\u00e9) comme une th\u00e9matique \u00e0 fort enjeu',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.4.2',
        id_nomenclature: '1.2.4.2',
        nom: 'Disposer d\u0027une strat\u00e9gie pour la r\u00e9novation des locaux tertiaires',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.4.2.1',
            id_nomenclature: '1.2.4.2.1',
            nom: 'Disposer d\u0027un diagnostic sur l\u0027\u00e9tat du parc b\u00e2ti tertiaire du territoire',
            description:
              '\u003cp\u003eLe diagnostic inclut les informations recueillies dans le cadre du d\u00e9p\u00f4t de dossier technique r\u00e9pondant au d\u00e9cret tertiaire.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.2.2',
            id_nomenclature: '1.2.4.2.2',
            nom: 'Disposer d\u0027un document cadre visant \u00e0 qualifier/inciter la construction et la r\u00e9novation performante des locaux tertiaires',
            description:
              '\u003cp\u003eCe document peut \u00eatre remplac\u00e9 par un volet clairement identifi\u00e9 dans un autre document de planification.\u003c/p\u003e\n\u003cp\u003eCe document cadre couvre le sch\u00e9ma directeur de zone d\u0027activit\u00e9s, la strat\u00e9gie de r\u00e9novation du tertiaire, le r\u00e9f\u00e9rentiel constructif pour les locaux tertiaires...).\u003c/p\u003e\n\u003cp\u003eCe document cadre reprend notamment les actions identifi\u00e9es dans le dossier technique d\u00e9pos\u00e9 sur la plateforme\nOPERAT\n.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.4.3',
        id_nomenclature: '1.2.4.3',
        nom: 'Construire la politique  sur le b\u00e2timent de fa\u00e7on transversale et int\u00e9gr\u00e9e avec les autres th\u00e9matiques et acteurs',
        description: '',
        thematique_id: 'batiments',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.4.3.1',
            id_nomenclature: '1.2.4.3.1',
            nom: 'Mobiliser les parties prenantes de son territoire directement concern\u00e9es par la construction et la r\u00e9novation performante (BBC ou \u00e9quivalent) pour construire sa politique',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.3.2',
            id_nomenclature: '1.2.4.3.2',
            nom: 'Limiter l\u2019\u00e9talement urbain de la politique de l\u2019habitat et du tertiaire',
            description:
              '\u003cp\u003eFixer un nombre maximum de nouveaux logements (ou de surfaces de locaux tertiaires/commerciaux), encadrer leur typologie (collectif, individuel, interm\u00e9diaire) et leur localisation (% de logements/locaux tertiaire dans l\u2019enveloppe urbaine, % en renouvellement, % en extension\u2026).\u003c/p\u003e\n\u003cp\u003eFixer des densit\u00e9s planchers diff\u00e9renci\u00e9es selon les secteurs.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.3.3',
            id_nomenclature: '1.2.4.3.3',
            nom: 'D\u00e9finir des zones pr\u00e9f\u00e9rentielles de d\u00e9veloppement dans le Programme Local de l\u0027Habitat coh\u00e9rentes avec la mobilit\u00e9 durable',
            description:
              '\u003cp\u003eLe PLH (ou \u00e9quivalent) d\u00e9finit des zones pr\u00e9f\u00e9rentielles de d\u00e9veloppement dans des zones bien desservies par les transports en communs et/ou dans des zones au trafic apais\u00e9 favorisant les modes actifs de pr\u00e9f\u00e9rence \u00e0 la voiture et/ou dans des zones o\u00f9 l\u2019exposition aux polluants atmosph\u00e9riques est minimale ; ou facilitant le recours aux \u00e9nergies renouvelables ou de r\u00e9cup\u00e9ration, tout en prenant en compte l\u0027exposition aux polluants atmosph\u00e9riques.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.3.4',
            id_nomenclature: '1.2.4.3.4',
            nom: 'Contextualiser et prioriser la politique de la collectivit\u00e9 par rapport aux',
            description:
              '\u003cp\u003eExemples d\u0027enjeux forts/sp\u00e9cifiques du territoire : habitat social, copropri\u00e9t\u00e9s, r\u00e9sidences secondaires, revitalisation des centres-bourg, lutte contre la vacance, b\u00e2ti \u00e0 caract\u00e8re patrimonial, etc.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.3.5',
            id_nomenclature: '1.2.4.3.5',
            nom: 'Faciliter l\u2019appropriation par les communes (d\u00e9clinaison des objectifs, articulation avec les PLU et les projets communaux, travail d\u0027animation)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.4.4',
        id_nomenclature: '1.2.4.4',
        nom: 'Fixer des niveaux de performance \u00e9lev\u00e9s \u00e0 atteindre pour les constructions et les r\u00e9novations  des b\u00e2timents',
        description: '',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.4.4.1',
            id_nomenclature: '1.2.4.4.1',
            nom: 'Fixer des objectifs chiffr\u00e9s en mati\u00e8re de r\u00e9novation thermique et de construction neuve dans le Programme Local de l\u0027Habitat (ou \u00e9quivalent)',
            description:
              '\u003cp\u003eCes objectifs sont en lien avec les objectifs nationaux.\u003c/p\u003e\n\u003cp\u003eLe PLH peut \u00eatre remplac\u00e9 par un autre dispositif de planification de la construction/r\u00e9novation.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.4.2',
            id_nomenclature: '1.2.4.4.2',
            nom: 'Faire r\u00e9f\u00e9rence \u00e0 des labels de performance dans le Programme Local de l\u0027Habitat (ou \u00e9quivalent)',
            description:
              '\u003cp\u003eLe PLH peut \u00eatre remplac\u00e9 par un autre dispositif de planification de la construction/r\u00e9novation.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.4.3',
            id_nomenclature: '1.2.4.4.3',
            nom: 'D\u00e9finir \u00e9galement des objectifs chiffr\u00e9s et des crit\u00e8res de performance pour les b\u00e2timents tertiaires',
            description:
              '\u003cp\u003eLes objectifs chiffr\u00e9s des b\u00e2timents cibl\u00e9s par le d\u00e9cret tertiaire sont coh\u00e9rents avec les objectifs modul\u00e9s.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.4.4',
            id_nomenclature: '1.2.4.4.4',
            nom: 'Viser l\u0027am\u00e9lioration de la qualit\u00e9 de l\u0027air int\u00e9rieur des b\u00e2timents',
            description:
              '\u003cp\u003ePar exemple avec des exigences ou recommandations sur les syst\u00e8mes de ventilation ou des recommandations sur les mat\u00e9riaux utilis\u00e9s.\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.2.4.4.5',
            id_nomenclature: '1.2.4.4.5',
            nom: 'Viser le confort d\u0027\u00e9t\u00e9 des b\u00e2timents',
            description:
              '\u003cp\u003ePar exemple avec des exigences ou recommandations sur les dispositifs d\u0027occultation, la v\u00e9g\u00e9talisation, l\u0027alb\u00e9do des mat\u00e9riaux, leur inertie, la ventilation\u003c/p\u003e\n',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.4.5',
        id_nomenclature: '1.2.4.5',
        nom: 'Associer \u00e0 la planification des dispositifs op\u00e9rationnels et financiers',
        description:
          '\u003cp\u003eEn lien avec le programme national SARE (service d\u0027accompagnement pour la r\u00e9novation \u00e9nerg\u00e9tique), mise en place d\u2019un espace conseil FAIRE ou autres dispositifs (OPAH, CLE, PIG, ANRU, \u2026) incluant un volet r\u00e9novation \u00e9nerg\u00e9tique marqu\u00e9.\u003c/p\u003e\n\u003cp\u003eLes volets \u00ab conseils \u00bb et \u00ab mobilisation des professionnels du b\u00e2timent \u00bb sont \u00e9valu\u00e9s dans le sous-domaine 6.2 \u0026quot;B\u00e2timents r\u00e9sidentiels et tertiaires\u0026quot;.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.2.4.5.1',
            id_nomenclature: '1.2.4.5.1',
            nom: 'pas de nom',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.2.4.6',
        id_nomenclature: '1.2.4.6',
        nom: 'Observer et \u00e9valuer la progression de la construction et de la r\u00e9novation performante sur le territoire',
        description:
          '\u003cp\u003eEn lien avec les observatoires r\u00e9gionaux et nationaux, le dispositif d\u0027observation de l\u0027habitat et du tertiaire mis en place  int\u00e8gre des indicateurs attestant de la progression de  la construction/r\u00e9novation durable.\u003c/p\u003e\n\u003cp\u003ePar exemple : nombre annuel de logements r\u00e9nov\u00e9s via les dispositifs de subventionnement et d\u2019accompagnement dont la collectivit\u00e9 est partenaire (bailleurs, espace conseil FAIRE, ANRU, etc.), part de l\u2019habitat individuel dans la production d\u2019habitat, etc.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.3.1',
    id_nomenclature: '1.3.1',
    nom: 'Utiliser les documents d\u0027urbanisme pour assurer la mise en \u0153uvre des objectifs climat-air-\u00e9nergie et lutter contre l\u0027artificialisation des sols',
    description:
      '\u003cp\u003eLes documents d\u2019urbanisme sont en coh\u00e9rence avec la strat\u00e9gie climat-air-\u00e9nergie de la collectivit\u00e9, ils en permettent la traduction spatiale, dans une logique d\u0027\u00e9conomie circulaire et de solidarit\u00e9 rural/urbain.\u003c/p\u003e\n\u003cp\u003eDes dispositions incitatives et opposables sont notamment pr\u00e9vues pour favoriser la conception bioclimatique, les formes urbaines resserr\u00e9es et la mobilit\u00e9 durable, l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique et les \u00e9nergies renouvelables, les r\u00e9seaux de chaleur/froid, la limitation des \u00e9missions et l\u0027impact des polluants atmosph\u00e9riques sur la population, l\u2019adaptation au changement climatique.\u003c/p\u003e\n\u003cp\u003eLa lutte contre l\u0027artificialisation des sols et le maintien des espaces naturels, agricoles et forestiers font partie int\u00e9grante de la strat\u00e9gie mise en place.\u003c/p\u003e\n',
    thematique_id: 'urbanisme',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.3.1.1',
        id_nomenclature: '1.3.1.1',
        nom: 'Organiser le pilotage des documents d\u2019urbanisme',
        description: '',
        thematique_id: 'urbanisme',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.1.1.1',
            id_nomenclature: '1.3.1.1.1',
            nom: 'Disposer d\u2019un \u00e9lu et si possible (selon la taille de la collectivit\u00e9) d\u2019un cadre responsable de l\u2019urbanisme (urbaniste) ainsi que d\u0027une commission politique ad hoc',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.1.2',
            id_nomenclature: '1.3.1.1.2',
            nom: 'Int\u00e9rer l\u2019\u00e9lu en charge du Plan Climat dans la commission pr\u00e9-cit\u00e9e',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.1.3',
            id_nomenclature: '1.3.1.1.3',
            nom: 'Impliquer les autres \u00e9lus concern\u00e9s par l\u2019am\u00e9nagement du territoire',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.1.4',
            id_nomenclature: '1.3.1.1.4',
            nom: 'Sensibiliser/former les \u00e9lus et techniciens aux enjeux crois\u00e9s de l\u2019urbanisme durable et de l\u2019\u00e9nergie',
            description:
              '\u003cp\u003eGroupe de travail \u00ab formes urbaines \u00bb, formation \u00ab PLU et \u00e9nergie \u00bb, lecture de PLU exemplaires, visite d\u2019op\u00e9rations, maintien des espaces naturels, agricoles et forestiers, etc.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.1.5',
            id_nomenclature: '1.3.1.1.5',
            nom: 'Mobiliser l\u0027ensemble des services techniques pour favoriser une approche transversale des politiques locales dans les documents d\u0027urbanisme',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.1.6',
            id_nomenclature: '1.3.1.1.6',
            nom: 'Travailler/Dialoguer r\u00e9guli\u00e8rement avec d\u2019autres acteurs sur ce th\u00e8me : EPCI, communes membres, agences d\u2019urbanisme, bailleurs sociaux, chambres consulaires, CAUE, etc.',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.1.2',
        id_nomenclature: '1.3.1.2',
        nom: 'R\u00e9aliser les \u00e9tudes n\u00e9cessaires \u00e0 l\u2019int\u00e9gration des th\u00e9matiques climat-air-\u00e9nergie',
        description:
          '\u003cp\u003eLa r\u00e9alisation d\u2019un sch\u00e9ma directeur de l\u2019\u00e9nergie est int\u00e9gr\u00e9e \u00e0 la mesure 1.2.1.\u003c/p\u003e\n',
        thematique_id: 'urbanisme',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.1.2.1',
            id_nomenclature: '1.3.1.2.1',
            nom: 'R\u00e9aliser des analyses crois\u00e9es des enjeux climat-air-\u00e9nergie et urbains',
            description:
              '\u003cp\u003eR\u00e9alisation d\u0027analyses crois\u00e9es des enjeux climat-air-\u00e9nergie et urbains, de type AEU2 ou utilisation d\u0027outils d\u0027aide \u00e0 la d\u00e9cision comme GES-Urbanisme (CEREMA) ou d\u0027outils de mod\u00e9lisation de l\u0027impact de la politique d\u0027urbanisme sur la qualit\u00e9 de l\u0027air pour l\u0027\u00e9laboration des documents d\u0027urbanisme (PLU, SCOT) et sur les secteurs \u00e0 enjeux pour les traduire en orientations d\u0027am\u00e9nagement opposables\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.2.2',
            id_nomenclature: '1.3.1.2.2',
            nom: 'Utiliser des outils cartographiques pour illustrer les enjeux et les dynamiques de son territoire',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.2.3',
            id_nomenclature: '1.3.1.2.3',
            nom: 'Int\u00e9grer dans le rapport de pr\u00e9sentation du PLU/SCOT un \u00e9tat des lieux de la situation en mati\u00e8re d\u2019\u00e9missions de gaz \u00e0 effet de serre, de consommations et productions \u00e9nerg\u00e9tiques, d\u2019\u00e9missions de polluants atmosph\u00e9riques, des vuln\u00e9rabilit\u00e9s climatiques',
            description:
              '\u003cp\u003eEn compl\u00e9ment des th\u00e9matiques r\u00e9glementaires (habitat, d\u00e9placement, etc.) et en lien \u00e9troit avec les donn\u00e9es disponibles dans les autres documents de planification (notamment PDM, PLH, PCAET), le rapport de pr\u00e9sentation du PLU/SCOT comporte un \u00e9tat des lieux de la situation en mati\u00e8re d\u2019\u00e9missions de gaz \u00e0 effet de serre, de consommations et productions \u00e9nerg\u00e9tiques, d\u2019\u00e9missions de polluants atmosph\u00e9riques, des vuln\u00e9rabilit\u00e9s climatiques (exemple : \u00e9tat des lieux des quartiers les plus touch\u00e9s par la chaleur estivale)\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.2.4',
            id_nomenclature: '1.3.1.2.4',
            nom: 'Analyser le potentiel de densification (identification des friches, des dents creuses, etc.)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.2.5',
            id_nomenclature: '1.3.1.2.5',
            nom: 'Disposer d\u0027un inventaire des capacit\u00e9s de stationnement de v\u00e9hicules motoris\u00e9s, de v\u00e9hicules hybrides et \u00e9lectriques et de v\u00e9los des parcs ouverts au public et des possibilit\u00e9s de mutualisation de ces capacit\u00e9s',
            description:
              '\u003cp\u003eValorisable pour les PLU approuv\u00e9s avant 2014, obligatoire depuis\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.1.3',
        id_nomenclature: '1.3.1.3',
        nom: 'Mettre la politique d\u2019urbanisme et les objectifs de d\u00e9veloppement en coh\u00e9rence avec la politique climat-air-\u00e9nergie',
        description: '',
        thematique_id: 'urbanisme',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.1.3.1',
            id_nomenclature: '1.3.1.3.1',
            nom: 'Int\u00e9grer dans le PADD des engagements clairs pour l\u0027adaptation et l\u0027att\u00e9nuation par rapport au changement climatique',
            description:
              '\u003cp\u003eLe plan d\u0027am\u00e9nagement et de d\u00e9veloppement durable (PADD) comporte des engagements clairs pour l\u0027adaptation et l\u0027att\u00e9nuation par rapport au changement climatique (ces engagements sont si possible spatialis\u00e9s et chiffr\u00e9s).\u003c/p\u003e\n\u003cp\u003ePar exemple en mati\u00e8re de r\u00e9seaux d\u2019\u00e9nergie pour favoriser le d\u00e9veloppement des r\u00e9seaux de chaleur aliment\u00e9s majoritairement par des \u00e9nergies renouvelables et de r\u00e9cup\u00e9ration (ENRR) et pour coordonner les diff\u00e9rents r\u00e9seaux d\u0027\u00e9nergies, ou en mati\u00e8re de trame verte et bleue pour optimiser globalement la r\u00e9sistance et la r\u00e9silience vis-\u00e0-vis des \u00e9v\u00e8nements climatiques extr\u00eames).\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.3.2',
            id_nomenclature: '1.3.1.3.2',
            nom: 'Disposer d\u0027une strat\u00e9gie multicrit\u00e8re et prendre en compte les zones de bruits et les zones d\u2019\u00e9missions de polluants atmosph\u00e9riques pour limiter l\u2019impact sur la population (\u00e9vitement ou am\u00e9nagements sp\u00e9cifiques pour limiter les nuisances)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.3.3',
            id_nomenclature: '1.3.1.3.3',
            nom: 'Articuler la strat\u00e9gie d\u2019urbanisme avec le sch\u00e9ma directeur de l\u2019\u00e9nergie s\u2019il existe',
            description:
              '\u003cp\u003eEn compl\u00e9ment du PCAET, articulation de la strat\u00e9gie d\u2019urbanisme avec le sch\u00e9ma directeur de l\u2019\u00e9nergie, notamment en ce qui concerne le d\u00e9veloppement des r\u00e9seaux de chaleur.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.3.4',
            id_nomenclature: '1.3.1.3.4',
            nom: 'Identifier une hi\u00e9rarchie de d\u00e9veloppement urbain en fonction d\u2019un niveau de desserte en transports collectifs et/ou de voies pour modes actifs',
            description:
              '\u003cp\u003eAu niveau des quartiers d\u2019une ville -PLU-, ou au niveau du bassin de vie -SCoT ou PLUI-, mise en place de charte d\u2019articulation de l\u2019urbanisme et des transports, contrat d\u2019axe\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.3.5',
            id_nomenclature: '1.3.1.3.5',
            nom: 'Lier la strat\u00e9gie d\u2019urbanisation avec la proximit\u00e9 et les capacit\u00e9s des autres r\u00e9seaux (\u00e9nerg\u00e9tique, eau/assainissement)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.3.6',
            id_nomenclature: '1.3.1.3.6',
            nom: 'Prioriser les dents creuses et les friches dans les strat\u00e9gies d\u2019am\u00e9nagement pour limiter l\u2019\u00e9talement urbain',
            description:
              '\u003cp\u003eLa collectivit\u00e9 s\u2019est fix\u00e9e par exemple un seuil de logement \u00e0 cr\u00e9er en renouvellement ambitieux et a commenc\u00e9 \u00e0 mettre en \u0153uvre le potentiel de renouvellement.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.1.4',
        id_nomenclature: '1.3.1.4',
        nom: 'Transcrire les engagements climat-air-\u00e9nergie dans les volets opposables des documents d\u2019urbanisme',
        description: '',
        thematique_id: 'urbanisme',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.1.4.1',
            id_nomenclature: '1.3.1.4.1',
            nom: 'Utiliser les orientations d\u0027am\u00e9nagement et de programmation (OAP) du PLU pour favoriser le d\u00e9veloppement durable des secteurs cl\u00e9s',
            description:
              '\u003cp\u003eNotamment mise en \u0153uvre d\u2019OAP sectorielles pour les PLUI avec des objectifs \u00e9nerg\u00e9tiques quantifi\u00e9s (ex : secteurs 100% renouvelable)\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.4.2',
            id_nomenclature: '1.3.1.4.2',
            nom: 'Subdiviser les zones \u00e0 urbaniser ou urbaines pour adapter finement le r\u00e8glement \u00e0 chaque zone \u00e0 enjeu du territoire',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.4.3',
            id_nomenclature: '1.3.1.4.3',
            nom: 'Comptabiliser et rationaliser les zones \u00e0 ouvrir \u00e0 l\u2019urbanisation',
            description:
              '\u003cp\u003ePar exemple \u00e9co-conditionnement de l\u0027ouverture \u00e0 l\u0027urbanisation dans le SCOT (sur plusieurs zones et sur des crit\u00e8res vari\u00e9s : qualit\u00e9 desserte TC, \u00e9tudes d\u0027impacts, \u00e9tude de densification...).\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.4.4',
            id_nomenclature: '1.3.1.4.4',
            nom: 'Disposer de documents cartographiques d\u00e9terminants mettant en \u00e9vidence les secteurs pouvant faire l\u0027objet de prescriptions \u00e9nerg\u00e9tiques ou urbaines particuli\u00e8res, cartes strat\u00e9giques air, trame verte et bleue',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.4.5',
            id_nomenclature: '1.3.1.4.5',
            nom: 'Contribuer explicitement dans les  r\u00e8glement du PLU et le DOO du SCOT (en dictant certaines r\u00e8gles au PLU le cas \u00e9ch\u00e9ant) \u00e0 la lutte et \u00e0 l\u0027adaptation au changement climatique, ainsi qu\u0027\u00e0 la pr\u00e9servation de la qualit\u00e9 de l\u0027air',
            description:
              '\u003cp\u003eEn favorisant notamment : la compacit\u00e9 des formes urbaines, les \u00e9conomies d\u0027\u00e9nergie et la diversification des sources d\u0027\u00e9nergie, la v\u00e9g\u00e9talisation et la gestion locale des eaux pluviales, la limitation de la voiture, la mixit\u00e9 fonctionnelle.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.4.6',
            id_nomenclature: '1.3.1.4.6',
            nom: 'Utiliser les nouvelles possibilit\u00e9s Grenelle, ALUR et TECV',
            description:
              '\u003cp\u003eExigences \u00e9nerg\u00e9tiques et environnementales renforc\u00e9es dans certains secteurs du PLU/SCOT, bonification de gabarit sur crit\u00e8res de performance \u00e9nerg\u00e9tique, densit\u00e9 minimale de construction dans les secteurs bien desservis pas les TC, \u00e0 proximit\u00e9 des r\u00e9seaux de chaleur alimente\u0301s majoritairement par des ENRR et/ou \u00e0 proximit\u00e9 d\u0027\u00e9quipements collectifs aux besoins importants d\u0027\u00e9nergie, coefficient de biotope par surface, normes maximales de stationnement motoris\u00e9s, etc.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.1.5',
        id_nomenclature: '1.3.1.5',
        nom: 'Conna\u00eetre et prot\u00e9ger les  espaces naturels, agricoles et forestiers de l\u2019artificialisation des sols via les documents d\u2019urbanisme et la politique fonci\u00e8re associ\u00e9e',
        description: '',
        thematique_id: 'urbanisme',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.1.5.1',
            id_nomenclature: '1.3.1.5.1',
            nom: 'R\u00e9aliser un suivi (mutualis\u00e9 \u00e0 l\u2019\u00e9chelle intercommunale) du foncier et des b\u00e2timents agricoles, r\u00e9aliser des diagnostics fonciers participatifs',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.5.2',
            id_nomenclature: '1.3.1.5.2',
            nom: 'Afficher clairemetn la strat\u00e9gie de protection des espaces naturels, agricoles et forestiers dans le PLU/SCOT (PADD)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.5.3',
            id_nomenclature: '1.3.1.5.3',
            nom: 'Reconna\u00eetre la valeur du foncier naturel, agricole, forestier dans les documents d\u0027urbanisme et de planification',
            description:
              '\u003cp\u003eZonage A encadrant strictement les changements de destination des b\u00e2timents agricoles, carte des espaces agricoles \u00e0 prot\u00e9ger, etc.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.5.4',
            id_nomenclature: '1.3.1.5.4',
            nom: 'Limiter l\u2019artificialisation des sols sur le long terme, avec la mise en place de dispositifs r\u00e9glementaires de protection et d\u2019outils d\u0027intervention fonci\u00e8re',
            description:
              '\u003cp\u003eOutils d\u0027intervention fonci\u00e8re : droit de pr\u00e9emption de la SAFER, droit de pr\u00e9emption urbain des communes/EPCI, PAEN, zones agricoles prot\u00e9g\u00e9es, ENS, zone d\u2019am\u00e9nagement diff\u00e9r\u00e9, zone agricole prot\u00e9g\u00e9e.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.1.6',
        id_nomenclature: '1.3.1.6',
        nom: 'Suivre des indicateurs relatifs \u00e0 l\u2019urbanisme durable et atteindre les objectifs fix\u00e9s',
        description: '',
        thematique_id: 'urbanisme',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.1.6.1',
            id_nomenclature: '1.3.1.6.1',
            nom: 'Disposer d\u2019un indicateur de compacit\u00e9 des formes urbaines qui \u00e9volue positivement',
            description:
              '\u003cp\u003ePart de logements en reconversion et r\u00e9novation / part de logements en extension, nb nouveaux logements collectifs et individuels group\u00e9s / nb total de logements construits dans l\u2019ann\u00e9e, part du foncier d\u00e9grad\u00e9 recycl\u00e9, etc.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.6.2',
            id_nomenclature: '1.3.1.6.2',
            nom: 'pas de diminution du % de surfaces naturelles et agricoles par rapport \u00e0 la surface totale de la collectivit\u00e9',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.6.3',
            id_nomenclature: '1.3.1.6.3',
            nom: 'Diminuer la surface annuelle artificialis\u00e9e (moyenne sur plusieurs ann\u00e9es si le suivi n\u2019est pas annuel)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.1.6.4',
            id_nomenclature: '1.3.1.6.4',
            nom: 'Atteindre les objectifs de mod\u00e9ration de la consommation d\u2019espace et de lutte contre l\u2019\u00e9talement urbain fix\u00e9s dans le PLU ou le SCOT',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.3.2',
    id_nomenclature: '1.3.2',
    nom: 'Transcrire les enjeux climat-air-\u00e9nergie et de pr\u00e9servation des ressources naturelles dans les op\u00e9rations d\u0027am\u00e9nagement',
    description:
      '\u003cp\u003eL\u0027efficacit\u00e9 \u00e9nerg\u00e9tique, l\u2019adaptation et la lutte contre le changement climatique et l\u0027utilisation des \u00e9nergies renouvelables, la pr\u00e9servation de la qualit\u00e9 de l\u0027air, sont des crit\u00e8res importants dans les op\u00e9rations d\u2019am\u00e9nagement de la collectivit\u00e9.\u003c/p\u003e\n\u003cp\u003eDes exigences sp\u00e9cifiques sont int\u00e9gr\u00e9es dans les appels d\u0027offres d\u2019urbanisme/d\u0027architecture \u00e0 ce sujet, ainsi que lors de la vente de terrain appartenant \u00e0 la collectivit\u00e9 ou pour tout autre dispositif de contractualisation impliquant la collectivit\u00e9.\u003c/p\u003e\n\u003cp\u003eDes projets d\u0027am\u00e9nagement sont men\u00e9s \u00e0 l\u2019aune des enjeux/principes de l\u2019\u00e9conomie circulaire.\u003c/p\u003e\n',
    thematique_id: 'urbanisme',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.3.2.1',
        id_nomenclature: '1.3.2.1',
        nom: 'S\u2019organiser pour bien piloter les op\u00e9rations d\u2019am\u00e9nagement',
        description: '',
        thematique_id: 'urbanisme',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.2.1.1',
            id_nomenclature: '1.3.2.1.1',
            nom: 'Mettre en place un Syst\u00e8me de Management d\u2019Op\u00e9ration (SMO) pour la conduite et le suivi des projets',
            description:
              '\u003cp\u003eD\u00e9finition des responsabilit\u00e9s, pilotage, tableau de bord, suivi...), si possible certifi\u00e9 (HQE-Am\u00e9nagement, par exemple).\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.1.2',
            id_nomenclature: '1.3.2.1.2',
            nom: 'Mettre en place un dialogue partenarial et pluridisciplinaire en interne et en externe (CAUE, ALEC, agence d\u2019urbanisme, espace conseil FAIRE, \u2026) institutionnalis\u00e9 (convention ou autres dispositifs cadrant la relation)',
            description:
              '\u003cp\u003eCe dialogue fait le lien entre les th\u00e9matiques de l\u2019urbanisme, du climat, de l\u2019air et de l\u2019\u00e9nergie sur les projets op\u00e9rationnels et int\u00e9gre les concepts de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.1.3',
            id_nomenclature: '1.3.2.1.3',
            nom: 'Recourir \u00e0 un assistant \u00e0 ma\u00eetrise d\u2019ouvrage dot\u00e9 de comp\u00e9tences climat-air-\u00e9nergie si besoin de renforcer les comp\u00e9tences internes',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.2.2',
        id_nomenclature: '1.3.2.2',
        nom: 'Adopter une approche multith\u00e9matique dans le diagnostic et la conception des projets urbains',
        description: '',
        thematique_id: 'urbanisme',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.2.2.1',
            id_nomenclature: '1.3.2.2.1',
            nom: 'Demander une approche int\u00e9gr\u00e9e de type AEU2 pour une analyse crois\u00e9e des enjeux climat-air-\u00e9nergie et urbains pour tous les projets d\u0027urbanisme op\u00e9rationnel ma\u00eetris\u00e9s par la collectivit\u00e9',
            description:
              '\u003cp\u003eAEU2 : Approche environnementale de l\u0027urbanisme\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.2.2',
            id_nomenclature: '1.3.2.2.2',
            nom: 'R\u00e9aliser des \u00e9tudes de pr\u00e9d\u00e9finition des projets urbains et \u00e9tude de l\u2019approvisionnement \u00e9nerg\u00e9tique et des productions d\u2019\u00e9nergie (y compris potentiel de d\u00e9veloppement des \u00e9nergies renouvelable) pour les sites \u00e0 enjeux (friches qui se lib\u00e8rent en centre-bourg ou ville, extensions urbaines pr\u00e9vues dans le document d\u2019urbanisme, etc.)',
            description:
              '\u003cp\u003eObligatoire pour les op\u00e9rations soumises \u00e0 \u00e9tude d\u2019impact.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.2.3',
            id_nomenclature: '1.3.2.2.3',
            nom: 'Utiliser des outils de mod\u00e9lisation climat-air-\u00e9nergie (de type Analyse de Cycle Vie sur l\u0027\u00e9chelle quartier d\u00e8s la conception) pour aider \u00e0 la d\u00e9cision',
            description:
              '\u003cp\u003eMod\u00e9lisation des ombres port\u00e9es, mod\u00e9lisation de l\u2019impact du projet sur la qualit\u00e9 de l\u2019air, sur le ruissellement des eaux pluviales, sur le r\u00e9chauffement urbain, quantification des gaz \u00e0 effet de serre \u00e9vit\u00e9s par le projet (GES-Opam du CEREMA), etc.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.2.3',
        id_nomenclature: '1.3.2.3',
        nom: 'Elaborer un document "cadre" pour syst\u00e9matiser la qualit\u00e9 environnementale des op\u00e9rations ma\u00eetris\u00e9es par la collectivit\u00e9',
        description: '',
        thematique_id: 'urbanisme',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.2.3.1',
            id_nomenclature: '1.3.2.3.1',
            nom: 'D\u00e9finir des pr\u00e9conisations \u00e0 l\u2019\u00e9chelle du quartier ou de la ville inspir\u00e9es notamment des outils nationaux existants (cahiers th\u00e9matiques AEU2, label national Ecoquartier, HQE-Performance quartier\u2026)',
            description:
              '\u003cp\u003eCompacit\u00e9 des formes urbaines, orientation et implantation des b\u00e2timents les uns par rapport aux autres, raccordement aux r\u00e9seaux de chaleur aliment\u00e9s majoritairement par des ENRR, autosuffisance \u00e9nerg\u00e9tique, quartier sans voiture, v\u00e9g\u00e9talisation/d\u00e9min\u00e9ralisation des espaces (en limitant les allerg\u00e8nes potentiels), gestion de l\u2019eau et rafra\u00eechissement urbain, concertation citoyenne, etc.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.3.2',
            id_nomenclature: '1.3.2.3.2',
            nom: 'D\u00e9finir des crit\u00e8res \u00e0 l\u2019\u00e9chelle du b\u00e2timent : BEPos, label E+/C-, Maison passive, BBC, Effinergie, Ecodom, HQE avec objectifs \u00e9nergie ou air d\u00e9finis, label b\u00e2timent biosourc\u00e9, chauffage tr\u00e8s performant (flamme verte 7 \u00e9toiles pour le bois ou \u00e9quivalent) ou valorisation des rejets thermiques, confort d\u0027\u00e9t\u00e9, qualit\u00e9 de l\u0027air int\u00e9rieur...',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.3.3',
            id_nomenclature: '1.3.2.3.3',
            nom: 'Utiliser ce document comme base de discussions et de r\u00e9flexions entre les acteurs et l\u0027adapter/d\u00e9cliner dans diff\u00e9rents documents de conception op\u00e9rationnels des projets (plan masse, notice environnementale, cahier des charges, cahier de prescriptions...)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.2.4',
        id_nomenclature: '1.3.2.4',
        nom: 'Assurer la ma\u00eetrise d\u2019ouvrage publique ou semi-publique des op\u00e9rations d\u2019am\u00e9nagement cl\u00e9s pour mieux prendre en compte les enjeux climat-air-\u00e9nergie et la pr\u00e9servation des ressources naturelles',
        description: '',
        thematique_id: 'urbanisme',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.2.4.1',
            id_nomenclature: '1.3.2.4.1',
            nom: 'Mettre en place une politique fonci\u00e8re active (droit de pr\u00e9emption urbain, zone d\u2019am\u00e9nagement diff\u00e9r\u00e9 -ZAD-, participation \u00e0 un \u00e9tablissement foncier local \u2013EPFL-...)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.4.2',
            id_nomenclature: '1.3.2.4.2',
            nom: 'Int\u00e9grer des exigences climat-air-\u00e9nergie dans les op\u00e9rations d\u0027am\u00e9nagement cl\u00e9s (lotissements publics ou zones d\u2019am\u00e9nagement concert\u00e9es) et les inscrire dans les cahiers des charges de cession de terrain',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.2.5',
        id_nomenclature: '1.3.2.5',
        nom: 'Int\u00e9grer des exigences climat-air-\u00e9nergie dans tous les appels d\u2019offre d\u2019urbanisme et les cahiers des charges de cession des terrains',
        description: '',
        thematique_id: 'urbanisme',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.2.5.1',
            id_nomenclature: '1.3.2.5.1',
            nom: 'Int\u00e8grer dans ses crit\u00e8res de choix des offres l\u0027impact environnemental de la proposition : kWh \u00e9conomis\u00e9, \u00e9missions de CO2 ou \u00e9missions/exposition aux polluants atmosph\u00e9riques, etc.',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.5.2',
            id_nomenclature: '1.3.2.5.2',
            nom: 'Utiliser des sp\u00e9cifications techniques pour fixer des objectifs de performances environnementales, de mani\u00e8re prescriptive, \u00e0 l\u2019\u00e9chelle de la ville, du quartier (AEU2, HQE Performance Quartier...) et du b\u00e2timent (niveau passif ou \u00e0 \u00e9nergie positive -label E+/C- demand\u00e9 pour les b\u00e2timents neufs, label BBC r\u00e9novation pour les travaux de r\u00e9novation, obligation si pertinent d\u2019installation de panneaux solaires sur les nouvelles toitures de b\u00e2timent ou de raccordement \u00e0 un r\u00e9seau de chaleur, exiger si pertinent davantage de places de v\u00e9los dans les constructions neuves, r\u00e9alisation d\u2019abris \u00e0 v\u00e9lo ext\u00e9rieurs attenants au b\u00e2timent principal \u2026).',
            description:
              '\u003cp\u003eA l\u0027\u00e9chelle du quartier : AEU2, HQE Performance Quartier, etc.\u003c/p\u003e\n\u003cp\u003eA l\u0027\u00e9chelle du b\u00e2timent : niveau passif ou \u00e0 \u00e9nergie positive -label E+/C- demand\u00e9 pour les b\u00e2timents neufs, label BBC r\u00e9novation pour les travaux de r\u00e9novation, obligation si pertinent d\u2019installation de panneaux solaires sur les nouvelles toitures de b\u00e2timent ou de raccordement \u00e0 un r\u00e9seau de chaleur, exiger si pertinent davantage de places de v\u00e9los dans les constructions neuves, r\u00e9alisation d\u2019abris \u00e0 v\u00e9lo ext\u00e9rieurs attenants au b\u00e2timent principal, etc.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.5.3',
            id_nomenclature: '1.3.2.5.3',
            nom: 'Int\u00e8grer dans les crit\u00e8res de jugement des offres les r\u00e9f\u00e9rences environnementales et les pratiques internes de l\u0027entreprise candidate (exp\u00e9rience requise en HQE ou \u00e9quivalent, label de performance \u00e9nerg\u00e9tique, formation \u00e0 l\u2019AEU2, certification ISO 14001/9001 de l\u2019entreprise, d\u00e9marche d\u0027\u00e9co-responsabilit\u00e9 interne...)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.5.4',
            id_nomenclature: '1.3.2.5.4',
            nom: 'Donner un caract\u00e8re contraignant aux exigences (prescriptions et non simples recommandations, inscription dans les documents contractuels et opposables, contr\u00f4le, sanction pr\u00e9vue en cas de non-respect)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.2.6',
        id_nomenclature: '1.3.2.6',
        nom: 'Organiser la gestion des d\u00e9chets des chantiers d\u0027am\u00e9nagement en partenariat avec les am\u00e9nageurs',
        description: '',
        thematique_id: 'urbanisme',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.2.6.1',
            id_nomenclature: '1.3.2.6.1',
            nom: 'Fixer un objectif de recyclage \u00e0 l\u0027\u00e9chelle des projets',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.6.2',
            id_nomenclature: '1.3.2.6.2',
            nom: 'Mettre en place une plateforme locale de r\u00e9cup\u00e9ration/\u00e9changes de mat\u00e9riaux de construction / d\u00e9molition ou de terres excav\u00e9es (\u00e0 l\u0027\u00e9chelle territoriale ou du projet)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.2.7',
        id_nomenclature: '1.3.2.7',
        nom: 'Contr\u00f4ler l\u2019efficacit\u00e9 et le respect des exigences',
        description: '',
        thematique_id: 'urbanisme',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.2.7.1',
            id_nomenclature: '1.3.2.7.1',
            nom: 'Diffuser r\u00e9ellement les documents cadres et r\u00e9f\u00e9rentiels cr\u00e9\u00e9s dans les services, s\u0027assurer qu\u0027ils sont appropri\u00e9s et appliqu\u00e9s par les acteurs concern\u00e9s',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.7.2',
            id_nomenclature: '1.3.2.7.2',
            nom: 'Mettre en place une approche d\u0027am\u00e9lioration continue pour am\u00e9liorer les outils (r\u00e9f\u00e9rentiel, charte, etc.) selon le retour d\u0027exp\u00e9rience',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.7.3',
            id_nomenclature: '1.3.2.7.3',
            nom: 'Pr\u00e9voir le suivi r\u00e9el des performances climat-air-\u00e9nergie des b\u00e2timents occup\u00e9s pour certaines op\u00e9rations embl\u00e9matiques (instrumentation, prestation d\u00e9di\u00e9e et soutenue/exig\u00e9e par la collectivit\u00e9)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.7.4',
            id_nomenclature: '1.3.2.7.4',
            nom: 'Montrer que l\u0027int\u00e9gration de crit\u00e8res environnementaux dans les consultations a d\u00e9j\u00e0 abouti r\u00e9ellement \u00e0 faire basculer le choix en faveur du candidat le plus exemplaire sur ces aspects',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.2.7.5',
            id_nomenclature: '1.3.2.7.5',
            nom: 'Obtenir une reconnaissance nationale ou r\u00e9gionale d\u2019une ou plusieurs op\u00e9rations, certification d\u2019une d\u00e9marche (label \u00e9conomie circulaire, label \u00e9co-quartier\u2026) ou de r\u00e9sultats obtenus, retomb\u00e9es presse ou visites de site par des acteurs ext\u00e9rieurs',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__1.3.3',
    id_nomenclature: '1.3.3',
    nom: 'Accompagner et contr\u00f4ler les travaux de construction et de r\u00e9novation',
    description:
      '\u003cp\u003eLes proc\u00e9dures d\u2019autorisation d\u0027urbanisme et de contr\u00f4le des travaux visent \u00e0 favoriser l\u2019\u00e9mergence de constructions et de r\u00e9novations de meilleure qualit\u00e9 sur le territoire, en termes de performance climat-air-\u00e9nergie.\u003c/p\u003e\n\u003cp\u003eLes p\u00e9titionnaires sont sensibilis\u00e9s et accompagn\u00e9s en ce sens.\u003c/p\u003e\n',
    thematique_id: 'urbanisme',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__1.3.3.1',
        id_nomenclature: '1.3.3.1',
        nom: 'Organiser toute la cha\u00eene des acteurs en charge de l\u2019instruction \u00e0 l\u2019octroi des permis de construire pour une attention accrue sur la th\u00e9matique climat-air-\u00e9nergie',
        description: '',
        thematique_id: 'urbanisme',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.3.1.1',
            id_nomenclature: '1.3.3.1.1',
            nom: 'Disposer d\u0027une organisation claire avec responsabilit\u00e9s attribu\u00e9es (interne et/ou externe)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.1.2',
            id_nomenclature: '1.3.3.1.2',
            nom: 'Associer le service \u201c\u00e9nergie\u201d qui formule un avis sur l\u0027autorisation d\u0027urbanisme',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.1.3',
            id_nomenclature: '1.3.3.1.3',
            nom: 'Adopter des directives, instructions de service, cahiers des charges \u00e9nergie/environnement pour les instructeurs, formulaires appropri\u00e9s',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.1.4',
            id_nomenclature: '1.3.3.1.4',
            nom: 'Former/Sensibiliser les instructeurs et/ou tout autre personne en contact avec les p\u00e9titionnaires (secr\u00e9taire de mairie)',
            description:
              '\u003cp\u003eFormation/Sensibilisation \u00e0 la qualit\u00e9 environnementale des b\u00e2timents, aux \u00e9nergies renouvelables, \u00e0 l\u0027adaptation au changement climatique (confort d\u0027\u00e9t\u00e9, risques naturels...), \u00e0 la qualit\u00e9 de l\u0027air.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.1.5',
            id_nomenclature: '1.3.3.1.5',
            nom: 'Mettre en place d\u0027aires de mise en valeur de l\u2019architecture et du patrimoine (AVAP) pour \u00e9tablir un consensus en amont dans les secteurs o\u00f9 la protection du patrimoine architectural repr\u00e9sente un frein fort \u00e0 la r\u00e9novation \u00e9nerg\u00e9tique du b\u00e2ti',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.3.2',
        id_nomenclature: '1.3.3.2',
        nom: 'Diffuser de l\u2019information \u00e0 l\u2019occasion des demandes d\u2019autorisation',
        description: '',
        thematique_id: 'urbanisme',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.3.2.1',
            id_nomenclature: '1.3.3.2.1',
            nom: 'Joindre aux formulaires de demande de permis de construire des plaquette de pr\u00e9sentation des acteurs ressources du territoire sur le logement ( espace conseil FAIRE, CAUE, ADIL...) ou de recommandations (avec exemples locaux)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.2.2',
            id_nomenclature: '1.3.3.2.2',
            nom: 'Prendre des rendez-vous avec un conseiller FAIRE ou le CAUE pour chaque demande de permis de construire',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.3.3',
        id_nomenclature: '1.3.3.3',
        nom: 'V\u00e9rifier le respect des exigences autant que possible',
        description: '',
        thematique_id: 'urbanisme',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__1.3.3.3.1',
            id_nomenclature: '1.3.3.3.1',
            nom: 'Surveiller le respect de la r\u00e9glementation thermique (pour les \u00e9l\u00e9ments visibles sur les plans et via les attestations de conformit\u00e9) et prendre en compte les vuln\u00e9rabilit\u00e9s du territoire au changement climatique',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.3.2',
            id_nomenclature: '1.3.3.3.2',
            nom: 'Surveiller le respect des prescriptions en mati\u00e8re de mobilit\u00e9 dans les contrats de droits priv\u00e9s',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.3.3',
            id_nomenclature: '1.3.3.3.3',
            nom: 'Surveiller les pi\u00e8ces justificatives du respect des crit\u00e8res de performance environnementale dans le cas de la bonification des droits \u00e0 construire',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.3.4',
            id_nomenclature: '1.3.3.3.4',
            nom: 'Effectuer au moins deux contr\u00f4les par an sur le terrain par instructeur',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.3.5',
            id_nomenclature: '1.3.3.3.5',
            nom: 'Porter attention \u00e0 la r\u00e9novation embarqu\u00e9e (v\u00e9rification des justifications)',
            description: '',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__1.3.3.3.6',
            id_nomenclature: '1.3.3.3.6',
            nom: 'Renvoyer vers les structures comp\u00e9tentes pour effectuer le suivi des consommations \u00e9nerg\u00e9tiques avant et apr\u00e8s travaux',
            description:
              '\u003cp\u003eEspace conseil FAIRE, pr\u00eat de mat\u00e9riel de mesure aux ma\u00eetres d\u2019ouvrage, etc.\u003c/p\u003e\n',
            thematique_id: 'urbanisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__1.3.3.4',
        id_nomenclature: '1.3.3.4',
        nom: 'Suivre les attestations de conformit\u00e9',
        description:
          '\u003cp\u003eLes attestations de conformit\u00e9 (d\u00e9p\u00f4t du PC ou \u00e0 l\u0027ach\u00e8vement) servent \u00e0 effectuer un suivi statistique des performances des constructions (suivi d\u0027indicateurs, par ex : Cep ou BBio moyen sur tous les PC, nb de maisons avec Cep\u0026lt;RT2012-20%, statistique par quartier ou type de b\u00e2timent, etc.).\u003c/p\u003e\n',
        thematique_id: 'urbanisme',
        points: 20,
        actions: [],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.1.1',
    id_nomenclature: '2.1.1',
    nom: 'Mettre en place une comptabilit\u00e9 \u00e9nerg\u00e9tique et des \u00e9missions de GES des b\u00e2timents publics',
    description:
      '\u003cp\u003eLa collectivit\u00e9 dispose d\u2019un bilan \u00e9nerg\u00e9tique et technique de tous les b\u00e2timents et \u00e9quipements publics significatifs. Ce bilan inclut des \u00e9l\u00e9ments sur les consommations d\u2019\u00e9nergie, les gaz \u00e0 effet de serre, les \u00e9nergies renouvelables, la qualit\u00e9 de l\u2019air int\u00e9rieur.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 a mis en place un syst\u00e8me de contr\u00f4le r\u00e9gulier des consommations d\u0027\u00e9nergie de ses b\u00e2timents municipaux et \u00e9quipements (incluant un outil de comptabilit\u00e9 \u00e9nerg\u00e9tique par usage pour suivre les consommations dans le temps, avec notamment des compteurs communicants), permettant l\u2019optimisation de son exploitation.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.1.1.1',
        id_nomenclature: '2.1.1.1',
        nom: 'Mettre en place un socle de connaissance initiale sur son patrimoine',
        description:
          '\u003cp\u003eLe  - Action des Collectivit\u00e9s Territoriales pour l\u2019Efficacit\u00e9 Energ\u00e9tique - met a\u0300 disposition un outil de simulation e\u0301nerge\u0301tique qui permet de tester les solutions envisageables selon les typologies de ba\u0302timents pour e\u0301valuer les cou\u0302ts, la rentabilite\u0301 du projet, le gain d\u2019e\u0301conomies d\u2019e\u0301nergie et d\u2019e\u0301missions de CO2.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.1.1.1',
            id_nomenclature: '2.1.1.1.1',
            nom: '\u00e9tablissement d\u0027une liste de tous les b\u00e2timents et \u00e9quipements (avec surface, ann\u00e9e de construction, installations techniques, type d\u2019occupation, \u2026) en int\u00e9grant les \u00e9l\u00e9ments renseign\u00e9s sur la plateforme OPERAT dans le cadre des exigences du d\u00e9cret tertiaire (pour les b\u00e2timents \u003e 1000m2)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.1.2',
            id_nomenclature: '2.1.1.1.2',
            nom: 'inventaire des contrats d\u2019exploitation ou de maintenance de chaque b\u00e2timent, et des principaux travaux effectu\u00e9s depuis leur livraison',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.1.3',
            id_nomenclature: '2.1.1.1.3',
            nom: 'identification des gros consommateurs (viser les b\u00e2timents g\u00e9n\u00e9rant 50% des consommations) et r\u00e9alisation d\u2019un audit \u00e9nerg\u00e9tique.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.1.4',
            id_nomenclature: '2.1.1.1.4',
            nom: 'relev\u00e9 des surfaces chauff\u00e9es et/ou climatis\u00e9es',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.1.5',
            id_nomenclature: '2.1.1.1.5',
            nom: 'identifier tous les contrats de fourniture d\u0027\u00e9nergie',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.1.6',
            id_nomenclature: '2.1.1.1.6',
            nom: 'saisir toutes les factures d\u0027\u00e9nergie des 3 derni\u00e8res ann\u00e9es ou demander aux gestionnaires du r\u00e9seau de distribution un d\u00e9tail pluriannuel des consommations des b\u00e2timents de la collectivit\u00e9 si pas de suivi existant',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.1.7',
            id_nomenclature: '2.1.1.1.7',
            nom: 'Si la gestion des b\u00e2timents est d\u00e9l\u00e9gu\u00e9e, la collectivit\u00e9 partage et co-construit les objectifs et le diagnostic avec ses partenaires.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.1.2',
        id_nomenclature: '2.1.1.2',
        nom: 'S\u2019organiser pour effectuer le suivi r\u00e9gulier des consommations \u00e9nerg\u00e9tiques du patrimoine b\u00e2ti',
        description: '',
        thematique_id: 'batiments',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.1.2.1',
            id_nomenclature: '2.1.1.2.1',
            nom: 'la personne/structure charg\u00e9e d\u0027effectuer le relev\u00e9 de la consommation \u00e9nerg\u00e9tique (tous les agents \u00e9nerg\u00e9tiques) est d\u00e9termin\u00e9e',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.2.2',
            id_nomenclature: '2.1.1.2.2',
            nom: 'la personne/structure \u00e0 qui il faut transmettre la consommation d\u0027\u00e9nergie pour la d\u00e9termination de l\u0027indice \u00e9nerg\u00e9tique est d\u00e9termin\u00e9e',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.2.3',
            id_nomenclature: '2.1.1.2.3',
            nom: 'une r\u00e9flexion sur le type et le positionnement des compteurs et sous-compteurs a \u00e9t\u00e9 men\u00e9e',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.2.4',
            id_nomenclature: '2.1.1.2.4',
            nom: 't\u00e2ches indiqu\u00e9es dans la fiche de poste gestionnaire des b\u00e2timents et \u00e9quipements',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.1.3',
        id_nomenclature: '2.1.1.3',
        nom: 'Faire un bilan complet, allant au-del\u00e0 de la r\u00e9glementation',
        description: '',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.1.3.1',
            id_nomenclature: '2.1.1.3.1',
            nom: 'augmentation chaque ann\u00e9e de la part de b\u00e2timents diagnostiqu\u00e9s, jusqu\u0027\u00e0 connaissance quasi-totale du patrimoine (viser plus de 80% des consommations). Les b\u00e2timents en propri\u00e9t\u00e9, en location, et en DSP doivent progressivement \u00eatre connus.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.3.2',
            id_nomenclature: '2.1.1.3.2',
            nom: 'pour les EPCI, notamment en zone rurale ou faiblement dot\u00e9s en patrimoine, le bilan est \u00e9largi aux b\u00e2timents communaux.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.3.3',
            id_nomenclature: '2.1.1.3.3',
            nom: 'les indices \u00e9nerg\u00e9tiques sont corrig\u00e9s du climat (chaleur ou besoin en climatisation), et d\u00e9compos\u00e9s en chaleur/froid, \u00e9lectricit\u00e9, CO2',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.3.4',
            id_nomenclature: '2.1.1.3.4',
            nom: 'analyse d\u00e9taill\u00e9e du type d\u0027utilisation d\u0027\u00e9lectricit\u00e9 (chauffage central, eau chaude sanitaire, air conditionn\u00e9, cuisson, \u00e9clairage, \u00e9lectricit\u00e9 sp\u00e9cifique)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.3.5',
            id_nomenclature: '2.1.1.3.5',
            nom: 'un relev\u00e9 des consommations d\u0027eau est effectu\u00e9 (par ex. par personne ou par m3/an, cf. mesure 2.3.2) en distinguant les consommations d\u0027eau chaude (connaissances des volumes journaliers ou mensuels) et en identifiant les principaux b\u00e2timents appropri\u00e9s \u00e0 une production d\u0027eau chaude solaire collective (logement collectif social, maison de retraite, secteur hospitalier) ;',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.3.6',
            id_nomenclature: '2.1.1.3.6',
            nom: '\u00e9tude des mat\u00e9riaux et des techniques de construction et de finition',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.3.7',
            id_nomenclature: '2.1.1.3.7',
            nom: 'un bilan initial de la qualit\u00e9 de l\u0027air int\u00e9rieur des b\u00e2timents est fait (mesure de confinement a minima, et dans l\u0027id\u00e9al de plusieurs polluants dans les ERP par anticipation des futures exigences r\u00e9glementaires), identification des \u00e9l\u00e9ments ou comportements \u00e9missifs ou d\u00e9gradant la qualit\u00e9 de l\u0027air',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.3.8',
            id_nomenclature: '2.1.1.3.8',
            nom: 'compl\u00e9ter l\u0027analyse par des visites et des entretiens avec les utilisateurs',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.1.4',
        id_nomenclature: '2.1.1.4',
        nom: 'Effectuer un suivi des consommations r\u00e9gulier et multi-flux',
        description:
          '\u003cp\u003e(fait dans le domaine 6 via CEP)- assurer un suivi pr\u00e9cis des consommations des b\u00e2timents en demandant aux gestionnaires du r\u00e9seau de distribution une vision agr\u00e9g\u00e9e des consommations de tout ou partie des b\u00e2timents de la collectivit\u00e9\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.1.4.1',
            id_nomenclature: '2.1.1.4.1',
            nom: 'tous les gros consommateurs sont saisis',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.4.2',
            id_nomenclature: '2.1.1.4.2',
            nom: 'pour les b\u00e2timents les plus consommateurs/les grandes installations, le relev\u00e9 est effectu\u00e9 chaque mois ; pour les installations plus petites (surface chauff\u00e9e \u003c 500 m2) des relev\u00e9s plus espac\u00e9s sont tol\u00e9r\u00e9s.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.4.3',
            id_nomenclature: '2.1.1.4.3',
            nom: 'mesure r\u00e9guli\u00e8re de la qualit\u00e9 de l\u0027air int\u00e9rieur (a minima mesure du confinement via indicateur du CO2 une fois par an) dans les b\u00e2timents abritant des populations sensibles. Aller au-del\u00e0 du renouvellement de la surveillance r\u00e8glementaire tous les 7 ans dans les ERP.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.1.5',
        id_nomenclature: '2.1.1.5',
        nom: 'Elargir le p\u00e9rim\u00e8tre des b\u00e2timents pris en compte',
        description: '',
        thematique_id: 'batiments',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.1.5.1',
            id_nomenclature: '2.1.1.5.1',
            nom: 'le patrimoine satellite (en d\u00e9l\u00e9gation) est pris en compte (stades, patinoires, parkings souterrains, palais des expositions, CCAS/CIAS...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.1.6',
        id_nomenclature: '2.1.1.6',
        nom: 'Optimiser le suivi, l\u0027entretien et l\u0027exploitation des installations techniques',
        description: '',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.1.6.1',
            id_nomenclature: '2.1.1.6.1',
            nom: 'au cours des 4 derni\u00e8res ann\u00e9es, l\u0027exploitation a \u00e9t\u00e9 optimis\u00e9e par un sp\u00e9cialiste',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.6.2',
            id_nomenclature: '2.1.1.6.2',
            nom: 'int\u00e9grer des clauses d\u2019int\u00e9ressement aux contrats d\u2019exploitation/maintenance des installations techniques d\u2019\u00e9nergie',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.6.3',
            id_nomenclature: '2.1.1.6.3',
            nom: 'une mission de suivi d\u2019exploitation est confi\u00e9e \u00e0 un bureau d\u2019\u00e9tude pour les collectivit\u00e9s non dot\u00e9es des comp\u00e9tences suffisantes en interne',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.6.4',
            id_nomenclature: '2.1.1.6.4',
            nom: 'lorsque le patrimoine le justifie (b\u00e2timents complexes, consommations importantes) : un outil performant de suivi a \u00e9t\u00e9 mis en place, reli\u00e9 par exemple \u00e0 des compteurs communicants ou une GTC/GTB (gestion technique centralis\u00e9e ou gestion technique du b\u00e2timent). Progressivement transformer ses b\u00e2timents les plus consommateurs en b\u00e2timents "smart grid ready" (b\u00e2timents acteurs du syst\u00e8me \u00e9nerg\u00e9tique, ma\u00eetrisant dynamiquement sa consommation, sa production et son stockage d\u0027\u00e9nergie) : lorsque les b\u00e2timents sont \u00e9quip\u00e9s de comptage communicant, proc\u00e9der \u00e0 des analyses \u00e0 l\u2019\u00e9chelle journali\u00e8re, voire au pas horaire ou moins (courbe de charge), visualisation des talons de consommation lors des absences (week-ends, vacances...) ou en mode r\u00e9duit (p\u00e9riode de la journ\u00e9e, nuit), suivi des puissances appel\u00e9es et de l\u2019ad\u00e9quation avec les abonnements souscrits, identification des d\u00e9rives, corr\u00e9lation avec les occupations r\u00e9elles...',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.1.7',
        id_nomenclature: '2.1.1.7',
        nom: 'Communiquer',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.1.7.1',
            id_nomenclature: '2.1.1.7.1',
            nom: 'en plus des obligations r\u00e8glementaires, l\u2019affichage du DPE est r\u00e9alis\u00e9 sur des b\u00e2timents non concern\u00e9s par l\u0027obligation d\u0027affichage (plateforme OPERAT pour les b\u00e2timents tertiaires).',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.7.2',
            id_nomenclature: '2.1.1.7.2',
            nom: 'les concierges, gardiens d\u0027immeubles et/ou utilisateurs des b\u00e2timents ont re\u00e7u l\u0027\u00e9valuation de la comptabilit\u00e9 \u00e9nerg\u00e9tique (feed-back \u00e0 leurs efforts)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.7.3',
            id_nomenclature: '2.1.1.7.3',
            nom: 'ajouter le reporting des consommations du patrimoine dans le rapport annuel D\u00e9veloppement Durable, s\u2019il existe.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.7.4',
            id_nomenclature: '2.1.1.7.4',
            nom: 'faire un bilan annuel par b\u00e2timent de la d\u00e9pense d\u0027\u00e9nergie de la commune et en pr\u00e9senter une synth\u00e8se aux \u00e9lus et aux services',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.1.8',
        id_nomenclature: '2.1.1.8',
        nom: 'Identifier le potentiel d\u0027\u00e9conomie (\u00e9nergie et co\u00fbt) et de d\u00e9veloppement des ENR',
        description:
          '\u003cp\u003eNota : v\u00e9rifier les suites donn\u00e9es \u00e0 cette analyse ; \u00e0 l\u0027occasion d\u0027un renouvellement ou passage de CAP \u00e0 Cit\u0027ergie, pas de revalorisation en l\u0027absence totale d\u0027effets sans justification valable\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.1.8.1',
            id_nomenclature: '2.1.1.8.1',
            nom: 'la modification, si n\u00e9cessaire, des contrats de fournitures d\u2019\u00e9nergie (v\u00e9rification de l\u2019ad\u00e9quation de la puissance des contrats avec les besoins r\u00e9els (le calcul du prix moyen du kWh pour diff\u00e9rents points de consommations permet de rep\u00e9rer des tarifs visiblement inadapt\u00e9s), mutualisation de certains contrats, changement de fournisseur, \u2026)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.8.2',
            id_nomenclature: '2.1.1.8.2',
            nom: 'une estimation du potentiel d\u0027\u00e9conomie et de travaux et de d\u00e9veloppement des \u00e9nergies renouvelables',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.1.8.3',
            id_nomenclature: '2.1.1.8.3',
            nom: 'une justification des mesures correctives imm\u00e9diates pour limiter les consommations et \u00e9missions (en hiver et en \u00e9t\u00e9)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.1.2',
    id_nomenclature: '2.1.2',
    nom: 'Elaborer une strat\u00e9gie patrimoniale incluant un programme de r\u00e9novation',
    description:
      '\u003cp\u003eLa collectivit\u00e9 formule une strat\u00e9gie patrimoniale permettant de planifier et de phaser son \u00e9volution \u00e0 5 ou 10 ans (extension, r\u00e9habilitation, d\u00e9molition, r\u00e9affectation, vente...), en coh\u00e9rence avec des objectifs de r\u00e9duction des \u00e9missions GES et de consommation \u00e9nerg\u00e9tique de ses b\u00e2timents. Cette strat\u00e9gie est d\u00e9clin\u00e9e plus pr\u00e9cis\u00e9ment en un programme de r\u00e9novation prenant en compte :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003edes crit\u00e8res de performances climat-air-\u00e9nergie ambitieux\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003el\u2019optimisation de l\u2019usage du patrimoine (mutualisation/regroupement)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles modalit\u00e9s de suivi permettant le maintien des performances dans le temps\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles co\u00fbts et les \u00e9conomies pr\u00e9vus\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela date de r\u00e9alisation\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles responsables de la r\u00e9alisation\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles modes de contractualisations comme le contrat de performance \u00e9nerg\u00e9tique (march\u00e9 global de performance \u00e9nerg\u00e9tique ou march\u00e9 public de partenariat \u00e9nerg\u00e9tique)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles gains attendus en mati\u00e8re d\u0027att\u00e9nuation du changement climatique, d\u0027adaptation au changement climatique, d\u0027am\u00e9lioration de la qualit\u00e9 de l\u0027air int\u00e9rieur et ext\u00e9rieur\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.1.2.1',
        id_nomenclature: '2.1.2.1',
        nom: 'Acter la volont\u00e9 politique de mettre en place une strat\u00e9gie patrimoniale ou un plan de r\u00e9novation',
        description: '',
        thematique_id: 'batiments',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.2.1.1',
            id_nomenclature: '2.1.2.1.1',
            nom: 'd\u00e9lib\u00e9ration politique',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.1.2',
            id_nomenclature: '2.1.2.1.2',
            nom: 'd\u00e9cision budg\u00e9taire (enveloppe de travaux ou enveloppe d\u2019ing\u00e9nierie pour prestation externe d\u2019\u00e9laboration de la strat\u00e9gie)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.1.3',
            id_nomenclature: '2.1.2.1.3',
            nom: 'affectation de ressources humaines en interne',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.2.2',
        id_nomenclature: '2.1.2.2',
        nom: 'Mettre en \u0153uvre une strat\u00e9gie de rationalisation de son patrimoine',
        description: '',
        thematique_id: 'batiments',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.2.2.1',
            id_nomenclature: '2.1.2.2.1',
            nom: 'R\u00e9alisation de l\u2019\u00e9tat des lieux technique et usage (occupation), des besoins et de leurs dynamiques, en int\u00e9grant les \u00e9l\u00e9ments renseign\u00e9s sur la plateforme OPERAT dans le cadre des exigences du d\u00e9cret tertiaire',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.2.2',
            id_nomenclature: '2.1.2.2.2',
            nom: 'Adoption et mise en \u0153uvre de la strat\u00e9gie de rationalisation avec des premi\u00e8res r\u00e9alisations',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.2.3',
            id_nomenclature: '2.1.2.2.3',
            nom: 'La collectivit\u00e9 parvient \u00e0 ma\u00eetriser les surfaces de son patrimoine, id\u00e9alement les r\u00e9duire',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.2.4',
            id_nomenclature: '2.1.2.2.4',
            nom: 'Le produit des cessions est r\u00e9affect\u00e9 pour tout ou partie dans le programme de r\u00e9novation',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.2.3',
        id_nomenclature: '2.1.2.3',
        nom: '\u00catre ambitieux et op\u00e9rationnel dans la strat\u00e9gie de r\u00e9novation',
        description: '',
        thematique_id: 'batiments',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.2.3.1',
            id_nomenclature: '2.1.2.3.1',
            nom: 'sur la base d\u2019un \u00e9tat des lieux initial (mesure 2.1.1), la  collectivit\u00e9 d\u00e9finit les objectifs de long terme (2050) et court moyen terme (2030) et trace une trajectoire cible avec les rythmes et performances \u00e0 atteindre pour la massification de la r\u00e9novation \u00e9nerg\u00e9tique du patrimoine communal (objectifs quantifi\u00e9s en nombre ou % de b\u00e2timents \u00e0 r\u00e9nover, avec un \u00e9ch\u00e9ancier). Ce rythme et les performances vis\u00e9es sont a minima conformes avec les obligations de r\u00e9novation du d\u00e9cret n\u00b02019-771 du 23 juillet 2019 relatif aux obligations d\u2019actions de r\u00e9duction de la consommation d\u2019\u00e9nergie finale dans des b\u00e2timents \u00e0 usage tertiaire.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.3.2',
            id_nomenclature: '2.1.2.3.2',
            nom: 'le programme d\u2019actions contient : des mesures d\u2019urgence/court terme (les b\u00e2timents principaux sont trait\u00e9s en priorit\u00e9) ; des mesures \u00e0 long terme pour les \u00e9quipements ayant un potentiel d\u0027\u00e9conomie (type de mesures, co\u00fbts pr\u00e9vus, moment de la mise en \u0153uvre), une estimation des potentiels d\u0027\u00e9conomie d\u2019\u00e9nergie et de gaz \u00e0 effet de serre, une estimation de la production d\u2019\u00e9nergies renouvelables g\u00e9n\u00e9r\u00e9e',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.3.3',
            id_nomenclature: '2.1.2.3.3',
            nom: 'le programme est associ\u00e9 \u00e0 une programmation pluriannuelle des investissements (PPI)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.3.4',
            id_nomenclature: '2.1.2.3.4',
            nom: 'les r\u00e9novations visent a minima le niveau BBC-r\u00e9novation en M\u00e9tropole (\u00e9ventuellement en plusieurs \u00e9tapes \u00ab BBC-compatibles \u00bb) et une consommation \u00e9nerg\u00e9tique inf\u00e9rieure \u00e0 300 kWhEP/m\u00b2.an dans les DOM (correspondant \u00e0 la classe A du DPE-G pour les b\u00e2timents tertiaires existants sauf sant\u00e9 et h\u00f4tels)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.2.4',
        id_nomenclature: '2.1.2.4',
        nom: 'Elaborer la strat\u00e9gie dans une approche transversale climat-air-\u00e9nergie',
        description: '',
        thematique_id: 'batiments',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.2.4.1',
            id_nomenclature: '2.1.2.4.1',
            nom: 'elle pr\u00e9voit des travaux permettant une meilleure adaptation du b\u00e2ti au changement climatique (confort d\u0027\u00e9t\u00e9, risques naturels...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.4.2',
            id_nomenclature: '2.1.2.4.2',
            nom: 'elle limite les antagonismes entre l\u0027am\u00e9lioration de la performance \u00e9nerg\u00e9tique et la qualit\u00e9 de l\u0027air int\u00e9rieur et ext\u00e9rieur',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.4.3',
            id_nomenclature: '2.1.2.4.3',
            nom: 'elle favorise le recours aux fili\u00e8res locales d\u2019\u00e9cor\u00e9novation, contribue \u00e0 la mont\u00e9e en comp\u00e9tences des professionnels locaux',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.2.5',
        id_nomenclature: '2.1.2.5',
        nom: '\u00c9tudier des moyens de financement innovants pour la mise en \u0153uvre du plan pluriannuel de travaux :',
        description:
          '\u003cp\u003eCes \u00e9l\u00e9ments sont \u00e9galement \u00e9valu\u00e9s, dans une approche plus globale sur le financement de la politique climat-air-\u00e9nergie, dans la mesure 5.2.1\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.2.5.1',
            id_nomenclature: '2.1.2.5.1',
            nom: 'utilisation des Certificats d\u2019Economie d\u2019\u00c9nergie (CEE)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.5.2',
            id_nomenclature: '2.1.2.5.2',
            nom: 'mise en \u0153uvre d\u2019un contrat de performance \u00e9nerg\u00e9tique (CPE), par exemple via un march\u00e9 public de partenariat \u00e9nerg\u00e9tique',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.5.3',
            id_nomenclature: '2.1.2.5.3',
            nom: 'mise en \u0153uvre d\u0027un dispositif de type INTRACTING, forme de convention de performance interne \u00e0 la collectivit\u00e9 (CPE interne)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.5.4',
            id_nomenclature: '2.1.2.5.4',
            nom: 'fonds local d\u2019aide aux travaux via les ressources issues du d\u00e9veloppement des \u00e9nergies renouvelables sur le territoire ou fonds d\u2019amor\u00e7age g\u00e9r\u00e9s par l\u2019EPCI (principe des \u00e9conomies d\u2019\u00e9nergies r\u00e9alis\u00e9es sur les premi\u00e8res op\u00e9rations qui permettent de refinancer le fonds d\u2019amor\u00e7age pour accompagner de nouveaux projets de r\u00e9novation)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.2.6',
        id_nomenclature: '2.1.2.6',
        nom: 'Suivre et adapter le plan pluriannuel de travaux',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.2.6.1',
            id_nomenclature: '2.1.2.6.1',
            nom: 'renforcer le suivi \u00e9nerg\u00e9tique des b\u00e2timents concern\u00e9s par le plan (si la comp\u00e9tence gestion et suivi est d\u00e9l\u00e9gu\u00e9e, la collectivit\u00e9 suit activement les activit\u00e9s du gestionnaire et dispose d\u2019une vision de la situation existante). Le suivi est a minima annuel pour les b\u00e2timents cibl\u00e9s par le d\u00e9cret tertiaire.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.6.2',
            id_nomenclature: '2.1.2.6.2',
            nom: 'suivre un ratio financier sur l\u0027effort de r\u00e9novation en euros travaux/m\u00b2 de surface totale (b\u00e2timents r\u00e9gul\u00e9s thermiquement)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.6.3',
            id_nomenclature: '2.1.2.6.3',
            nom: 'v\u00e9rifier l\u2019atteinte des objectifs du plan et adapter/renforcer les actions si n\u00e9cessaire',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.2.6.4',
            id_nomenclature: '2.1.2.6.4',
            nom: 'mettre en \u00e9vidence et communiquer sur les \u00e9conomies d\u0027\u00e9nergie et r\u00e9duction de GES engendr\u00e9es par les actions effectu\u00e9es',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.1.3',
    id_nomenclature: '2.1.3',
    nom: 'Etre exemplaire sur les b\u00e2timents publics neufs et r\u00e9nov\u00e9s',
    description:
      '\u003cp\u003eLa collectivit\u00e9 d\u00e9finit des niveaux de performance pour la construction et la r\u00e9novation de b\u00e2timents publics concernant :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003el\u0027utilisation efficace de l\u0027\u00e9lectricit\u00e9 ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ele niveau minimum en mati\u00e8re de performance thermique et d\u0027\u00e9nergies renouvelables ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela sant\u00e9 et la qualit\u00e9 environnementale des b\u00e2timents (notamment la qualit\u00e9 de l\u0027air int\u00e9rieur) ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela durabilit\u00e9 dans la construction et les \u00e9tudes, l\u0027exploitation et la maintenance ;\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e; - l\u0027adaptation au changement climatique, et notamment le confort d\u0027\u00e9t\u00e9\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003ela construction \u00e9cologique dans les passations de march\u00e9s.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eLes impacts, notamment \u00e9conomiques, du changement climatique doivent \u00eatre pris en compte dans l\u0027\u00e9tablissement de ces niveaux de performance de construction.\u003c/p\u003e\n\u003cp\u003eCes niveaux de performance sont appliqu\u00e9s concr\u00e8tement sur des projets de r\u00e9novation ou de construction exemplaires, \u00e0 haut niveau de performances climat-air-\u00e9nergie.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.1.3.1',
        id_nomenclature: '2.1.3.1',
        nom: 'D\u00e9lib\u00e9rer et inscrire les niveaux de performance dans un document cadre',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.3.1.1',
            id_nomenclature: '2.1.3.1.1',
            nom: 'd\u00e9cision de r\u00e9alisation (d\u00e9lib\u00e9ration mentionnant la volont\u00e9 d\u0027int\u00e9grer des prescriptions \u00e9nerg\u00e9tiques dans la construction et la r\u00e9novation des b\u00e2timents publics)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.1.2',
            id_nomenclature: '2.1.3.1.2',
            nom: '\u00e9laboration par la collectivit\u00e9 d\u0027un document "cadre" pour la qualit\u00e9 environnementale de ses b\u00e2timents : r\u00e9f\u00e9rentiel, charte, cahier des charges mod\u00e8les int\u00e9grant des obligations concernant les aspects climat-air-\u00e9nergie des projets de construction et de r\u00e9novation, analyse du cycle de vie via la m\u00e9thodologie E+C-. L\u2019intercommunalit\u00e9 invite les communes \u00e0 l\u2019\u00e9laboration de ce document \u00ab cadre \u00bb. Pour les projets de r\u00e9novation de b\u00e2timents concern\u00e9s par le d\u00e9cret tertiaire, le document \u00ab cadre \u00bb est coh\u00e9rent avec les objectifs fix\u00e9s par le d\u00e9cret.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.3.2',
        id_nomenclature: '2.1.3.2',
        nom: 'D\u00e9finir des r\u00e8gles d\u2019usages des b\u00e2timents publics',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.3.2.1',
            id_nomenclature: '2.1.3.2.1',
            nom: 'r\u00e8gles/r\u00e9f\u00e9rentiels d\u0027usage des b\u00e2timents, \u00e0 destination des usagers et du personnel \u0153uvrant dans les locaux, visant \u00e0 am\u00e9liorer ou atteindre les performances climat-air-\u00e9nergie attendues et les maintenir sur le long terme',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.3.3',
        id_nomenclature: '2.1.3.3',
        nom: 'D\u00e9finir des niveaux de performances ambitieux',
        description:
          '\u003cp\u003eDOM : label ECODOM, ECODOM +, PERENE (R\u00e9union), QEA (Guyane), exigences du cr\u00e9dit d\u2019imp\u00f4t pour la transition \u00e9nerg\u00e9tique\u2026\u003c/p\u003e\n\u003cp\u003eM\u00e9tropole : label E+C-, Passivhaus ou Minergie-P\u00ae, Effinergie r\u00e9novation, flamme verte 7 \u00e9toiles ou \u00e9quivalent pour le chauffage bois, exigences du cr\u00e9dit d\u2019imp\u00f4t pour la transition \u00e9nerg\u00e9tique\u2026\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.3.3.1',
            id_nomenclature: '2.1.3.3.1',
            nom: 'les constructions neuves sont passives ou \u00e0 \u00e9nergie positive et \u00e0 haute performance environnementale (tel que d\u00e9fini dans la r\u00e8glementation sur l\u2019exemplarit\u00e9 pour les constructions publiques)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.2',
            id_nomenclature: '2.1.3.3.2',
            nom: 'les r\u00e9novations visent un niveau de consommation \u00e0 atteindre : BBC r\u00e9novation a minima en m\u00e9tropole et inf\u00e9rieur \u00e0 300 kWhEP/m\u00b2.an dans les DOM (Classe A DPE pour les b\u00e2timents tertiaires sauf sant\u00e9 et h\u00f4tels). Les niveaux de performances vis\u00e9s sont plus ambitieux que les objectifs fix\u00e9s par le d\u00e9cret tertiaire.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.3',
            id_nomenclature: '2.1.3.3.3',
            nom: 'les niveaux de performances et les pratiques recommand\u00e9es font r\u00e9f\u00e9rence \u00e0 des labels ou r\u00e9f\u00e9rentiels de qualit\u00e9 reconnus au niveau national ou r\u00e9gional, par exemple :',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.4',
            id_nomenclature: '2.1.3.3.4',
            nom: 'Le confort d\u2019\u00e9t\u00e9 est pris en compte mais le recours \u00e0 la climatisation est limit\u00e9 en \u00e9t\u00e9, notamment par l\u2019architecture bioclimatique et l\u2019optimisation de la ventilation naturelle (brasseur d\u2019air). Si le recours \u00e0 la climatisation est n\u00e9anmoins n\u00e9cessaire, les splits sont interdits, les appareils seront de classe A, avec un EER (coefficient d\u2019efficacit\u00e9 frigorifique) de 4 minimum.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.5',
            id_nomenclature: '2.1.3.3.5',
            nom: 'Les risques amplifi\u00e9s par le changement climatique (risques inondations ou retrait-gonflement des argiles par exemple) sont pris en compte de mani\u00e8re forte dans la conception des b\u00e2timents pour limiter leur vuln\u00e9rabilit\u00e9',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.6',
            id_nomenclature: '2.1.3.3.6',
            nom: 'Les mat\u00e9riaux utilis\u00e9s ont une faible \u00e9nergie grise, sont locaux, recycl\u00e9s ou recyclables facilement',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.7',
            id_nomenclature: '2.1.3.3.7',
            nom: 'Les chantiers sont respectueux de l\u2019environnement (limitation des nuisances environnementales engendr\u00e9es par les diff\u00e9rentes activit\u00e9s du chantier, principalement en mati\u00e8re de gestion des d\u00e9chets, limitation des pollutions \u2013 eau, air-, respect de la biodiversit\u00e9 et des milieux, et limitation du bruit)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.8',
            id_nomenclature: '2.1.3.3.8',
            nom: 'Des mesures en faveur de la qualit\u00e9 de l\u2019air int\u00e9rieur sont prises',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.9',
            id_nomenclature: '2.1.3.3.9',
            nom: 'Des mesures sur les \u00e9conomies d\u2019eau et la gestion des eaux pluviales ont \u00e9t\u00e9 prises',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.10',
            id_nomenclature: '2.1.3.3.10',
            nom: 'Des mesures sur l\u2019\u00e9clairage sont prises',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.11',
            id_nomenclature: '2.1.3.3.11',
            nom: 'La v\u00e9g\u00e9talisation des abords, voire des murs ou des toitures, est privil\u00e9gi\u00e9e (dans une approche multicrit\u00e8re dans le choix des essences : risques d\u2019allergies, biodiversit\u00e9, production alimentaire, entretien\u2026)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.3.12',
            id_nomenclature: '2.1.3.3.12',
            nom: 'Si existant et si n\u00e9cessaire en fonction des besoins du b\u00e2timent, le raccordement \u00e0 un r\u00e9seau de chaleur/froid utilisant des \u00e9nergies renouvelables a \u00e9t\u00e9 pris en compte',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.3.4',
        id_nomenclature: '2.1.3.4',
        nom: 'Construire ou r\u00e9nover un ou des b\u00e2timents exemplaires',
        description: '',
        thematique_id: 'batiments',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.3.4.1',
            id_nomenclature: '2.1.3.4.1',
            nom: 'Le(s) b\u00e2timent(s) concern\u00e9(s) respecte(nt) les niveaux de performance fix\u00e9es dans le document cadre, voire au-del\u00e0',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.4.2',
            id_nomenclature: '2.1.3.4.2',
            nom: 'L\u2019op\u00e9ration a \u00e9t\u00e9 l\u2019occasion de former des professionnels et de sensibiliser les habitants',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.3.5',
        id_nomenclature: '2.1.3.5',
        nom: 'Int\u00e9grer ces niveaux de performance dans les appels d\u2019offres',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.3.5.1',
            id_nomenclature: '2.1.3.5.1',
            nom: 'La collectivit\u00e9 int\u00e8gre dans ses crit\u00e8res de choix des offres, l\u0027analyse du cycle de vie comme outil d\u0027aide \u00e0 la d\u00e9cision pour les constructions ou les r\u00e9novations',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.5.2',
            id_nomenclature: '2.1.3.5.2',
            nom: 'La collectivit\u00e9 utilise les sp\u00e9cifications techniques pour fixer des objectifs de performances environnementales, de mani\u00e8re prescriptive (HQE, label de performance \u00e9nerg\u00e9tique, label \u00ab b\u00e2timent biosourc\u00e9 \u00bb, etc)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.5.3',
            id_nomenclature: '2.1.3.5.3',
            nom: 'La collectivit\u00e9 int\u00e8gre dans ses crit\u00e8res de jugement des offres les r\u00e9f\u00e9rences environnementales et les pratiques internes de l\u0027entreprise candidate (exp\u00e9rience requise en HQE, label de performance \u00e9nerg\u00e9tique, normes ISO 14001, d\u00e9marche d\u0027\u00e9co-responsabilit\u00e9...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.5.4',
            id_nomenclature: '2.1.3.5.4',
            nom: 'Le niveau de performance doit \u00eatre sup\u00e9rieur au niveau r\u00e9glementaire en vigueur',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.5.5',
            id_nomenclature: '2.1.3.5.5',
            nom: 'l\u0027int\u00e9gration de crit\u00e8res environnementaux dans les consultations a d\u00e9j\u00e0 abouti r\u00e9ellement \u00e0 faire basculer le choix en faveur du candidat le plus exemplaire sur ces aspects',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.1.3.6',
        id_nomenclature: '2.1.3.6',
        nom: 'G\u00e9n\u00e9raliser les op\u00e9rations exemplaires et diffuser les bonnes pratiques',
        description:
          '\u003cp\u003eLes \u00e9l\u00e9ments concernant le financement des projets sont abord\u00e9s dans la mesure 2.1.2 sur la strat\u00e9gie patrimoniale, et dans une approche plus globale sur le financement de la politique climat-air-\u00e9nergie, dans la mesure 5.2.1\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.1.3.6.1',
            id_nomenclature: '2.1.3.6.1',
            nom: 'un syst\u00e8me de management est mis en place pour le suivi des projets de construction et de r\u00e9novation (responsabilit\u00e9s, pilotage, tableau de bord, suivi...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.6.2',
            id_nomenclature: '2.1.3.6.2',
            nom: 'les documents cadres et r\u00e9f\u00e9rentiels cr\u00e9\u00e9s sont r\u00e9ellement diffus\u00e9s dans les services, appropri\u00e9s par les acteurs concern\u00e9s, et appliqu\u00e9s syst\u00e9matiquement',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.6.3',
            id_nomenclature: '2.1.3.6.3',
            nom: 'pour les collectivit\u00e9s ne disposant pas des ressources/comp\u00e9tences en interne, recours \u00e0 un AMO charg\u00e9 de veiller \u00e0 la qualit\u00e9 environnementale du/des  projets',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.1.3.6.4',
            id_nomenclature: '2.1.3.6.4',
            nom: 'L\u2019intercommunalit\u00e9 incite et encourage les communes \u00e0 mettre en place des projets exemplaires (diffusion documents cadres, guides d\u2019usages, objectifs, etc).',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.2.1',
    id_nomenclature: '2.2.1',
    nom: 'Augmenter l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique pour la chaleur et le rafra\u00eechissement des b\u00e2timents publics',
    description:
      '\u003cp\u003eLa collectivit\u00e9 met en place une d\u00e9marche de sobri\u00e9t\u00e9 \u00e9nerg\u00e9tique, syst\u00e9matise l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique, pour le chauffage, l\u0027eau chaude et le rafra\u00eechissement de ses b\u00e2timents et l\u0027\u00e9value au moyen d\u0027indicateurs \u00e9nerg\u00e9tiques pour diff\u00e9rentes cat\u00e9gories de b\u00e2timents.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.2.1.1',
        id_nomenclature: '2.2.1.1',
        nom: 'Mettre en place des actions de sobri\u00e9t\u00e9 pour limiter les besoins en chauffage et climatisation',
        description:
          '\u003cp\u003eEn priorit\u00e9, des dispositifs de sobri\u00e9t\u00e9 sont mis en place (ferme-portes, volets\u2026). Des dispositifs bioclimatiques et tous les param\u00e8tres du confort thermique sont \u00e9tudi\u00e9s pour limiter le recours \u00e0 la climatisation.\u003c/p\u003e\n\u003cp\u003eLes actions en lien avec la sensibilisation des usagers des b\u00e2timents aux \u00e9co-gestes sont trait\u00e9es dans les mesures du domaine 5 et 6 (5.1.3 pour les agents et \u00e9lus, 6.5.2 pour les associations et 6.5.3. dans les \u00e9tablissements scolaires)\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 15,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.1.2',
        id_nomenclature: '2.2.1.2',
        nom: 'Mettre en place des indicateurs en kWh/m2/an d\u0027\u00e9nergie primaire par cat\u00e9gories de b\u00e2timents pour les usages chaleur/rafra\u00eechissement et les comparer avec des valeurs de r\u00e9f\u00e9rences locales',
        description: '',
        thematique_id: 'batiments',
        points: 5,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.1.3',
        id_nomenclature: '2.2.1.3',
        nom: 'Mettre en place des actions d\u2019efficacit\u00e9 \u00e9nerg\u00e9tique pour la chaleur et le rafra\u00eechissement du patrimoine sp\u00e9cifiquePour le patrimoine sp\u00e9cifique (tr\u00e8s gros \u00e9quipements sportifs ou culturels) :',
        description:
          '\u003cp\u003ePour les b\u00e2timents \u00e9quip\u00e9s d\u0027installations de production de froid : favoriser des installations de production de froid performantes. Une attention est port\u00e9e au coefficient d\u0027efficacit\u00e9 frigorifique (EER) et pour les PAC r\u00e9versibles, des labels comme Eurovent ou NF PAC sont recherch\u00e9s.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.1.3.1',
            id_nomenclature: '2.2.1.3.1',
            nom: 'des \u00e9tudes sp\u00e9cifiques ont \u00e9t\u00e9 men\u00e9es pour diminuer les consommations de ces \u00e9quipements et des actions mises en place.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.1.3.2',
            id_nomenclature: '2.2.1.3.2',
            nom: 'pour les piscines couvertes, un ratio de consommation en kWh/m2 de bassin est collect\u00e9 et suivi (ex : valeur moyenne fran\u00e7aise issue de l\u0027enqu\u00eate Energie et Patrimoine communal 2012 : 954 kWh/m2 chauff\u00e9 de bassin)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.1.4',
        id_nomenclature: '2.2.1.4',
        nom: 'R\u00e9nover les b\u00e2timents les plus \u00e9nergivores',
        description:
          '\u003cp\u003ene plus avoir de b\u00e2timents de cat\u00e9gorie F ou G (DPE \u00e9nergie) (ou ayant des consommations \u0026gt;= 701 kWhEP/m\u00b2.an dans les DOM)\u00a0: l\u2019objectif vis\u00e9 est de ne plus avoir de b\u00e2timent en classe F ou G \u00e0 court terme.\u003c/p\u003e\n\u003cp\u003eposs\u00e9der des b\u00e2timents de classe A ou B (DPE \u00e9nergie) (ou ayant des consommations =\u0026lt;100 kWhEP/m\u00b2 dans les DOM)\u00a0: l\u2019objectif vis\u00e9 est 30% de b\u00e2timent en classe A ou B \u00e0 court terme.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.1.5',
        id_nomenclature: '2.2.1.5',
        nom: 'Constater la baisse des consommations moyennes globales des b\u00e2timents publics*',
        description:
          '\u003cul\u003e\n\u003cli\u003e\u00c0 patrimoine constant (par exemple, la baisse des consommations d\u00fbe \u00e0 la vente du patrimoine \u00e9nergivore n\u2019est pas prise en compte).\u003c/li\u003e\n\u003c/ul\u003e\n',
        thematique_id: 'batiments',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.1.5.1',
            id_nomenclature: '2.2.1.5.1',
            nom: 'les consommations en kWh/hab sont en diminution (kWh/m\u00b2 pour les EPCI)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.1.5.2',
            id_nomenclature: '2.2.1.5.2',
            nom: 'pour les b\u00e2timents soumis au d\u00e9cret tertiaire, la diminution doit s\u0027inscrire \u00e0 minima dans le rythme impos\u00e9 par le d\u00e9cret tertiaire, soit -40 % en 2030, -50 % en 2040 et -60 % en 2050 par rapport \u00e0 2010 (ou par r\u00e9f\u00e9rence aux valeurs absolues fix\u00e9es r\u00e9glementairement)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.2.2',
    id_nomenclature: '2.2.2',
    nom: 'Augmenter l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique pour l\u0027\u00e9lectricit\u00e9 des b\u00e2timents publics',
    description:
      '\u003cp\u003eLa collectivit\u00e9 d\u00e9veloppe l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique pour les usages de l\u0027\u00e9lectricit\u00e9 dans ses b\u00e2timents et l\u0027\u00e9value au moyen d\u0027indicateurs \u00e9nerg\u00e9tiques pour diff\u00e9rentes cat\u00e9gories de b\u00e2timents.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.2.2.1',
        id_nomenclature: '2.2.2.1',
        nom: 'Mettre en place des actions de sobri\u00e9t\u00e9 pour limiter les besoins en \u00e9lectricit\u00e9',
        description:
          '\u003cp\u003eEn priorit\u00e9, des dispositifs de sobri\u00e9t\u00e9 sont mis en place (\u00e9clairage naturel, extinction des \u00e9quipements lorsqu\u2019ils ne sont pas utilis\u00e9s\u2026) pour limiter les besoins \u00e9lectriques.\u003c/p\u003e\n\u003cp\u003eLes actions en lien avec la sensibilisation des usagers des b\u00e2timents aux \u00e9co-gestes sont trait\u00e9es dans les mesures du domaine 5 et 6.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.2.2',
        id_nomenclature: '2.2.2.2',
        nom: 'Mettre en place des indicateurs en kWh/m2/an d\u0027\u00e9nergie primaire par cat\u00e9gories de b\u00e2timents pour les usages \u00e9lectriques et les comparer avec des valeurs de r\u00e9f\u00e9rences locales.',
        description: '',
        thematique_id: 'batiments',
        points: 5,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.2.3',
        id_nomenclature: '2.2.2.3',
        nom: 'Mettre en place des actions d\u2019efficacit\u00e9 \u00e9nerg\u00e9tique sur l\u2019\u00e9lectricit\u00e9 pour le patrimoine sp\u00e9cifique',
        description:
          '\u003cp\u003ePour les b\u00e2timents \u00e9quip\u00e9s d\u0027installations de production de froid : favoriser des installations de production de froid performantes. Une attention est port\u00e9e au coefficient d\u0027efficacit\u00e9 frigorifique (EER) et pour les PAC r\u00e9versibles, des labels comme Eurovent ou NF PAC sont recherch\u00e9s.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.2.3.1',
            id_nomenclature: '2.2.2.3.1',
            nom: 'des \u00e9tudes sp\u00e9cifiques ont \u00e9t\u00e9 men\u00e9es pour diminuer les consommations de ces \u00e9quipements et des actions mises en place.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.2.3.2',
            id_nomenclature: '2.2.2.3.2',
            nom: 'pour les piscines couvertes, un ratio de consommation en kWh/m2 de bassin est collect\u00e9 et suivi (ex : valeur moyenne fran\u00e7aise issue de l\u0027enqu\u00eate Energie et Patrimoine communal 2012 : 954 kWh/m2 chauff\u00e9 de bassin)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.2.3',
    id_nomenclature: '2.2.3',
    nom: 'Augmenter la part de consommation en \u00e9nergies renouvelables et de r\u00e9cup\u00e9ration pour la chaleur et le rafra\u00eechissement des b\u00e2timents publics',
    description:
      '\u003cp\u003eLa collectivit\u00e9 augmente et mesure la part de chaleur et de rafra\u00eechissement d\u0027origine renouvelable et de r\u00e9cup\u00e9ration dans les consommations de ses b\u00e2timents et \u00e9quipements, avec une attention \u00e0 la qualit\u00e9 de l\u0027air ext\u00e9rieur. Il s\u2019agit de prioriser les sources locales, peu \u00e9missives et la distribution via des r\u00e9seaux de chaleur/froid vertueux lorsque cela est possible.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.2.3.1',
        id_nomenclature: '2.2.3.1',
        nom: 'Utiliser les \u00e9nergies renouvelables et de r\u00e9cup\u00e9ration locales en priorit\u00e9 (selon gisement)',
        description:
          '\u003cp\u003eLes \u00e9tudes de faisabilit\u00e9 pour la cr\u00e9ation, l\u2019extension ou le raccordement des b\u00e2timents publics aux r\u00e9seaux de chaleur vertueux sont \u00e9valu\u00e9es dans la mesure 1.2.1\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.3.1.1',
            id_nomenclature: '2.2.3.1.1',
            nom: 'mobiliser le potentiel de r\u00e9cup\u00e9ration de chaleur fatale dans et \u00e0 proximit\u00e9 du patrimoine de la collectivit\u00e9 (cf. mesure 3.2.1)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.3.1.2',
            id_nomenclature: '2.2.3.1.2',
            nom: 'favoriser le recours \u00e0 la g\u00e9othermie profonde s\u0027il y a un gisement',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.3.1.3',
            id_nomenclature: '2.2.3.1.3',
            nom: 'privil\u00e9gier le bois local si la collectivit\u00e9 dispose de chaufferies bois pour ses b\u00e2timents et \u00e9quipements : suivi d\u0027un indicateur pour la part de bois local dans l\u0027approvisionnement (issu d\u0027un rayon d\u0027approvisionnement de 100 km max.)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.3.2',
        id_nomenclature: '2.2.3.2',
        nom: 'Si la collectivit\u00e9 dispose de chaufferies bois pour ses b\u00e2timents et \u00e9quipements, privil\u00e9gier le bois certifi\u00e9',
        description: '',
        thematique_id: 'batiments',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.3.2.1',
            id_nomenclature: '2.2.3.2.1',
            nom: 'certification du bois local au minimum au niveau moyen r\u00e9gional',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.3.2.2',
            id_nomenclature: '2.2.3.2.2',
            nom: 'si du bois est import\u00e9, il provient a\u0300 100% de for\u00eats g\u00e9r\u00e9es durablement (PEFC, FSC...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.3.3',
        id_nomenclature: '2.2.3.3',
        nom: 'Prendre en compte la qualit\u00e9 de l\u0027air dans ses choix',
        description:
          '\u003cp\u003eNota : Pas de notation de la mise en oeuvre dans les DOM\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.3.3.1',
            id_nomenclature: '2.2.3.3.1',
            nom: 'dans une approche globale privil\u00e9gier lorsque cela est possible la chaleur sans combustion comme la r\u00e9cup\u00e9ration de chaleur fatale (cf. mesure 3.2.1), la g\u00e9othermie, le solaire...',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.3.3.2',
            id_nomenclature: '2.2.3.3.2',
            nom: 'une attention particuli\u00e8re port\u00e9e au traitement des fum\u00e9es des installations biomasse collective, allant au-del\u00e0 de la r\u00e9glementation (mise en place des meilleures techniques disponibles \u2013 \u00e9lectrofiltre, filtres \u00e0 manches, r\u00e9gulation, foyer bas-NOx ou syst\u00e8mes de d\u00e9-NOx- notamment en zones sensibles en mati\u00e8re de qualit\u00e9 de l\u2019air, \u00e0 proximit\u00e9 des \u00e9coles, etc.)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.3.4',
        id_nomenclature: '2.2.3.4',
        nom: '(100% dans les DOM) Suivre et atteindre une part d\u2019\u00e9nergie renouvelable et de r\u00e9cup\u00e9ration cons\u00e9quente pour la chaleur et le rafra\u00eechissement des b\u00e2timents publics',
        description:
          '\u003cp\u003eLa proportion d\u0027\u00e9nergies renouvelables et de r\u00e9cup\u00e9ration dans le domaine thermique* atteint plus de 38% des besoins thermiques du patrimoine de la collectivit\u00e9 en M\u00e9tropole, 75% dans les DOM (valorisation progressive \u00e0 partir de 0% ; pour rappel, l\u0027autonomie \u00e9nerg\u00e9tique est l\u0027objectif pour 2030).\u003c/p\u003e\n\u003cp\u003eCes taux, lorsque cela est possible, sont notamment atteints gr\u00e2ce au d\u00e9veloppement des r\u00e9seaux de chaleur vertueux (mesure 1.2.1 et 3.2.2).\u003c/p\u003e\n\u003cp\u003eLes installations ne sont prises en compte qu\u0027\u00e0 partir de leur mise en service.\u003c/p\u003e\n\u003cp\u003e*Dans les DOM, climatisation et eau chaude sanitaire\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 75,
        actions: [],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.2.4',
    id_nomenclature: '2.2.4',
    nom: 'Augmenter la part de consommation en \u00e9nergies renouvelables pour l\u0027\u00e9lectricit\u00e9 des b\u00e2timents publics',
    description:
      '\u003cp\u003eLa collectivit\u00e9 augmente et mesure la part d\u0027\u00e9lectricit\u00e9 renouvelable dans les consommations de ses b\u00e2timents et \u00e9quipements, en priorit\u00e9 via la mise en service d\u2019installations de production d\u2019\u00e9nergie \u00e9olienne, photovolta\u00efque, hydraulique, etc. mais \u00e9galement via l\u2019achat d\u2019\u00e9lectricit\u00e9 renouvelable.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.2.4.1',
        id_nomenclature: '2.2.4.1',
        nom: '(10% dans les DOM) D\u00e9lib\u00e9rer et monter en comp\u00e9tences sur le sujet',
        description:
          '\u003cp\u003ePour les DOM, l\u2019\u00e9valuation est adapt\u00e9e au contexte, et se concentre sur le premier item.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.4.1.1',
            id_nomenclature: '2.2.4.1.1',
            nom: 'd\u00e9lib\u00e9ration sur la d\u00e9cision de construire des installations de production d\u0027\u00e9lectricit\u00e9, en pr\u00e9cisant le financement pr\u00e9vu',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.4.1.2',
            id_nomenclature: '2.2.4.1.2',
            nom: 'connaissance des diff\u00e9rentes offres existantes des fournisseurs d\u0027\u00e9lectricit\u00e9 (offres EnR, garanties d\u0027origine, crit\u00e8res de qualit\u00e9 environnementale...) et organisation pour consulter le march\u00e9 (connaissance fine de ses consommations par point de livraison)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.4.2',
        id_nomenclature: '2.2.4.2',
        nom: '(30% dans les DOM) Installer des \u00e9quipements de production d\u2019\u00e9lectricit\u00e9 renouvelable',
        description: '',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.4.2.1',
            id_nomenclature: '2.2.4.2.1',
            nom: 'installations de production d\u0027\u00e9lectricit\u00e9 renouvelable existantes',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.4.2.2',
            id_nomenclature: '2.2.4.2.2',
            nom: 'si production d\u2019\u00e9lectricit\u00e9 verte commercialis\u00e9e en dehors de l\u0027obligation d\u0027achat, vente prioritairement \u00e0 des acteurs (acheteurs, fournisseurs) proposant une offre renouvelable de haute qualit\u00e9 (100% EnR, qualit\u00e9 environnementale, transparence, crit\u00e8re d\u0027additionnalit\u00e9, fond de d\u00e9veloppement des EnR...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.4.2.3',
            id_nomenclature: '2.2.4.2.3',
            nom: 'l\u2019auto-consommation est \u00e9tudi\u00e9e et mise en \u0153uvre sur les installations o\u00f9 elle est pertinente',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.4.2.4',
            id_nomenclature: '2.2.4.2.4',
            nom: 'dans les DOM, installer ou favoriser les moyens de production avec stockage de l\u2019\u00e9lectricit\u00e9',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.4.3',
        id_nomenclature: '2.2.4.3',
        nom: '(50% dans les DOM) Atteindre une part \u00e9lev\u00e9e d\u2019\u00e9lectricit\u00e9 renouvelable produite par les installations de la collectivit\u00e9',
        description: '',
        thematique_id: 'batiments',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.4.3.1',
            id_nomenclature: '2.2.4.3.1',
            nom: '32% des consommations \u00e9lectriques du patrimoine pour les communes',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.4.3.2',
            id_nomenclature: '2.2.4.3.2',
            nom: '40% des consommations \u00e9lectriques du patrimoine pour les EPCI',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.4.3.3',
            id_nomenclature: '2.2.4.3.3',
            nom: '75% pour les DOM (rappel : objectif 100% en 2030)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.4.4',
        id_nomenclature: '2.2.4.4',
        nom: '(10% dans les DOM) Acheter de l\u2019\u00e9lectricit\u00e9 renouvelable',
        description:
          '\u003cp\u003eLa part des achats d\u0027\u00e9lectricit\u00e9 renouvelable* de la collectivit\u00e9 dans ses achats totaux d\u2019\u00e9lectricit\u00e9 se rapproche de 100% (garantie d\u2019origine).\u003c/p\u003e\n\u003cp\u003eEn M\u00e9tropole, choix du fournisseur en privil\u00e9giant celui qui produit physiquement ou ach\u00e8te de l\u0027\u00e9lectricit\u00e9 d\u0027origine renouvelable hors obligation d\u0027achat et garantissant le crit\u00e8re d\u0027additionnalit\u00e9 (d\u00e9veloppement de nouvelles installations EnR).\u003c/p\u003e\n\u003cp\u003e*pour ses b\u00e2timents, \u00e9quipements, services publics industriels et \u00e9clairage public compris\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.2.5',
    id_nomenclature: '2.2.5',
    nom: 'Limiter les \u00e9missions de gaz \u00e0 effet de serre des b\u00e2timents publics',
    description:
      '\u003cp\u003eLa collectivit\u00e9 r\u00e9duit les \u00e9missions de gaz \u00e0 effet de serre g\u00e9n\u00e9r\u00e9es par le fonctionnement de ses b\u00e2timents, et int\u00e8gre \u00e9galement une r\u00e9flexion sur l\u2019ensemble de leur cycle de vie.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 \u00e9value son avancement par rapport \u00e0 ses objectifs de r\u00e9duction d\u0027\u00e9missions de CO2 et de gaz \u00e0 effet de serre sur les diff\u00e9rentes cat\u00e9gories de b\u00e2timents.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.2.5.1',
        id_nomenclature: '2.2.5.1',
        nom: 'Effectuer des bilans GES plus complets que la r\u00e9glementation ne l\u2019impose',
        description: '',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.5.1.1',
            id_nomenclature: '2.2.5.1.1',
            nom: 'la collectivit\u00e9 est all\u00e9e plus loin que le DPE ou le bilan GES \u00ab patrimoine et comp\u00e9tences \u00bb r\u00e9glementaires pour effectuer le bilan GES de ses b\u00e2timents (bilan GES sur \u00e9missions directes et indirectes en distinguant par exemple les usages de l\u0027\u00e9lectricit\u00e9)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.5.2',
        id_nomenclature: '2.2.5.2',
        nom: '(50% dans les DOM) Limiter les \u00e9missions de GES li\u00e9es \u00e0 la production de froid',
        description: '',
        thematique_id: 'batiments',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.5.2.1',
            id_nomenclature: '2.2.5.2.1',
            nom: 'Des dispositifs bioclimatiques et tous les param\u00e8tres du confort thermique sont \u00e9tudi\u00e9s pour limiter le recours \u00e0 la climatisation.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.5.2.2',
            id_nomenclature: '2.2.5.2.2',
            nom: 'Pour les b\u00e2timents/\u00e9quipements disposant d\u0027installations de production de froid (r\u00e9frig\u00e9rateur, cong\u00e9lateur, climatiseur...), une attention est port\u00e9e au pouvoir de r\u00e9chauffement global (PRG) des fluides frigorig\u00e8nes utilis\u00e9s, \u00e0 la qualit\u00e9 des op\u00e9rations de maintenance (installateur qualifi\u00e9, suivi des quantit\u00e9s de fluides recharg\u00e9es, r\u00e9cup\u00e9ration des fluides, pertes minimes...) et au traitement en fin de vie de ces \u00e9quipements.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.5.3',
        id_nomenclature: '2.2.5.3',
        nom: 'R\u00e9duire les \u00e9missions de GES sur l\u2019ensemble du cycle de vie des b\u00e2timents publics',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.2.5.3.1',
            id_nomenclature: '2.2.5.3.1',
            nom: '\u00e9valuation des \u00e9missions de GES li\u00e9s aux produits et mat\u00e9riaux de construction utilis\u00e9s dans les b\u00e2timents publics',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.2.5.3.2',
            id_nomenclature: '2.2.5.3.2',
            nom: 'utilisation de l\u0027analyse du cycle de vie comme outil d\u0027aide \u00e0 la d\u00e9cision pour les constructions ou les r\u00e9novations',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.5.4',
        id_nomenclature: '2.2.5.4',
        nom: '(10% dans les DOM) R\u00e9duire la part des b\u00e2timents F ou G (classification DPE pour les gaz \u00e0 effet de serre) en r\u00e9novant les b\u00e2timents les plus \u00e9nergivores',
        description:
          '\u003cp\u003eL\u2019objectif vis\u00e9 est de 0% de b\u00e2timents dans ces classes.\u003c/p\u003e\n\u003cp\u003eRappel des classes F ou G :\u003c/p\u003e\n\u003cp\u003e= 101 kgeqCO2/m2.an (bureau, admin, enseignement),\u003c/p\u003e\n\u003cp\u003e= 161 (utilisation continue),\u003c/p\u003e\n\u003cp\u003e= 71 (autres)\u003c/p\u003e\n\u003cp\u003eLa classification DPE pour les gaz \u00e0 effet de serre n\u2019existant pas dans les DOM, la notation actuelle Cit\u2019ergie se base sur les m\u00eames seuils de performances que les actions 2.2.1 et 2.2.2 (performances \u00e9nerg\u00e9tiques) : \u0026lt;701 kWhEP/m\u00b2.an\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__2.2.5.5',
        id_nomenclature: '2.2.5.5',
        nom: '(10% dans les DOM) Augmenter la part des b\u00e2timents A ou B (classification DPE pour les gaz \u00e0 effet de serre)',
        description:
          '\u003cp\u003eL\u2019objectif vis\u00e9 au moment de l\u2019\u00e9valuation est de 30% de b\u00e2timents dans ces classes.\u003c/p\u003e\n\u003cp\u003eRappel des classes A ou B :\u003c/p\u003e\n\u003cp\u003e\u0026lt;= 15 kgeqCO2/m2.an (bureau, admin, enseignement),\u003c/p\u003e\n\u003cp\u003e\u0026lt;= 30 (utilisation continue),\u003c/p\u003e\n\u003cp\u003e\u0026lt;= 10 (autres)\u003c/p\u003e\n\u003cp\u003eLa classification DPE pour les gaz \u00e0 effet de serre n\u2019existant pas dans les DOM, la notation actuelle Cit\u2019ergie se base sur les m\u00eames seuils de performances que les actions 2.2.1 et 2.2.2 (performances \u00e9nerg\u00e9tiques)  : \u0026gt;100 kWhEP/m\u00b2.an\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.3.1',
    id_nomenclature: '2.3.1',
    nom: 'Optimiser l\u0027\u00e9clairage public',
    description:
      '\u003cp\u003eLa collectivit\u00e9 syst\u00e9matise la sobri\u00e9t\u00e9 et l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique de son \u00e9clairage public et l\u0027\u00e9value sur la base d\u0027indicateurs. Elle met en place des technologies et pratiques \u00e9conomes en \u00e9nergie et contribue \u00e0 la pr\u00e9vention, \u00e0 la r\u00e9duction et \u00e0 la limitation des nuisances lumineuses (suppression des lampadaires inutiles et redondants, horaires d\u2019allumage et d\u2019extinction dans les zones propices, \u00e9clairages \u00e0 d\u00e9tection de pr\u00e9sence, lampadaires \u00e9conomes, proportion de lumi\u00e8re, limitation des temp\u00e9ratures de couleur etc.).\u003c/p\u003e\n\u003cp\u003eL\u2019action s\u2019\u00e9tend \u00e0 l\u2019ensemble de l\u2019\u00e9clairage de l\u2019espace public : mobilier urbain lumineux, monuments et fa\u00e7ades, enseignes, festivit\u00e9s, \u00e9clairages de No\u00ebl,  etc.\u003c/p\u003e\n',
    thematique_id: 'energie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.3.1.1',
        id_nomenclature: '2.3.1.1',
        nom: 'R\u00e9aliser un diagnostic de l\u2019\u00e9clairage public',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.1.1.1',
            id_nomenclature: '2.3.1.1.1',
            nom: 'les types de voiries existantes',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.1.2',
            id_nomenclature: '2.3.1.1.2',
            nom: 'le recensement des points lumineux et des armoires',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.1.3',
            id_nomenclature: '2.3.1.1.3',
            nom: 'les caract\u00e9ristiques techniques des \u00e9quipements d\u0027\u00e9clairage (photom\u00e9trie, efficacit\u00e9 lumineuse, type de source...)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.1.4',
            id_nomenclature: '2.3.1.1.4',
            nom: 'le calcul des dur\u00e9es de fonctionnement et autres ratios de performance',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.1.5',
            id_nomenclature: '2.3.1.1.5',
            nom: 'l\u0027\u00e9nergie (co\u00fbt, optimisation des contrats d\u0027abonnement, provenance de l\u0027\u00e9lectricit\u00e9)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.1.6',
            id_nomenclature: '2.3.1.1.6',
            nom: 'l\u0027entretien et la maintenance',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.1.7',
            id_nomenclature: '2.3.1.1.7',
            nom: 'les impacts environnementaux (CO2, pollutions, nuisances lumineuses...)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.1.2',
        id_nomenclature: '2.3.1.2',
        nom: 'Mettre en place des actions de sobri\u00e9t\u00e9 sur l\u2019\u00e9clairage public en priorit\u00e9',
        description:
          '\u003cp\u003eLa collectivit\u00e9 met en place des actions de sobri\u00e9t\u00e9, attest\u00e9es par la progression d\u0027un indicateur : diminution du nb de point lumineux/hab ou /km, baisse du nombre d\u0027heures d\u0027\u00e9clairement, % de communes pratiquant l\u0027extinction (pour les EPCI comp\u00e9tents), pas seulement lampadaires mais aussi mobilier urbain, enseignes.\u003c/p\u003e\n',
        thematique_id: 'energie',
        points: 15,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.1.3',
        id_nomenclature: '2.3.1.3',
        nom: 'D\u00e9lib\u00e9rer et mettre en \u0153uvre un plan d\u2019optimisation de l\u2019\u00e9clairage public',
        description: '',
        thematique_id: 'energie',
        points: 35,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.1.3.1',
            id_nomenclature: '2.3.1.3.1',
            nom: 'mise en \u0153uvre de mesures d\u0027am\u00e9lioration des performances issues du diagnostic (optimisation tarifaire, maintenance pr\u00e9ventive, modernisation des \u00e9quipements, modification/optimisation du service rendu \u2013 extinction ou variateur de tension la nuit, choix judicieux des points lumineux, g\u00e9n\u00e9ralisation de l\u2019\u00e9clairage \u00e0 d\u00e9tection de pr\u00e9sence ou encore la mod\u00e9ration de l\u2019\u00e9clairage des b\u00e2timents, statues et fa\u00e7ades)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.3.2',
            id_nomenclature: '2.3.1.3.2',
            nom: 'formalisation des exigences/objectifs en mati\u00e8re d\u0027entretien/maintenance dans un document d\u00e9di\u00e9 (contrat de maintenance, r\u00e9gie...)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.3.3',
            id_nomenclature: '2.3.1.3.3',
            nom: 'inscription de mesures de limitation des consommations \u00e9nerg\u00e9tiques dans un document formalis\u00e9, un plan pluriannuel d\u2019optimisation (Sch\u00e9ma directeur d\u0027am\u00e9nagement lumi\u00e8re / Plan lumi\u00e8re, Plan d\u2019am\u00e9nagement Lumi\u00e8re ou autre document...)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.3.4',
            id_nomenclature: '2.3.1.3.4',
            nom: 'attention port\u00e9e \u00e0 la concertation avec la population et \u00e0 la valorisation de la d\u00e9marche (r\u00e9union publique, observation des \u00e9toiles, information sur le d\u00e9couplage s\u00e9curit\u00e9 des riverains/\u00e9clairage, b\u00e9n\u00e9fices sur la biodiversit\u00e9, labellisation \u00ab villes et villages \u00e9toil\u00e9s \u00bb...).',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.3.5',
            id_nomenclature: '2.3.1.3.5',
            nom: 'identification des enseignes lumineuses ill\u00e9gales et mesures d\u2019accompagnement pour y rem\u00e9dier (prise en compte de l\u2019\u00e9nergie dans le r\u00e8glement local de publicit\u00e9 quand il existe)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.3.6',
            id_nomenclature: '2.3.1.3.6',
            nom: 'int\u00e9grer une op\u00e9ration de portage collectif (EPCI, syndicat d\u2019\u00e9nergie, Agence locale de l\u2019\u00e9nergie) sur l\u2019optimisation de l\u2019\u00e9clairage public',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.3.7',
            id_nomenclature: '2.3.1.3.7',
            nom: 'attention port\u00e9e au dimensionnement et \u00e0 la performance des d\u00e9corations de No\u00ebl',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.3.8',
            id_nomenclature: '2.3.1.3.8',
            nom: 'la collectivit\u00e9 respecte les precriptions techniques de l\u2019arr\u00eat\u00e9 du 27 d\u00e9cembre 2018 relatif \u00e0 la pr\u00e9vention, \u00e0 la r\u00e9duction et \u00e0 la limitation des nuisances lumineuses (temp\u00e9ratures de couleur strictement inf\u00e9rieures \u00e0 3000K (id\u00e9al = 2700K)\u00a0; ratio ULR=0 (rapport du flux sortant des luminaires qui est \u00e9mis dans l\u2019h\u00e9misph\u00e8re sup\u00e9rieur au flux total sortant des luminaires)\u00a0; densit\u00e9 surfacique de flux lumineux install\u00e9 (lumen/m\u00b2) limit\u00e9e \u00e0 35 lm/m2 en agglom\u00e9ration et 25lm/m2 hors agglom\u00e9ration).',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.1.4',
        id_nomenclature: '2.3.1.4',
        nom: 'Suivre et atteindre les objectifs fix\u00e9s en mati\u00e8re d\u2019\u00e9clairage public',
        description:
          '\u003cp\u003e*Valeur limite : 90 kWh/hab (\u00e9nergie finale)\u003c/p\u003e\n\u003cp\u003e*Valeur cible : 60 kWh/hab\u003c/p\u003e\n',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.1.4.1',
            id_nomenclature: '2.3.1.4.1',
            nom: 'Comparaison de l\u2019indicateur de consommation/habitant avec les valeurs de r\u00e9f\u00e9rences (10% des points):',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.1.4.2',
            id_nomenclature: '2.3.1.4.2',
            nom: 'Suivi du co\u00fbt total et co\u00fbt rapport\u00e9 \u00e0 l\u2019habitant de l\u2019\u00e9clairage public (d\u00e9penses \u00e9nerg\u00e9tiques)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.3.2',
    id_nomenclature: '2.3.2',
    nom: 'Economiser l\u0027eau dans les b\u00e2timents publics',
    description:
      '\u003cp\u003eDans une logique de r\u00e9duction de sa facture d\u0027eau et de pr\u00e9servation de la ressource en eau, la collectivit\u00e9 augmente la ma\u00eetrise de la consommation d\u0027eau de ses b\u00e2timents publics. Elle l\u2019\u00e9value gr\u00e2ce \u00e0 des indicateurs par habitant et par la consommation d\u0027eau annuelle de diff\u00e9rentes cat\u00e9gories de b\u00e2timents. La collectivit\u00e9 met en place une politique rationnelle de gestion de l\u0027eau (besoins et utilisation) favorisant une utilisation \u00e9conome de l\u0027eau.\u003c/p\u003e\n',
    thematique_id: 'eau',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.3.2.1',
        id_nomenclature: '2.3.2.1',
        nom: 'R\u00e9aliser un diagnostic pr\u00e9cis des consommations d\u2019eau et des conduites d\u2019eau de l\u2019ensemble des b\u00e2timents publics et des grands consommateurs',
        description: '',
        thematique_id: 'eau',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.2.1.1',
            id_nomenclature: '2.3.2.1.1',
            nom: 'R\u00e9aliser un diagnostic des consommations d\u0027eau de chaque b\u00e2timent public et des grands consommateurs (fontaines, piscines, etc.)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.2.1.2',
            id_nomenclature: '2.3.2.1.2',
            nom: 'Equiper les compteurs des b\u00e2timents publics de t\u00e9l\u00e9-rel\u00e8ve',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.2.2',
        id_nomenclature: '2.3.2.2',
        nom: 'Formaliser l\u2019engagement de la collectivit\u00e9 \u00e0 r\u00e9duire ses consommations',
        description: '',
        thematique_id: 'eau',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.2.2.1',
            id_nomenclature: '2.3.2.2.1',
            nom: 'd\u00e9cision d\u0027installer des appareils et robinets \u00e9conomes en eau (budget allou\u00e9)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.2.2.2',
            id_nomenclature: '2.3.2.2.2',
            nom: 's\u0027engager pour un objectif chiffr\u00e9 de r\u00e9duction des consommations d\u0027eau',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.2.3',
        id_nomenclature: '2.3.2.3',
        nom: 'Sensibiliser et informer les utilisateurs des b\u00e2timents publics',
        description: '',
        thematique_id: 'eau',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.2.3.1',
            id_nomenclature: '2.3.2.3.1',
            nom: 'les utilisateurs des b\u00e2timents publics et les employ\u00e9s de la collectivit\u00e9 sont r\u00e9guli\u00e8rement inform\u00e9s sur une utilisation scrupuleuse de l\u0027eau',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.2.4',
        id_nomenclature: '2.3.2.4',
        nom: 'Mettre en \u0153uvre les actions et suivre les consommations',
        description: '',
        thematique_id: 'eau',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.2.4.1',
            id_nomenclature: '2.3.2.4.1',
            nom: 'relev\u00e9s des valeurs de consommations \u00e0 une fr\u00e9quence qui d\u00e9pend de la consommation (mensuelle pour les gros consommateurs, au minimum tous les 6 mois pour les autres)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.2.4.2',
            id_nomenclature: '2.3.2.4.2',
            nom: 'les appareils et robinets \u00e9conomes en eau ont \u00e9t\u00e9 install\u00e9s dans les b\u00e2timents de la collectivit\u00e9 les plus consommateurs d\u0027eau ;',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.2.4.3',
            id_nomenclature: '2.3.2.4.3',
            nom: 'en cas de fuite, un service est identifi\u00e9 pour effectuer les r\u00e9parations',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.2.4.4',
            id_nomenclature: '2.3.2.4.4',
            nom: 'une attention particuli\u00e8re est port\u00e9e sur les piscines : le taux de renouvellement de l\u2019eau de baignade (en l/j/baigneur) est bas, les piscines sont \u00e9quip\u00e9es de dispositifs de destruction des chloramines et/ou de r\u00e9cup\u00e9ration d\u2019eau et des calories',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.2.4.5',
            id_nomenclature: '2.3.2.4.5',
            nom: 'Dans les b\u00e2timents scolaires, les poussoirs sont r\u00e9gl\u00e9s sur des dur\u00e9es courtes et les enfants sont \u00e9duqu\u00e9s \u00e0 \u00e9conomiser l\u2019eau (et ne pas jouer avec)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.2.4.6',
            id_nomenclature: '2.3.2.4.6',
            nom: 'r\u00e9cup\u00e9ration des eaux pluviales en toiture pour l\u0027utilisation dans le b\u00e2timent ou les espaces verts',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.2.5',
        id_nomenclature: '2.3.2.5',
        nom: 'Etre exemplaire sur les consommations d\u2019eau',
        description: '',
        thematique_id: 'eau',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.2.5.1',
            id_nomenclature: '2.3.2.5.1',
            nom: 'les consommations/m2 sont en diminution par rapport aux ann\u00e9es pr\u00e9c\u00e9dentes et font l\u0027objet d\u0027une communication officielle (ex : rapport de d\u00e9veloppement durable, bilan \u00e9nergie/GES...)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.2.5.2',
            id_nomenclature: '2.3.2.5.2',
            nom: 'si piscines, leur performance est attest\u00e9e par un suivi pr\u00e9cis mensuel avec indicateur adapt\u00e9 (exemple : indicateur de taux de renouvellement, litres par baigneur)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__2.3.3',
    id_nomenclature: '2.3.3',
    nom: 'G\u00e9rer sa voirie durablement',
    description:
      '\u003cp\u003eLa collectivit\u00e9 g\u00e8re sa voirie durablement : elle est attentive \u00e0 limiter l\u0027impact \u00e9nerg\u00e9tique et les \u00e9missions de gaz \u00e0 effet de serre de sa politique de cr\u00e9ation et d\u0027entretien de voirie, de l\u0027amont \u00e0 l\u0027aval (choix des mat\u00e9riaux, technique de mise en oeuvre, action pr\u00e9ventive, priorisation des voiries \u00e0 r\u00e9nover...). Elle anticipe les risques li\u00e9s au changement climatique et contribue \u00e0 l\u0027adaptation du territoire.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__2.3.3.1',
        id_nomenclature: '2.3.3.1',
        nom: 'Conna\u00eetre son patrimoine (voirie)',
        description: '',
        thematique_id: 'batiments',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.3.1.1',
            id_nomenclature: '2.3.3.1.1',
            nom: 'un SIG r\u00e9pertoriant les voiries est en place ; il est tenu \u00e0 jour',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.1.2',
            id_nomenclature: '2.3.3.1.2',
            nom: 'la longueur totale de voirie g\u00e9r\u00e9e par la collectivit\u00e9 est connue',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.1.3',
            id_nomenclature: '2.3.3.1.3',
            nom: 'des informations qualitatives sur l\u0027\u00e9tat de chaque voirie sont collect\u00e9es',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.3.2',
        id_nomenclature: '2.3.3.2',
        nom: 'Former/sensibiliser les agents en charge de la voirie',
        description: '',
        thematique_id: 'batiments',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.3.2.1',
            id_nomenclature: '2.3.3.2.1',
            nom: 'les agents ont suivi des formations pour limiter les impacts environnementaux des projets de voirie',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.2.2',
            id_nomenclature: '2.3.3.2.2',
            nom: 'les agents du service voirie \u00e9changent avec le service "mobilit\u00e9/transport" (sur des projets particuliers et de mani\u00e8re plus transversale) pour une politique coh\u00e9rente visant le d\u00e9veloppement cyclable/TC et  limitation de la voiture',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.2.3',
            id_nomenclature: '2.3.3.2.3',
            nom: 'la baisse de l\u0027impact environnemental des projets voirie est un objectif du service, attest\u00e9 par des prises de position/directives de l\u0027\u00e9lu en charge de ce sujet ou du chef de service (r\u00e9f\u00e9rentiel qualit\u00e9 de la voirie, compte-rendu de r\u00e9union, d\u00e9lib\u00e9ration, note de service, fiche de poste...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.3.3',
        id_nomenclature: '2.3.3.3',
        nom: 'Adopter une politique pr\u00e9ventive limitant les interventions lourdes',
        description: '',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.3.3.1',
            id_nomenclature: '2.3.3.3.1',
            nom: 'La programmation des travaux privil\u00e9gie le pr\u00e9ventif plut\u00f4t que le curatif, afin de limiter les interventions lourdes',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.3.2',
            id_nomenclature: '2.3.3.3.2',
            nom: 'les impacts du changement climatique sont pris en compte dans les crit\u00e8res de durabilit\u00e9 des voiries et techniques de mise en oeuvre',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.3.3',
            id_nomenclature: '2.3.3.3.3',
            nom: 'coordination des travaux entre les diff\u00e9rents services et partenaires (r\u00e9seaux \u00e9nerg\u00e9tiques, t\u00e9l\u00e9com, assainissement, eau, espaces verts...) pour limiter les interventions',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.3.4',
        id_nomenclature: '2.3.3.4',
        nom: 'Limiter l\u0027impact environnemental des mat\u00e9riaux de voirie',
        description: '',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.3.4.1',
            id_nomenclature: '2.3.3.4.1',
            nom: 'La collectivit\u00e9 renforce l\u0027usage des mat\u00e9riaux suivants dans ces chantiers : mat\u00e9riaux perm\u00e9ables, recycl\u00e9s, \u00e0 faible alb\u00e9do, \u00e0 basse temp\u00e9rature de mise en oeuvre (enrob\u00e9s \u00e0 froid ou ti\u00e8de...), liants v\u00e9g\u00e9taux',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.4.2',
            id_nomenclature: '2.3.3.4.2',
            nom: 'Utilisation d\u0027outils d\u0027aides \u00e0 la d\u00e9cision et \u00e0 la gestion de projet : \u00e9co-comparateurs dans les activit\u00e9s de construction et d\u0027entretien, label HQE infrastructures...',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.4.3',
            id_nomenclature: '2.3.3.4.3',
            nom: 'la valorisation des d\u00e9chets issus des voiries en fin de vie est pr\u00e9vue et pratiqu\u00e9e par la collectivit\u00e9 (tri \u00e0 la source, recyclage...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.4.4',
            id_nomenclature: '2.3.3.4.4',
            nom: 'des crit\u00e8res environnementaux sont inscrits dans les appels d\u0027offres des chantiers voirie',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.3.5',
        id_nomenclature: '2.3.3.5',
        nom: 'Anticiper et encourager les changements de comportement et le report modal via la politique voirie',
        description:
          '\u003cp\u003eLes \u00e9l\u00e9ments concernant le stationnement sont trait\u00e9es dans la mesure 4.2.1\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.3.5.1',
            id_nomenclature: '2.3.3.5.1',
            nom: 'Dans les projets neufs, adapter les gabarits aux usages, limiter l\u0027emprise de la voirie r\u00e9serv\u00e9e aux voitures (normes minimales).',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.5.2',
            id_nomenclature: '2.3.3.5.2',
            nom: 'Limiter la cr\u00e9ation de nouvelles voiries au strict n\u00e9cessaire (ex : pas de projets voirie rendant l\u0027usage de la voiture plus confortable/rapide sans gain GES attest\u00e9 par une \u00e9tude)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__2.3.3.6',
        id_nomenclature: '2.3.3.6',
        nom: 'T\u00e9moigner de la baisse de l\u0027impact environnemental de sa politique voirie',
        description:
          '\u003cp\u003eDOMAINE 3\u00a0: APPROVISIONNEMENT ENERGIE, EAU, ASSAINISSEMENT\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__2.3.3.6.1',
            id_nomenclature: '2.3.3.6.1',
            nom: 'La collectivit\u00e9 suit de mani\u00e8re chiffr\u00e9e l\u0027avancement de sa politique et se fixe des objectifs, par exemple : % de mat\u00e9riaux recycl\u00e9s incorpor\u00e9s (en tonne), % de chantiers utilisant des enrob\u00e9s ti\u00e8des ou \u00e0 froid, % de surfaces utilisant des mat\u00e9riaux clairs sur les nouveaux projets d\u0027espaces publics, % de chantiers utilisant des mat\u00e9riaux perm\u00e9ables (b\u00e9ton drainant, dalle \u00e0 engazonner...)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__2.3.3.6.2',
            id_nomenclature: '2.3.3.6.2',
            nom: 'un indicateur visant la sobri\u00e9t\u00e9 est suivi et "contenu", par exemple un ratio en m\u00b2 de voirie/hab, ou en tonne de mat\u00e9riaux achet\u00e9/hab...',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.1.1',
    id_nomenclature: '3.1.1',
    nom: 'Optimiser le service public de la distribution d\u0027\u00e9nergie',
    description:
      '\u003cp\u003eLa collectivit\u00e9, en lien avec les gestionnaires/concessionnaires de r\u00e9seaux d\u2019\u00e9lectricit\u00e9, de gaz et de chaleur, veille \u00e0 la qualit\u00e9 du service rendu et \u00e0 la contribution de cette mission \u00e0 sa strat\u00e9gie d\u0027efficacit\u00e9 \u00e9nerg\u00e9tique, de d\u00e9veloppement des \u00e9nergies renouvelables et de lutte contre le changement climatique. Des r\u00e9flexions et des actions pour une optimisation du r\u00e9seau, notamment via la flexibilit\u00e9 de la demande, de la production et/ou du stockage (SmartGrid) sont men\u00e9es.\u003c/p\u003e\n',
    thematique_id: 'energie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.1.1.1',
        id_nomenclature: '3.1.1.1',
        nom: 'Conna\u00eetre les enjeux de la distribution d\u2019\u00e9nergie sur le territoire',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.1.1.1',
            id_nomenclature: '3.1.1.1.1',
            nom: 'la collectivit\u00e9 a une bonne connaissance de son r\u00f4le (et de celui du syndicat comp\u00e9tent le cas \u00e9ch\u00e9ant), des contrats de concession, du compte-rendu d\u2019activit\u00e9 du concessionnaire (rapport CRAC : Compte-rendu Annuel de l\u2019Activit\u00e9 du Concessionnaire), afin de conna\u00eetre les enjeux de la distribution d\u2019\u00e9nergie sur son territoire',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.1.2',
            id_nomenclature: '3.1.1.1.2',
            nom: 'elle demande syst\u00e9matiquement au syndicat d\u2019\u00e9nergie ou au concessionnaire/gestionnaire du r\u00e9seau les informations utiles \u00e0 sa politique \u00e9nergie : consommations totales par commune, le nb de points de livraison (en soutirage et en injection), le nb de producteurs et la puissance install\u00e9e et raccord\u00e9e par \u00e9nergie, nb et identit\u00e9 des fournisseurs actifs sur le territoire et volume vendu par ces fournisseurs, les dates d\u0027\u00e9ch\u00e9ance des contrats de concession...',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.1.3',
            id_nomenclature: '3.1.1.1.3',
            nom: 'les concessions sont suivies par des personnes d\u00e9di\u00e9es et sp\u00e9cialis\u00e9es (form\u00e9es notamment aux Smart Grids - au sens large, tous r\u00e9seaux confondus) : syndicat d\u2019\u00e9nergie en cas de d\u00e9l\u00e9gation de la comp\u00e9tence, ou d\u00e9signation d\u2019une personne en interne, ou mission d\u2019un AMO pour renforcer les comp\u00e9tences',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.1.4',
            id_nomenclature: '3.1.1.1.4',
            nom: 'elle connait les provisions pour renouvellement qu\u0027elle est en droit de r\u00e9clamer le cas \u00e9ch\u00e9ant ;',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.1.1.2',
        id_nomenclature: '3.1.1.2',
        nom: 'Impliquer les acteurs de la distribution d\u2019\u00e9nergie de mani\u00e8re transversale',
        description: '',
        thematique_id: 'energie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.1.2.1',
            id_nomenclature: '3.1.1.2.1',
            nom: 'les concessionnaires prennent ou ont pris une part active aux travaux du PCAET ou \u00e9quivalent (signature de charte, participation aux ateliers\u2026)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.2.2',
            id_nomenclature: '3.1.1.2.2',
            nom: 'un comit\u00e9 consultatif sp\u00e9cifique au r\u00e9seau de chaleur/froid a \u00e9t\u00e9 mis en place.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.2.3',
            id_nomenclature: '3.1.1.2.3',
            nom: 'la collectivit\u00e9\u0301 s\u2019assurer de la bonne repr\u00e9sentativit\u00e9\u0301 de l\u2019ensemble des acteurs et notamment de la pr\u00e9sence des repr\u00e9sentants des usagers et des abonn\u00e9s.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.1.1.3',
        id_nomenclature: '3.1.1.3',
        nom: 'Int\u00e9grer des crit\u00e8res d\u2019efficacit\u00e9 \u00e9nerg\u00e9tique et de d\u00e9veloppement des \u00e9nergies renouvelable dans le service public de distribution d\u2019\u00e9nergie',
        description: '',
        thematique_id: 'energie',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.1.3.1',
            id_nomenclature: '3.1.1.3.1',
            nom: 'pour les r\u00e9seaux de chauffage/froid urbain, la collectivit\u00e9 est attentive \u00e0 la performance environnementale dans le choix de son concessionnaire et inscrit des exigences dans le contrat et les avenants qui les lient. Exemple d\u2019exigences : r\u00e9alisation des travaux et conseils en MDE aupr\u00e8s de la collectivit\u00e9 et des usagers, \u00e9tudes de potentiel et promotion des \u00e9nergies renouvelables, mise en place d\u2019un fond d\u00e9di\u00e9 \u00e0 l\u2019am\u00e9lioration de performance \u00e9nerg\u00e9tique du r\u00e9seau, syst\u00e8me de management environnemental type ISO, suivi d\u2019un indicateur en gCO2/kWh... La r\u00e9alisation effective des actions est v\u00e9rifi\u00e9e via le rapport annuel du concessionnaire. Des indicateurs de performance \u00e9nerg\u00e9tique, environnementale et \u00e9conomique du r\u00e9seau de chaleur sont mis en \u00e9vidence \u00e0 travers un suivi mensuel ou a minima un bilan annuel.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.3.2',
            id_nomenclature: '3.1.1.3.2',
            nom: 'la collectivit\u00e9 demande \u00e0 ses concessionnaires de pr\u00e9ciser dans leurs rapports annuels les mesures d\u0027am\u00e9lioration des performances \u00e9nerg\u00e9tiques r\u00e9alis\u00e9es (transformateurs performants, calorifugeage des r\u00e9seaux de chaleur, mesures de rendement...) et l\u0027\u00e9tat des r\u00e9flexions et actions sur les smart grid (ex : \u00e9tat du d\u00e9ploiement des compteurs Linky et Gazpar, utilisation des donn\u00e9es issues des compteurs communicants, opportunit\u00e9s et besoins de flexibilit\u00e9, r\u00e9flexion sur l\u0027int\u00e9gration de productions EnR \u00e9lectriques d\u00e9centralis\u00e9es, r\u00e9flexion sur l\u0027int\u00e9gration des v\u00e9hicules \u00e9lectriques et ses r\u00e9percussions sur les r\u00e9seaux ...) ou l\u2019injection du bio-m\u00e9thane dans le r\u00e9seau gaz',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.3.3',
            id_nomenclature: '3.1.1.3.3',
            nom: 'en r\u00e9gie, la performance \u00e9nerg\u00e9tique du service et sa contribution \u00e0 la politique MDE et EnR de la collectivit\u00e9 est clairement affich\u00e9e et formalis\u00e9e (r\u00e8glement de service, d\u00e9lib\u00e9ration, service d\u00e9di\u00e9), les donn\u00e9es sont capitalis\u00e9es et partag\u00e9es en interne pour suivre les effets de la politique \u00e9nergie-climat',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.1.1.4',
        id_nomenclature: '3.1.1.4',
        nom: 'D\u00e9finir et piloter une strat\u00e9gie en mati\u00e8re d\u2019optimisation des r\u00e9seaux pour dialoguer plus efficacement avec les acteurs sp\u00e9cialis\u00e9s',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.1.4.1',
            id_nomenclature: '3.1.1.4.1',
            nom: 'd\u00e9finir un plan strat\u00e9gique / une feuille de route propre \u00e0 la collectivit\u00e9, aliment\u00e9 par les rapports annuels des concessionnaires, suivi dans le temps par des agents form\u00e9s. Les solutions organisationnelles et techniques permettant le soutien au d\u00e9veloppement des \u00e9nergies renouvelables \u00e9lectriques sur le territoire en minimisant les couts de raccordement pour les producteurs sont par exemple \u00e9tudi\u00e9es.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.4.2',
            id_nomenclature: '3.1.1.4.2',
            nom: 'le sch\u00e9ma de coh\u00e9rence de d\u00e9veloppement des r\u00e9seaux de distribution d\u2019\u00e9nergie du PCAET est suivi et mis \u00e0 jour par la collectivit\u00e9 et ses gestionnaires. Il est actualis\u00e9 avec les op\u00e9rations d\u2019am\u00e9nagement de la collectivit\u00e9 et le d\u00e9veloppement des \u00e9nergies renouvelables sur le territoire.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.4.3',
            id_nomenclature: '3.1.1.4.3',
            nom: 'la collectivit\u00e9 exploite les donn\u00e9es des diff\u00e9rents r\u00e9seaux (\u00e9lectricit\u00e9, gaz, chaleur/froid) pour piloter et suivre de mani\u00e8re globale sa politique \u00e9nerg\u00e9tique',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.4.4',
            id_nomenclature: '3.1.1.4.4',
            nom: 'production par la collectivit\u00e9 de documents synth\u00e9tis\u00e9s/appropri\u00e9s sur ce sujet (ex : note courte sur les actions men\u00e9es par la collectivit\u00e9, etc.)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.1.1.5',
        id_nomenclature: '3.1.1.5',
        nom: 'Mettre en \u0153uvre un programme localis\u00e9 de ma\u00eetrise de l\u2019\u00e9nergie avec les gestionnaires/concessionnaires des r\u00e9seaux',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.1.5.1',
            id_nomenclature: '3.1.1.5.1',
            nom: 'la collectivit\u00e9 a \u0153uvr\u00e9 (via l\u2019autorit\u00e9 conc\u00e9dante le cas \u00e9ch\u00e9ant) pour la mise en place d\u0027un service de flexibilit\u00e9 local aupr\u00e8s du gestionnaire de r\u00e9seau (\u00e9tude en cours ou service en place), appel\u00e9 \u00e9galement \u00ab boucle \u00e9nerg\u00e9tique locale \u00bb ou \u00e9quivalent : montage d\u2019une action pilote de MDE sur une zone particuli\u00e8re, en coordonnant tous les intervenants, en premier lieu le Syndicat d\u2019Energie et le gestionnaire de r\u00e9seau \u00e9lectrique. Exemple de contenu : donn\u00e9es de consommation des b\u00e2timents (agr\u00e9g\u00e9es \u00e0 diff\u00e9rentes \u00e9chelles : IRIS, rue, \u2026)  et r\u00e9seaux fournies par les gestionnaires des r\u00e9seaux, croisement des donn\u00e9es \u00e9nergie avec les donn\u00e9es du parc de b\u00e2timents via SIG pour identifier les zones d\u0027actions prioritaires et d\u00e9finir des indicateurs de suivi pertinents, conseils \u00e9tudes et incitations grand-public, actions commerciales des fournisseurs orient\u00e9es MDE gr\u00e2ce aux CEE, actions cibl\u00e9es sur les zones o\u00f9 le r\u00e9seau est en contrainte, montage de dossiers FACE de type macro\u2026',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.5.2',
            id_nomenclature: '3.1.1.5.2',
            nom: 'accompagnement de projet pilotes en auto-consommation d\u2019\u00e9lectricit\u00e9 renouvelable pour augmenter les taux d\u2019auto-consommation et d\u2019auto-production (juste dimensionnement, synchronisation de la consommation avec la production, op\u00e9ration collective\u2026)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.1.5.3',
            id_nomenclature: '3.1.1.5.3',
            nom: 'participation effective \u00e0 des projets de smartgrid',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.1.2',
    id_nomenclature: '3.1.2',
    nom: 'Inciter \u00e0 la r\u00e9duction des consommations et \u00e0 l\u2019achat d\u2019\u00e9lectricit\u00e9 verte avec les fournisseurs et syndicats d\u2019\u00e9nergie',
    description:
      '\u003cp\u003eLa collectivit\u00e9 \u0153uvre, en partenariat avec les fournisseurs d\u2019\u00e9nergie actifs sur le territoire et le syndicat d\u2019\u00e9nergie, \u00e0 inciter les usagers \u00e0 baisser leur consommation et \u00e0 augmenter la part d\u2019\u00e9lectricit\u00e9 renouvelable achet\u00e9e. Les clients et adh\u00e9rents sont sensibilis\u00e9s et des prestations de services dans ce domaine sont propos\u00e9es.\u003c/p\u003e\n',
    thematique_id: 'energie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.1.2.1',
        id_nomenclature: '3.1.2.1',
        nom: 'Inciter \u00e0 l\u2019achat d\u2019\u00e9lectricit\u00e9 renouvelable',
        description: '',
        thematique_id: 'energie',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.2.1.1',
            id_nomenclature: '3.1.2.1.1',
            nom: '\u00e0 c\u00f4t\u00e9 d\u0027un engagement en faveur de la production d\u0027\u00e9lectricit\u00e9 verte ou de l\u2019auto-consommation sur le territoire, la collectivit\u00e9 s\u0027est engag\u00e9e \u00e0 mener une politique active de promotion des achats d\u0027\u00e9lectricit\u00e9 verte aupr\u00e8s de ses habitants et acteurs socio-\u00e9conomiques pour augmenter la demande',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.2.1.2',
            id_nomenclature: '3.1.2.1.2',
            nom: 'la collectivit\u00e9 fait la promotion et informe les habitants et les entreprises de la possibilit\u00e9 d\u0027acheter de l\u0027\u00e9lectricit\u00e9 verte et sur les crit\u00e8res de qualit\u00e9 \u00e0 respecter (existence de labels au niveau europ\u00e9en, 100% ENR, qualit\u00e9 environnementale, transparence, crit\u00e8re d\u0027additionalit\u00e9, fond de d\u00e9veloppement des ENR...)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.2.1.3',
            id_nomenclature: '3.1.2.1.3',
            nom: 'la collectivit\u00e9 encourage/ soutient  les d\u00e9marches de groupement d\u0027achats d\u0027\u00e9lectricit\u00e9 verte des acteurs publics et priv\u00e9s (r\u00e9union d\u0027information/formation/cahier des charges...)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.1.2.2',
        id_nomenclature: '3.1.2.2',
        nom: 'Utiliser la facturation de l\u2019\u00e9nergie pour encourager les comportements \u00e9conomes (selon marge d\u2019actions)',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.2.2.1',
            id_nomenclature: '3.1.2.2.1',
            nom: 'Des principes de tarification des agents \u00e9nerg\u00e9tiques favorisant un comportement \u00e9conome en \u00e9nergie (ou a minima la limitation des pointes de consommation) apparaissent de mani\u00e8re \u00e9vidente dans les objectifs politiques des fournisseurs locaux (factures) : prix diff\u00e9renci\u00e9s selon les saisons (\u00e9t\u00e9/hiver), diff\u00e9renciation heure pleine/heure creuse, pas de r\u00e9duction li\u00e9e \u00e0 la quantit\u00e9, mod\u00e8les tarifaires novateurs (par ex. tarif d\u0027efficacit\u00e9)\u2026',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.2.2.2',
            id_nomenclature: '3.1.2.2.2',
            nom: 'sur les factures d\u0027\u00e9lectricit\u00e9, de gaz ou chauffage urbain (selon marges d\u0027action de la collectivit\u00e9) sont indiqu\u00e9es une valeur de r\u00e9f\u00e9rence (moyenne nationale ou r\u00e9gionale d\u0027un m\u00e9nage-type), l\u0027\u00e9volution des consommations par rapport aux ann\u00e9es pr\u00e9c\u00e9dentes, des recommandations ou des sites-ressources',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.1.2.3',
        id_nomenclature: '3.1.2.3',
        nom: 'D\u00e9velopper les prestations en mati\u00e8re de ma\u00eetrise de l\u2019\u00e9nergie et d\u2019\u00e9nergie renouvelable propos\u00e9es par les acteurs de l\u2019\u00e9nergie',
        description: '',
        thematique_id: 'energie',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.2.3.1',
            id_nomenclature: '3.1.2.3.1',
            nom: 'le syndicat d\u2019\u00e9nergie auquel adh\u00e8re la collectivit\u00e9 propose des services en mati\u00e8re de MDE et d\u2019ENR aux collectivit\u00e9s (groupement de commande d\u2019achats d\u2019\u00e9nergie renouvelable, r\u00e9cup\u00e9ration de CEE, \u00e9tudes d\u2019opportunit\u00e9 ENR, CEP\u2026) ; la collectivit\u00e9 en b\u00e9n\u00e9ficie et/ou sollicite son syndicat pour mettre en place ce type de services (r\u00e9unions, courriers r\u00e9p\u00e9t\u00e9s...)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.2.3.2',
            id_nomenclature: '3.1.2.3.2',
            nom: 'les fournisseurs d\u2019\u00e9nergie (gaz, chaleur, \u00e9lectricit\u00e9, en lien avec la collectivit\u00e9) proposent aux clients des prestations de services dans le domaine de la MDE et des ENR',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.2.3.3',
            id_nomenclature: '3.1.2.3.3',
            nom: 'des objectifs de performances et d\u2019am\u00e9lioration de ces services sont fix\u00e9s (par exemple certification ISO, labellisation Clair\u2019\u00e9nergie ou r\u00e9f\u00e9rence \u00e0 des crit\u00e8res de qualit\u00e9 inspir\u00e9s de d\u00e9marche de labellisation de l\u2019\u00e9lectricit\u00e9 europ\u00e9ennes comme OK Power en Allemagne ou Naturmade Star en Suisse \u2013respect de l\u2019environnement des installations de productions, additionnalit\u00e9-)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.2.3.4',
            id_nomenclature: '3.1.2.3.4',
            nom: 'accompagnement de projets pilotes d\u2019auto-consommation d\u2019\u00e9lectricit\u00e9 renouvelable (\u00e9valu\u00e9 dans la mesure 3.1.1.)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.1.2.4',
        id_nomenclature: '3.1.2.4',
        nom: 'Suivre l\u2019efficacit\u00e9 des actions men\u00e9es',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.1.2.4.1',
            id_nomenclature: '3.1.2.4.1',
            nom: 'la collectivit\u00e9 s\u0027est rapproch\u00e9e des fournisseurs actifs de son territoire pour conna\u00eetre et orienter les offres propos\u00e9es sur son territoire et suivre le volume d\u0027\u00e9lectricit\u00e9 verte achet\u00e9 \u00e0 l\u0027\u00e9chelle du territoire (habitants et acteurs socio-professionnels publics et priv\u00e9s)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.2.4.2',
            id_nomenclature: '3.1.2.4.2',
            nom: 'si une r\u00e9gie d\u0027\u00e9lectricit\u00e9 ou une SEM est pr\u00e9sente sur le territoire, elle poss\u00e8de parmi ses produits une offre 100% renouvelable et la proportion de clients est en augmentation sur ce produit',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.1.2.4.3',
            id_nomenclature: '3.1.2.4.3',
            nom: 'le volume des prestations fournies est en augmentation (constat\u00e9 par l\u2019augmentation du chiffre d\u2019affaire associ\u00e9 \u00e0 ces prestations, l\u2019augmentation des adh\u00e9rents, des op\u00e9rations financ\u00e9es\u2026)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.2.1',
    id_nomenclature: '3.2.1',
    nom: 'R\u00e9cup\u00e9rer la chaleur industrielle, pratiquer la cog\u00e9n\u00e9ration, utiliser les r\u00e9seaux de chaleur/froid comme vecteur',
    description:
      '\u003cp\u003eLes possibilit\u00e9s de r\u00e9cup\u00e9ration de chaleur des grandes entreprises industrielles et des centrales \u00e9lectriques, y compris \u00e0 partir et pour la production de froid, sont exploit\u00e9es.\u003c/p\u003e\n\u003cp\u003eLe potentiel de cog\u00e9n\u00e9ration voire de tri-g\u00e9n\u00e9ration (\u00e0 partir d\u2019\u00e9nergies renouvelables prioritairement, puis de gaz naturel) par exemple pour le secteur du chauffage ou du rafra\u00eechissement, est connu et exploit\u00e9. Les technologies et les sources d\u2019\u00e9nergie utilis\u00e9es, sont choisies dans une approche multicrit\u00e8re climat-air-\u00e9nergie.\u003c/p\u003e\n\u003cp\u003eLa mobilisation du potentiel de r\u00e9cup\u00e9ration de chaleur est pens\u00e9e en coh\u00e9rence avec le d\u00e9veloppement des r\u00e9seaux chaleur.\u003c/p\u003e\n',
    thematique_id: 'energie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.2.1.1',
        id_nomenclature: '3.2.1.1',
        nom: 'Evaluer le potentiel de r\u00e9cup\u00e9ration de chaleur et de cog\u00e9n\u00e9ration',
        description:
          '\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003ecaracte\u0301rise le gisement de chaleur fatale ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003efait un e\u0301tat des lieux sur les besoins e\u0301nerge\u0301tiques du site ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eidentifie les actions d\u2019e\u0301conomie d\u2019e\u0301nergie a\u0300 mener et de\u0301finit un plan d\u2019actions ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ede\u0301finit la meilleure strate\u0301gie de valorisation de chaleur (pour la production de froid ou d\u0027\u00e9lectricit\u00e9 pour les DOM), et fixe des objectifs chiffr\u00e9s de r\u00e9cup\u00e9ration.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
        thematique_id: 'energie',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.2.1.1.1',
            id_nomenclature: '3.2.1.1.1',
            nom: 'approfondir la connaissance du tissu industriel pr\u00e9sent sur leur territoire : recensement large puis pr\u00e9-ciblage des industries \u00e0 partir de la qualification de leurs activit\u00e9s (via les bases de donn\u00e9es publiques disponibles, ex : base SIRENE)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.1.2',
            id_nomenclature: '3.2.1.1.2',
            nom: 'rapprochement aupr\u00e8s des industries a priori pertinentes et des gros consommateurs',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.1.3',
            id_nomenclature: '3.2.1.1.3',
            nom: 'identification des projets existants et de sites ainsi que des zones de demande en chaleur/froid',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.1.4',
            id_nomenclature: '3.2.1.1.4',
            nom: '\u00e9valuation qualitative des rejets thermiques des entreprises industrielles',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.1.5',
            id_nomenclature: '3.2.1.1.5',
            nom: '\u00e9valuation quantitative du potentiel \u00e0 travers une \u00e9tude de potentiel pre\u0301alable re\u0301cente qui :',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.1.6',
            id_nomenclature: '3.2.1.1.6',
            nom: '\u00e9tude sur le potentiel en auto-consommation',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.1.7',
            id_nomenclature: '3.2.1.1.7',
            nom: '\u00e9tude de potentiel de micro-cog\u00e9n\u00e9ration',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.1.8',
            id_nomenclature: '3.2.1.1.8',
            nom: '\u00e9tude de potentiel d\u2019injection vers un r\u00e9seau de chaleur existant, potentiel pour r\u00e9aliser des (micro) r\u00e9seaux de chaleur/froid',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.2.1.2',
        id_nomenclature: '3.2.1.2',
        nom: 'Soutenir les installations de r\u00e9cup\u00e9ration de chaleur industrielle et de cog\u00e9n\u00e9ration sur le territoire',
        description: '',
        thematique_id: 'energie',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.2.1.2.1',
            id_nomenclature: '3.2.1.2.1',
            nom: 'des dispositions contraignantes et des objectifs de d\u00e9veloppement sont fix\u00e9s dans la programmation \u00e9nerg\u00e9tique de la collectivit\u00e9',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.2.2',
            id_nomenclature: '3.2.1.2.2',
            nom: 'la collectivit\u00e9 conseille activement les porteurs de projets du territoire',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.2.3',
            id_nomenclature: '3.2.1.2.3',
            nom: 'la collectivit\u00e9 permet aux entreprises de se rencontrer et d\u2019identifier des synergies potentielles relatives \u00e0 la r\u00e9cup\u00e9ration de chaleur (dans une d\u00e9marche globale d\u2019\u00e9cologie industrielle \u00e9valu\u00e9e dans la mesure 6.3.1).',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.2.4',
            id_nomenclature: '3.2.1.2.4',
            nom: 'la collectivit\u00e9 soutient une campagne / un programme de promotion de la micro-cog\u00e9n\u00e9ration',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.2.5',
            id_nomenclature: '3.2.1.2.5',
            nom: 'elle participe financi\u00e8rement aux installations lorsque la desserte concerne un r\u00e9seau de chaleur urbain',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.2.1.3',
        id_nomenclature: '3.2.1.3',
        nom: 'Suivre le d\u00e9veloppement de la r\u00e9cup\u00e9ration de chaleur et de la cog\u00e9n\u00e9ration et atteindre les objectifs fix\u00e9s',
        description: '',
        thematique_id: 'energie',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.2.1.3.1',
            id_nomenclature: '3.2.1.3.1',
            nom: 'des installations sont en fonctionnement sur le territoire (connaissance si possible des MWh r\u00e9cup\u00e9r\u00e9s/produits) et servent d\u2019exemples',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.3.2',
            id_nomenclature: '3.2.1.3.2',
            nom: 'le potentiel de r\u00e9cup\u00e9ration de la chaleur industrielle identifi\u00e9 est \u00e9puis\u00e9',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.3.3',
            id_nomenclature: '3.2.1.3.3',
            nom: 'le potentiel principal de cog\u00e9n\u00e9ration est \u00e9puis\u00e9 (hors micro-cog\u00e9n\u00e9ration)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.1.3.4',
            id_nomenclature: '3.2.1.3.4',
            nom: 'L\u2019injection vers un r\u00e9seau de chaleur \u00e0 proximit\u00e9 est r\u00e9alis\u00e9e (taux d\u2019ENR\u0026R du r\u00e9seau de chaleur valoris\u00e9 dans la mesure 3.2.2)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.2.2',
    id_nomenclature: '3.2.2',
    nom: 'Augmenter l\u0027utilisation des \u00e9nergies renouvelables pour la chaleur et le rafra\u00eechissement',
    description:
      '\u003cp\u003eLe potentiel d\u0027utilisation des \u00e9nergies renouvelables pour le chauffage des b\u00e2timents, l\u0027eau chaude sanitaire et le rafra\u00eechissement est \u00e9puis\u00e9, avec une attention sur la qualit\u00e9 de l\u0027air. Lorsque cela est possible, des r\u00e9seaux de chaleur renouvelable sont mis en place. L\u2019atteinte des objectifs est mesur\u00e9e avec le pourcentage d\u2019\u00e9nergie d\u0027origine renouvelable dans la consommation de chaleur ou de  sur le territoire.\u003c/p\u003e\n',
    thematique_id: 'energie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.2.2.1',
        id_nomenclature: '3.2.2.1',
        nom: '(0 dans les DOM) Utiliser les r\u00e9seaux de chaleur pour atteindre les objectifs fix\u00e9s en mati\u00e8re de chaleur renouvelable',
        description: '',
        thematique_id: 'energie',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.2.2.1.1',
            id_nomenclature: '3.2.2.1.1',
            nom: 'Le taux de production d\u2019\u00e9nergie renouvelable et de r\u00e9cup\u00e9ration des r\u00e9seaux de chaleur (hors r\u00e9seaux 100% fossiles) doit atteindre 75%.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.2.1.2',
            id_nomenclature: '3.2.2.1.2',
            nom: 'Le taux de couverture des besoins en chaleur (pour les secteurs r\u00e9sidentiel et tertiaire) par les r\u00e9seaux de chaleur d\u2019\u00e9nergies renouvelables et de r\u00e9cup\u00e9ration (hors r\u00e9seaux 100% fossiles) doit atteindre 10%.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.2.2.2',
        id_nomenclature: '3.2.2.2',
        nom: '(100% dans les DOM) Atteindre les objectifs fix\u00e9s en mati\u00e8re de couverture des besoins de chaleur et de  du territoire par les \u00e9nergies renouvelables',
        description: '',
        thematique_id: 'energie',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.2.2.2.1',
            id_nomenclature: '3.2.2.2.1',
            nom: 'Le taux de production d\u0027\u00e9nergie renouvelable pour la chaleur et le rafra\u00eechissement sur le territoire doit atteindre 38% d\u2019\u00e9nergies renouvelables en M\u00e9tropole, et doit atteindre 75% de la couverture des besoins par les \u00e9nergies renouvelables dans les DOM (rappel : l\u0027autonomie \u00e9nerg\u00e9tique est vis\u00e9e \u00e0 l\u0027horizon 2030). Valorisation proportionnelle \u00e0 partir de 0.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.2.2.2',
            id_nomenclature: '3.2.2.2.2',
            nom: 'Pour les DOM-ROM, la pr\u00e9sence d\u2019un r\u00e9seau de froid est bonifi\u00e9e (+10%). La pr\u00e9sence d\u2019un r\u00e9seau de froid aliment\u00e9 en partie par des \u00e9nergies renouvelables ou de r\u00e9cup\u00e9ration est davantage bonifi\u00e9e (+20%).',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.2.3',
    id_nomenclature: '3.2.3',
    nom: 'Augmenter la production d\u0027\u00e9lectricit\u00e9 issue d\u0027\u00e9nergies renouvelables sur le territoire',
    description:
      '\u003cp\u003eIl y a un pourcentage \u00e9lev\u00e9 de production d\u0027\u00e9lectricit\u00e9 renouvelable sur le territoire, comptabilis\u00e9 en MWh/an et en % de la consommation totale d\u2019\u00e9lectricit\u00e9 sur le territoire (photovolta\u00efque, hydraulique, \u00e9olien, etc.). Le choix du type d\u2019\u00e9nergie renouvelable pour la production d\u2019\u00e9lectricit\u00e9 est  en fonction des avantages \u00e9cologiques.\u003c/p\u003e\n',
    thematique_id: 'energie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.2.3.1',
        id_nomenclature: '3.2.3.1',
        nom: 'Augmenter progressivement la production d\u0027\u00e9lectricit\u00e9 renouvelable',
        description: '',
        thematique_id: 'energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.2.3.1.1',
            id_nomenclature: '3.2.3.1.1',
            nom: 'Le taux de production d\u2019\u00e9lectricit\u00e9 renouvelable annuel (en %) est en hausse, avec a minima une augmentation de 20 kWh/hab par rapport au dernier bilan (datant de moins de 4 ans)',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.2.3.2',
        id_nomenclature: '3.2.3.2',
        nom: 'Diversifier les sources de production d\u2019\u00e9lectricit\u00e9 renouvelable',
        description:
          '\u003cp\u003e\u2212 pour les collectivit\u00e9s \u0026gt; 100 000 habitants : 20 Wc/hab (M\u00e9tropole) ; 60 Wc/hab (DOM-ROM)\u003c/p\u003e\n\u003cp\u003e\u2212 pour les collectivit\u00e9s \u0026gt; 50 000 habitants : 40 Wc/hab (M\u00e9tropole) ; 120 Wc/hab (DOM-ROM)\u003c/p\u003e\n\u003cp\u003e\u2212 pour les collectivit\u00e9s \u0026lt; 50 000 habitants : 60 Wc/hab (M\u00e9tropole) ; 180 Wc/hab (DOM-ROM)\u003c/p\u003e\n',
        thematique_id: 'energie',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.2.3.2.1',
            id_nomenclature: '3.2.3.2.1',
            nom: 'en compl\u00e9ment des installations publiques (mesure 2.2.3), susciter les projets citoyens et/ou encadrer l\u2019intervention d\u2019un d\u00e9veloppeur ext\u00e9rieur pour r\u00e9aliser et exploiter un \u00e9quipement d\u00e9di\u00e9 \u00e0 la production d\u2019\u00e9lectricit\u00e9 (un parc \u00e9olien, une ferme solaire, une unit\u00e9 de biomasse ou une centrale hydraulique) : lancer des appels d\u2019offres dans lesquels les conditions pr\u00e9cises du d\u00e9veloppement et de l\u2019exploitation du site sont d\u00e9termin\u00e9es, mettre en place des partenariats publics-priv\u00e9s',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.3.2.2',
            id_nomenclature: '3.2.3.2.2',
            nom: 'La puissance photovolta\u00efque install\u00e9e sur le territoire vise les seuils suivants :',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.3.2.3',
            id_nomenclature: '3.2.3.2.3',
            nom: 'Si le potentiel existe, des installations \u00e9oliennes ou hydro\u00e9lectriques sont en fonctionnement sur le territoire (y compris micro-\u00e9olien ou micro-hydro\u00e9lectricit\u00e9).',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.2.3.3',
        id_nomenclature: '3.2.3.3',
        nom: 'Atteindre une part \u00e9lev\u00e9e d\u2019\u00e9lectricit\u00e9 renouvelable',
        description:
          '\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003e16% de la consommation d\u0027\u00e9lectricit\u00e9 (en \u00e9nergie finale) pour les territoires ne disposant pas de potentiel \u00e9olien ou hydraulique (attest\u00e9 par une \u00e9tude)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003e40% pour les territoires disposant d\u2019un potentiel \u00e9olien ou hydraulique (attest\u00e9 par une \u00e9tude ou des installations existantes)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003e75% dans les DOM-ROM (rappel : l\u0027objectif vis\u00e9 est l\u0027autonomie \u00e9nerg\u00e9tique dans les DOM en 2030)\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eNota : En pr\u00e9sence d\u0027une r\u00e9gie/SEM, 30% des points sur le premier crit\u00e8re, 20% sur le deuxi\u00e8me.\u003c/p\u003e\n',
        thematique_id: 'energie',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.2.3.3.1',
            id_nomenclature: '3.2.3.3.1',
            nom: 'La production d\u0027\u00e9lectricit\u00e9 renouvelable atteint',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.2.3.3.2',
            id_nomenclature: '3.2.3.3.2',
            nom: 'en pr\u00e9sence de r\u00e9gie ou SEM \u00e9lectriques : Le mix \u00e9nerg\u00e9tique propos\u00e9 par les structures atteint 40% (M\u00e9tropole) et 100% (DOM-ROM) d\u2019\u00e9lectricit\u00e9 renouvelable.',
            description: '',
            thematique_id: 'energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.3.1',
    id_nomenclature: '3.3.1',
    nom: 'Optimiser l\u2019efficacit\u00e9 des installations d\u0027eau potable (\u00e9nergie et ressource)',
    description:
      '\u003cp\u003eLa collectivit\u00e9 souhaite r\u00e9duire ses consommations \u00e9nerg\u00e9tiques et \u00e9tend donc son action \u00e0 l\u0027am\u00e9lioration et l\u0027optimisation de l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique de ses installations d\u0027eau potable. Des mesures sont prises pour favoriser une utilisation \u00e9conome de l\u0027eau et la prise de conscience des consommateurs, par exemple :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003ela collectivit\u00e9 agit en faveur de  l\u2019efficacit\u00e9 de la production et distribution de l\u2019eau potable et de la pr\u00e9servation des ressources en eau.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela consommation individuelle d\u0027eau est clairement indiqu\u00e9e/d\u00e9taill\u00e9e dans les factures d\u0027eau\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles consommations d\u0027eau de l\u0027ann\u00e9e pr\u00e9c\u00e9dente et des donn\u00e9es moyennes (rep\u00e8res) sont communiqu\u00e9es pour comparaison\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003etarifs int\u00e9grant le principe du \u0026quot;pollueur-payeur\u0026quot; et encourageant \u00e0 \u00e9conomiser l\u2019eau\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003edistinction des charges pour l\u2019eau potable et pour les eaux us\u00e9es\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'eau',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.3.1.1',
        id_nomenclature: '3.3.1.1',
        nom: 'D\u00e9finir la recherche de l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique comme un objectif dans les contrats de DSP ou l\u0027inscrire dans la strat\u00e9gie de la r\u00e9gie',
        description: '',
        thematique_id: 'eau',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.1.1.1',
            id_nomenclature: '3.3.1.1.1',
            nom: 'la recherche de l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique est demand\u00e9e dans les contrats de DSP ou inscrite dans la strat\u00e9gie de la r\u00e9gie (une certification ISO 9001 et/ou 50001,  etc. du service ou des installations est un plus).',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.1.2',
            id_nomenclature: '3.3.1.1.2',
            nom: 'les indices les plus importants ont \u00e9t\u00e9 d\u00e9termin\u00e9s dans le cadre d\u0027une analyse (par ex. : consommation d\u0027\u00e9nergie, rendements, indices lin\u00e9aires de pertes, \u2026) et des mesures d\u0027am\u00e9lioration de l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique ont \u00e9t\u00e9 propos\u00e9es.',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.1.2',
        id_nomenclature: '3.3.1.2',
        nom: 'Conseiller et former, de fa\u00e7on fr\u00e9quente, les acteurs du secteur',
        description: '',
        thematique_id: 'eau',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.1.2.1',
            id_nomenclature: '3.3.1.2.1',
            nom: 'dispenser des formations \u00e0 destination des acteurs du secteur (s\u00e9minaires de formation pour les installateurs sanitaires...)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.2.2',
            id_nomenclature: '3.3.1.2.2',
            nom: 'coop\u00e9ration avec des associations sp\u00e9cialis\u00e9es',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.1.3',
        id_nomenclature: '3.3.1.3',
        nom: 'Mettre en \u0153uvre des mesures concr\u00e8tes visant l\u0027am\u00e9lioration et l\u0027optimisation de l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique des installations d\u0027eau potable',
        description: '',
        thematique_id: 'eau',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.1.3.1',
            id_nomenclature: '3.3.1.3.1',
            nom: 'le potentiel des sources situ\u00e9es en hauteur est compl\u00e8tement exploit\u00e9',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.3.2',
            id_nomenclature: '3.3.1.3.2',
            nom: 'le potentiel de production d\u0027\u00e9lectricit\u00e9 par turbinage (par ex. en remplacement des r\u00e9ducteurs de pression) est totalement exploit\u00e9, dans la mesure o\u00f9 cela est \u00e9conomiquement raisonnable',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.3.3',
            id_nomenclature: '3.3.1.3.3',
            nom: 'les pompes \u00e0 grande capacit\u00e9 ont un rendement \u00e9lev\u00e9 et fonctionnent dans des conditions hydrauliques ad\u00e9quates ; la r\u00e9gulation se fait en fonction de la demande (par vitesse variable si appropri\u00e9), les moteurs sont choisis de classe IE3 ou IE2 avec variation de vitesse (cf. Directive Europ\u00e9enne CE 640/2009).',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.3.4',
            id_nomenclature: '3.3.1.3.4',
            nom: 'les stations de traitement sont optimis\u00e9es',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.3.5',
            id_nomenclature: '3.3.1.3.5',
            nom: 'une d\u00e9tection des fuites est effectu\u00e9e (sectorisation, campagnes de d\u00e9tection, \u2026) et un budget appropri\u00e9 pour les travaux courants de r\u00e9paration de casses et un budget de renouvellement pluriannuel programm\u00e9  est \u00e0 disposition',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.1.4',
        id_nomenclature: '3.3.1.4',
        nom: 'Mettre en place des mesures incitatives pour faire \u00e9conomiser l\u2019eau aux usagers',
        description:
          '\u003cp\u003eLa promotion de l\u0027utilisation des eaux pluviales avec une attention particuli\u00e8re accord\u00e9e \u00e0 leur qualit\u00e9 est \u00e9valu\u00e9 dans l\u0027action 3.3.3.\u003c/p\u003e\n',
        thematique_id: 'eau',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.1.4.1',
            id_nomenclature: '3.3.1.4.1',
            nom: 'l\u0027utilisation \u00e9conome de l\u0027eau par les clients est d\u00e9finie dans les objectifs politiques du distributeur d\u0027eau et sont explicitement int\u00e9gr\u00e9s dans la strat\u00e9gie commerciale',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.4.2',
            id_nomenclature: '3.3.1.4.2',
            nom: 'utilisation de la facture comme moyen de sensibilisation : d\u00e9tails, ann\u00e9e pr\u00e9c\u00e9dente, valeurs moyennes fran\u00e7aises d\u0027un m\u00e9nage, ...',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.4.3',
            id_nomenclature: '3.3.1.4.3',
            nom: 'tarifs lin\u00e9aires ou tarification progressive (pas de rabais de quantit\u00e9)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.1.4.4',
            id_nomenclature: '3.3.1.4.4',
            nom: 'actions pour encourager les comportements et \u00e9quipements \u00e9conomes en eau : robinets \u00e9conomes, douche plut\u00f4t que bain, usage rationnel du lave-vaisselle et de la machine \u00e0 laver, ...',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.1.5',
        id_nomenclature: '3.3.1.5',
        nom: 'Anticiper le renouvellement des installations',
        description:
          '\u003cp\u003eLes tarifs appliqu\u00e9s couvrent les co\u00fbts \u00e0 long terme. Ils permettent l\u0027entretien ET le remplacement futur des installations et des r\u00e9seaux selon leur \u00e9tat.\u003c/p\u003e\n',
        thematique_id: 'eau',
        points: 10,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.1.6',
        id_nomenclature: '3.3.1.6',
        nom: 'Suivre les consommations d\u2019\u00e9nergie et d\u2019eau suite \u00e0 la mise en \u0153uvre des mesures',
        description:
          '\u003cp\u003eL\u2019effet des mesures est suivi par au moins 2 indicateurs, r\u00e9guli\u00e8rement utilis\u00e9s pour appliquer des actions correctives et d\u2019am\u00e9lioration et t\u00e9moignant d\u2019une \u00e9volution positive (ex : consommation d\u2019\u00e9nergie sp\u00e9cifique, rendement de la distribution ou de l\u2019ensemble du service, Indice lin\u00e9aire de Pertes en r\u00e9seau).\u003c/p\u003e\n\u003cp\u003eL\u0027analyse de l\u0027\u00e9volution des donn\u00e9es sur plusieurs ann\u00e9es est pr\u00e9f\u00e9rable.\u003c/p\u003e\n',
        thematique_id: 'eau',
        points: 20,
        actions: [],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.3.2',
    id_nomenclature: '3.3.2',
    nom: 'Optimiser le potentiel \u00e9nerg\u00e9tique des syst\u00e8mes d\u0027assainissement',
    description:
      '\u003cp\u003eLa collectivit\u00e9 optimise le potentiel \u00e9nerg\u00e9tique des syst\u00e8mes d\u0027assainissement :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eL\u2019efficacit\u00e9 \u00e9nerg\u00e9tique des installations de collecte et d\u2019\u00e9puration des eaux us\u00e9es de la collectivit\u00e9 est \u00e9lev\u00e9e et est mesur\u00e9e par des indicateurs.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eLe potentiel de r\u00e9cup\u00e9ration de la chaleur provenant des collecteurs d\u2019eaux us\u00e9es et/ou des installations d\u2019\u00e9puration des eaux us\u00e9es est \u00e9puis\u00e9.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eLe potentiel de valorisation des boues d\u2019\u00e9puration est \u00e9puis\u00e9.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'eau',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.3.2.1',
        id_nomenclature: '3.3.2.1',
        nom: 'R\u00e9aliser un \u00e9tat des lieux de l\u2019efficacit\u00e9 des syst\u00e8mes d\u2019assainissement  et formaliser les objectifs :',
        description: '',
        thematique_id: 'eau',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.2.1.1',
            id_nomenclature: '3.3.2.1.1',
            nom: 'une analyse de l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique des installations de collecte et d\u0027\u00e9puration des eaux us\u00e9es a \u00e9t\u00e9 effectu\u00e9e.',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.2.1.2',
            id_nomenclature: '3.3.2.1.2',
            nom: 'la recherche de l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique des stations d\u0027\u00e9puration est demand\u00e9e dans les contrats de DSP ou inscrite dans la strat\u00e9gie de la r\u00e9gie (une certification ISO 14001 et/ou 50001, etc. du service ou des installations est un plus).',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.2.2',
        id_nomenclature: '3.3.2.2',
        nom: 'Analyser le potentiel de r\u00e9cup\u00e9ration de chaleur sur les eaux us\u00e9es',
        description: '',
        thematique_id: 'eau',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.2.2.1',
            id_nomenclature: '3.3.2.2.1',
            nom: 'le potentiel d\u0027utilisation des calories  des stations d\u2019\u00e9puration et des collecteurs d\u0027eaux us\u00e9es est d\u00e9termin\u00e9, une \u00e9tude existe. Elle doit croiser les tailles de collecteurs, les d\u00e9bits disponibles avec les possibilit\u00e9s d\u2019utilisation (les sites consommateurs sont identifi\u00e9s).',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.2.3',
        id_nomenclature: '3.3.2.3',
        nom: 'Analyser le potentiel de valorisation des boues d\u2019\u00e9puration',
        description: '',
        thematique_id: 'eau',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.2.3.1',
            id_nomenclature: '3.3.2.3.1',
            nom: 'r\u00e9alisation d\u2019une \u00e9tude sur les possibilit\u00e9s de valorisation des boues ; valorisation mati\u00e8re et valorisation \u00e9nerg\u00e9tique devant \u00eatre \u00e9tudi\u00e9es de mani\u00e8re compl\u00e9mentaire selon les d\u00e9bouch\u00e9s et les possibilit\u00e9s techniques. Le co-traitement avec les d\u00e9chets m\u00e9nagers et/ou d\u2019origine agricole est \u00e0 \u00e9tudier pour de faibles volumes.',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.2.3.2',
            id_nomenclature: '3.3.2.3.2',
            nom: 'les gisements et techniques pouvant \u00e9voluer au fil du temps, la collectivit\u00e9 doit \u00eatre attentive \u00e0 l\u0027actualisation des donn\u00e9es et conclusions de l\u0027\u00e9tude sur les possibilit\u00e9s de valorisation des boues (attention aux \u00e9tudes trop anciennes).',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.2.4',
        id_nomenclature: '3.3.2.4',
        nom: 'R\u00e9aliser les travaux d\u2019am\u00e9lioration de l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique du syst\u00e8me d\u2019assainissement',
        description:
          '\u003cp\u003eExemples d\u0027actions possibles pour am\u00e9liorer l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique sur les r\u00e9seaux :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003er\u00e9seaux s\u00e9paratifs (hors centres villes anciens),\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ecampagnes de v\u00e9rification des conformit\u00e9s des branchements et de diminution des eaux claires parasites\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ecampagnes de connaissance des \u00e9tats des collecteurs visitables et non visitables et programmation de travaux\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eoptimisation des postes de rel\u00e8vement (conditions hydrauliques, fonctionnement)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003esyst\u00e8mes de stockage et d\u00e9pollution des eaux pluviales (\u00e9valu\u00e9 dans la mesure 3.3.3 d\u00e9di\u00e9e)\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eExemples d\u2019action possibles pour am\u00e9liorer l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique des stations d\u2019\u00e9puration :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eremplacement / optimisation du r\u00e9seau d\u0027a\u00e9ration des traitements biologiques, et mise en place d\u2019une r\u00e9gulation  asservie \u00e0 la charge \u00e0 traiter (et non cadence - dur\u00e9e ou potentiel REDOX),\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003emise en place de variateurs de vitesse selon pertinence\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eFili\u00e8re pluviale d\u00e9di\u00e9e visant \u00e0 limiter la dilution de l\u2019effluent\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eNota : notation variable selon le % des stations d\u2019\u00e9puration  couvertes par des mesures d\u2019optimisation \u00e9nerg\u00e9tique (\u00e0 moduler aussi en fonction du volume d\u2019eau trait\u00e9 par ces stations).\u003c/p\u003e\n',
        thematique_id: 'eau',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.2.4.1',
            id_nomenclature: '3.3.2.4.1',
            nom: 'les mesures r\u00e9sultant des analyses de l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique du syst\u00e8me d\u2019assainissement sont enti\u00e8rement appliqu\u00e9es.',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.2.5',
        id_nomenclature: '3.3.2.5',
        nom: 'R\u00e9aliser les travaux de valorisation \u00e9nerg\u00e9tique des syst\u00e8mes d\u2019assainissement',
        description: '',
        thematique_id: 'eau',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.2.5.1',
            id_nomenclature: '3.3.2.5.1',
            nom: 'les installations de r\u00e9cup\u00e9ration de chaleur sur les eaux us\u00e9es ou \u00e9pur\u00e9es sont r\u00e9alis\u00e9es ou en phase de construction',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.2.5.2',
            id_nomenclature: '3.3.2.5.2',
            nom: 'un dispositif de valorisation des boues d\u2019\u00e9puration est en place et d\u00e9passe le simple respect de la r\u00e8glementation dans sa mise en \u0153uvre : m\u00e9thanisation avec injection du biogaz dans le r\u00e9seau ou cog\u00e9n\u00e9ration si d\u00e9bouch\u00e9s de la chaleur existantes \u00e0 proximit\u00e9 (le chauffage des digesteurs et des locaux ne suffit pas, il est possible d\u2019utiliser la chaleur de l\u2019eau \u00e9pur\u00e9e pour cela), valorisation mati\u00e8re avec optimisation de la solution choisie ou caract\u00e8re innovant montrant une r\u00e9flexion pouss\u00e9e de la collectivit\u00e9 (s\u00e9chage solaire des boues, traitements visant \u00e0 am\u00e9liorer l\u0027int\u00e9r\u00eat agronomique des boues ou leur manutention, compostage\u2026 la r\u00e9alisation du plan d\u2019\u00e9pandage r\u00e8glementaire est appr\u00e9ci\u00e9 mais ne suffit pas pour avoir l\u2019ensemble des points).',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.2.6',
        id_nomenclature: '3.3.2.6',
        nom: 'Suivre r\u00e9guli\u00e8rement les actions et \u00e9valuer leurs effets',
        description:
          '\u003cp\u003ePar d\u00e9faut : ratio kWh/m3 \u00e9pur\u00e9 en diminution (comparaison sur plusieurs ann\u00e9es).\u003c/p\u003e\n\u003cp\u003eCes indicateurs sont r\u00e9guli\u00e8rement utilis\u00e9s pour des actions correctives et d\u0027am\u00e9lioration.\u003c/p\u003e\n\u003cp\u003eNota : 20% des points sur le premier crit\u00e8re, 5% sur les autres.\u003c/p\u003e\n',
        thematique_id: 'eau',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.2.6.1',
            id_nomenclature: '3.3.2.6.1',
            nom: 'L\u0027effet des mesures pour am\u00e9liorer l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique des syst\u00e8mes d\u2019assainissement est suivi par des indicateurs, en priorit\u00e9 : ratio kWh/kgDBO5 \u00e9limin\u00e9 se situe, selon fili\u00e8re, autour des valeurs suivantes : boues activ\u00e9es entre 2 et 4, SBR (r\u00e9acteur biologique s\u00e9quenc\u00e9) autour de 4 et BRM (bior\u00e9acteur \u00e0 membranes) autour de 5.',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.2.6.2',
            id_nomenclature: '3.3.2.6.2',
            nom: 'Suivi d\u2019un indicateur mesurant la production de chaleur de r\u00e9cup\u00e9ration sur les eaux us\u00e9es en MWh/an.',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.2.6.3',
            id_nomenclature: '3.3.2.6.3',
            nom: 'suivi d\u0027un indicateur de valorisation des boues d\u2019\u00e9puration, montrant la progression de la collectivit\u00e9, par exemple le % de boues valoris\u00e9es par m\u00e9thanisation et/ou compost\u00e9es.',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.3.3',
    id_nomenclature: '3.3.3',
    nom: 'Optimiser la gestion des eaux pluviales',
    description:
      '\u003cp\u003eLa collectivit\u00e9 pratique une gestion int\u00e9gr\u00e9e des eaux pluviales, permettant de ma\u00eetriser le ruissellement pluvial sur les zones am\u00e9nag\u00e9es (\u00e0 la source), ainsi qu\u2019\u00e0 l\u2019aval (ralentissement, stockage temporaire, infiltration), la d\u00e9pollution et de s\u2019adapter au site.\u003c/p\u003e\n\u003cp\u003eLa mesure inclut \u00e9galement la prise en compte des impacts du changement climatique, par exemple par la gestion des risques inondations (limitation de l\u0027imperm\u00e9abilisation des rues, places, chemins pi\u00e9tonniers, espaces publics).\u003c/p\u003e\n',
    thematique_id: 'eau',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.3.3.1',
        id_nomenclature: '3.3.3.1',
        nom: 'Conna\u00eetre les enjeux locaux de la gestion des eaux pluviales et des inondations sur son territoire',
        description: '',
        thematique_id: 'eau',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.3.1.1',
            id_nomenclature: '3.3.3.1.1',
            nom: 'sensibilisation des \u00e9lus et technicien \u00e0 la gestion int\u00e9gr\u00e9e des eaux pluviales par des solutions compensatoires de r\u00e9tention ou infiltration \u00e0 la parcelle',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.1.2',
            id_nomenclature: '3.3.3.1.2',
            nom: 'cartographie des zones inondables',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.1.3',
            id_nomenclature: '3.3.3.1.3',
            nom: 'sch\u00e9ma directeur d\u2019assainissement et du pluvial',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.1.4',
            id_nomenclature: '3.3.3.1.4',
            nom: 'mod\u00e9lisation des comportements des fleuves et des eaux pluviales',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.3.2',
        id_nomenclature: '3.3.3.2',
        nom: 'Informer la population des enjeux et des solutions permettant de limiter le ruissellement',
        description: '',
        thematique_id: 'eau',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.3.2.1',
            id_nomenclature: '3.3.3.2.1',
            nom: 'Information sur les zones \u00e0 risques et sur les comportements \u00e0 adopter en cas d\u2019inondation',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.2.2',
            id_nomenclature: '3.3.3.2.2',
            nom: 'Information sur la gestion int\u00e9gr\u00e9e des eaux pluviales : documents et/ou r\u00e9unions d\u2019informations sp\u00e9cialement con\u00e7us pour les particuliers',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.2.3',
            id_nomenclature: '3.3.3.2.3',
            nom: 'mesures d\u0027incitations des particuliers pour la r\u00e9cup\u00e9ration des eaux pluviales',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.3.3',
        id_nomenclature: '3.3.3.3',
        nom: 'R\u00e9duire les \u00e9missions de polluants et le ruissellement \u00e0 la source, au-del\u00e0 des comp\u00e9tences du service en charge de la gestion des eaux pluviales',
        description: '',
        thematique_id: 'eau',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.3.3.1',
            id_nomenclature: '3.3.3.3.1',
            nom: 'adapter le choix des rev\u00eatements de chauss\u00e9es et autres mat\u00e9riaux urbains (mat\u00e9riaux neutres); v\u00e9rifier l\u2019origine des mat\u00e9riaux et leur absence de contamination;',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.3.2',
            id_nomenclature: '3.3.3.3.2',
            nom: 'utiliser des peintures de sols et autres mat\u00e9riaux sans adjuvants toxiques;',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.3.3',
            id_nomenclature: '3.3.3.3.3',
            nom: 'modifier les pratiques locales de nettoyage des rues (fr\u00e9quence accrue du nettoyage); sensibiliser sur la n\u00e9cessit\u00e9 de ne pas rejeter de d\u00e9tritus sur la voie publique;',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.3.4',
            id_nomenclature: '3.3.3.3.4',
            nom: 'en m\u00e9tropole, utiliser de mani\u00e8re plus r\u00e9fl\u00e9chie les produits de d\u00e9neigement et de d\u00e9vergla\u00e7age;',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.3.5',
            id_nomenclature: '3.3.3.3.5',
            nom: 'am\u00e9liorer l\u2019efficacit\u00e9 des syst\u00e8mes de d\u00e9pollution des syst\u00e8mes industriels producteurs de fum\u00e9e; am\u00e9liorer la gestion des aires de stockage industrielles;',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.3.6',
            id_nomenclature: '3.3.3.3.6',
            nom: 'les services urbanisme (lutte contre l\u2019imperm\u00e9abilisation des sols dans les PLU et SCOT), espaces verts et transport (baisse des pollutions) sont conscients de leur r\u00f4le et participent \u00e0 l\u2019atteinte des objectifs en mati\u00e8re de gestion int\u00e9gr\u00e9e des eaux pluviales (cf. actions d\u00e9di\u00e9es dans le r\u00e9f\u00e9rentiel)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.3.4',
        id_nomenclature: '3.3.3.4',
        nom: 'Utiliser le r\u00e8glement d\u2019assainissement pour g\u00e9rer les eaux pluviales au plus pr\u00e8s de leur point de chute',
        description: '',
        thematique_id: 'eau',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.3.4.1',
            id_nomenclature: '3.3.3.4.1',
            nom: 'le r\u00e8glement d\u0027assainissement int\u00e8gre des normes permettant de limiter le ruissellement des eaux pluviales et la surcharge des collecteurs d\u2019assainissement (r\u00e9tention \u00e0 la parcelle, d\u00e9bit de fuite limit\u00e9, conformit\u00e9 des branchements aux r\u00e9seaux s\u00e9paratifs...)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.4.2',
            id_nomenclature: '3.3.3.4.2',
            nom: 'les mesures du r\u00e8glement d\u0027assainissement sont manifestement et syst\u00e9matiquement appliqu\u00e9es',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.4.3',
            id_nomenclature: '3.3.3.4.3',
            nom: 'des mesures particuli\u00e8res sont prises sur certaines zones pour limiter les risques d\u0027inondation par ruissellement qui peuvent \u00eatre amplifi\u00e9s par le changement climatique',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.3.5',
        id_nomenclature: '3.3.3.5',
        nom: 'Mener une politique ferme de pr\u00e9vention des inondations et de protection du milieu r\u00e9cepteur',
        description: '',
        thematique_id: 'eau',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.3.5.1',
            id_nomenclature: '3.3.3.5.1',
            nom: 'si elle est concern\u00e9e, la collectivit\u00e9 participe activement \u00e0 l\u0027\u00e9laboration d\u0027une politique de gestion des inondations, notamment dans la perspective de l\u0027adaptation au changement climatique (\u00e9chelle communale ou supra-communale, par exemple via les programmes d\u0027actions de pr\u00e9vention contre les inondations (PAPI), le plan submersions rapides...)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.5.2',
            id_nomenclature: '3.3.3.5.2',
            nom: 'la collectivit\u00e9 a mis en place un centre de contr\u00f4le des installations d\u2019assainissement et pluvial ; elle assure la d\u00e9pollution rejets urbains par temps de pluie (temps de retour au moins mensuel) avant rejet au milieu naturel par la gestion dynamique des bassins et r\u00e9seaux, la concentration des polluants et le traitement sur stations d\u2019\u00e9puration.',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.5.3',
            id_nomenclature: '3.3.3.5.3',
            nom: 'les zones concern\u00e9es par le risques inondations sont toutes couvertes par un PPRI, les PPRI anciens sont r\u00e9vis\u00e9s pour int\u00e9grer l\u2019\u00e9volution du contexte (imperm\u00e9abilisation, changement climatique\u2026)',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.5.4',
            id_nomenclature: '3.3.3.5.4',
            nom: 'les constructions dans les zones \u00e0 fort risques sont interdites',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.5.5',
            id_nomenclature: '3.3.3.5.5',
            nom: 'la taxe GEMAPI est mise en place si la comp\u00e9tence "gestion des milieux aquatiques et la pr\u00e9vention des inondations" est prise',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.3.6',
        id_nomenclature: '3.3.3.6',
        nom: 'Devenir exemplaire sur l\u2019ensemble du territoire',
        description: '',
        thematique_id: 'eau',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.3.6.1',
            id_nomenclature: '3.3.3.6.1',
            nom: 'de nombreux ouvrages de gestion alternative des eaux pluviales sont d\u00e9j\u00e0 pr\u00e9sents sur le territoire et leur mise en \u0153uvre est syst\u00e9matiquement \u00e9tudi\u00e9e dans les projets : noues, tranch\u00e9es, jardins de pluie, bassins paysagers, espaces inondables int\u00e9gr\u00e9s \u00e0 l\u0027am\u00e9nagement, ...',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.6.2',
            id_nomenclature: '3.3.3.6.2',
            nom: '\u00e9valuation de la proportion du territoire \u00e9quip\u00e9e d\u0027un syst\u00e8me s\u00e9paratif ou de r\u00e9tention/infiltration \u00e0 la parcelle',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.3.6.3',
            id_nomenclature: '3.3.3.6.3',
            nom: 'les rejets urbains par temps de pluie de temps de retour au moins mensuel sont trait\u00e9s avant rejet au milieu naturel',
            description: '',
            thematique_id: 'eau',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.3.4',
    id_nomenclature: '3.3.4',
    nom: 'Pr\u00e9server la biodiversit\u00e9 du territoire et d\u00e9velopper des espaces verts',
    description:
      '\u003cp\u003eA travers ses services techniques et ses partenariats, la collectivit\u00e9 contribue \u00e0 l\u2019am\u00e9lioration de la connaissance de la biodiversit\u00e9 de son territoire et \u00e0 la sensibilisation de tous les acteurs \u00e0 ce sujet. La collectivit\u00e9 met en place des actions concr\u00e8tes pour pr\u00e9server et/ou renforcer la biodiversit\u00e9 sur son territoire et d\u00e9velopper des espaces verts, notamment via une politique de v\u00e9g\u00e9talisation, de lutte contre la pollution lumineuse, de mobilisation des documents d\u2019urbanisme ou d\u2019outils de contractualisation sp\u00e9cifiques. L\u2019approche men\u00e9e est transversale et les co-b\u00e9n\u00e9fices avec les orientations climat-air-\u00e9nergie, notamment en  au changement climatique sont particuli\u00e8rement recherch\u00e9es.\u003c/p\u003e\n',
    thematique_id: 'foret_biodiv',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.3.4.1',
        id_nomenclature: '3.3.4.1',
        nom: 'Conna\u00eetre l\u2019\u00e9tat de la biodiversit\u00e9 et conna\u00eetre les enjeux li\u00e9s aux espaces verts sur son territoire (obligations r\u00e9glementaires)',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.4.1.1',
            id_nomenclature: '3.3.4.1.1',
            nom: 'la collectivit\u00e9 identifie les r\u00e9servoirs et corridors \u00e9cologiques et assure la mise en \u0153uvre de la trame verte et bleue, en relation avec le Sch\u00e9ma R\u00e9gional de coh\u00e9rence \u00e9cologique (obligation r\u00e9glementaire SCoT et PLUi)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.1.2',
            id_nomenclature: '3.3.4.1.2',
            nom: 'la collectivit\u00e9 \u00e9tudie les impacts du plan d\u2019action du plan climat / des actions men\u00e9es dans le cadre de la politique climat air \u00e9nergie sur la biodiversit\u00e9 (obligation de l\u2019\u00e9valuation environnementale strat\u00e9gique des PCAET)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.4.2',
        id_nomenclature: '3.3.4.2',
        nom: 'Sensibiliser \u00e0 l\u2019importance et \u00e0 la fragilit\u00e9 de la biodiversit\u00e9 et aux enjeux li\u00e9s aux espaces verts',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.4.2.1',
            id_nomenclature: '3.3.4.2.1',
            nom: 'des actions de sensibilisation des diff\u00e9rents publics \u00e0 la biodiversit\u00e9 sont mises en place ou soutenues par la collectivit\u00e9',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.2.2',
            id_nomenclature: '3.3.4.2.2',
            nom: 'la collectivit\u00e9 met en valeur les informations et actions locales relatives \u00e0 la biodiversit\u00e9 dans ses supports de communication (ex: journal communal ou intercommunal, site web...)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.2.3',
            id_nomenclature: '3.3.4.2.3',
            nom: 'la collectivit\u00e9 a \u00e9t\u00e9 partie prenante (initiative, financement, soutien, participation \u00e0 des r\u00e9unions, avis, \u2026) de la r\u00e9alisation des pratiques de gestion des espaces verts.',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.2.4',
            id_nomenclature: '3.3.4.2.4',
            nom: 'la collectivit\u00e9 organise de sessions de sensibilisation / formation en interne sur la gestion diff\u00e9renci\u00e9e des espaces verts et les pratiques alternatives aux produits phytosanitaires',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.4.3',
        id_nomenclature: '3.3.4.3',
        nom: 'R\u00e9duire les impacts de l\u2019\u00e9clairage sur la biodiversit\u00e9 nocturne',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.4.3.1',
            id_nomenclature: '3.3.4.3.1',
            nom: 'la collectivit\u00e9 se met en relation avec les associations environnementales locales, syndicat d\u2019\u00e9nergie ou autres partenaires pour faire le lien entre la politique d\u2019\u00e9clairage public et le respect de la biodiversit\u00e9',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.3.2',
            id_nomenclature: '3.3.4.3.2',
            nom: 'r\u00e9alisation d\u2019une trame sombre (ou trame noire)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.3.3',
            id_nomenclature: '3.3.4.3.3',
            nom: 'la collectivit\u00e9 organise un \u00e9v\u00e9nement contre la pollution lumineuse (ex : \u00ab Jour de la nuit \u00bb)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.3.4',
            id_nomenclature: '3.3.4.3.4',
            nom: 'la collectivit\u00e9 obtient le label \u00ab Villes et villages \u00e9toil\u00e9s \u00bb de l\u2019ANPCEN',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.3.5',
            id_nomenclature: '3.3.4.3.5',
            nom: 'la collectivit\u00e9 suit la r\u00e9glementation relative \u00e0 l\u2019\u00e9clairage des enseignes',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.4.4',
        id_nomenclature: '3.3.4.4',
        nom: 'Mettre en place une gestion diff\u00e9renci\u00e9e des espaces verts et des pratiques alternatives aux produits phytosanitaires sur le territoire',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.4.4.1',
            id_nomenclature: '3.3.4.4.1',
            nom: 'La collectivit\u00e9 pratique la gestion diff\u00e9renci\u00e9e des espaces verts, limitant au global les consommations d\u0027\u00e9nergie li\u00e9es \u00e0 l\u0027entretien, les quantit\u00e9s d\u0027engrais (notamment chimiques) et d\u0027eau et syst\u00e9matise les pratiques alternatives aux produits phytosanitaires sur les espaces verts dont elle a la charge (z\u00e9ro phyto obligatoire \u00e0 partir de 2017)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.4.2',
            id_nomenclature: '3.3.4.4.2',
            nom: 'La collectivit\u00e9 sensibilise les habitants \u00e0 la gestion diff\u00e9renci\u00e9e et aux pratiques alternatives aux produits phytosanitaires',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.4.3',
            id_nomenclature: '3.3.4.4.3',
            nom: 'la collectivit\u00e9 utilise des esp\u00e8ces rustiques et adapt\u00e9es au contexte local, y compris dans la perspective du changement climatique. Elle limite les esp\u00e8ces allerg\u00e8nes.',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.4.5',
        id_nomenclature: '3.3.4.5',
        nom: 'Prendre en compte la biodiversit\u00e9 dans une approche transversale',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.4.5.1',
            id_nomenclature: '3.3.4.5.1',
            nom: 'les services et les \u00e9lus en lien avec l\u2019urbanisme, les milieux naturels et la transition \u00e9nerg\u00e9tique travaillent ensemble pour mener la politique de pr\u00e9servation de la biodiversit\u00e9 (r\u00e9union commune, relecture it\u00e9rative des documents\u2026)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.5.2',
            id_nomenclature: '3.3.4.5.2',
            nom: 'l\u2019\u00e9laboration de la trame verte et bleue int\u00e8gre les enjeux et les objectifs de la d\u00e9marche climat-air-\u00e9nergie et vice-versa (restauration et entretien des haies bocag\u00e8res augmentatnt la ressource bois, croisement des potentiels \u00e9nerg\u00e9tiques et des cartes d\u2019enjeux environnementaux, s\u00e9questration carbone\u2026)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.5.3',
            id_nomenclature: '3.3.4.5.3',
            nom: 'des crit\u00e8res environnementaux sont d\u00e9finis pour orienter les porteurs de projet, afin de limiter l\u2019impact sur la biodiversit\u00e9 des constructions et des ENR (fiche d\u2019application de la trame verte bleue, zoom par secteur, etc.).',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.5.4',
            id_nomenclature: '3.3.4.5.4',
            nom: 'la collectivit\u00e9 concilie trame verte et bleue et densification des espaces urbains (trame verte et bleue urbaine multifonctionnelle, en cr\u00e9ant, pr\u00e9servant et/ou restaurant des milieux naturels - notamment berges et cours d\u0027eau- et des corridors \u00e9cologiques entre ces milieux)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.5.5',
            id_nomenclature: '3.3.4.5.5',
            nom: 'la collectivit\u00e9 d\u00e9cide d\u2019un seuil maximal d\u2019imperm\u00e9abilisation des sols pour tout projet d\u2019am\u00e9nagement de construction, de r\u00e9novation ou d\u2019agrandissement sur le territoire',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.5.6',
            id_nomenclature: '3.3.4.5.6',
            nom: 'la collectivit\u00e9 utilise le coefficient de de biotope par surface dans le PLU',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.5.7',
            id_nomenclature: '3.3.4.5.7',
            nom: 'la collectivit\u00e9 int\u00e8gre la vuln\u00e9rabilit\u00e9 des esp\u00e8ces au changement climatique \u00e0 la strat\u00e9gie d\u2019adaptation du territoire',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.4.6',
        id_nomenclature: '3.3.4.6',
        nom: 'Mettre en place des actions de pr\u00e9servation de la biodiversit\u00e9 contribuant \u00e0 l\u2019adaptation au changement climatique et \u00e0 l\u2019am\u00e9lioration du cadre de vie',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.4.6.1',
            id_nomenclature: '3.3.4.6.1',
            nom: 'la collectivit\u00e9 restaure des zones humides',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.6.2',
            id_nomenclature: '3.3.4.6.2',
            nom: 'la collectivit\u00e9 v\u00e9g\u00e9talise des b\u00e2timents (toitures, fa\u00e7ades\u2026) en prenant en compte la biodiversit\u00e9',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.6.3',
            id_nomenclature: '3.3.4.6.3',
            nom: 'la collectivit\u00e9 d\u00e9min\u00e9ralise des espaces urbains non b\u00e2tis (cours d\u2019\u00e9cole, d\u2019immeubles, voiries)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.6.4',
            id_nomenclature: '3.3.4.6.4',
            nom: 'la collectivit\u00e9 m\u00e8ne des actions de valorisation \u00e9cologique des espaces publics (parcs, dents creuses, friches industrielles, coul\u00e9es vertes, rives des plans et cours d\u2019eau\u2026)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.4.7',
        id_nomenclature: '3.3.4.7',
        nom: 'Utiliser des outils de contractualisation op\u00e9rationnels pour la mise en \u0153uvre de la trame verte et bleue',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.4.7.1',
            id_nomenclature: '3.3.4.7.1',
            nom: 'outil de contractualisation \u00e0 l\u2019\u00e9chelle parcellaire (Bail rural \u00e0 clauses environnementales, contrat Natura 2000, convention de gestion, cahier des charges de lotissement, mesure agro environnementale territorialis\u00e9e, \u2026)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.7.2',
            id_nomenclature: '3.3.4.7.2',
            nom: 'outil \u00e0 une \u00e9chelle plus large',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.4.8',
        id_nomenclature: '3.3.4.8',
        nom: 'Suivre l\u2019\u00e9volution de la biodiversit\u00e9 et la gestion des espaces verts',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.4.8.1',
            id_nomenclature: '3.3.4.8.1',
            nom: 'les services de la collectivit\u00e9 en lien avec les espaces verts ou l\u2019entretien du r\u00e9seau routier contribuent au comptage de la biodiversit\u00e9 et au suivi de son \u00e9volution',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.8.2',
            id_nomenclature: '3.3.4.8.2',
            nom: 'la collectivit\u00e9 suit l\u2019\u00e9volution de la biodiversit\u00e9 \u00e0 travers un observatoire ou un atlas dynamique de la biodiversit\u00e9 locale, en partenariat avec une association ou un autre organisme du territoire',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.4.8.3',
            id_nomenclature: '3.3.4.8.3',
            nom: 'les quantit\u00e9s annuelles d\u0027engrais et d\u0027eau pour les espaces verts sont suivies et en diminution',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__3.3.5',
    id_nomenclature: '3.3.5',
    nom: 'Valoriser les d\u00e9chets r\u00e9siduels et les biod\u00e9chets',
    description:
      '\u003cp\u003eLa collectivit\u00e9 valorise les d\u00e9chets r\u00e9siduels (comprenant les ordures m\u00e9nag\u00e8res r\u00e9siduelles, les refus des centres de tri, le tout-venant, les d\u00e9chets non recyclables incin\u00e9rables) et les bio-d\u00e9chets du territoire :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eLe potentiel \u00e9nerg\u00e9tique g\u00e9n\u00e9r\u00e9 par l\u2019incin\u00e9ration des d\u00e9chets produits sur le territoire de la collectivit\u00e9 ou par la combustion de d\u00e9chets pr\u00e9par\u00e9s sous forme de CSR (Combustibles Solides de R\u00e9cup\u00e9ration) dans des unit\u00e9s d\u00e9di\u00e9es est utilis\u00e9, au regard de la strat\u00e9gie de pr\u00e9vention et gestion des d\u00e9chets et ressources d\u00e9finie dans la mesure 1.2.3.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eLe potentiel \u00e9nerg\u00e9tique issu des gaz des d\u00e9charges est utilis\u00e9.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eLe potentiel de valorisation des biod\u00e9chets (paille, lisier, d\u00e9chets de bois, restes de r\u00e9coltes, d\u00e9chets organiques des m\u00e9nages et des activit\u00e9s \u00e9conomiques) est utilis\u00e9 via le compostage, la production de bio-diesel/bio-m\u00e9thane pour le chauffage (combustible) ou pour le transport (agro-carburant), des installations sp\u00e9cifiques de combustion de biod\u00e9chets.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'dechets',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__3.3.5.1',
        id_nomenclature: '3.3.5.1',
        nom: 'Effectuer un \u00e9tat des lieux du potentiel d\u2019optimisation de la valorisation \u00e9nerg\u00e9tique des d\u00e9chets',
        description:
          '\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eune  optimisation des \u00e9quipements de combustion, de r\u00e9cup\u00e9ration d\u2019\u00e9nergie ou la mise en place d\u0027\u00e9quipement de traitement des fum\u00e9es plus performants,\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela mise en place de syst\u00e8mes de r\u00e9cup\u00e9ration de chaleur fatale basse temp\u00e9rature notamment au niveau des fum\u00e9es ou des a\u00e9rocondenseurs, permettant par valorisation interne une optimisation du process d\u2019incin\u00e9ration (ex : pour r\u00e9chauffage air de combustion du four) ou bien une valorisation externe sur r\u00e9seau de chaleur\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela mise en place de dispositifs permettant d\u2019accepter une gamme plus large de d\u00e9chets pour limiter les vides de four,\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela mise en place d\u0027\u00e9quipements d\u2019am\u00e9lioration de l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique (type ORC, raccordement \u00e0 un r\u00e9seau de chaleur...).\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
        thematique_id: 'dechets',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.5.1.1',
            id_nomenclature: '3.3.5.1.1',
            nom: '\u00e9valuation fine de la quantit\u00e9 de biogaz \u00e9mis dans les centres d\u2019enfouissement techniques',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.1.2',
            id_nomenclature: '3.3.5.1.2',
            nom: 'une analyse sur l\u0027augmentation de l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique de l\u0027UIOM est disponible. Si la collectivit\u00e9 a d\u00e9l\u00e9gu\u00e9 sa comp\u00e9tence, elle incite et encourage la collectivit\u00e9 comp\u00e9tente \u00e0 effectuer cette analyse. L\u2019analyse porte par exemple sur :',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.1.3',
            id_nomenclature: '3.3.5.1.3',
            nom: '\u00e9tude de potentiel m\u00e9thanisation sur les biod\u00e9chets, int\u00e9grant des synergies avec les gros producteurs de biod\u00e9chets et les agriculteurs pour une vision globale des gisements',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.1.4',
            id_nomenclature: '3.3.5.1.4',
            nom: '\u00e9tude de faisabilit\u00e9 sur la mise en place de la collecte s\u00e9lective des biod\u00e9chets des m\u00e9nages (\u00e9valu\u00e9 dans l\u2019action 1.2.3)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.1.5',
            id_nomenclature: '3.3.5.1.5',
            nom: '\u00e9tude des possibilit\u00e9s d\u0027injection du biom\u00e9thane valoris\u00e9 dans le r\u00e9seau ou dans des v\u00e9hicules (budget ou moyens humains mobilis\u00e9s)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.1.6',
            id_nomenclature: '3.3.5.1.6',
            nom: '\u00e9tude des possibilit\u00e9s de production et de valorisation de bio-carburants \u00e0 partir des biod\u00e9chets locaux (budget ou moyens humains mobilis\u00e9s)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.5.2',
        id_nomenclature: '3.3.5.2',
        nom: 'Valoriser l\u2019\u00e9nergie issue de la gestion des d\u00e9chets',
        description: '',
        thematique_id: 'dechets',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.5.2.1',
            id_nomenclature: '3.3.5.2.1',
            nom: 'l\u0027UIOM valorise de la chaleur (utilisation compl\u00e8te, en interne et/ou vente \u00e0 l\u0027ext\u00e9rieur), suivi du % r\u00e9el de valorisation \u00e9nerg\u00e9tique/d\u00e9chets entrants.',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.2.2',
            id_nomenclature: '3.3.5.2.2',
            nom: 'si l\u0027UIOM produit de l\u0027\u00e9lectricit\u00e9, la chaleur r\u00e9siduelle est valoris\u00e9e (cog\u00e9n\u00e9ration)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.2.3',
            id_nomenclature: '3.3.5.2.3',
            nom: 'l\u0027unit\u00e9 de combustion de CSR valorise de la chaleur ou de l\u0027\u00e9lectricit\u00e9 (pour les DOM)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.2.4',
            id_nomenclature: '3.3.5.2.4',
            nom: 'Le captage du biogaz issu des centres d\u2019enfouissement est optimis\u00e9 : diminution des \u00e9missions en phase d\u2019exploitation avant mise en \u0153uvre des dispositifs d\u00e9finitifs de captage (captage pr\u00e9coce, optimisation de la dur\u00e9e d\u2019exploitation des alv\u00e9oles ou casiers) et limitation des fuites aux parois du r\u00e9seau, notamment par l\u2019optimisation des dimensionnements des r\u00e9seaux',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.2.5',
            id_nomenclature: '3.3.5.2.5',
            nom: 'le biogaz issu du centre d\u2019enfouissement est valoris\u00e9',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.2.6',
            id_nomenclature: '3.3.5.2.6',
            nom: 'une gestion int\u00e9gr\u00e9e des diff\u00e9rents biod\u00e9chets du territoire est mise en place, avec une part de valorisation \u00e9nerg\u00e9tique (m\u00e9thanisation, combustion ou agro-carburants)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.2.7',
            id_nomenclature: '3.3.5.2.7',
            nom: 'Pour les collectivit\u00e9s pratiquant prioritairement le compostage, elles veillent : promouvoir les bonnes pratiques aupr\u00e8s des particuliers (formation de ma\u00eetres composteurs, distribution de fourche ou brasse-compost, aires de d\u00e9monstration, rappel des param\u00e8tres cl\u00e9s : \u00e9quilibre carbone/Azote, taux d\u0027humidit\u00e9 et a\u00e9ration). Pour les plateformes de compostage centralis\u00e9, les meilleures pratiques sont r\u00e9alis\u00e9es et formalis\u00e9es (courbes de suivi des temp\u00e9ratures et de l\u0027humidit\u00e9, a\u00e9ration...), l\u0027impact des d\u00e9placements engendr\u00e9s pour l\u0027acheminement des d\u00e9chets verts est pris en compte (choix de la localisation...) et le compost produit est valoris\u00e9 localement et est conforme \u00e0 la norme (analyses physico-chimiques). En milieu rural, du co-compostage \u00e0 la ferme avec un ou plusieurs agriculteurs volontaires est r\u00e9alis\u00e9.',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.2.8',
            id_nomenclature: '3.3.5.2.8',
            nom: 'l\u0027interdiction du br\u00fblage \u00e0 l\u0027air libre des d\u00e9chets verts est contr\u00f4l\u00e9e et fait l\u0027objet de nombreuses actions de sensibilisation, des solutions alternatives sont propos\u00e9es aux particuliers (am\u00e9lioration de la collecte des d\u00e9chets verts, travail sur le compostage dans la restauration collective, fili\u00e8re courte de valorisation pour alimenter les chaufferies bois...)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.2.9',
            id_nomenclature: '3.3.5.2.9',
            nom: 'des d\u00e9bouch\u00e9s sont trouv\u00e9s pour l\u0027ensemble de l\u0027\u00e9nergie produite (par exemple vente \u00e0 un fournisseur de gaz, raccordement \u00e0 un r\u00e9seau de chaleur, favoriser l\u2019installation d\u2019utilisateurs d\u2019\u00e9nergie \u00e0 proximit\u00e9 des sites de traitements des d\u00e9chets producteurs d\u2019\u00e9nergie, etc.) et pour le compost (lien avec le monde agricole)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__3.3.5.3',
        id_nomenclature: '3.3.5.3',
        nom: 'Suivre les objectifs et atteindre un haut niveau de valorisation des d\u00e9chets',
        description: '\u003cp\u003eDOMAINE 4\u00a0: MOBILITE\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__3.3.5.3.1',
            id_nomenclature: '3.3.5.3.1',
            nom: 'Le rendement de l\u0027UIOM est \u00e9lev\u00e9 (sup\u00e9rieur ou \u00e9gal au seuil de performance \u00e9nerg\u00e9tique permettant la modulation de la TGAP selon la',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.3.2',
            id_nomenclature: '3.3.5.3.2',
            nom: 'les centres de stockage des d\u00e9chets m\u00e9nagers et assimil\u00e9s font l\u0027objet d\u0027une valorisation \u00e9nerg\u00e9tique du biogaz \u003e75%  (production de chaleur, cog\u00e9n\u00e9ration ou injection dans le r\u00e9seau gaz) (valorisation proportionnelle selon le pourcentage de biogaz valoris\u00e9, \u00e0 partir de 75% et avec le maximum des points \u00e0 100%)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.3.3',
            id_nomenclature: '3.3.5.3.3',
            nom: 'la production d\u2019\u00e9lectricit\u00e9 et de chaleur en kWh produit \u00e0 partir de biod\u00e9chets pour l\u0027ensemble du territoire (m\u00e9nages et activit\u00e9s \u00e9conomiques, agricoles...) est en augmentation ou \u00e0 d\u00e9faut la quantit\u00e9 en kg/hab.an de biod\u00e9chets m\u00e9nagers et assimil\u00e9s issus de collecte s\u00e9lective valoris\u00e9s en augmentation',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__3.3.5.3.4',
            id_nomenclature: '3.3.5.3.4',
            nom: 'indicateurs de suivi de la politique de compostage t\u00e9moignant des performances de la collectivit\u00e9 (ex : nombre de composteurs individuels distribu\u00e9s, nb de sites collectifs en pied d\u0027immeuble, etc.)',
            description: '',
            thematique_id: 'dechets',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.1.1',
    id_nomenclature: '4.1.1',
    nom: 'Promouvoir et suivre les pratiques multimodales sur le territoire',
    description:
      '\u003cp\u003eLa collectivit\u00e9 conduit des actions r\u00e9guli\u00e8res de promotion et d\u0027information pour une mobilit\u00e9 efficace et active \u00e0 l\u0027\u00e9chelle de l\u0027ensemble de son territoire. Elle s\u2019associe pour cela \u00e0 l\u2019ensemble des acteurs impliqu\u00e9s dans le domaine de la mobilit\u00e9.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 \u00e9value, constate des \u00e9volutions positives, et communique ainsi l\u0027\u00e9volution des parts modales associ\u00e9es \u00e0 l\u0027ensemble des modes actifs et alternatifs \u00e0 la voiture individuelle (v\u00e9lo, marche, transports publics, covoiturage...).\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.1.1.1',
        id_nomenclature: '4.1.1.1',
        nom: 'Conna\u00eetre les parts modales sur son territoire',
        description:
          '\u003cp\u003eLa connaissance du taux de motorisation et de multi-motorisation des m\u00e9nages (donn\u00e9es INSEE enqu\u00eates logement) est \u00e9valu\u00e9e dans la mesure 1.2.2.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.1.1.1',
            id_nomenclature: '4.1.1.1.1',
            nom: 'La collectivit\u00e9 r\u00e9alise une enqu\u00eate destin\u00e9e \u00e0 \u00e9valuer la part modale de chaque mode de d\u00e9placement actif ou alternatif : r\u00e9alisation d\u0027une   Enqu\u00eate Mobilit\u00e9 Certifi\u00e9e CEREMA (EMC\u00b2) ou d\u0027une m\u00e9thodologie simplifi\u00e9e ou partenariale pour les petites collectivit\u00e9s (niveau intercommunal avec d\u00e9clinaison communale, \u00e9tude r\u00e9alis\u00e9e dans le cadre de l\u0027\u00e9laboration d\u0027un PDM, d\u0027un SCoT ou d\u0027un PLU...). A minima, pour les territoires ruraux, les parts modales des trajets domicile-travail \u00e0 partir des donn\u00e9es INSEE sont identifi\u00e9es.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.1.2',
        id_nomenclature: '4.1.1.2',
        nom: 'S\u2019organiser pour mener une politique d\u2019information et de sensibilisation sur la mobilit\u00e9 durable',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.1.2.1',
            id_nomenclature: '4.1.1.2.1',
            nom: 'La collectivit\u00e9 formalise une politique d\u0027information et de sensibilisation des habitants, int\u00e9grant notamment des liens avec la qualit\u00e9 de l\u2019air',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.2.2',
            id_nomenclature: '4.1.1.2.2',
            nom: 'Elle dispose de budget et de moyens humains d\u00e9di\u00e9s \u00e0 l\u2019information sur la mobilit\u00e9 durable',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.2.3',
            id_nomenclature: '4.1.1.2.3',
            nom: 'La collectivit\u00e9 travaille a minima avec les autres collectivit\u00e9s et les Autorit\u00e9s Organisatrices  des Mobilit\u00e9s qui sont comp\u00e9tentes en mati\u00e8re d\u2019organisation des d\u00e9placements sur leur territoire afin de d\u00e9velopper l\u2019intermodalit\u00e9 (promotion des autres modes de transports disponibles au d\u00e9part ou \u00e0 destination, etc.)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.1.3',
        id_nomenclature: '4.1.1.3',
        nom: 'Promouvoir l\u2019intermodalit\u00e9 et les modes de transports alternatifs \u00e0 la voiture individuelle sous des formes et vers des cibles vari\u00e9es',
        description:
          '\u003cp\u003eLa collectivit\u00e9 utilise pour cela des supports et des formats vari\u00e9s :\u003c/p\u003e\n\u003cp\u003eLes actions sp\u00e9cifiques \u00e0 destination des scolaires sont \u00e9valu\u00e9es dans la mesure 6.5.4.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.1.3.1',
            id_nomenclature: '4.1.1.3.1',
            nom: 'les modes alternatifs \u00e0 la voiture individuelle et l\u0027intermodalit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.3.2',
            id_nomenclature: '4.1.1.3.2',
            nom: 'le t\u00e9l\u00e9travail, les vid\u00e9o-conf\u00e9rences, l\u2019am\u00e9nagement des horaires de travail pour limiter les d\u00e9placements et faciliter l\u0027usage des transports en commun, ou modes actifs',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.3.3',
            id_nomenclature: '4.1.1.3.3',
            nom: 'les Plans de mobilit\u00e9 dans les entreprises (PDME - Plans de mobilit\u00e9 employeur) et les plans de mobilit\u00e9 employeur communs pour les entreprises situ\u00e9es sur un m\u00eame site.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.3.4',
            id_nomenclature: '4.1.1.3.4',
            nom: 'de mani\u00e8re raisonn\u00e9e et compl\u00e9mentaire aux modes alternatifs, l\u0027usage des v\u00e9hicules \u00e9lectriques, au biogaz ou \u00e0 hydrog\u00e8ne',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.3.5',
            id_nomenclature: '4.1.1.3.5',
            nom: 'support d\u0027informations papier (plan, affiche, presse) et internet (plateforme de co-voiturage, calculateur d\u2019itin\u00e9raires, \u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.3.6',
            id_nomenclature: '4.1.1.3.6',
            nom: 'organisation d\u0027\u00e9v\u00e8nements ayant pour sujet l\u0027\u00e9co-mobilit\u00e9 (journ\u00e9e sans voiture, challenge de la mobilit\u00e9,  animations festives autour du v\u00e9lo - marquage gratuit de v\u00e9los, essai de v\u00e9los \u00e0 assistance \u00e9lectriques, \u00ab v\u00e9lorution \u00bb...)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.3.7',
            id_nomenclature: '4.1.1.3.7',
            nom: 'livret d\u2019information, plan th\u00e9matique et \u00ab offres d\u00e9couvertes \u00bb pour les nouveaux arrivants',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.3.8',
            id_nomenclature: '4.1.1.3.8',
            nom: 'soutiens financiers vari\u00e9s',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.3.9',
            id_nomenclature: '4.1.1.3.9',
            nom: 'mise en oeuvre d\u2019am\u00e9nagements urbains temporaires, en utilisant les principes de concertation de l\u2019urbanisme tactique, pour tester de nouveaux am\u00e9nagements encourageants les modes alternatifs en vue de les p\u00e9renniser si n\u00e9cessaires',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.1.4',
        id_nomenclature: '4.1.1.4',
        nom: 'Cr\u00e9er un lieu/service d\u00e9di\u00e9 \u00e0 l\u2019information sur l\u2019\u00e9co-mobilit\u00e9',
        description: '',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.1.4.1',
            id_nomenclature: '4.1.1.4.1',
            nom: 'L\u2019information disponible est centralis\u00e9e dans un lieu d\u00e9di\u00e9 \u00e0 la mobilit\u00e9 ou diffus\u00e9e par un service unique, facilement identifiable par les usagers (num\u00e9ro d\u2019appel d\u00e9di\u00e9, horaires d\u2019ouverture larges, localisation centrale\u2026). Ce lieu/service, qui peut \u00eatre mutualis\u00e9 \u00e0 l\u2019\u00e9chelle intercommunale, dispense des conseils gratuits et vise \u00e0 r\u00e9duire l\u2019utilisation syst\u00e9matique de la voiture individuelle. Il s\u0027adresse aux entreprises, aux administrations, aux commerces, aux \u00e9tablissements d\u0027enseignements, de soins ou de loisirs, mais aussi aux particuliers (salari\u00e9s, \u00e9l\u00e8ves, parents, touristes, clients...).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.4.2',
            id_nomenclature: '4.1.1.4.2',
            nom: 'd\u00e9veloppement de services d\u2019information individualis\u00e9e de mobilit\u00e9 aupr\u00e8s des usagers',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.1.5',
        id_nomenclature: '4.1.1.5',
        nom: 'Travailler avec les acteurs de la mobilit\u00e9 \u00e0 l\u2019\u00e9chelle du bassin de vie',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.1.5.1',
            id_nomenclature: '4.1.1.5.1',
            nom: 'La collectivit\u00e9 cr\u00e9\u00e9/participe \u00e0 un r\u00e9seau local d\u00e9di\u00e9 \u00e0 la mobilit\u00e9 durable : un r\u00e9seau \u00e9largi regroupant les diff\u00e9rents acteurs locaux concern\u00e9s par la mobilit\u00e9 durable (collectivit\u00e9s, services de l\u0027\u00c9tat, AOT-AOM, entreprises de transport, entreprises, organismes consulaires, associations d\u0027usagers ou de salari\u00e9s, etc.). Le r\u00e9seau est destin\u00e9 \u00e0 capitaliser et mutualiser les bonnes pratiques ainsi que les moyens (plans de mobilit\u00e9 , plateforme de covoiturage, formations \u00e0 l\u0027\u00e9co-conduite, etc.). Il contribue \u00e9galement \u00e0 la finalisation et l\u0027adaptation de la strat\u00e9gie en mati\u00e8re de transport et de mobilit\u00e9, notamment pour l\u0027\u00e9laboration d\u0027un plan de mobilit\u00e9 ou d\u2019un plan de mobilit\u00e9 simplifi\u00e9  (cf. action 1.2.2).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.1.6',
        id_nomenclature: '4.1.1.6',
        nom: 'V\u00e9rifier la progression des parts modales des modes de transports alternatifs \u00e0 la voiture, atteindre des valeurs exemplaires et les communiquer',
        description: '',
        thematique_id: 'mobilites',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.1.6.1',
            id_nomenclature: '4.1.1.6.1',
            nom: 'La collectivit\u00e9 analyse la progression des parts modales dans le temps et les compare avec les parts modales moyennes \u00e0 l\u0027\u00e9chelle nationale (ou r\u00e9gionale pour les DOM) ou encore de collectivit\u00e9s exemplaires : part modale des pi\u00e9tons, des cyclistes, des TC, du co-voiturage ou autre syst\u00e8me alternatif \u00e0 la voiture individuelle, adapt\u00e9 au milieu rural notamment (cf. indicateurs). Pour les collectivit\u00e9s rurales ou de petite taille, ce suivi peut-\u00eatre mutualis\u00e9 avec d\u2019autres collectivit\u00e9s, et effectu\u00e9 \u00e0 une \u00e9chelle sup\u00e9rieure (avec appropriation et d\u00e9clinaison par la collectivit\u00e9 infra).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.6.2',
            id_nomenclature: '4.1.1.6.2',
            nom: 'les performances sont bonnes',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.1.6.3',
            id_nomenclature: '4.1.1.6.3',
            nom: 'La collectivit\u00e9 communique et valorise l\u0027exemplarit\u00e9 de la politique de mobilit\u00e9 durable men\u00e9e (via une campagne d\u0027affichage des chiffres cl\u00e9s, dans les journaux locaux, \u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.1.2',
    id_nomenclature: '4.1.2',
    nom: 'Promouvoir la mobilit\u00e9 durable en interne au sein de la collectivit\u00e9',
    description:
      '\u003cp\u003eLa collectivit\u00e9 veille \u00e0 la gestion, l\u0027utilisation efficace et \u00e0 la faible consommation de carburant de sa flotte de v\u00e9hicules. Cette action implique des mesures portant sur la maintenance, l\u0027entretien, la conduite ou encore l\u0027\u00e9volution du parc de v\u00e9hicules. Il s\u0027agit \u00e9galement d\u0027optimiser, rationaliser et mutualiser l\u0027ensemble des d\u00e9placements des agents de la collectivit\u00e9 :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003ela collectivit\u00e9 encourage son personnel \u00e0 un comportement intelligent et durable en mati\u00e8re de mobilit\u00e9 par notamment la mise en place d\u0027un plan de mobilit\u00e9 employeur\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela collectivit\u00e9 veille \u00e0 l\u0027utilisation efficace et \u00e0 la faible consommation de carburant de sa flotte de v\u00e9hicules\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela collectivit\u00e9 choisit des v\u00e9hicules \u00e0 faibles \u00e9missions de polluants atmosph\u00e9riques lors du renouvellement de sa flotte\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.1.2.1',
        id_nomenclature: '4.1.2.1',
        nom: 'R\u00e9aliser un diagnostic de ses besoins et de sa flotte de v\u00e9hicules',
        description:
          '\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eun carnet de suivi pour chaque v\u00e9hicule qui permettra notamment de classer les v\u00e9hicules en fonction de leur impact sur le climat et l\u0027\u00e9nergie. Le carnet de suivi comprend le mod\u00e8le, le type, l\u0027\u00e2ge, la cat\u00e9gorie, le service de rattachement, le nombre de kilom\u00e8tres parcourus annuellement, le type de carburant, la consommation de carburant, les \u00e9missions de CO2 et de GES, la norme Euro, le budget global ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eun tableau de bord de suivi des consommations de carburants (global, par v\u00e9hicule et par service) et des \u00e9missions de GES associ\u00e9es et de pollutions atmosph\u00e9riques (a minima oxydes d\u2019azote et particules) ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eun bilan des sous-produits (carburants, huiles, pneus, produits d\u0027entretien, pi\u00e8ces de rechange, etc.) ;\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eun bilan des entretiens sur le v\u00e9hicule.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.2.1.1',
            id_nomenclature: '4.1.2.1.1',
            nom: 'La collectivit\u00e9 \u00e9value ses besoins en mati\u00e8re de v\u00e9hicules motoris\u00e9s (kilom\u00e8tres parcourus, usages, temps et fr\u00e9quence d\u0027utilisation, location, communication, \u2026).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.1.2',
            id_nomenclature: '4.1.2.1.2',
            nom: 'La collectivit\u00e9 fait un bilan \u00e9conomique de son poste \u00ab d\u00e9placements \u00bb',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.1.3',
            id_nomenclature: '4.1.2.1.3',
            nom: 'La collectivit\u00e9 r\u00e9alise un diagnostic de sa flotte de v\u00e9hicules. A ce titre, elle \u00e9labore :',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.2.2',
        id_nomenclature: '4.1.2.2',
        nom: 'Engager une politique de mobilit\u00e9 durable au sein de la collectivit\u00e9',
        description: '',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.2.2.1',
            id_nomenclature: '4.1.2.2.1',
            nom: 'S\u2019engager politiquement en faveur d\u2019un Plan de Mobilit\u00e9 (d\u00e9lib\u00e9ration sur des objectifs chiffr\u00e9s, discussion sur la mise en place du Forfait Mobilit\u00e9s durables). Pour les collectivit\u00e9s avec moins de 50 agents, moins de formalisme est exig\u00e9 (parler de programme d\u2019actions).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.2.2',
            id_nomenclature: '4.1.2.2.2',
            nom: 'Encourager le personnel \u00e0 l\u0027\u00e9co-mobilit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.2.3',
            id_nomenclature: '4.1.2.2.3',
            nom: 'Prendre des directives concernant la priorit\u00e9 aux trajets en transports publics, \u00e0 v\u00e9lo, \u00e0 pied pour les d\u00e9placements domicile-travail et/ou professionnels seulement (note de service)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.2.4',
            id_nomenclature: '4.1.2.2.4',
            nom: 'Justifier les d\u00e9placements professionnels en avion et voiture (soumis \u00e0 une autorisation pr\u00e9alable), et les d\u00e9placements des \u00e9lus municipaux, dont les frais font l\u2019objet d\u2019une prise en charge par la collectivit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.2.5',
            id_nomenclature: '4.1.2.2.5',
            nom: 'Int\u00e9grer dans les directives d\u2019achats des crit\u00e8res d\u2019efficacit\u00e9 \u00e9nerg\u00e9tique et des carburants faiblement \u00e9metteurs en CO2 et polluants atmosph\u00e9riques (attention port\u00e9e \u00e0 l\u2019\u00e9tiquette \u00e9nergie au poids des v\u00e9hicules ainsi qu\u2019a\u0300 leur motorisation : \u00e9lectrique, biogaz ou hydrog\u00e8ne).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.2.3',
        id_nomenclature: '4.1.2.3',
        nom: 'Former \u00e0 l\u0027\u00e9co-conduite et renouveler sa flotte de v\u00e9hicules',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.2.3.1',
            id_nomenclature: '4.1.2.3.1',
            nom: 'Proposer une offre de formation de type "Eco-drive" aux agents. Ces formations sont propos\u00e9es \u00e0 tous les agents, et le suivi de ces formations se fait notamment pour les collaborateurs parcourant beaucoup de kilom\u00e8tres, via des cours r\u00e9guliers de remise \u00e0 niveau (l\u0027administration paie les frais de formation et les heures d\u0027absence)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.3.2',
            id_nomenclature: '4.1.2.3.2',
            nom: 'Renouveler la flotte de v\u00e9hicules (en priorit\u00e9 les v\u00e9hicules les plus polluants et \u00e9nergivores) et acheter de nouveaux v\u00e9hicules en s\u0027appuyant sur les crit\u00e8res fix\u00e9s en mati\u00e8re d\u0027\u00e9nergie, d\u0027\u00e9missions de carbone et de polluants ainsi qu\u0027en prenant en compte les besoins et usages de la collectivit\u00e9 (taille, poids des v\u00e9hicules...)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.2.4',
        id_nomenclature: '4.1.2.4',
        nom: 'Optimiser, rationaliser les d\u00e9placements au sein de la collectivit\u00e9',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.2.4.1',
            id_nomenclature: '4.1.2.4.1',
            nom: 'Optimiser ou rationaliser les trajets et les circuits en installant des syst\u00e8mes de g\u00e9olocalisation et des logiciels d\u0027optimisation des d\u00e9placements',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.4.2',
            id_nomenclature: '4.1.2.4.2',
            nom: 'Mettre en place en interne des dispositifs de covoiturage ou de mutualisation des v\u00e9hicules et des trajets entre les services, et limiter les v\u00e9hicules de fonction au sein de la collectivit\u00e9 (r\u00e9duction du nombre de v\u00e9hicules sur la base des besoins r\u00e9els et substitution de certains v\u00e9hicules par des modes alternatifs)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.4.3',
            id_nomenclature: '4.1.2.4.3',
            nom: 'R\u00e9fl\u00e9chir \u00e0 une r\u00e9organisation des activit\u00e9s moins g\u00e9n\u00e9ratrices de flux.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.2.5',
        id_nomenclature: '4.1.2.5',
        nom: 'Mettre en place des mesures incitatives',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.2.5.1',
            id_nomenclature: '4.1.2.5.1',
            nom: 'R\u00e9glementer les places de stationnement devant les b\u00e2timents communaux (indiquer le r\u00e8glement et le tarif)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.5.2',
            id_nomenclature: '4.1.2.5.2',
            nom: 'Faire la promotion du co-voiturage pour les employ\u00e9s et faciliter le stationnement pour les covoitureurs',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.5.3',
            id_nomenclature: '4.1.2.5.3',
            nom: 'Encourager le t\u00e9l\u00e9travail et les vid\u00e9o-conf\u00e9rences (si d\u00e9bit suffisant en zone rurale)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.5.4',
            id_nomenclature: '4.1.2.5.4',
            nom: 'Am\u00e9nager les horaires pour faciliter l\u2019usage des modes actifs ou TC. En l\u2019absence de TC, la collectivit\u00e9 m\u00e8ne une r\u00e9flexion pour mettre en place des syst\u00e8mes de mobilit\u00e9s alternatives aux TC par exemple ligne de bus scolaire ou v\u00e9lo-bus scolaire, transport \u00e0 la demande, r\u00e9flexion autour des pistes cyclables touristiques, etc.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.5.5',
            id_nomenclature: '4.1.2.5.5',
            nom: 'D\u00e9ployer d\u2019autres mesures incitatives par exemple installation de douches, places de parking ve\u0301lo re\u0301pondant aux besoins des agents etc.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.2.6',
        id_nomenclature: '4.1.2.6',
        nom: 'Mettre \u00e0 disposition des moyens physiques dans la majorit\u00e9 des lieux de travail',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.2.6.1',
            id_nomenclature: '4.1.2.6.1',
            nom: 'Proposer des places de stationnement attrayantes et s\u00e9curis\u00e9es pour les v\u00e9los, situ\u00e9es \u00e0 un endroit optimal pr\u00e8s de l\u0027entr\u00e9e',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.6.2',
            id_nomenclature: '4.1.2.6.2',
            nom: 'Acheter et mettre \u00e0 disposition des agents des v\u00e9los de service ou de v\u00e9los de fonction',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.6.3',
            id_nomenclature: '4.1.2.6.3',
            nom: 'Donner la possibilit\u00e9 de suspendre/s\u00e9cher l\u0027\u00e9quipement cycliste (casque, p\u00e8lerine), douches/vestiaires',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.6.4',
            id_nomenclature: '4.1.2.6.4',
            nom: 'D\u00e9ployer une offre de voiture en auto-partage (pool de v\u00e9hicules de service partag\u00e9)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.6.5',
            id_nomenclature: '4.1.2.6.5',
            nom: 'Disposer de mat\u00e9riels de visioconf\u00e9rence et d\u2019audioconf\u00e9rence performants (si d\u00e9bit suffisant en zone rurale)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.2.7',
        id_nomenclature: '4.1.2.7',
        nom: 'Inciter financi\u00e8rement les agents \u00e0 l\u2019usage des modes actifs / TC',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.2.7.1',
            id_nomenclature: '4.1.2.7.1',
            nom: 'Mettre \u00e0 disposition et utiliser des titres de transports publics non nominatifs pour les d\u00e9placements professionnels',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.7.2',
            id_nomenclature: '4.1.2.7.2',
            nom: 'Les employ\u00e9s re\u00e7oivent des contributions pour des abonnements transports publics ou location v\u00e9lo allant au-del\u00e0 des obligations r\u00e9glementaires.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.7.3',
            id_nomenclature: '4.1.2.7.3',
            nom: 'Mettre en place  le forfait mobilit\u00e9 durable ou le remboursement des frais d\u0027alimentation d\u0027un v\u00e9hicule \u00e9lectrique personnel (voiture ou v\u00e9lo \u00e0 assistance \u00e9lectrique) utilis\u00e9 dans le cadre du travail. Le r\u00e8glement du remboursement des frais est compl\u00e9t\u00e9 par des conditions li\u00e9es \u00e0 l\u0027\u00e9nergie (d\u00e9placements professionnels en v\u00e9lo ou en train, abonnements transmissibles, cartes de r\u00e9duction, etc.).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.1.2.8',
        id_nomenclature: '4.1.2.8',
        nom: 'Atteindre les objectifs et communiquer sur les actions engag\u00e9es',
        description: '',
        thematique_id: 'mobilites',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.1.2.8.1',
            id_nomenclature: '4.1.2.8.1',
            nom: 'Les consommations annuelles sont en diminution (kW/an/agent)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.8.2',
            id_nomenclature: '4.1.2.8.2',
            nom: 'Les \u00e9missions de polluants atmosph\u00e9riques associ\u00e9s \u00e0 l\u2019usage de la flotte de v\u00e9hicules sont en diminution.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.8.3',
            id_nomenclature: '4.1.2.8.3',
            nom: 'Le pourcentage d\u2019agents form\u00e9s \u00e0 l\u2019\u00e9co-conduite est en augmentation.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.8.4',
            id_nomenclature: '4.1.2.8.4',
            nom: 'La collectivit\u00e9 r\u00e9alise des enqu\u00eates p\u00e9riodiques sur les crit\u00e8res du Plan de mobilit\u00e9 et sur la r\u00e9partition modale et par exemple sur l\u0027utilisation des places de stationnement, sur l\u0027utilisation des voitures partag\u00e9es, sur les v\u00e9los de service (suivi du nb de km parcourus) et sur d\u0027autres offres de mobilit\u00e9 aupr\u00e8s du personnel de la collectivit\u00e9.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.8.5',
            id_nomenclature: '4.1.2.8.5',
            nom: 'La collectivit\u00e9 a r\u00e9duit les d\u00e9placements li\u00e9s \u00e0 son activit\u00e9 (attest\u00e9 par des chiffres).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.8.6',
            id_nomenclature: '4.1.2.8.6',
            nom: 'La part des d\u00e9placements professionnels sans voiture est en augmentation (attest\u00e9 par des chiffres).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.8.7',
            id_nomenclature: '4.1.2.8.7',
            nom: 'La collectivit\u00e9 p\u00e9rennise ses actions \u00e9comobiles.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.8.8',
            id_nomenclature: '4.1.2.8.8',
            nom: 'Les r\u00e9sultats des enqu\u00eates sont utilis\u00e9s et int\u00e9gr\u00e9s dans les processus d\u2019am\u00e9lioration.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.1.2.8.9',
            id_nomenclature: '4.1.2.8.9',
            nom: 'La collectivit\u00e9 communique sur son exemplarit\u00e9, via notamment un affichage sur les v\u00e9hicules de la collectivit\u00e9 (ex : "je roule au gaz naturel")',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.2.1',
    id_nomenclature: '4.2.1',
    nom: '\u00c9laborer une politique de stationnement volontariste',
    description:
      '\u003cp\u003eLa collectivit\u00e9 souhaite mieux partager l\u0027espace public entre les diff\u00e9rents modes de transport, en particulier au niveau des zones centres, en s\u0027appuyant sur une politique de stationnement des v\u00e9hicules motoris\u00e9s raisonn\u00e9e. Ainsi la collectivit\u00e9 met en place une strat\u00e9gie efficace, elle g\u00e8re l\u2019ensemble du stationnement sur l\u2019espace public, y compris en dehors du centre (payant).\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.2.1.1',
        id_nomenclature: '4.2.1.1',
        nom: 'R\u00e9aliser un diagnostic de l\u2019offre de stationnement et des pratiques',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.1.1.1',
            id_nomenclature: '4.2.1.1.1',
            nom: 'R\u00e9aliser un diagnostic de l\u0027offre en stationnement (en collaboration avec les acteurs locaux tels que les commer\u00e7ants et les riverains) par exemple l\u2019inventaire des places de stationnement (publiques a minima et priv\u00e9es si possible) et du potentiel (jour et nuit)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.1.2',
            id_nomenclature: '4.2.1.1.2',
            nom: 'r\u00e9aliser un inventaire des pratiques actuelles (a minima en zone centre et de forte attractivit\u00e9)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.1.2',
        id_nomenclature: '4.2.1.2',
        nom: 'Mettre en place une strat\u00e9gie sur les zones analys\u00e9es',
        description: '',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.1.2.1',
            id_nomenclature: '4.2.1.2.1',
            nom: 'Mettre en place une politique de stationnement dans le centre-ville et/ ou les zones de forte pression (commerces de quartier, etc.) sur la base des besoins analys\u00e9s: r\u00e9sidents, places r\u00e9serv\u00e9es \u00e0 la logistique, places r\u00e9serv\u00e9es aux PMR, co-voiturage, etc.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.2.2',
            id_nomenclature: '4.2.1.2.2',
            nom: 'mettre en place une tarification diff\u00e9renci\u00e9e si besoin',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.2.3',
            id_nomenclature: '4.2.1.2.3',
            nom: 'Pour les communes en zones rurale, l\u2019accent est mis sur la sensibilisation et l\u2019information aupr\u00e8s des habitants sur le besoin de g\u00e9rer l\u2019usage de la voiture et de marquer les places r\u00e9serv\u00e9es au stationnement et le d\u00e9veloppement de zones bleues le cas \u00e9ch\u00e9ant autour des zones de trafic.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.2.4',
            id_nomenclature: '4.2.1.2.4',
            nom: 'Au-del\u00e0 de mettre en place une r\u00e9glementation du stationnement ;  la faire respecter via de la pr\u00e9vention et de la verbalisation (suivi \u00e0 titre informatif du nombre de verbalisation)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.1.3',
        id_nomenclature: '4.2.1.3',
        nom: 'Favoriser les v\u00e9hicules et les espaces de stationnement plus respectueux de l\u0027environnement',
        description:
          '\u003cp\u003e\u2013 Mettre en place un syst\u00e8me de guidage pour limiter la recherche de place (si n\u00e9cessaire)\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.1.3.1',
            id_nomenclature: '4.2.1.3.1',
            nom: 'Mettre en place une tarification et une signalisation diff\u00e9renci\u00e9e selon la qualit\u00e9 environnementale des v\u00e9hicules (co-voiturage, v\u00e9hicules peu \u00e9metteurs, etc.)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.3.2',
            id_nomenclature: '4.2.1.3.2',
            nom: 'installer des bornes ou services de recharge pour les v\u00e9hicules \u00e9lectriques sur les sites strat\u00e9giques, et dans les ensembles d\u0027habitations et locaux tertiaires (anticipant ou allant plus loin que les obligations r\u00e9glementaires), en veillant \u00e0 la coh\u00e9rence avec la strat\u00e9gie de rationalisation du stationnement \u00e9tablie',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.3.3',
            id_nomenclature: '4.2.1.3.3',
            nom: 'ombrager les espaces de stationnement pour limiter le recours \u00e0 la climatisation, tout en limitant l\u2019imperm\u00e9abilisation des sols',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.1.4',
        id_nomenclature: '4.2.1.4',
        nom: 'Repenser la strat\u00e9gie de stationnement afin de favoriser l\u0027intermodalit\u00e9 et le recours aux modes actifs de d\u00e9placement',
        description: '',
        thematique_id: 'mobilites',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.1.4.1',
            id_nomenclature: '4.2.1.4.1',
            nom: 'Inscrire des objectifs maximaux de stationnement priv\u00e9 dans les documents d\u0027urbanisme (ex. normes minimales de stationnement priv\u00e9 sur parcelle)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.4.2',
            id_nomenclature: '4.2.1.4.2',
            nom: 'ne pas favoriser la voiture \u00e0 tout prix en centre-ville ou dans les situations complexes en terme de stationnement (au cas par cas : privil\u00e9gier les parkings relais en p\u00e9riph\u00e9rie ou \u00e0 proximit\u00e9 des gares \u2013cf. mesure 4.3.4-, parking d\u00e9port\u00e9 de plusieurs centaines de m\u00e8tres bien reli\u00e9s aux P\u00f4les G\u00e9n\u00e9rateurs de Trafic par des itin\u00e9raires pi\u00e9tons ou cycles, aux abords des \u00e9coles par exemple)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.4.3',
            id_nomenclature: '4.2.1.4.3',
            nom: 'Encourager le stationnement dans les parkings souterrains ou ferm\u00e9s plut\u00f4t qu\u0027en voirie pour r\u00e9\u00e9quilibrer l\u0027occupation de l\u0027espace public au profit des cheminements pi\u00e9tons et cyclables et r\u00e9duire le nombre de voitures ventouses.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.4.4',
            id_nomenclature: '4.2.1.4.4',
            nom: 'R\u00e9server une partie des places \u00ab lib\u00e9r\u00e9es \u00bb en voirie aux personnes \u00e0 mobilit\u00e9 r\u00e9duite, afin d\u2019am\u00e9liorer leur accessibilit\u00e9.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.4.5',
            id_nomenclature: '4.2.1.4.5',
            nom: 'Convertir les places de stationnement sur voirie situ\u00e9es juste avant un passage pi\u00e9ton en espace de stationnement cyclable (favorisant au passage la visibilit\u00e9 des pi\u00e9tons)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.4.6',
            id_nomenclature: '4.2.1.4.6',
            nom: 'Affecter les recettes du stationnement payant pour la mobilit\u00e9 durable (par ex. d\u00e9dier les recettes du stationnement au financement de v\u00e9los en libre-service)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.1.5',
        id_nomenclature: '4.2.1.5',
        nom: 'Elargir la r\u00e9flexion sur le stationnement',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.1.5.1',
            id_nomenclature: '4.2.1.5.1',
            nom: 'Pour les collectivit\u00e9s situ\u00e9es dans des unit\u00e9s urbaines \u003e50 000 habitants : int\u00e9grer \u00e0 la r\u00e9flexion le stationnement de nuit et le stationnement priv\u00e9 (pour les nouvelles places), r\u00e9glementer le stationnement en dehors des zones centrales ou de forte attractivit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.5.2',
            id_nomenclature: '4.2.1.5.2',
            nom: 'mettre en place des espaces de stationnement dans une perspective d\u2019usages multiples (scolaire, commercial, associatif)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.1.6',
        id_nomenclature: '4.2.1.6',
        nom: 'Evaluer et communiquer sur la politique de stationnement',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.1.6.1',
            id_nomenclature: '4.2.1.6.1',
            nom: 'Mener des enqu\u00eates p\u00e9riodiques sur le taux de rotation + enqu\u00eate sur r\u00e9gularit\u00e9 du stationnement',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.6.2',
            id_nomenclature: '4.2.1.6.2',
            nom: 'analyser le taux d\u2019occupation dans le centre-ville',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.6.3',
            id_nomenclature: '4.2.1.6.3',
            nom: 'suivre un indicateur en nombre de place de stationnement par habitant et le comparer \u00e0 des valeurs de r\u00e9f\u00e9rences, pour viser un juste dimensionnement de l\u2019offre selon le contexte et les modes alternatifs disponibles',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.6.4',
            id_nomenclature: '4.2.1.6.4',
            nom: 'Prouver l\u2019efficacit\u00e9 de la tarification sur le trafic',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.6.5',
            id_nomenclature: '4.2.1.6.5',
            nom: 'Utiliser et int\u00e9grer les r\u00e9sultats des enqu\u00eates dans les processus d\u2019am\u00e9lioration',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.1.6.6',
            id_nomenclature: '4.2.1.6.6',
            nom: 'Communiquer les r\u00e9sultats aux acteurs du territoire',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.2.2',
    id_nomenclature: '4.2.2',
    nom: 'R\u00e9guler le trafic, r\u00e9duire la vitesse et valoriser l\u0027espace public',
    description:
      '\u003cp\u003eLa collectivit\u00e9 met en \u0153uvre des actions destin\u00e9es \u00e0 limiter et r\u00e9duire le trafic sur les axes principaux, r\u00e9duire les vitesses dans certaines zones et am\u00e9liorer la qualit\u00e9 des espaces publics. Il s\u0027agit notamment, \u00e0 travers l\u2019acquisition d\u2019outil de gestion du trafic d\u2019une part, de la signal\u00e9tique, la restructuration et le r\u00e9am\u00e9nagement de la voirie et des espaces publics d\u2019autre part, de privil\u00e9gier les usagers les plus vuln\u00e9rables tels que les pi\u00e9tons et cyclistes ainsi que de redynamiser les commerces de proximit\u00e9.\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.2.2.1',
        id_nomenclature: '4.2.2.1',
        nom: 'Identifier les zones g\u00e9n\u00e9ratrices de d\u00e9placements et travers\u00e9es par des flux importants',
        description: '',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.2.1.1',
            id_nomenclature: '4.2.2.1.1',
            nom: 'Identifier les points noirs (accidentologie)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.1.2',
            id_nomenclature: '4.2.2.1.2',
            nom: 'Identifier les axes o\u00f9 la congestion est importante et de risque de bouchons',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.1.3',
            id_nomenclature: '4.2.2.1.3',
            nom: 'Identifier o\u00f9 la collectivit\u00e9 \u00e0 des voies r\u00e9serv\u00e9es au transport public',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.1.4',
            id_nomenclature: '4.2.2.1.4',
            nom: 'Rep\u00e9rer les zones g\u00e9n\u00e9ratrices de d\u00e9placements et les axes de circulation importants',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.1.5',
            id_nomenclature: '4.2.2.1.5',
            nom: 'Identifier les zones o\u00f9 il est n\u00e9cessaire de mettre en place des zones apais\u00e9es (zone r\u00e9sidentielles, proximit\u00e9 des \u00e9coles, c\u0153ur de bourg, \u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.1.6',
            id_nomenclature: '4.2.2.1.6',
            nom: 'Actions de concertation en amont avec la population pour l\u2019identification des besoins et des ressentis',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.2.2',
        id_nomenclature: '4.2.2.2',
        nom: 'Mettre en place des outils de gestion du trafic',
        description: '',
        thematique_id: 'mobilites',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.2.2.1',
            id_nomenclature: '4.2.2.2.1',
            nom: 'Formaliser une strat\u00e9gie de gestion du trafic diff\u00e9renci\u00e9e selon les zones (centre, p\u00e9riph\u00e9rie, axes principaux, zones r\u00e9sidentielles, rues commerciales\u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.2.2',
            id_nomenclature: '4.2.2.2.2',
            nom: 'Outil de suivi du trafic (en temps r\u00e9el dans l\u2019id\u00e9al) et utilisation des donn\u00e9es pour l\u2019am\u00e9lioration de la politique de mobilit\u00e9 et notamment sur les \u00e9volutions des trac\u00e9es des voies bus (pour les collectivit\u00e9s travers\u00e9es par des flux importants et/ou celles dot\u00e9es de transport en commun)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.2.3',
            id_nomenclature: '4.2.2.2.3',
            nom: 'Valorisation des donn\u00e9es pour mieux anticiper les difficult\u00e9s \u00e0 venir et notamment favoriser le transport public, r\u00e9duire les bouchons et r\u00e9duire les pollutions et risques d\u2019accidents',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.2.3',
        id_nomenclature: '4.2.2.3',
        nom: 'R\u00e9am\u00e9nager et restructurer la voirie et les espaces publics afin de cr\u00e9er des zones de circulation apais\u00e9e',
        description:
          '\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eConception des espaces publics agr\u00e9able, continue, accessible aux personnes \u00e0 mobilit\u00e9 r\u00e9duite et s\u00e9curis\u00e9e d\u0027itin\u00e9raires pi\u00e9tonniers et cyclistes, am\u00e9nagement d\u0027espaces publics\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eCr\u00e9er une ou plusieurs Zones \u00e0 Circulation Restreinte en zone PPA\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eCr\u00e9er une ou plusieurs zones de rencontre (permet \u00e0 la rue de retrouver la diversit\u00e9 de ses usages, en redonnant la priorit\u00e9 au pi\u00e9ton. La diff\u00e9rence avec la zone pi\u00e9tonne est la pr\u00e9sence de v\u00e9hicules motoris\u00e9s. Mais le pi\u00e9ton b\u00e9n\u00e9ficie de la priorit\u00e9 sur tous (sauf le tramway) sur toute la largeur de la voie, m\u00eame la chauss\u00e9e. La vitesse des v\u00e9hicules est limit\u00e9e \u00e0 20 km/h, et le stationnement impossible sur ces voies.)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eCr\u00e9er une ou plusieurs zones 30 (zone de circulation qui se veut apaisante puisqu\u2019elle limite \u00e0 30 km/h la vitesse des v\u00e9hicules et rassure les autres usagers de la voirie (pi\u00e9tons et cyclistes)).\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eV\u00e9g\u00e9talisation et cr\u00e9ation d\u0027espaces verts et plantation dans les zones apais\u00e9es\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
        thematique_id: 'mobilites',
        points: 35,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.2.3.1',
            id_nomenclature: '4.2.2.3.1',
            nom: 'R\u00e9am\u00e9nagement et restructuration de la voirie et des espaces publics (trame viaire, organisation et signal\u00e9tique) dans les zones pr\u00e9sentant des probl\u00e9matiques de conflits (zones hostiles) pi\u00e9tons/cyclistes/automobilistes avec pour objectif d\u0027am\u00e9liorer la qualit\u00e9 des espaces publics et la redynamisation du commerce de proximit\u00e9 :',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.3.2',
            id_nomenclature: '4.2.2.3.2',
            nom: 'Installer une signalisation favorisant la r\u00e9duction des vitesses et la valorisation des commerces de proximit\u00e9 (radars p\u00e9dagogiques, silhouettes d\u2019enfants, traitement au sol diff\u00e9renci\u00e9 des lin\u00e9aires commerciaux, \u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.3.3',
            id_nomenclature: '4.2.2.3.3',
            nom: 'Signalisation aux entr\u00e9es de ville pour signaler la politique g\u00e9n\u00e9rale de la ville',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.3.4',
            id_nomenclature: '4.2.2.3.4',
            nom: 'Collaboration avec les acteurs du territoire et des citoyens pour la mise en place des actions',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.2.4',
        id_nomenclature: '4.2.2.4',
        nom: 'Evaluer les actions en faveur de la r\u00e9gulation du trafic et la valorisation de l\u2019espace public',
        description: '',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.2.4.1',
            id_nomenclature: '4.2.2.4.1',
            nom: 'Nombreux axes int\u00e9gr\u00e9s dans l\u2019outil de gestion du trafic',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.4.2',
            id_nomenclature: '4.2.2.4.2',
            nom: 'Pourcentage important de voirie apais\u00e9e (majorit\u00e9 des voies en centre-ville, voire g\u00e9n\u00e9ralisation de la zone 30 en ville avec zone d\u2019exception \u00e0 50)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.4.3',
            id_nomenclature: '4.2.2.4.3',
            nom: '\u00c9valuer et suivre les actions mises en \u0153uvre avec des enqu\u00eates p\u00e9riodiques comme les contr\u00f4les de la vitesse, la statistique des accidents, la r\u00e9duction du danger, des sondages de popularit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.2.4.4',
            id_nomenclature: '4.2.2.4.4',
            nom: 'Utiliser les r\u00e9sultats des enqu\u00eates et les int\u00e9grer dans les processus d\u0027am\u00e9lioration',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.2.3',
    id_nomenclature: '4.2.3',
    nom: 'Optimiser la logistique et la gestion des flux de marchandises sur le territoire',
    description:
      '\u003cp\u003ePour r\u00e9duire ses consommations d\u2019\u00e9nergie et r\u00e9duire les \u00e9missions de gaz \u00e0 effet de serre, la collectivit\u00e9 d\u00e9finit des r\u00e8gles et organise l\u0027approvisionnement et la distribution des marchandises de son territoire. Elle favorise \u00e9galement une activit\u00e9 de circuits de proximit\u00e9.\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.2.3.1',
        id_nomenclature: '4.2.3.1',
        nom: 'Engager une concertation avec les acteurs locaux pour identifier les flux de marchandises et les besoins',
        description: '',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.3.1.1',
            id_nomenclature: '4.2.3.1.1',
            nom: 'Identifier, contacter et mettre en relation les diff\u00e9rents acteurs de la logistique sur le territoire (collectivit\u00e9s, transporteurs, clients, chargeurs, commer\u00e7ants et citoyens) y compris les op\u00e9rateurs portuaires',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.1.2',
            id_nomenclature: '4.2.3.1.2',
            nom: 'dresser une cartographie des flux (int\u00e9grant aussi le trafic engendr\u00e9 par le transit des poids lourds)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.1.3',
            id_nomenclature: '4.2.3.1.3',
            nom: 'r\u00e9aliser un \u00e9tat des lieux sur la livraison de marchandises sur le territoire, (flux, nature, en int\u00e9grant notamment les op\u00e9rateurs portuaires et la probl\u00e9matique des livraisons li\u00e9es au e-commerce, notamment celles assur\u00e9es par des v\u00e9hicules utilitaires l\u00e9gers) et les besoins de stationnement associ\u00e9s',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.1.4',
            id_nomenclature: '4.2.3.1.4',
            nom: 'conna\u00eetre et sensibiliser les entreprises aux enjeux du \u00ab dernier kilom\u00e8tre \u00bb dans la distribution de marchandises et de l\u2019impact sur la qualit\u00e9 de l\u2019air des v\u00e9hicules utilitaires et des poids lourds anciens (notamment pour s\u0027adapter \u00e0 la mise en place \u00e9ventuelle de zone \u00e0 circulation restreinte)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.1.5',
            id_nomenclature: '4.2.3.1.5',
            nom: 'identifier un interlocuteur au sein de la collectivit\u00e9 pour traiter du sujet',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.1.6',
            id_nomenclature: '4.2.3.1.6',
            nom: 'identifier les circuits-courts de proximit\u00e9 pertinents et favoriser leur d\u00e9ploiement autour des bassins de vie',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.1.7',
            id_nomenclature: '4.2.3.1.7',
            nom: 'En pr\u00e9sence d\u2019un port, r\u00e9aliser des \u00e9tudes sur l\u2019optimisation \u00e9nerg\u00e9tique des \u00e9quipements du port, sur les besoins de formation des grutiers, des chauffeurs, etc.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.3.2',
        id_nomenclature: '4.2.3.2',
        nom: 'Int\u00e9grer des orientations en faveur de l\u0027optimisation du transport de marchandises \u00e0 l\u0027\u00e9chelle du territoire dans les documents de planification',
        description: '',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.3.2.1',
            id_nomenclature: '4.2.3.2.1',
            nom: 'Int\u00e9grer des actions pr\u00e9cises sur le transport de marchandises en ville dans le PDU',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.2.2',
            id_nomenclature: '4.2.3.2.2',
            nom: 'Orienter les projets d\u2019\u00e9quipements en faveur de l\u2019optimisation du transport de marchandises \u00e0 l\u2019\u00e9chelle du territoire dans le SCOT par exemple le report modal du routier vers le rail ou le fluvial (ou maritime et cabotage)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.2.3',
            id_nomenclature: '4.2.3.2.3',
            nom: 'Optimiser les sch\u00e9mas logistiques urbains par rapport \u00e0 leur impact sur la qualit\u00e9 de l\u0027air',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.3.3',
        id_nomenclature: '4.2.3.3',
        nom: 'Se doter de la comp\u00e9tence "gestion des marchandises"',
        description: '',
        thematique_id: 'mobilites',
        points: 5,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.3.4',
        id_nomenclature: '4.2.3.4',
        nom: 'R\u00e9glementer, encadrer, soutenir et faire appliquer l\u0027optimisation de la gestion des flux de marchandises sur le territoire',
        description: '',
        thematique_id: 'mobilites',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.3.4.1',
            id_nomenclature: '4.2.3.4.1',
            nom: 'R\u00e9glementer afin d\u0027organiser l\u0027acc\u00e8s au centre-ville (plage horaire, diff\u00e9renciation selon les performances environnementales des v\u00e9hicules, etc), voire mise en place d\u0027une zone \u00e0 circulation restreinte en zone PPA',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.4.2',
            id_nomenclature: '4.2.3.4.2',
            nom: 'Proposer des solutions alternatives de transport de marchandises (cr\u00e9ation d\u0027un port fluvial d\u00e9di\u00e9 au transport de marchandises, cr\u00e9ation de centres de distribution ou de plateformes urbaines pour centraliser les apports et r\u00e9acheminer les marchandises sur les derniers kilom\u00e8tres, promotion des modes actifs de livraison (v\u00e9lo, triporteur...)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.4.3',
            id_nomenclature: '4.2.3.4.3',
            nom: 'Mettre en place des centres de distribution urbaine (pour les collectivit\u00e9s \u003e 50 000 habitants) et des points relais (dans des commerces, des entreprises ou des \u00e9quipements sp\u00e9cialis\u00e9s)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.4.4',
            id_nomenclature: '4.2.3.4.4',
            nom: 'Mettre en place des services mutualis\u00e9s de livraison (acteurs \u00e9conomiques, \u00e9tablissements publics et des particuliers)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.4.5',
            id_nomenclature: '4.2.3.4.5',
            nom: 'Encourager la mutualisation des services par exemple activit\u00e9s de commerces/services ambulants en milieu rural (\u00e9picerie, postes, etc) lorsque la pertinence climat-air-\u00e9nergie est av\u00e9r\u00e9e (bon fonctionnement du service, circuit \u00e9tudi\u00e9, r\u00e9ponse \u00e0 un besoin r\u00e9el...)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.4.6',
            id_nomenclature: '4.2.3.4.6',
            nom: 'En milieu rural, cibler les acteurs cl\u00e9s par exemple les agriculteurs pour r\u00e9aliser des actions pour optimiser le transport de marchandises',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.4.7',
            id_nomenclature: '4.2.3.4.7',
            nom: 'En pr\u00e9sence d\u2019un port, des actions sp\u00e9cifiques sont r\u00e9alis\u00e9es (par exemple formation des grutiers, optimisation des v\u00e9hicules de transport d\u0027un point de vue \u00e9nerg\u00e9tique, \u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.3.5',
        id_nomenclature: '4.2.3.5',
        nom: 'Repenser la strat\u00e9gie de stationnement des v\u00e9hicules de marchandises',
        description: '',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.3.5.1',
            id_nomenclature: '4.2.3.5.1',
            nom: 'Proposer un r\u00e9seau coh\u00e9rent et suffisant d\u0027aires de livraison',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.5.2',
            id_nomenclature: '4.2.3.5.2',
            nom: 'R\u00e9glementer sur la dur\u00e9e et la plage horaire autoris\u00e9e pour \u00e9viter les heures de pointe et limiter les conflits d\u0027usage',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.5.3',
            id_nomenclature: '4.2.3.5.3',
            nom: 'Contr\u00f4ler le bon fonctionnement des aires de livraisons (respect, juste dimensionnement et localisation)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.2.3.6',
        id_nomenclature: '4.2.3.6',
        nom: 'Inciter et soutenir les acteurs du territoire dans un cadre formalis\u00e9',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.2.3.6.1',
            id_nomenclature: '4.2.3.6.1',
            nom: '\u00c9laborer une charte locale "logistique urbaine" reprenant les principes du cadre national, avec plan d\u0027actions sur les GES et les polluants atmosph\u00e9riques',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.6.2',
            id_nomenclature: '4.2.3.6.2',
            nom: 'S\u0027engager avec l\u0027ADEME dans une d\u00e9marche "engagement volontaire collectivit\u00e9s", qui cible la logistique urbaine durable',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.6.3',
            id_nomenclature: '4.2.3.6.3',
            nom: 'Engager une d\u00e9marche environnementale de type charte \u00ab Objectif CO2 \u00bb) pour inciter les transporteurs \u00e0 optimiser leur activit\u00e9 en termes d\u0027\u00e9missions de GES',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.2.3.6.4',
            id_nomenclature: '4.2.3.6.4',
            nom: 'Inciter les chargeurs \u00e0 s\u2019engager dans une d\u00e9marche volontaire FRET 21 pour leur permettre de r\u00e9duire l\u2019impact environnemental de leurs transports',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.3.1',
    id_nomenclature: '4.3.1',
    nom: 'D\u00e9velopper le r\u00e9seau pi\u00e9tonnier',
    description:
      '\u003cp\u003eLa collectivit\u00e9 d\u00e9veloppe le r\u00e9seau pi\u00e9tonnier, la signalisation associ\u00e9e et am\u00e9nage la voirie afin d\u0027encourager le d\u00e9veloppement de ce mode de d\u00e9placement et favoriser le report modal.\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.3.1.1',
        id_nomenclature: '4.3.1.1',
        nom: 'Se doter d\u2019outils pour adopter une strat\u00e9gie de d\u00e9veloppement du r\u00e9seau pi\u00e9tonnier s\u0027appuyant sur un apaisement de la circulation',
        description: '',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.1.1.1',
            id_nomenclature: '4.3.1.1.1',
            nom: 'Voter et adopter un budget pour le d\u00e9veloppement et l\u2019am\u00e9lioration du r\u00e9seau',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.1.2',
            id_nomenclature: '4.3.1.1.2',
            nom: 'D\u00e9signer un responsable des cheminements pour pi\u00e9tons',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.1.3',
            id_nomenclature: '4.3.1.1.3',
            nom: '\u00c9valuer le ressenti des pi\u00e9tons sur l\u0027usage de ce mode de d\u00e9placements* enqu\u00eate p\u00e9riode sur la part modale des pi\u00e9tons* sondages de popularit\u00e9, sentiment de s\u00e9curit\u00e9, etc.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.1.4',
            id_nomenclature: '4.3.1.1.4',
            nom: '\u00c9laborer un sch\u00e9ma directeur de la mobilit\u00e9 pi\u00e9tonne en pensant le r\u00e9seau pi\u00e9ton conjointement aux autres r\u00e9seaux de modes actifs de d\u00e9placements afin de favoriser l\u0027intermodalit\u00e9. Les collectivit\u00e9s rurales orientent leurs actions sur les lieux de fr\u00e9quentation (centres bourgs, \u00e9coles, etc).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.1.2',
        id_nomenclature: '4.3.1.2',
        nom: '(30% dans les DOM) Am\u00e9liorer prioritairement la situation des zones \u00e0 forts enjeux',
        description: '',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.1.2.1',
            id_nomenclature: '4.3.1.2.1',
            nom: 'Identifier les zones \u00e0 enjeux importants en mati\u00e8re de mobilit\u00e9 pi\u00e9tonne (centre, zones r\u00e9sidentielles) et mettre en place des mesures (am\u00e9nagement et signal\u00e9tique) visant \u00e0 l\u0027apaisement de celles-ci (zones limit\u00e9es \u00e0 30 km/h, zone de rencontres\u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.2.2',
            id_nomenclature: '4.3.1.2.2',
            nom: 'Rep\u00e9rer les points noirs pouvant freiner le d\u00e9veloppement de la mobilit\u00e9 pi\u00e9tonne dans certaines zones et les traiter (am\u00e9nager et s\u00e9curiser davantage de passages pi\u00e9tons, les abords des \u00e9coles, supprimer le maximum de stop et de feux tricolores en zone apais\u00e9e et r\u00e9tablir la priorit\u00e9 \u00e0 droite)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.1.3',
        id_nomenclature: '4.3.1.3',
        nom: 'Densifier et am\u00e9liorer globalement la qualit\u00e9 du r\u00e9seau pi\u00e9ton sur le territoire',
        description:
          '\u003cp\u003eLa mise en place de supports de communication/promotion telle une carte pi\u00e9tonne int\u00e9grant les temps de parcours est valoris\u00e9e dans la mesure 4.1.1.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.1.3.1',
            id_nomenclature: '4.3.1.3.1',
            nom: 'Densifier le r\u00e9seau pi\u00e9ton en veillant \u00e0 garantir un maillage desservant efficacement l\u0027ensemble des lieux \u00e0 forte fr\u00e9quentation, les d\u00e9tours et lacunes',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.3.2',
            id_nomenclature: '4.3.1.3.2',
            nom: 'S\u0027appuyer sur la signalisation afin d\u0027accompagner et guider les pi\u00e9tons (accompagnement des pi\u00e9tons : jalonnement directionnel indiquant les temps d\u2019acc\u00e8s, signalisation sp\u00e9cifique, commande des feux de signalisation favorable aux pi\u00e9tons, aide pour la travers\u00e9e des routes principales, d\u00e9blayage de la neige sur les chemins pi\u00e9tons en hiver, ombrage pour le confort d\u0027\u00e9t\u00e9...',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.3.3',
            id_nomenclature: '4.3.1.3.3',
            nom: 'Accompagner les personnes \u00e0 mobilit\u00e9 r\u00e9duite (par ex. abaissement des trottoirs) plus que minimum requis (outil : sch\u00e9mas d\u0027accessibilit\u00e9)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.1.4',
        id_nomenclature: '4.3.1.4',
        nom: '(20% dans les DOM) Devenir un territoire exemplaire en mati\u00e8re de mobilit\u00e9 pi\u00e9tonne',
        description:
          '\u003cp\u003eLa g\u00e9n\u00e9ralisation de la zone 30 en ville est \u00e9galement valoris\u00e9e dans l\u2019action 4.2.2 \u00ab R\u00e9guler le trafic, r\u00e9duire la vitesse et valoriser l\u0027espace public \u00bb.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.1.4.1',
            id_nomenclature: '4.3.1.4.1',
            nom: 'Se saisir des outils r\u00e9glementaires, avec des sc\u00e9narios ambitieux (large p\u00e9rim\u00e8tre g\u00e9ographique, suffisamment de cat\u00e9gories de v\u00e9hicules vis\u00e9s par les restrictions\u2026) et des moyens de contr\u00f4le (respect par les usagers)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.4.2',
            id_nomenclature: '4.3.1.4.2',
            nom: 'Cr\u00e9er une ou plusieurs aires pi\u00e9tonnes (C\u2019est une zone d\u00e9di\u00e9e o\u00f9 seuls les tramways ont la priorit\u00e9 sur les pi\u00e9tons. Les cyclistes et les v\u00e9hicules doivent rouler au pas. La circulation des v\u00e9hicules motoris\u00e9s est exceptionnelle, et conditionn\u00e9e \u00e0 la desserte de la zone, de m\u00eame que le stationnement, y compris pour les r\u00e9sidents. Un acc\u00e8s temporaire \u00e0 la zone pi\u00e9tonne peut \u00eatre maintenu pour les v\u00e9hicules motoris\u00e9s des riverains et les livreurs qui disposent d\u0027un badge pour passer les bornes automatiques.)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.4.3',
            id_nomenclature: '4.3.1.4.3',
            nom: 'initier des op\u00e9rations d\u2019usage dynamique de la voirie : exemple fermeture de tron\u00e7ons \u00e0 certains horaires cibl\u00e9s ; entr\u00e9es, sorties des \u00e9coles, op\u00e9ration  unique',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.4.4',
            id_nomenclature: '4.3.1.4.4',
            nom: 'Exemplarit\u00e9 attest\u00e9e par l\u2019augmentation du nombre de pi\u00e9tons',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.1.4.5',
            id_nomenclature: '4.3.1.4.5',
            nom: 'Communiquer autour des actions phares mises en place en faveur des pi\u00e9tons',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.3.2',
    id_nomenclature: '4.3.2',
    nom: 'D\u00e9velopper le r\u00e9seau et les infrastructures cyclables',
    description:
      '\u003cp\u003ePour r\u00e9duire les consommations d\u0027\u00e9nergie et les \u00e9missions de gaz \u00e0 effet de serre, la collectivit\u00e9 d\u00e9veloppe le r\u00e9seau cyclable, la signalisation et le stationnements associ\u00e9s et am\u00e9nage la voirie afin d\u0027encourager le d\u00e9veloppement de ce mode de d\u00e9placement.\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.3.2.1',
        id_nomenclature: '4.3.2.1',
        nom: 'Conna\u00eetre et analyser les d\u00e9placements et stationnements cyclistes du territoire',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.2.1.1',
            id_nomenclature: '4.3.2.1.1',
            nom: 'Analyser la situation (par exemple : occupation des places de stationnement et environnement proche, dur\u00e9e du stationnement, r\u00e8glement pour les v\u00e9los, points noirs, discontinuit\u00e9s dans le r\u00e9seau, etc) en particulier \u00e0 proximit\u00e9 des entreprises, magasins, lieux touristiques, installations fortement fr\u00e9quent\u00e9es',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.1.2',
            id_nomenclature: '4.3.2.1.2',
            nom: 'Mener des enqu\u00eates p\u00e9riodiques sur la part modale des cyclistes et utiliser les \u00e9tudes r\u00e9alis\u00e9es par d\u2019autres organismes (exemple INSEE pour les motifs travail et \u00e9tudes)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.2.2',
        id_nomenclature: '4.3.2.2',
        nom: '(10% dans les DOM) Consulter et informer les habitants',
        description: '',
        thematique_id: 'mobilites',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.2.2.1',
            id_nomenclature: '4.3.2.2.1',
            nom: '\u00c9valuer le ressenti des habitants au regard du mode de d\u00e9placement cycliste (sondage de popularit\u00e9, sentiment de s\u00e9curit\u00e9, stationnement, etc)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.2.2',
            id_nomenclature: '4.3.2.2.2',
            nom: 'Evaluer les besoins des cyclistes (notamment enqu\u00eates sp\u00e9cifiques pour les d\u00e9placements de loisirs et de tourisme)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.2.3',
            id_nomenclature: '4.3.2.2.3',
            nom: 'Informer les cyclistes sur le r\u00e9seau existant (notamment informations sp\u00e9cifiques \u00e0 destination des touristes)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.2.4',
            id_nomenclature: '4.3.2.2.4',
            nom: 'Faire conna\u00eetre les nouvelles r\u00e8gles du d\u00e9cret PAMA 2015 (cf. r\u00e9glementation) et verbaliser les enfreintes',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.2.3',
        id_nomenclature: '4.3.2.3',
        nom: '(20% dans les DOM) Adopter un sch\u00e9ma directeur cyclable',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.2.3.1',
            id_nomenclature: '4.3.2.3.1',
            nom: 'Disposer d\u2019un sch\u00e9ma directeur cyclable (ou modes actifs dans une approche mixte marche et v\u00e9lo)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.3.2',
            id_nomenclature: '4.3.2.3.2',
            nom: 'D\u00e9signer au sein de l\u0027administration un responsable du r\u00e9seau cyclable et stationnement cyclable',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.3.3',
            id_nomenclature: '4.3.2.3.3',
            nom: 'Voter et adopter un budget pour le d\u00e9veloppement du r\u00e9seau et des places de stationnement structurant (investissement et fonctionnement)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.2.4',
        id_nomenclature: '4.3.2.4',
        nom: 'Mettre en \u0153uvre son sch\u00e9ma directeur cyclable',
        description: '',
        thematique_id: 'mobilites',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.2.4.1',
            id_nomenclature: '4.3.2.4.1',
            nom: 'Disposer de la comp\u00e9tence pour mettre en \u0153uvre des actions ; pour les EPCI : prise de comp\u00e9tence optionnelle \u00ab voirie cyclable d\u2019int\u00e9r\u00eat communautaire \u00bb',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.4.2',
            id_nomenclature: '4.3.2.4.2',
            nom: 'Anticiper et/ou r\u00e9duire les conflits d\u2019usage, notamment en traitant les points noirs du r\u00e9seau pouvant freiner le d\u00e9veloppement de la mobilit\u00e9 cyclable',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.4.3',
            id_nomenclature: '4.3.2.4.3',
            nom: 'Traiter les discontinuit\u00e9s cyclables (plus important que l\u2019augmentation du lin\u00e9aire d\u2019am\u00e9nagements)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.4.4',
            id_nomenclature: '4.3.2.4.4',
            nom: 'Densifier le r\u00e9seau cyclable en veillant \u00e0 garantir un maillage desservant efficacement l\u0027ensemble des lieux \u00e0 forte fr\u00e9quentation (notamment touristique)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.4.5',
            id_nomenclature: '4.3.2.4.5',
            nom: 'Limiter les d\u00e9tours et les obstacles pour les cyclistes en retravaillant le plan de circulation des voiries (ex. autorisation du contre-sens sur les rues \u00e0 sens unique, c\u00e9dez le passage cycliste au feu,  goulottes dans les escaliers, barri\u00e8re pivotante\u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.4.6',
            id_nomenclature: '4.3.2.4.6',
            nom: 'Eliminer les endroits dangereux \u00e0 la circulation cycliste (autour des \u00e9coles, travers\u00e9e des routes principales, etc.), s\u00e9curiser et diff\u00e9rencier les r\u00e9seaux (exemple pistes cyclables s\u00e9par\u00e9es de la voirie et larges lorsque les vitesses sont \u00e9lev\u00e9es, ouvrir les couloirs de bus et de tramway aux cyclistes, etc.)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.4.7',
            id_nomenclature: '4.3.2.4.7',
            nom: 'S\u0027appuyer sur la signalisation des itin\u00e9raires afin d\u0027accompagner et guider les cyclistes et penser le r\u00e9seau cyclable conjointement aux autres r\u00e9seaux de modes actifs de d\u00e9placements afin de favoriser l\u0027intermodalit\u00e9 (par exemple en s\u2019appuyant sur les sch\u00e9mas directeurs touristiques)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.4.8',
            id_nomenclature: '4.3.2.4.8',
            nom: 'S\u0027assurer de la qualit\u00e9 des am\u00e9nagements cyclables et de leur entretien',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.4.9',
            id_nomenclature: '4.3.2.4.9',
            nom: 'R\u00e9aliser des enqu\u00eates p\u00e9riodiques (comptages) et aupr\u00e8s d\u2019un panel de cycliste (sondages, entretiens, \u2026) pour \u00e9valuer l\u2019\u00e9volution des pratiques. Les conclusions de ces enqu\u00eates sont utilis\u00e9es et int\u00e9gr\u00e9es dans le cadre de l\u2019am\u00e9lioration continue du sch\u00e9ma directeur.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.2.5',
        id_nomenclature: '4.3.2.5',
        nom: 'Proposer des offres de stationnement v\u00e9lo de qualit\u00e9',
        description: '',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.2.5.1',
            id_nomenclature: '4.3.2.5.1',
            nom: 'Proposer des locaux v\u00e9los s\u00e9curis\u00e9s, \u00e9quip\u00e9s et accessibles dans tous les lieux d\u2019attractivit\u00e9 (les \u00e9tablissements collectifs, les entreprises, les commerces, les \u00e9coles)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.5.2',
            id_nomenclature: '4.3.2.5.2',
            nom: 'Soutenir des installations priv\u00e9es en particulier autour des h\u00f4tels et des complexes touristiques',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.5.3',
            id_nomenclature: '4.3.2.5.3',
            nom: 'S\u00e9curiser les stationnements en particulier \u00e0 proximit\u00e9 de p\u00f4les multimodaux, des \u00e9coles et commerces principaux (exemple situer les aires de stationnement v\u00e9lo en amont des passages pi\u00e9tons pour s\u00e9curiser la travers\u00e9e des pi\u00e9tons, proposer un service d\u2019ordre, un syst\u00e8me \u00e9lectronique, etc)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.2.6',
        id_nomenclature: '4.3.2.6',
        nom: 'D\u00e9velopper un ou des r\u00e9seaux express v\u00e9lo (REV) pour faciliter les d\u00e9placements entre les grandes villes et leur p\u00e9riph\u00e9rie',
        description:
          '\u003cp\u003eNon \u00e9valu\u00e9 dans les DOM.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 5,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.2.7',
        id_nomenclature: '4.3.2.7',
        nom: '(20% dans les DOM) Suivre et \u00e9valuer les r\u00e9sultats',
        description: '',
        thematique_id: 'mobilites',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.2.7.1',
            id_nomenclature: '4.3.2.7.1',
            nom: 'Le % de voirie am\u00e9nag\u00e9e (pistes et bandes cyclables, les zones 30, les aires pi\u00e9tonnes, etc) ou \u00e0 d\u00e9faut de la longueur cumul\u00e9e de pistes cyclables pour 1000 habitants est en augmentation (objectif : \u003e40% pour les EPCI, \u003e30% pour les communes)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.7.2',
            id_nomenclature: '4.3.2.7.2',
            nom: 'Le nombre de places de stationnement v\u00e9lo pour 100 habitants sont en augmentation (objectif : \u003e2 pour les EPCI, \u003e4 pour les communes).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.2.7.3',
            id_nomenclature: '4.3.2.7.3',
            nom: 'Le passage de v\u00e9los sur les pistes (nombre par jour) est en augmentation.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.3.3',
    id_nomenclature: '4.3.3',
    nom: 'Proposer une offre de transports publics attractive et de qualit\u00e9',
    description:
      '\u003cp\u003eLa collectivit\u00e9 souhaite d\u00e9velopper et am\u00e9liorer les performances du service public de transports publics dans une perspective d\u0027augmentation de son usage et de diminution du recours \u00e0 la voiture. Le d\u00e9veloppement et l\u0027am\u00e9lioration du service public passe par une augmentation du niveau de fr\u00e9quence, la qualit\u00e9 des connexions, une densification du maillage, une tarification attractive, un bon service de bus de nuit, la qualit\u00e9 des points d\u0027arr\u00eat ainsi que des v\u00e9hicules de transport.\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.3.3.1',
        id_nomenclature: '4.3.3.1',
        nom: 'S\u2019organiser en interne',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.3.1.1',
            id_nomenclature: '4.3.3.1.1',
            nom: 'Mettre en place une organisation interne et des moyens d\u00e9di\u00e9s au d\u00e9veloppement et au suivi des transports en commun (budget allou\u00e9, personnel identifi\u00e9)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.3.2',
        id_nomenclature: '4.3.3.2',
        nom: '\u00c9valuer et analyser les besoins en transports collectifs',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.3.2.1',
            id_nomenclature: '4.3.3.2.1',
            nom: 'Se rapprocher des AOM (autorit\u00e9s organisatrices de la mobilit\u00e9) locales afin d\u0027\u00e9valuer les besoins des usagers actuels. Celles-ci pourront fournir des \u00e9l\u00e9ments de diagnostic concernant : l\u0027usage des transports collectifs (fr\u00e9quentation des points d\u0027arr\u00eat en semaine et le week-end, origine et destination des usagers, types de titres de transport utilis\u00e9s, difficult\u00e9s rencontr\u00e9es (en particulier sur les heures de pointe), l\u0027offre de transport (type et nombre de v\u00e9hicules en exploitation), les \u00e9l\u00e9ments contractuels (type de conventionnement, date du prochain conventionnement, montant de la subvention d\u0027\u00e9quilibre, recettes tarifaires), l\u0027historique des \u00e9ventuels dysfonctionnements (horaires non ajust\u00e9s, retards, sous-capacit\u00e9 ou surcapacit\u00e9 des v\u00e9hicules), la fiabilit\u00e9 lors d\u0027\u00e9v\u00e9nements climatiques extr\u00eames.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.2.2',
            id_nomenclature: '4.3.3.2.2',
            nom: 'Une fois les besoins identifi\u00e9s, ceux-ci pourront \u00eatre class\u00e9s par ordre de priorit\u00e9.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.2.3',
            id_nomenclature: '4.3.3.2.3',
            nom: 'Identifier les principaux g\u00e9n\u00e9rateurs de d\u00e9placement (tels que les entreprises priv\u00e9es ou encore les acteurs touristiques qui peuvent parfois g\u00e9n\u00e9rer des flux ponctuels tr\u00e8s importants).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.2.4',
            id_nomenclature: '4.3.3.2.4',
            nom: 'Pr\u00e9senter les r\u00e9sultats de l\u0027analyse aux responsables d\u0027AOT-AOM, aux \u00e9lus des collectivit\u00e9s concern\u00e9es, aux associations d\u0027usagers des transports, aux commer\u00e7ants, aux gestionnaires de zones d\u0027activit\u00e9s et aux entreprises de transport.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.2.5',
            id_nomenclature: '4.3.3.2.5',
            nom: 'Pour les collectivit\u00e9s concern\u00e9es (littoral, DOM\u2026), le diagnostic int\u00e8gre l\u2019offre maritime/fluviale.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.3.3',
        id_nomenclature: '4.3.3.3',
        nom: 'Orienter l\u2019achat de v\u00e9hicules des transports publics et le renouvellement de flotte vers les carburants alternatifs (bioGNV, \u00e9lectrique et hydrog\u00e8ne)',
        description:
          '\u003cp\u003ed\u00e9ployer des flottes de transport public \u00e0 tr\u00e8s faibles \u00e9missions en adaptant le choix du carburant alternatif aux ressources du territoire. Restreindre le cahier des charges aux carburants susnomm\u00e9s.\u003c/p\u003e\n\u003cp\u003e% de v\u00e9hicules faiblement \u00e9metteurs en augmentation.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 10,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.3.4',
        id_nomenclature: '4.3.3.4',
        nom: '(15% en milieu rural) Am\u00e9liorer l\u0027efficacit\u00e9 du r\u00e9seau de transports collectifs en collaboration avec les AOM et les principaux g\u00e9n\u00e9rateurs de d\u00e9placements',
        description: '',
        thematique_id: 'mobilites',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.3.4.1',
            id_nomenclature: '4.3.3.4.1',
            nom: 'optimiser l\u0027offre existante (am\u00e9lioration de la qualit\u00e9 de service \u2013 amplitude et couverture du territoire, cadencement et augmentation des fr\u00e9quences, du maillage, ajustement de la localisation des arr\u00eats, adaptation de la desserte, confort des v\u00e9hicules, en associant les AOM (des indicateurs chiffr\u00e9s attestent de la qualit\u00e9 de l\u2019offre)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.4.2',
            id_nomenclature: '4.3.3.4.2',
            nom: 'donner la priorit\u00e9 aux transports publics dans le trafic, en lien avec les collectivit\u00e9s comp\u00e9tentes en mati\u00e8re de voirie (voies en site propre, commande de la signalisation, priorit\u00e9 aux feux, lors d\u0027\u00e9v\u00e9nements climatiques extr\u00eames\u2026 (l\u0027\u00e9volution des vitesses commerciales peut en attester)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.4.3',
            id_nomenclature: '4.3.3.4.3',
            nom: 'd\u00e9velopper des syst\u00e8mes d\u0027information r\u00e9actifs (affichage dans les arr\u00eats, r\u00e9seaux sociaux, site internet...) pour informer en temps r\u00e9el ou quasiment les usagers de l\u0027\u00e9tat du trafic sur le r\u00e9seau de TC',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.4.4',
            id_nomenclature: '4.3.3.4.4',
            nom: 'prendre des mesures pour assurer la fiabilit\u00e9 lors d\u0027\u00e9v\u00e9nements climatiques extr\u00eames, et la qualit\u00e9 des transports, en particulier le confort thermique et olfactif dans les transports en commun, en hiver et en \u00e9t\u00e9 (ex : ombrage des stations de remisage)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.4.5',
            id_nomenclature: '4.3.3.4.5',
            nom: 'associer les principaux g\u00e9n\u00e9rateurs de d\u00e9placements \u00e0 la r\u00e9flexion, travailler en amont avec eux afin de les sensibiliser et les inciter \u00e0 ajuster leur organisation et leurs horaires (sans perdre de vue les \u00e9ventuels risques d\u0027une saturation du r\u00e9seau de transports collectifs). La sensibilisation de ces acteurs porte notamment sur les enjeux associ\u00e9s \u00e0 la mobilit\u00e9 et sur les b\u00e9n\u00e9fices qu\u0027ils peuvent en tirer (am\u00e9lioration de la ponctualit\u00e9 des salari\u00e9s, diminution de la fatigue, etc.).',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.4.6',
            id_nomenclature: '4.3.3.4.6',
            nom: 'adapter et/ou am\u00e9liorer l\u0027accessibilit\u00e9 de l\u0027offre de transports publics aux PMR',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.4.7',
            id_nomenclature: '4.3.3.4.7',
            nom: 's\u2019engager dans une op\u00e9ration type \u00ab Objectif CO2 les transporteurs s\u2019engagent \u00bb',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.3.5',
        id_nomenclature: '4.3.3.5',
        nom: '(35% en milieu rural) Diversifier l\u2019offre de transport collectif, pour plus de souplesse',
        description:
          '\u003cp\u003eLes actions concernant l\u2019utilisation de voitures partag\u00e9es (co-voiturage, auto-partage) sont \u00e9valu\u00e9es dans la mesure 4.3.4.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.3.5.1',
            id_nomenclature: '4.3.3.5.1',
            nom: 'Mettre en place des offres propres \u00e0 la collectivit\u00e9 (bus local, navettes y compris fluviales ou maritimes, TAD...) ou soutenir les offres/dessertes existantes (utilisation des transports scolaires\u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.3.6',
        id_nomenclature: '4.3.3.6',
        nom: 'Mettre en place une tarification adapt\u00e9e',
        description: '',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.3.6.1',
            id_nomenclature: '4.3.3.6.1',
            nom: 'Cr\u00e9er une billettique unique (syst\u00e8me de \u00ab pass \u00bb unique pour tous les transports en commun du territoire, voire pour plusieurs modes de transport \u2013cf. mesure 4.3.4. sur l\u2019intermodalit\u00e9)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.6.2',
            id_nomenclature: '4.3.3.6.2',
            nom: 'Mettre en place une offre de cartes journali\u00e8res pour les transports publics et gratuit\u00e9 des transports en commun en cas d\u0027\u00e9pisodes de pollution',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.6.3',
            id_nomenclature: '4.3.3.6.3',
            nom: 'Adapter la tarification aux enjeux sociaux / aux classes d\u2019\u00e2ges',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.3.7',
        id_nomenclature: '4.3.3.7',
        nom: 'Evaluer et communiquer les r\u00e9sultats',
        description:
          '\u003cul\u003e\n\u003cli\u003eEnqu\u00eates p\u00e9riodiques montrant une \u00e9volution favorable de la fr\u00e9quentation des transports en commun : voyage/hab.an, nb d\u2019usagers\u2026 (cf. indicateurs)\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e*Sondages de popularit\u00e9, sentiment de s\u00e9curit\u00e9, respect des horaires, etc.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.3.7.1',
            id_nomenclature: '4.3.3.7.1',
            nom: '\u00c9valuer la progression de l\u0027utilisation des transports publics',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.7.2',
            id_nomenclature: '4.3.3.7.2',
            nom: 'Utilisation des r\u00e9sultats des enqu\u00eates et int\u00e9gration dans les processus d\u0027am\u00e9lioration',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.3.7.3',
            id_nomenclature: '4.3.3.7.3',
            nom: 'Communiquer sur les r\u00e9sultats',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__4.3.4',
    id_nomenclature: '4.3.4',
    nom: 'D\u00e9velopper l\u0027offre multimodale et l\u0027intermodalit\u00e9',
    description:
      '\u003cp\u003eLa collectivit\u00e9 et ses partenaires proposent des offres multiples et compl\u00e9mentaires favorisant la multimodalit\u00e9 et l\u0027intermodalit\u00e9 (auto-partage, co-voiturage, parkings relais, location de v\u00e9los...). La tarification et les modalit\u00e9s d\u0027utilisation des services doivent \u00eatre attractives et simples pour limiter le recours \u00e0 la voiture individuelle.\u003c/p\u003e\n',
    thematique_id: 'mobilites',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__4.3.4.1',
        id_nomenclature: '4.3.4.1',
        nom: 'Analyser les besoins et l\u2019offre multimodale existante',
        description: '',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.4.1.1',
            id_nomenclature: '4.3.4.1.1',
            nom: 'analyse de la situation en mati\u00e8re de co-voiturage, d\u2019auto-partage, de location de v\u00e9los et services associ\u00e9s (par ex. offre existante sur place, comparaison avec d\u0027autres collectivit\u00e9s)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.1.2',
            id_nomenclature: '4.3.4.1.2',
            nom: 'les enjeux de l\u2019intermodalit\u00e9 sont connus et la volont\u00e9 de faciliter l\u2019intermodalit\u00e9 est formalis\u00e9e dans un document ou est d\u00e9montr\u00e9e par des premi\u00e8res r\u00e9alisations',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.1.3',
            id_nomenclature: '4.3.4.1.3',
            nom: 'moyens \u00e0 disposition pour la mise en \u0153uvre d\u2019actions en faveur de la multi-modalit\u00e9 et de l\u2019intermodalit\u00e9 (budget allou\u00e9, personnel identifi\u00e9)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.4.2',
        id_nomenclature: '4.3.4.2',
        nom: 'Faciliter le changement de mode de transport',
        description:
          '\u003cp\u003e(En l\u2019absence de transport en commun \u2013 contexte non adapt\u00e9 \u00e0 son d\u00e9veloppement, les points sont report\u00e9s en totalit\u00e9 ou partiellement sur la voiture partag\u00e9e)\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.4.2.1',
            id_nomenclature: '4.3.4.2.1',
            nom: 'd\u00e9velopper des parkings relais (P+R)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.2.2',
            id_nomenclature: '4.3.4.2.2',
            nom: 'autoriser et faciliter l\u2019embarquement des v\u00e9los dans les transports en commun lorsque les conditions d\u2019exploitation le permettent (modulation \u00e9ventuellement selon les heures, les lignes, les places disponibles, les types de v\u00e9hicules\u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.2.3',
            id_nomenclature: '4.3.4.2.3',
            nom: 'mettre en place une tarification et une billettique unique/coordonn\u00e9e entre les diff\u00e9rentes offres de transport (TC, location de v\u00e9lo, auto-partage\u2026)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.2.4',
            id_nomenclature: '4.3.4.2.4',
            nom: 'pr\u00e9sence d\u2019un p\u00f4le d\u2019\u00e9changes multimodal, combinant en m\u00eame lieu plusieurs modes de transport alternatifs diff\u00e9rents',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.4.3',
        id_nomenclature: '4.3.4.3',
        nom: '(jusqu\u2019\u00e0 40% en l\u2019absence de transport en commun) D\u00e9velopper l\u0027usage de la voiture partag\u00e9e',
        description:
          '\u003cp\u003eLa collectivit\u00e9 soutient techniquement les modes de transport en voiture partag\u00e9e, comme le covoiturage, l\u0027autopartage, l\u2019auto-stop organis\u00e9 : cr\u00e9ation d\u2019aires de co-voiturage, signalisation des arr\u00eats et des v\u00e9hicules, garantie de d\u00e9ficit, assurance retour, participation \u00e0 des SCIC, auto-partage des v\u00e9hicules professionnels de la collectivit\u00e9 aux habitants du territoire le week-end.\u2026\u003c/p\u003e\n\u003cp\u003eLa communication et la cr\u00e9ation de plateformes/applications num\u00e9riques sont trait\u00e9es dans la mesure 4.1.1.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 20,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.4.4',
        id_nomenclature: '4.3.4.4',
        nom: 'Equiper les habitants en v\u00e9lo',
        description:
          '\u003cp\u003eLes actions de sensibilisation/animation autour du v\u00e9lo sont trait\u00e9es dans la mesure 4.1.1.\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.4.4.1',
            id_nomenclature: '4.3.4.4.1',
            nom: 'D\u00e9velopper des offres de locations v\u00e9lo afin de provoquer l\u2019essai par la population (syst\u00e8me de v\u00e9los en libre-service et/ou syst\u00e8me de location longue dur\u00e9e)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.4.2',
            id_nomenclature: '4.3.4.4.2',
            nom: 'Aider directement les habitants en subventionnant l\u2019achat de v\u00e9los classiques, v\u00e9los utilitaires, v\u00e9los pliants (pour l\u2019intermodalit\u00e9 avec les transports en commun), ou de v\u00e9los \u00e0 assistance \u00e9lectrique (VAE)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.4.5',
        id_nomenclature: '4.3.4.5',
        nom: 'Accompagner les cyclistes avec des services associ\u00e9s au v\u00e9lo',
        description: '',
        thematique_id: 'mobilites',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.4.5.1',
            id_nomenclature: '4.3.4.5.1',
            nom: 'Encourager l\u0027apprentissage du v\u00e9lo (par ex. \u00e0 l\u0027\u00e9cole primaire : faciliter la mise en place de \u00ab bus cyclistes \u00bb anim\u00e9s par des employ\u00e9s municipaux ou des parents d\u0027\u00e9l\u00e8ves pour amener les enfants \u00e0 l\u0027\u00e9cole de mani\u00e8re group\u00e9e) et inciter la r\u00e9appropriation des deux roues notamment en milieu rural',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.5.2',
            id_nomenclature: '4.3.4.5.2',
            nom: 'Soutenir les v\u00e9los-\u00e9coles pour d\u00e9ployer leurs missions d\u0027accompagnement et d\u0027apprentissage du v\u00e9lo',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.5.3',
            id_nomenclature: '4.3.4.5.3',
            nom: 'Encourager le marquage des v\u00e9los \u00ab bicycode \u00bb et informer sur les meilleures astuces contre le vol',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.5.4',
            id_nomenclature: '4.3.4.5.4',
            nom: 'Soutenir les ateliers de r\u00e9paration, les associations de recyclage, les coursiers \u00e0 v\u00e9lo, les maisons du v\u00e9lo, etc.',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.5.5',
            id_nomenclature: '4.3.4.5.5',
            nom: 'D\u00e9velopper des d\u00e9marches innovantes autour des services v\u00e9los (v\u00e9los sp\u00e9ciaux, familiaux et v\u00e9lo cargo)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__4.3.4.6',
        id_nomenclature: '4.3.4.6',
        nom: 'Suivre et atteindre les objectifs fix\u00e9s',
        description:
          '\u003cp\u003eDOMAINE 5\u00a0: ORGANISATION INTERNE\u003c/p\u003e\n',
        thematique_id: 'mobilites',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__4.3.4.6.1',
            id_nomenclature: '4.3.4.6.1',
            nom: 'La pratique du co-voiturage et de l\u2019auto-partage est en augmentation (chiffres fournis)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.6.2',
            id_nomenclature: '4.3.4.6.2',
            nom: 'Le parc de v\u00e9los en partage (v\u00e9lo libre-service ou location longue dur\u00e9e) est en augmentation (pour les collectivit\u00e9s dot\u00e9s et en fonction de la demande)',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.6.3',
            id_nomenclature: '4.3.4.6.3',
            nom: 'Enqu\u00eates p\u00e9riodiques par ex. sur l\u0027utilisation des diff\u00e9rentes offres, sondages de popularit\u00e9',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__4.3.4.6.4',
            id_nomenclature: '4.3.4.6.4',
            nom: 'Utilisation des r\u00e9sultats des enqu\u00eates et int\u00e9gration dans le processus d\u0027am\u00e9lioration',
            description: '',
            thematique_id: 'mobilites',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__5.1.1',
    id_nomenclature: '5.1.1',
    nom: 'Organiser les ressources humaines pour mener la politique climat-air-\u00e9nergie',
    description:
      '\u003cp\u003eLa collectivit\u00e9 met \u00e0 disposition les ressources n\u00e9cessaires en personnel pour les questions li\u00e9es au climat, \u00e0 l\u0027air et \u00e0 l\u0027\u00e9nergie. Les responsabilit\u00e9s, les r\u00f4les et les t\u00e2ches ainsi que les pouvoirs de d\u00e9cision sont fix\u00e9s et formalis\u00e9s.\u003c/p\u003e\n\u003cp\u003eLe temps de travail \u00e0 disposition pour chaque collaborateur pour les t\u00e2ches concernant les questions d\u0027\u00e9nergie, de lutte contre le changement climatique et les services permet aux personnels de disposer de moyens d\u2019agir.\u003c/p\u003e\n',
    thematique_id: 'orga_interne',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__5.1.1.1',
        id_nomenclature: '5.1.1.1',
        nom: 'Doter la politique climat-air-\u00e9nergie de moyens humains',
        description: '',
        thematique_id: 'orga_interne',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.1.1.1',
            id_nomenclature: '5.1.1.1.1',
            nom: 'Disposer d\u0027une ou plusieurs personnes responsables des questions climat-air-\u00e9nergie au niveau technique',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.1.2',
            id_nomenclature: '5.1.1.1.2',
            nom: 'Attribuer une mission de conseil \u00e0 des personnes ou entreprises externes sp\u00e9cialis\u00e9es (par exemple  conseiller FAIRE, Agence de mobilit\u00e9, Agence locale, association sp\u00e9cialis\u00e9e, ...) ou proc\u00e8der \u00e0 un recrutement en interne si les ressources humaines sont insuffisantes.',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.1.3',
            id_nomenclature: '5.1.1.1.3',
            nom: 'D\u00e9signer un chef de projet climat-air-\u00e9nergie ; en cas d\u2019indisponibilit\u00e9 (arr\u00eat maladie longue dur\u00e9e, maternit\u00e9, d\u00e9part\u2026), son remplacement est une priorit\u00e9 (pas d\u2019absence de longue dur\u00e9e (ex : plus de 3 mois)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.1.2',
        id_nomenclature: '5.1.1.2',
        nom: 'D\u00e9cliner finement les responsabilit\u00e9s et les r\u00e9f\u00e9rents',
        description: '',
        thematique_id: 'orga_interne',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.1.2.1',
            id_nomenclature: '5.1.1.2.1',
            nom: 'Des r\u00e9f\u00e9rents par service sont identifi\u00e9s pour les diff\u00e9rents sujets',
            description:
              '\u003cp\u003ePar exemple  :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003ela gestion de l\u0027\u00e9nergie,\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles conseils en mati\u00e8re de construction,\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela r\u00e9novation des b\u00e2timents de la collectivit\u00e9,\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles mesures de consommation et de suivi,\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela mise en \u0153uvre de syst\u00e8mes de gestion \u00e9nerg\u00e9tique, d\u2019adaptation au changement climatique et de qualit\u00e9 de l\u2019air, conform\u00e9ment aux syst\u00e8mes de gestion de la qualit\u00e9 et aux normes,\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ela gestion de la mobilit\u00e9.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.2.2',
            id_nomenclature: '5.1.1.2.2',
            nom: 'Identifier une ou des personnes pour garantir le bon fonctionnement des services et fournir des services sp\u00e9cifiques en cas de ph\u00e9nom\u00e8nes extr\u00eames li\u00e9s au changement climatique (canicule, temp\u00eate...).',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.2.3',
            id_nomenclature: '5.1.1.2.3',
            nom: 'Compl\u00e9ter syst\u00e9matiquement les instructions de travail et les fiches de poste pour les agents concern\u00e9s avec des t\u00e2ches couvrant l\u2019ensemble des th\u00e9matiques climat-air-\u00e9nergie (urbanisme, b\u00e2timents, mobilit\u00e9, adaptation, etc.)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.1.3',
        id_nomenclature: '5.1.1.3',
        nom: 'Travailler en transversalit\u00e9',
        description: '',
        thematique_id: 'orga_interne',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.1.3.1',
            id_nomenclature: '5.1.1.3.1',
            nom: 'Am\u00e9nager le poste du chef de projet climat-air-\u00e9nergie pour lui permettre de se consacrer pleinement \u00e0 sa mission et de travailler en transversalit\u00e9 et de mani\u00e8re l\u00e9gitime avec les autres services (positionnement strat\u00e9gique dans l\u0027organigramme)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.3.2',
            id_nomenclature: '5.1.1.3.2',
            nom: 'Disposer d\u0027une \u00e9quipe projet transversale, pilot\u00e9e par le chef de projet, charg\u00e9e d\u2019assurer la mise en \u0153uvre de la strat\u00e9gie climat-air-\u00e9nergie ; elle se r\u00e9unit r\u00e9guli\u00e8rement et dynamise la d\u00e9marche en interne',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.3.3',
            id_nomenclature: '5.1.1.3.3',
            nom: 'Avoir des DGS, DGA et/ou DST qui sont impliqu\u00e9s et contribuent au portage et soutiennent le chef de projet (notamment vis \u00e0 vis de la transversalit\u00e9 et de la mobilisation des autres agents)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.3.4',
            id_nomenclature: '5.1.1.3.4',
            nom: 'Former ponctuellement des groupes de travail techniques m\u00ealant diff\u00e9rent services selon les besoins et projets',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.1.4',
        id_nomenclature: '5.1.1.4',
        nom: 'Mesurer l\u2019efficacit\u00e9 de l\u2019organisation interne et l\u2019ajuster si n\u00e9cessaire',
        description: '',
        thematique_id: 'orga_interne',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.1.4.1',
            id_nomenclature: '5.1.1.4.1',
            nom: 'Mettre en place une organisation interne qui permet une circulation rapide des informations',
            description:
              '\u003cp\u003eExemple pour Cit\u2019ergie : les documents n\u00e9cessaire pour r\u00e9aliser l\u0027\u00e9tat des lieux de la progression de la collectivit\u00e9 au regard du r\u00e9f\u00e9rentiel national ont \u00e9t\u00e9 transmis sans trop de difficult\u00e9s et dans les d\u00e9lais planifi\u00e9s avec le conseiller.\u003c/p\u003e\n',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.4.2',
            id_nomenclature: '5.1.1.4.2',
            nom: '\u00c9valuer si le personnel et des r\u00e9f\u00e9rents sp\u00e9cialis\u00e9s sont actifs et efficaces (ils sont sollicit\u00e9s par les autres services, leurs coll\u00e8gues, leurs sup\u00e9rieurs hi\u00e9rarchiques ou le grand public et ils r\u00e9pondent de mani\u00e8re r\u00e9active et pertinente) ; si non, r\u00e9ajuster l\u2019organisation interne',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.4.3',
            id_nomenclature: '5.1.1.4.3',
            nom: 'Les agents am\u00e9liorent la qualit\u00e9 de l\u0027organisation',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.4.4',
            id_nomenclature: '5.1.1.4.4',
            nom: 'Les fiches de postes sont compl\u00e9t\u00e9es et am\u00e9lior\u00e9es',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.1.4.5',
            id_nomenclature: '5.1.1.4.5',
            nom: 'Le nombre d\u2019\u00e9quivalents temps plein (ETP) d\u00e9di\u00e9s \u00e0 la mise en \u0153uvre de la politique climat-air-\u00e9nergie est maintenu ou en augmentation',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__5.1.2',
    id_nomenclature: '5.1.2',
    nom: 'Assurer le pilotage et le portage de la politique climat-air-\u00e9nergie',
    description:
      '\u003cp\u003eLe comit\u00e9 de pilotage a pour t\u00e2che de traiter, au plus haut niveau, des questions climat air \u00e9nergie.\u003c/p\u003e\n\u003cp\u003eIl effectue des choix et prend des d\u00e9cisions strat\u00e9giques pour la politique climat-air-\u00e9nergie de la collectivit\u00e9.\u003c/p\u003e\n\u003cp\u003eCelui-ci peut \u00eatre commun \u00e0 plusieurs d\u00e9marches (Agenda 2030, Cit\u2019ergie, Plan climat air \u00e9nergie territorial, Contrat de Transition \u00c9cologique (CTE), Contrat de Relance et de Transition \u00c9cologique (CRTE), Territoire \u00e0 \u00e9nergie positive (TEPOS), etc.) dans la mesure o\u00f9 les questions \u00e9nerg\u00e9tiques et climatiques y sont abord\u00e9es de mani\u00e8re transversale.\u003c/p\u003e\n\u003cp\u003eLe portage politique de la strat\u00e9gie climat air \u00e9nergie est assur\u00e9.\u003c/p\u003e\n\u003cp\u003eUn ou plusieurs \u00e9lus sont d\u00e9sign\u00e9s comme r\u00e9f\u00e9rents sur les sujets climat-air-\u00e9nergie et participent au comit\u00e9 de pilotage.\u003c/p\u003e\n',
    thematique_id: 'orga_interne',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__5.1.2.1',
        id_nomenclature: '5.1.2.1',
        nom: 'D\u00e9finir un comit\u00e9 de pilotage transversal et l\u00e9gitime',
        description: '',
        thematique_id: 'orga_interne',
        points: 35,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.2.1.1',
            id_nomenclature: '5.1.2.1.1',
            nom: 'L\u00e9gitimer la composition et le r\u00f4le du comit\u00e9 de pilotage par une d\u00e9cision de l\u2019organe d\u00e9lib\u00e9rant de la collectivit\u00e9, de l\u2019ex\u00e9cutif ou un autre document formel ayant fait l\u2019objet de l\u2019approbation du ou de la Pr\u00e9sident(e)/Maire de la collectivit\u00e9',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.1.2',
            id_nomenclature: '5.1.2.1.2',
            nom: 'Int\u00e9grer le comit\u00e9 de pilotage de mani\u00e8re p\u00e9renne dans le fonctionnement de la collectivit\u00e9 et dans les organes de direction politique.',
            description:
              '\u003cp\u003ePour les petites collectivit\u00e9s, le comit\u00e9 de pilotage peut faire partie d\u0027une commission \u00e0 un niveau sup\u00e9rieur\u003c/p\u003e\n',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.1.3',
            id_nomenclature: '5.1.2.1.3',
            nom: 'Identifier les pilotes techniques et politiques. En cas de COPIL conjoint ville-intercommunalit\u00e9, des \u00e9lus des deux collectivit\u00e9s participent et contribuent au comit\u00e9 de pilotage',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.1.4',
            id_nomenclature: '5.1.2.1.4',
            nom: 'R\u00e9unir au sein du comit\u00e9 de pilotage des \u00e9lus et personnes r\u00e9f\u00e9rentes dans des th\u00e9matiques vari\u00e9es, non restreintes uniquement \u00e0 l\u2019\u00e9nergie ou l\u2019environnement (mobilit\u00e9, am\u00e9nagement, \u00e9nergie, eau, assainissement, organisation interne, partenariats et coop\u00e9ration, finances, etc.) afin de traiter les questions climat air \u00e9nergie de fa\u00e7on transversale',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.1.5',
            id_nomenclature: '5.1.2.1.5',
            nom: 'R\u00e9unir d\u2019autres acteurs du territoire au sein du comit\u00e9 de pilotage  (associations, organismes institutionnels, etc).',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.2.2',
        id_nomenclature: '5.1.2.2',
        nom: 'Elaborer et valider les objectifs de la politique climat air \u00e9nergie en comit\u00e9 de pilotage',
        description: '',
        thematique_id: 'orga_interne',
        points: 35,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.2.2.1',
            id_nomenclature: '5.1.2.2.1',
            nom: 'R\u00e9unir le comit\u00e9 de pilotage au minimum 2 fois par an avec ordre du jour puis r\u00e9diger un compte rendu de ses d\u00e9cisions',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.2.2',
            id_nomenclature: '5.1.2.2.2',
            nom: '\u00c9laborer ou d\u00e9cider des objectifs climat air \u00e9nergie au sein du comit\u00e9 de pilotage (a minima dans les 6 domaines Cit\u2019ergie)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.2.3',
            id_nomenclature: '5.1.2.2.3',
            nom: 'Donner au comit\u00e9 de pilotage un r\u00f4le v\u00e9ritablement moteur pour la politique climat-air-\u00e9nergie (d\u00e9cisions constructives et ambitieuses, lancement de nouvelles \u00e9tudes ou actions\u2026); Impulser via celui-ci une dynamique positive aupr\u00e8s des services',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.2.4',
            id_nomenclature: '5.1.2.2.4',
            nom: 'Porter les objectifs au plus haut niveau par les \u00e9lus (maire ou pr\u00e9sident de la collectivit\u00e9) et au sein des instances d\u00e9cisionnaires',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.2.5',
            id_nomenclature: '5.1.2.2.5',
            nom: 'Le/la Maire / Pr\u00e9sident(e) participe \u00e0 certaines r\u00e9unions (voire assure une pr\u00e9sidence ou une co-pr\u00e9sidence du COPIL) pour prouver l\u2019implication politique au plus haut niveau dans la d\u00e9marche',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.2.3',
        id_nomenclature: '5.1.2.3',
        nom: 'Assurer la mise en \u0153uvre effective des d\u00e9cisions prises',
        description: '',
        thematique_id: 'orga_interne',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.2.3.1',
            id_nomenclature: '5.1.2.3.1',
            nom: 'Organiser le comit\u00e9 de pilotage pour suivre la mise en \u0153uvre effective des d\u00e9cisions prises (tableau de suivi par exemple)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.3.2',
            id_nomenclature: '5.1.2.3.2',
            nom: 'Le comit\u00e9 de pilotage attribue des missions externes pour la r\u00e9alisation des actions',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.3.3',
            id_nomenclature: '5.1.2.3.3',
            nom: 'Les directeurs de service, et notamment DGS, DGA et/ou DST apportent du soutien au comit\u00e9 de pilotage pour la mise en place op\u00e9rationnelle des d\u00e9cisions (relais au sein des diff\u00e9rents services notamment)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.2.3.4',
            id_nomenclature: '5.1.2.3.4',
            nom: 'Le comit\u00e9 de pilotage veille \u00e0 la bonne compr\u00e9hension par les habitants et usagers du territoire des d\u00e9cisions prises (information par voie de presse, participation des membres du comit\u00e9 de pilotage \u00e0 des r\u00e9unions publiques, etc.)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__5.1.3',
    id_nomenclature: '5.1.3',
    nom: 'Former et mobiliser les \u00e9lus et les services sur les th\u00e9matiques climat-air-\u00e9nergie',
    description:
      '\u003cp\u003eLa collectivit\u00e9 propose des actions de sensibilisation et de formation sur l\u2019adaptation au changement climatique, la pollution de l\u2019air, les \u00e9missions de GES (gaz \u00e0 effet de serre), les \u00e9nergies renouvelables et la ma\u00eetrise des consommations d\u0027\u00e9nergie \u00e0 ses \u00e9lus et \u00e0 l\u0027ensemble de ses agents (techniciens, directeurs, \u2026).\u003c/p\u003e\n\u003cp\u003eSoutenus par les \u00e9lus, les agents participent activement \u00e0 la d\u00e9finition et \u00e0 l\u2019atteinte des objectifs climat-air-\u00e9nergie fix\u00e9s par la collectivit\u00e9, notamment ceux en relation directe avec leurs services et leurs postes.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 met en place des actions entretenant la motivation de ses agents du type : concours inter-services, syst\u00e8me de reconnaissance des initiatives personnelles, bo\u00eete \u00e0 id\u00e9e\u2026.\u003c/p\u003e\n',
    thematique_id: 'orga_interne',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__5.1.3.1',
        id_nomenclature: '5.1.3.1',
        nom: 'Accompagner les \u00e9lus et les agents dans la pratique des \u00e9co-gestes quotidiens',
        description: '',
        thematique_id: 'orga_interne',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.3.1.1',
            id_nomenclature: '5.1.3.1.1',
            nom: 'Accompagner les \u00e9lus et les agents dans la pratique des \u00e9co-gestes quotidiens (politique de num\u00e9risation des documents, impression recto-verso, extinction des lumi\u00e8res et des ordinateurs, etc.)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.3.2',
        id_nomenclature: '5.1.3.2',
        nom: 'Formaliser le plan de formation/sensibilisation des agents et des \u00e9lus',
        description: '',
        thematique_id: 'orga_interne',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.3.2.1',
            id_nomenclature: '5.1.3.2.1',
            nom: 'D\u00e9cliner un plan de formation/sensibilisation pour chacun (techniciens, directeurs, \u00e9lus, \u2026) en fonction de ses besoins et de son degr\u00e9 d\u2019implication dans l\u2019atteinte des objectifs du programme d\u2019actions climat-air-\u00e9nergie de la collectivit\u00e9 et du territoire',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.2.2',
            id_nomenclature: '5.1.3.2.2',
            nom: 'Rendre visibles et varier dans la liste des formations propos\u00e9es celles en lien avec le climat, l\u0027air ou l\u0027\u00e9nergie',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.3.3',
        id_nomenclature: '5.1.3.3',
        nom: 'Accompagner les \u00e9lus et les agents sur des th\u00e9matiques particuli\u00e8res',
        description: '',
        thematique_id: 'orga_interne',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.3.3.1',
            id_nomenclature: '5.1.3.3.1',
            nom: 'Les agents ont analys\u00e9 l\u0027impact du changement climatique sur leurs activit\u00e9s et sont accompagn\u00e9s pour s\u0027y adapter',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.3.2',
            id_nomenclature: '5.1.3.3.2',
            nom: 'Traiter le sujet de la qualit\u00e9 de l\u0027air de mani\u00e8re transversale et ne pas le cantonner au service sant\u00e9',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.3.4',
        id_nomenclature: '5.1.3.4',
        nom: 'Mettre en \u0153uvre le plan de formation/sensibilisation climat-air-\u00e9nergie',
        description: '',
        thematique_id: 'orga_interne',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.3.4.1',
            id_nomenclature: '5.1.3.4.1',
            nom: 'Encourager r\u00e9ellement les activit\u00e9s de formation/sensibilisation (prendre les frais \u00e0 sa charge, attribuer le temps n\u00e9cessaire)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.4.2',
            id_nomenclature: '5.1.3.4.2',
            nom: 'Les personnes identifi\u00e9es participent effectivement aux formations climat-air-\u00e9nergie sur lesquelles elles se sont positionn\u00e9es',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.4.3',
            id_nomenclature: '5.1.3.4.3',
            nom: 'La liste des formations effectivement r\u00e9alis\u00e9es sur le sujet climat-air-\u00e9nergie est vari\u00e9e (plusieurs th\u00e9matiques et services concern\u00e9s)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.4.4',
            id_nomenclature: '5.1.3.4.4',
            nom: 'Int\u00e9grer un syst\u00e8me d\u2019\u00e9valuation dans les formations',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.3.5',
        id_nomenclature: '5.1.3.5',
        nom: 'Engager et motiver les \u00e9lus et les agents',
        description: '',
        thematique_id: 'orga_interne',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.3.5.1',
            id_nomenclature: '5.1.3.5.1',
            nom: 'Fixer collectivement ou par service des objectifs concernant la performance climat air \u00e9nergie de la collectivit\u00e9 (ils sont fix\u00e9s par \u00e9crit, sont mesurables et ont un d\u00e9lai)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.5.2',
            id_nomenclature: '5.1.3.5.2',
            nom: 'Disposer d\u0027un syst\u00e8me de reconnaissance des initiatives (individuelles ou collectives) ou de l\u0027atteinte des objectifs',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.5.3',
            id_nomenclature: '5.1.3.5.3',
            nom: 'Les agents font part de leurs id\u00e9es d\u0027am\u00e9liorations (objectifs ou bonnes pratiques)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.5.4',
            id_nomenclature: '5.1.3.5.4',
            nom: 'Organiser des \u00e9v\u00e8nements "festifs" ou mettre en place un dispositif d\u2019\u00e9mulation pour former et sensibiliser les agents et les \u00e9lus (concours inter-services, semaines de l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique, semaine de la lutte contre le changement climatique ou de la qualit\u00e9 de l\u0027air, etc.)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.5.5',
            id_nomenclature: '5.1.3.5.5',
            nom: 'Les \u00e9lus participent r\u00e9guli\u00e8rement \u00e0 des visites de site, des conf\u00e9rences, etc.',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.3.6',
        id_nomenclature: '5.1.3.6',
        nom: 'Evaluer et valoriser l\u2019efficacit\u00e9 des actions de formation et de mobilisation',
        description: '',
        thematique_id: 'orga_interne',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.3.6.1',
            id_nomenclature: '5.1.3.6.1',
            nom: 'Valoriser l\u2019atteinte des objectifs de performances ou les bonnes pratiques des services (newsletter, bulletin de paie, intranet, etc.)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.6.2',
            id_nomenclature: '5.1.3.6.2',
            nom: 'Porter \u00e0 connaissance de l\u2019ensemble des services de la collectivit\u00e9 le plan de formation (formations propos\u00e9es) et le bilan quantitatif et qualitatif des formations (nombre de sessions, nombre d\u2019inscrits, \u00e9valuation de la satisfaction des stagiaires, ...)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.3.6.3',
            id_nomenclature: '5.1.3.6.3',
            nom: 'Suivre et mesurer l\u2019efficacit\u00e9 des formations/sensibilisation \u00e0 travers des indicateurs sp\u00e9cifiques (\u00e9valuation des acquis de la formation, \u00e9valuation du passage \u00e0 l\u2019action suite \u00e0 la formation, enqu\u00eate de satisfaction, etc.)',
            description: '',
            thematique_id: 'orga_interne',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__5.1.4',
    id_nomenclature: '5.1.4',
    nom: 'Suivre l\u0027avancement et \u00e9valuer r\u00e9guli\u00e8rement la politique climat-air-\u00e9nergie',
    description:
      '\u003cp\u003eCette mesure porte sur le suivi et l\u2019\u00e9valuation du programme d\u0027actions climat air \u00e9nergie.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 adopte une m\u00e9thodologie claire et pr\u00e9cise pour mettre \u00e0 jour, \u00e9valuer l\u2019efficacit\u00e9 et l\u2019avancement de son plan d\u0027actions en se basant sur des documents v\u00e9rifiables et sur ses activit\u00e9s ant\u00e9rieures :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003er\u00e9alisation annuelle\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ebas\u00e9 sur des outils d\u0027\u00e9valuation existants\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eanalyse de la planification des ann\u00e9es pr\u00e9c\u00e9dentes (les actions planifi\u00e9es et r\u00e9alis\u00e9es)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003erenforcement/ajustement des mesures planifi\u00e9es\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003edocumentation des r\u00e9sultats\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ecommunication interne et externe et renseignement des r\u00e9sultats bas\u00e9s sur des indicateurs\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'strategie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__5.1.4.1',
        id_nomenclature: '5.1.4.1',
        nom: 'Se doter d\u2019outils et de moyens pour suivre et \u00e9valuer son plan d\u2019action',
        description: '',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.4.1.1',
            id_nomenclature: '5.1.4.1.1',
            nom: 'Disposer d\u2019un tableau de bord op\u00e9rationnel pour le suivi du plan d\u2019action',
            description:
              '\u003cp\u003ePour chaque objectif op\u00e9rationnel : un indicateur de suivi, qui soit mesurable, pertinent et compr\u00e9hensible par le COPIL avec la fr\u00e9quence de mise \u00e0 jour et la source de donn\u00e9es identifi\u00e9es.\u003c/p\u003e\n\u003cp\u003ePour chaque action un responsable identifi\u00e9, une planification pluriannuelle, un budget et un champ pour renseigner l\u2019\u00e9tat d\u2019avancement.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.1.2',
            id_nomenclature: '5.1.4.1.2',
            nom: 'Pr\u00e9voir pr\u00e9cis\u00e9ment les modalit\u00e9s du suivi : fr\u00e9quence annuelle de r\u00e9union \u00e0 minima, date de mise \u00e0 jour du tableau de bord, constitution de l\u2019\u00e9quipe de suivi, modalit\u00e9s de collecte des donn\u00e9es n\u00e9cessaires \u00e0 l\u2019actualisation du tableau de bord, etc.',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.1.3',
            id_nomenclature: '5.1.4.1.3',
            nom: 'Constituer et mettre en place une instance sp\u00e9cifique de suivi-\u00e9valuation: comit\u00e9 de pilotage \u00e9tabli ou instance sp\u00e9cifique, cela peut \u00eatre une instance neutre (citoyenne)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.1.4',
            id_nomenclature: '5.1.4.1.4',
            nom: 'Planifier l\u0027information des r\u00e9sultats annuels au public',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.4.2',
        id_nomenclature: '5.1.4.2',
        nom: 'Suivre et \u00e9valuer r\u00e9guli\u00e8rement l\u2019atteinte des objectifs',
        description: '',
        thematique_id: 'strategie',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.4.2.1',
            id_nomenclature: '5.1.4.2.1',
            nom: 'Disposer d\u0027un suivi effectif : V\u00e9rifier l\u0027atteinte des objectifs r\u00e9guli\u00e8rement pour l\u2019ensemble des th\u00e9matiques climat-air-\u00e9nergie \u00e0 travers des indicateurs qualitatifs et quantitatifs (pas de fr\u00e9quents reports et espacements des r\u00e9unions de suivi)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.2.2',
            id_nomenclature: '5.1.4.2.2',
            nom: 'Actualiser annuellement le calendrier, le budget, les personnes responsables et l\u0027\u00e9tat d\u0027avancement des actions',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.2.3',
            id_nomenclature: '5.1.4.2.3',
            nom: 'Partager le tableau de bord au sein de l\u2019\u00e9quipe projet qui le renseigne et le fait \u00e9voluer',
            description:
              '\u003cp\u003eD\u00e9marche Cit\u0027ergie accompagn\u00e9e par un conseiller : a minima \u00e0 l\u2019occasion de la visite annuelle\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.4.3',
        id_nomenclature: '5.1.4.3',
        nom: 'Communiquer et informer les acteurs du territoire de l\u2019avancement du programme d\u2019actions',
        description: '',
        thematique_id: 'strategie',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.4.3.1',
            id_nomenclature: '5.1.4.3.1',
            nom: 'Synth\u00e9tiser les r\u00e9sultats des actions',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.3.2',
            id_nomenclature: '5.1.4.3.2',
            nom: 'Publier les r\u00e9sultats et le suivi annuel : en interne, dans les instances concern\u00e9es (commissions, conseil municipal, bureau, conseil communautaire..); en externe sur le site de la collectivit\u00e9, lors de r\u00e9unions publiques, dans le rapport de DD, dans le rapport d\u2019activit\u00e9, etc.',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.3.3',
            id_nomenclature: '5.1.4.3.3',
            nom: 'Int\u00e9grer des acteurs du territoire (habitants, acteurs socio-\u00e9conomiques) au dispositif d\u0027\u00e9valuation par exemple dans une instance sp\u00e9cifique (\u00e9valuation participative)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.3.4',
            id_nomenclature: '5.1.4.3.4',
            nom: 'Aller au-del\u00e0 de l\u0027exigence r\u00e8glementaire de mise \u00e0 disposition, au bout de 3 ans, d\u0027un rapport au public sur la mise en \u0153uvre du PCAET',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.1.4.4',
        id_nomenclature: '5.1.4.4',
        nom: 'Faire \u00e9voluer son programme d\u2019actions gr\u00e2ce au dispositif de suivi et d\u2019\u00e9valuation',
        description: '',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.1.4.4.1',
            id_nomenclature: '5.1.4.4.1',
            nom: 'Actualiser le programme d\u0027actions et l\u0027adapter chaque ann\u00e9e',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.1.4.4.2',
            id_nomenclature: '5.1.4.4.2',
            nom: 'Mettre en place un cycle d\u0027am\u00e9lioration continue (objectif-planification-r\u00e9alisation-contr\u00f4le-objectif)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__5.2.1',
    id_nomenclature: '5.2.1',
    nom: 'Financer la politique Climat Air Energie et r\u00e9aliser une \u00e9valuation climat du budget',
    description:
      '\u003cp\u003eLa collectivit\u00e9 identifie et se dote chaque ann\u00e9e d\u0027un budget directement li\u00e9 \u00e0 sa politique climat-air-\u00e9nergie. Il s\u0027agit du budget destin\u00e9 \u00e0 des actions de soutien (techniques ou financi\u00e8res) \u00e0 la ma\u00eetrise de la demande d\u0027\u00e9nergie, \u00e0 l\u0027efficacit\u00e9 \u00e9nerg\u00e9tique, aux \u00e9nergies renouvelables, \u00e0 la baisse des \u00e9missions de GES, des polluants atmosph\u00e9riques et \u00e0 l\u0027adaptation au changement climatique, en fonctionnement et en investissement.\u003c/p\u003e\n\u003cp\u003eCes budgets ne sont pas des budgets ind\u00e9pendants, mais une partie de chacun des budgets des diff\u00e9rents services, relative \u00e0 la mise en \u0153uvre des actions. En lien avec cette d\u00e9marche, la collectivit\u00e9 trace et valorise les diff\u00e9rentes ressources li\u00e9es \u00e0 l\u2019\u00e9nergie et cherche des financements compl\u00e9mentaires et innovants pour sa politique climat-air-\u00e9nergie.\u003c/p\u003e\n\u003cp\u003eParall\u00e8lement, la collectivit\u00e9 \u00e9value chaque ann\u00e9e l\u2019impact sur les enjeux\u00a0\u00ab\u00a0climat\u00a0\u00bb (favorable, neutre ou d\u00e9favorable) de l\u2019ensemble des lignes de d\u00e9pense de son budget, pour pr\u00e9sentation aux \u00e9lu.e.s en amont des discussions budg\u00e9taires, et am\u00e9liore d\u2019ann\u00e9e en ann\u00e9e l\u2019impact climat de ses choix budg\u00e9taires.\u003c/p\u003e\n\u003cp\u003eMieux piloter les d\u00e9penses d\u2019\u00e9nergie et diminuer les d\u00e9penses d\u00e9favorables d\u2019un point de vue climatique peut par ailleurs permettre \u00e0 la collectivit\u00e9 d\u2019am\u00e9liorer sa capacit\u00e9 budg\u00e9taire.\u003c/p\u003e\n',
    thematique_id: 'strategie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__5.2.1.1',
        id_nomenclature: '5.2.1.1',
        nom: 'Sensibiliser les \u00e9lu.e.s et former les \u00e9quipes \u00e0 la prise en compte de la politique climat-air-\u00e9nergie dans le processus d\u2019\u00e9laboration budg\u00e9taire',
        description: '',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.1.1.1',
            id_nomenclature: '5.2.1.1.1',
            nom: 'Sensibiliser l\u2019ensemble des \u00e9lu.e.s \u00e0 l\u2019importance de piloter la politique climat-air-\u00e9nergie dans ses aspects budg\u00e9taires, et leur pr\u00e9senter l\u2019int\u00e9r\u00eat de r\u00e9aliser une \u00e9valuation climat du budget',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.1.2',
            id_nomenclature: '5.2.1.1.2',
            nom: 'Nommer une \u00e9quipe transversale pour prendre en charge les aspects budg\u00e9taires li\u00e9s \u00e0 la politique climat-air-\u00e9nergie',
            description:
              '\u003cp\u003eAu minimum cette \u00e9quipe comprend une personne en charge des finances et du budget et une personne en charge de la politique climat-air-\u00e9nergie\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.1.3',
            id_nomenclature: '5.2.1.1.3',
            nom: 'Former l\u0027\u00e9quipe en charge des aspects budg\u00e9taires li\u00e9s \u00e0 la politique climat-air-\u00e9nergie sur l\u2019\u00e9valuation climat du budget, la budg\u00e9tisation de la politique climat-air-\u00e9nergie, et aux dispositifs de financement de cette politique',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.1.4',
            id_nomenclature: '5.2.1.1.4',
            nom: 'Sensibiliser l\u2019ensemble des services \u00e0 l\u2019importance de prendre en compte les enjeux climat-air-\u00e9nergie lors de toute programmation de d\u00e9penses',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.1.2',
        id_nomenclature: '5.2.1.2',
        nom: 'Attribuer un budget pour la politique climat-air-\u00e9nergie',
        description: '',
        thematique_id: 'strategie',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.1.2.1',
            id_nomenclature: '5.2.1.2.1',
            nom: 'Faire correspondre \u00e0 chaque \u00e9tape de la construction de la politique climat-air-\u00e9nergie un budget : action de sensibilisation, de communication, diagnostic, suivi, \u00e9valuation, programme d\u2019actions. Ce budget de la politique climat-air-\u00e9nergie est traduit en une trajectoire annuelle de d\u00e9penses.',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.2.2',
            id_nomenclature: '5.2.1.2.2',
            nom: 'Disposer d\u2019un plan pluriannuel d\u2019investissement qui int\u00e8gre des actions climat-air-\u00e9nergie en ligne avec ses documents programme',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.2.3',
            id_nomenclature: '5.2.1.2.3',
            nom: 'Allouer le budget chaque ann\u00e9e par le conseil de la collectivit\u00e9. Acter un document donnant une lecture transversale de l\u2019ensemble des recettes et d\u00e9penses qui concourent aux objectifs de la politique climat-air-\u00e9nergie',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.1.3',
        id_nomenclature: '5.2.1.3',
        nom: 'R\u00e9aliser chaque ann\u00e9e une \u00e9valuation climat du budget',
        description:
          '\u003cp\u003eLa collectivit\u00e9 m\u00e8ne chaque ann\u00e9e une \u00e9valuation globale de son budget sous l\u2019angle \u201cclimat\u201d en d\u00e9terminant les actions en faveur de la neutralit\u00e9 carbone et celles qui contribuent \u00e0 \u00e9mettre des gaz \u00e0 effet de serre, en suivant la m\u00e9thodologie propos\u00e9e par I4CE par exemple. Les r\u00e9sultats de cette \u00e9valuation climat du budget sont pr\u00e9sent\u00e9s aux \u00e9lu.e.s en amont des discussions budg\u00e9taires et du vote du budget.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 15,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.1.4',
        id_nomenclature: '5.2.1.4',
        nom: 'Analyser les marges de man\u0153uvre budg\u00e9taires de la collectivit\u00e9 sur la base de l\u2019\u00e9valuation climat du budget',
        description:
          '\u003cp\u003eCommission th\u00e9matique par commission th\u00e9matique, une analyse est r\u00e9alis\u00e9e des marges de man\u0153uvre possible pour l\u2019am\u00e9lioration de l\u2019impact climat du budget de la collectivit\u00e9, \u00e0 la fois pour augmenter les d\u00e9penses favorables d\u2019un point de vue climatique et diminuer celles qui sont d\u00e9favorables.\u003c/p\u003e\n\u003cp\u003eCes marges de man\u0153uvre sont progressivement mises en \u0153uvre.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 10,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.1.5',
        id_nomenclature: '5.2.1.5',
        nom: 'Diversifier les modes de financement pour atteindre les objectifs climat air \u00e9nergie et innover',
        description: '',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.1.5.1',
            id_nomenclature: '5.2.1.5.1',
            nom: 'La collectivit\u00e9 \u00e9tudie l\u2019ensemble des sources de financement possibles pour les actions de sa politique climat-aire-\u00e9nergie.',
            description:
              '\u003cp\u003eEn particulier, la collectivit\u00e9 suit les dispositifs d\u00e9di\u00e9s mis \u00e0 disposition par l\u2019Etat fran\u00e7ais et ses op\u00e9rateurs (ADEME, ANCT, PIA, Banque des Territoires\u2026), ainsi que les fonds europ\u00e9ens (FEDER, LEADER, FSE, H2020, UIA, INTERREG, Life, Life IP, CEF, ...).\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.5.2',
            id_nomenclature: '5.2.1.5.2',
            nom: 'La collectivit\u00e9 fait preuve d\u2019innovation pour le financement des actions de sa politique climat-air-\u00e9nergie (CEE, CPE, MDE et r\u00e9affectation de recettes, projets citoyens)',
            description:
              '\u003cp\u003eVente de Certificat d\u2019Economie d\u2019Energie (suivi d\u0027un indicateur en kWh/cumac valoris\u00e9 par an), Contrat de Performance Energ\u00e9tique, identification des \u00e9conomies r\u00e9alis\u00e9es gr\u00e2ce \u00e0 des actions de ma\u00eetrise de l\u2019\u00e9nergie ou d\u0027efficacit\u00e9 et affectation de tout ou partie de ces \u0026quot;recettes\u0026quot; au budget de la politique \u00e9nerg\u00e9tique, investissement participatif via l\u2019\u00e9mergence de projet citoyen, etc.\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.1.6',
        id_nomenclature: '5.2.1.6',
        nom: 'Suivre annuellement le budget',
        description: '',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.1.6.1',
            id_nomenclature: '5.2.1.6.1',
            nom: 'Suivre annuellement le budget total pour la politique climat-air-\u00e9nergie par un indicateur en euros/an/habitant',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.6.2',
            id_nomenclature: '5.2.1.6.2',
            nom: 'Orienter les d\u00e9penses budg\u00e9taires gr\u00e2ce \u00e0 l\u2019analyse des marges de man\u0153uvre tir\u00e9e de l\u2019\u00e9valuation climat du budget',
            description:
              '\u003cp\u003eLa part du budget \u00ab\u00a0favorable\u00a0\u00bb ou \u00ab\u00a0tr\u00e8s favorable\u00a0\u00bb d\u2019un point de vue climatique est en hausse\u003c/p\u003e\n\u003cp\u003eLa part du budget \u00ab\u00a0d\u00e9favorable\u00a0\u00bb d\u2019un point de vue climatique est en baisse\u003c/p\u003e\n',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.1.7',
        id_nomenclature: '5.2.1.7',
        nom: '\u00catre coh\u00e9rent dans sa politique de soutien financier',
        description: '',
        thematique_id: 'strategie',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.1.7.1',
            id_nomenclature: '5.2.1.7.1',
            nom: 'Apporter du soutien financier \u00e0 des th\u00e9matiques environnementales vari\u00e9es (b\u00e2timents, \u00e9nergie, air, eau, agriculture, ENR, mobilit\u00e9...), \u00e0 des cibles vari\u00e9es (particuliers, association, entreprises, agriculteurs...), et sous diff\u00e9rentes formes (partenariat avec des banques, tiers-investissement, fonds de garantie, fonds d\u0027investissement, prise de participation dans des SCIC/SEM \u0153uvrant pour le DD ou des SAS/SA portant des projets de production d\u2019\u00e9nergie renouvelable sur leur territoire...)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.7.2',
            id_nomenclature: '5.2.1.7.2',
            nom: 'Diposer d\u0027un r\u00e8glement des aides clair et bien le diffuser',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.7.3',
            id_nomenclature: '5.2.1.7.3',
            nom: 'Ne pas octroyer d\u2019aides pour des projets en contradiction avec les enjeux climatiques et \u00e9nerg\u00e9tiques (ex : courses automobiles, soutien aux a\u00e9roports, grands projets routiers,...)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.1.7.4',
            id_nomenclature: '5.2.1.7.4',
            nom: 'Pratiquer l\u0027\u00e9co-conditionnement des aides habituelles de la collectivit\u00e9 lorsque cela est possible (bonification, diff\u00e9renciation des montants d\u2019aides selon des crit\u00e8res)',
            description: '',
            thematique_id: 'strategie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__5.2.2',
    id_nomenclature: '5.2.2',
    nom: 'Etre exemplaire en mati\u00e8re d\u0027\u00e9coresponsabilit\u00e9 de la commande publique',
    description:
      '\u003cp\u003eLa collectivit\u00e9 int\u00e8gre syst\u00e9matiquement dans ses march\u00e9s publics d\u0027achat de biens mat\u00e9riels ou de services, des crit\u00e8res d\u0027efficacit\u00e9 \u00e9nerg\u00e9tique, de r\u00e9duction de l\u0027impact environnemental (y compris qualit\u00e9 de l\u0027air), de co\u00fbt du cycle de vie s\u0027ils existent, par exemple pour :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003el\u0027acquisition de mat\u00e9riel de bureau (ordinateur, imprimante, papier...)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ele mat\u00e9riel et fournitures d\u0027entretien (y compris d\u00e9tergents pour le nettoyage, lubrifiants)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eles autres march\u00e9s/achats ayant un impact sur le climat (par ex. l\u0027alimentation)\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'conso_resp',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__5.2.2.1',
        id_nomenclature: '5.2.2.1',
        nom: 'S\u0027organiser et mobiliser en interne',
        description: '',
        thematique_id: 'conso_resp',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.2.1.1',
            id_nomenclature: '5.2.2.1.1',
            nom: 'Identifier un agent r\u00e9f\u00e9rent en interne : cet agent a \u00e9t\u00e9 form\u00e9 sur les possibilit\u00e9s d\u0027int\u00e9gration du d\u00e9veloppement durable dans les march\u00e9s publics (r\u00e9f\u00e9rent "achat durable\u201d)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.1.2',
            id_nomenclature: '5.2.2.1.2',
            nom: 'Sensibiliser et mobiliser les \u00e9lus, les inciter \u00e0 adopter une politique volontariste : connaissance de la logique cycle de vie des produits et services et de la notion de co\u00fbt du cycle de vie, connaissance des \u00e9co-labels',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.2.2',
        id_nomenclature: '5.2.2.2',
        nom: 'Voter une d\u00e9lib\u00e9ration sur la mise en \u0153uvre de clauses environnementales (et sociales) dans les march\u00e9s publics',
        description: '',
        thematique_id: 'conso_resp',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.2.2.1',
            id_nomenclature: '5.2.2.2.1',
            nom: 'D\u00e9cider de prendre en compte les aspects \u00e9nergie et environnement, notamment l\u0027impact \u00e9nerg\u00e9tique et GES de la fabrication et du transport des marchandises, et les co\u00fbts globaux lors des achats, incluant la consommation d\u2019\u00e9nergie \u00e0 l\u2019utilisation (d\u00e9lib\u00e9ration, note de services)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.2.2',
            id_nomenclature: '5.2.2.2.2',
            nom: 'Mettre \u00e0 disposition des agents et \u00e9lus des directives g\u00e9n\u00e9rales avec crit\u00e8res pour les march\u00e9s publics',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.2.3',
        id_nomenclature: '5.2.2.3',
        nom: 'Mener les actions simples',
        description: '',
        thematique_id: 'conso_resp',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.2.3.1',
            id_nomenclature: '5.2.2.3.1',
            nom: 'Identifier et changer les pratiques pour les produits faciles \u00e0 \u00e9viter ou substituer',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.3.2',
            id_nomenclature: '5.2.2.3.2',
            nom: 'Effectuer les achats d\u0027articles en papier (papier \u00e0 imprimer, papier hygi\u00e9nique), de d\u00e9tergents et d\u0027appareils de bureau selon des crit\u00e8res \u00e9cologiques (exemple : \u00e9colabel et notamment \u00e9colabel europ\u00e9en)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.3.3',
            id_nomenclature: '5.2.2.3.3',
            nom: 'Privil\u00e9gier les produits de saison, locaux et biologiques pour les \u00e9v\u00e8nements ponctuels organis\u00e9s par la collectivit\u00e9, les achats alimentaires',
            description:
              '\u003cp\u003ecf. mesure 6.4.1  pour la restauration collective\u003c/p\u003e\n',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.2.4',
        id_nomenclature: '5.2.2.4',
        nom: 'Contribuer \u00e0 un r\u00e9seau local achats responsables',
        description: '',
        thematique_id: 'conso_resp',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.2.4.1',
            id_nomenclature: '5.2.2.4.1',
            nom: 'Entrer dans un r\u00e9seau local d\u0027achats responsables et y participer activement',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.4.2',
            id_nomenclature: '5.2.2.4.2',
            nom: 'Favoriser les plateformes locales de distribution',
            description:
              '\u003cp\u003ecf. mesure 6.4.1  pour la restauration collective\u003c/p\u003e\n',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.2.5',
        id_nomenclature: '5.2.2.5',
        nom: 'Adopter une d\u00e9lib\u00e9ration d\u00e9finissant un plan pour les achats responsables, recenser les pratiques, effectuer un \u00e9tat des lieux de la production locale',
        description: '',
        thematique_id: 'conso_resp',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.2.5.1',
            id_nomenclature: '5.2.2.5.1',
            nom: 'Conna\u00eetre et formaliser dans un document (listing) l\u0027\u00e9tendue de l\u0027offre locale pour r\u00e9pondre aux besoins de la collectivit\u00e9 (producteurs, fournisseurs...)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.5.2',
            id_nomenclature: '5.2.2.5.2',
            nom: 'Identifier dans cette d\u00e9lib\u00e9ration, les pratiques d\u0027achats et les am\u00e9liorations \u00e0 apporter',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.5.3',
            id_nomenclature: '5.2.2.5.3',
            nom: 'D\u00e9tailler les directives pour les achats dans les domaines du mat\u00e9riel du bureau, entretien des b\u00e2timents, v\u00e9hicules et mobilit\u00e9, mat\u00e9riaux de construction',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.2.6',
        id_nomenclature: '5.2.2.6',
        nom: 'Appliquer des clauses environnementales vari\u00e9es et syst\u00e9matiser la logique cycle de vie des produits et services, afin de d\u00e9terminer les dispositions environnementales pertinentes selon les familles d\u0027achat',
        description: '',
        thematique_id: 'conso_resp',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.2.6.1',
            id_nomenclature: '5.2.2.6.1',
            nom: 'Inviter les candidats \u00e0 r\u00e9pondre aux appels d\u0027offres de mani\u00e8re \u00e9lectronique',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.6.2',
            id_nomenclature: '5.2.2.6.2',
            nom: '\u00c9valuer les fournisseurs sur l\u2019application de leurs engagements environnementaux pendant le d\u00e9roulement de leur prestation (par exemple prestataires de restauration collective ou travaux)',
            description:
              '\u003cp\u003eExemple : La pond\u00e9ration des crit\u00e8res environnementaux est au moins \u00e9gale \u00e0 10% de la note globale d\u2019un march\u00e9 et se fonde sur des \u00e9l\u00e9ments v\u00e9rifiables (ex : note de frais d\u2019aliments bio et locaux, remboursement de billets de train, etc.) que l\u2019attributaire devra remettre au commanditaire\u003c/p\u003e\n',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.6.3',
            id_nomenclature: '5.2.2.6.3',
            nom: 'Encourager la fourniture du bilan GES des produits/services achet\u00e9s dans les appels d\u2019offres',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.6.4',
            id_nomenclature: '5.2.2.6.4',
            nom: 'Effectuer l\u0027entretien des b\u00e2timents et des espaces publics selon des crit\u00e8res \u00e9cologiques',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.6.5',
            id_nomenclature: '5.2.2.6.5',
            nom: 'Effectuer le choix des mat\u00e9riaux de construction selon des crit\u00e8res \u00e9cologiques (le bois est notamment syst\u00e9matiquement \u00e9tudi\u00e9) et repose sur les gisements locaux (Pis\u00e9, paille, etc.)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.6.6',
            id_nomenclature: '5.2.2.6.6',
            nom: 'Choisir les techniques et mat\u00e9riaux de finition, ainsi que le mobilier pour limiter la pollution de l\u0027air int\u00e9rieur (faibles \u00e9missions de COV et formald\u00e9hydes notamment), soit en privil\u00e9giant des produits avec \u00e9tiquette A+, soit en achetant des produits d\u2019occasion',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.6.7',
            id_nomenclature: '5.2.2.6.7',
            nom: 'Inclure la prise en compte de la dur\u00e9e de vie et de la fin de vie des produits achet\u00e9s dans les crit\u00e8res d\u2019achats',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.2.7',
        id_nomenclature: '5.2.2.7',
        nom: 'Participer \u00e0 l\u0027am\u00e9lioration de l\u0027offre en services et produits responsables / entra\u00eener les acteurs locaux',
        description: '',
        thematique_id: 'conso_resp',
        points: 5,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.2.7.1',
            id_nomenclature: '5.2.2.7.1',
            nom: 'Informer les fournisseurs et producteurs de la politique d\u2019achats responsables par une communication cibl\u00e9e aupr\u00e8s des entreprises concern\u00e9es, voire via la plateforme d\u2019achat de la collectivit\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__5.2.2.8',
        id_nomenclature: '5.2.2.8',
        nom: 'Passer au crible l\u0027ensemble des achats publics',
        description: '',
        thematique_id: 'conso_resp',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__5.2.2.8.1',
            id_nomenclature: '5.2.2.8.1',
            nom: '% des march\u00e9s (en nombre) int\u00e9grant des clauses environnementales (et sociales) dans les sp\u00e9cifications techniques ou les crit\u00e8res d\u2019attribution en augmentation',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__5.2.2.8.2',
            id_nomenclature: '5.2.2.8.2',
            nom: '% des march\u00e9s (en \u20ac) int\u00e9grant des clauses environnementales (et sociales) dans les sp\u00e9cifications techniques ou les crit\u00e8res d\u2019attribution en augmentation',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.1.1',
    id_nomenclature: '6.1.1',
    nom: 'D\u00e9velopper une strat\u00e9gie partenariale multi-niveaux',
    description:
      '\u003cp\u003eLa collectivit\u00e9 d\u00e9finit une strat\u00e9gie de coop\u00e9ration multi-niveaux (locale, r\u00e9gionale, nationale, europ\u00e9enne et internationale) et \u00e0 destination de tous les acteurs travaillant sur les th\u00e9matiques climat air \u00e9nergie. Elle recommande et d\u00e9fend sa politique climat-air-\u00e9nergie par exemple par des prises de position sur l\u0027\u00e9laboration des lois et r\u00e8glements. Par ailleurs, elle d\u00e9veloppe des actions de coop\u00e9ration d\u00e9centralis\u00e9e.\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.1.1.1',
        id_nomenclature: '6.1.1.1',
        nom: 'Identifier les acteurs cl\u00e9s \u00e0 associer',
        description: '',
        thematique_id: 'parten_coop',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.1.1.1',
            id_nomenclature: '6.1.1.1.1',
            nom: 'identifier et cartographier les acteurs cl\u00e9s (priv\u00e9s et publics, interne et externe) \u00e0 associer',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.1.2',
            id_nomenclature: '6.1.1.1.2',
            nom: 'inscrire la coop\u00e9ration dans les fiches de poste des agents concern\u00e9s (missions identifi\u00e9es et temps associ\u00e9)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.1.2',
        id_nomenclature: '6.1.1.2',
        nom: 'Echanger et s\u2019impliquer dans des projets \u00e0 l\u2019\u00e9chelle extra-locale',
        description:
          '\u003cp\u003eLes projets de coop\u00e9ration sp\u00e9cifiques/restreints entre l\u2019EPCI et ses communes membres sont \u00e9tudi\u00e9s dans la mesure 6.1.2. \u00abRenforcer la coop\u00e9ration au sein de l\u2019intercommunalit\u00e9\u00bb.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.1.2.1',
            id_nomenclature: '6.1.1.2.1',
            nom: 'coop\u00e9ration inter-territoriale avec les territoires voisins (communes ou EPCI limitrophes) ou \u00e0 une autre \u00e9chelle (Parcs naturels r\u00e9gionaux, Pays\u2026), notamment dans le cas de fronti\u00e8res entre territoire urbain et territoire rural (actions communes, mutualisation d\u0027ing\u00e9nierie et d\u0027autres moyens, rencontres r\u00e9gionales d\u0027\u00e9changes d\u2019exp\u00e9rience, par exemple)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.2.2',
            id_nomenclature: '6.1.1.2.2',
            nom: '\u00e9changes et coop\u00e9ration avec les institutions nationales et r\u00e9gionales impliqu\u00e9es dans les PCAET, SRCAE/SRADDET et PPA (DREAL, DDT, Minist\u00e8re de l\u0027\u00e9cologie...), notamment sur la th\u00e9matique de la vuln\u00e9rabilit\u00e9 au changement climatique ou la qualit\u00e9 de l\u0027air',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.2.3',
            id_nomenclature: '6.1.1.2.3',
            nom: '\u00e9changes et coop\u00e9ration avec les chambres consulaires et plateformes d\u0027information sp\u00e9cifiques aux diff\u00e9rents acteurs du territoire',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.2.4',
            id_nomenclature: '6.1.1.2.4',
            nom: 'participer aux groupes de travail dans les services r\u00e9gionaux sp\u00e9cialis\u00e9s en mati\u00e8re d\u2019\u00e9nergie climat air (ASQUA, EIE, AASQA, etc)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.2.5',
            id_nomenclature: '6.1.1.2.5',
            nom: 'participer aux commissions de suivi des sites (pour veiller \u00e0 la question de la qualit\u00e9 de l\u0027air, par exemple)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.1.3',
        id_nomenclature: '6.1.1.3',
        nom: 'Formaliser la strat\u00e9gie partenariale',
        description: '',
        thematique_id: 'parten_coop',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.1.3.1',
            id_nomenclature: '6.1.1.3.1',
            nom: 'planification du dialogue et de la collaboration \u00e0 travers des accords de partenariat formalis\u00e9s (adh\u00e9sion des partenaires \u00e0 une charte partenariale, r\u00e9seaux d\u2019acteurs avec rencontres r\u00e9guli\u00e8res, cycle de conf\u00e9rences, groupe de travail th\u00e9matiques)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.3.2',
            id_nomenclature: '6.1.1.3.2',
            nom: 'renforcer les engagements demand\u00e9s aux partenaires et les impliquer dans le suivi et l\u2019\u00e9valuation de la politique climat air \u00e9nergie en fixant des objectifs chiffr\u00e9s et dat\u00e9s par exemple en mati\u00e8re de r\u00e9duction de GES et de consommation d\u2019\u00e9nergie',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.3.3',
            id_nomenclature: '6.1.1.3.3',
            nom: 'proposer un accompagnement technique vis-\u00e0-vis des partenaires (aide \u00e0 la d\u00e9finition des objectifs, \u00e0 l\u2019\u00e9valuation des actions engag\u00e9es, etc)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.3.4',
            id_nomenclature: '6.1.1.3.4',
            nom: 'voter et budg\u00e9ter le plan de coop\u00e9ration (valables sur plusieurs ann\u00e9es)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.3.5',
            id_nomenclature: '6.1.1.3.5',
            nom: 'mise en \u0153uvre d\u0027au moins 2 partenariats significatifs et multi-acteurs dans le domaine climat-air-\u00e9nergie durant les 4 derni\u00e8res ann\u00e9es (valorisation \u00e0 partir de 1 projet pour collectivit\u00e9s\u003c3000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.1.4',
        id_nomenclature: '6.1.1.4',
        nom: 'S\u2019impliquer dans l\u2019\u00e9volution du cadre r\u00e9glementaire et l\u00e9gislatif climat air \u00e9nergie',
        description:
          '\u003cp\u003eNota : ces actions, notamment pour les petites collectivit\u00e9s, peuvent avoir lieu dans le cadre de l\u2019appartenance de la collectivit\u00e9 (techniciens et \u00e9lus) \u00e0 des r\u00e9seaux d\u2019acteurs comme AMORCE, AITF, FNCCR, CLER, AMF, France Urbaine, APVF ou en partenariat avec des organisations/associations environnementales d\u2019envergure nationale ou r\u00e9gionale\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.1.4.1',
            id_nomenclature: '6.1.1.4.1',
            nom: 'Interpeller les acteurs sur les blocages l\u00e9gislatifs et r\u00e9glementaires rencontr\u00e9s',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.4.2',
            id_nomenclature: '6.1.1.4.2',
            nom: 'Interpeller officiellement le niveau national voire europ\u00e9en sur les blocages rencontr\u00e9s (d\u00e9put\u00e9s, s\u00e9nateurs, commission europ\u00e9enne)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.4.3',
            id_nomenclature: '6.1.1.4.3',
            nom: 'Proposer les \u00e9volutions l\u00e9gislatives, r\u00e9glementaires et autres initiatives',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.4.4',
            id_nomenclature: '6.1.1.4.4',
            nom: 'Prendre position et/ou mener des actions lors de proc\u00e9dures de consultation ordinaires (lois, ordonnances, planifications, infrastructures de transport, etc.) attest\u00e9es par des documents \u00e9crits (courriers au d\u00e9put\u00e9s-s\u00e9nateurs, questions au gouvernement, communication \u00e0 la presse, lettres des lecteurs, r\u00e9coltes de signatures, etc.)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.1.5',
        id_nomenclature: '6.1.1.5',
        nom: 'Mettre en place des actions au niveau international',
        description: '',
        thematique_id: 'parten_coop',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.1.5.1',
            id_nomenclature: '6.1.1.5.1',
            nom: 'S\u2019engager dans des projets europ\u00e9ens (LIFE, Interreg\u2026)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.5.2',
            id_nomenclature: '6.1.1.5.2',
            nom: 'Sensibiliser les \u00e9lus, agents et acteurs du territoire aux enjeux de la coop\u00e9ration d\u00e9centralis\u00e9e (via des expositions par exemple)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.5.3',
            id_nomenclature: '6.1.1.5.3',
            nom: 'Int\u00e9grer les questions climat air \u00e9nergie dans les accords existants de coop\u00e9ration d\u00e9centralis\u00e9e',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.5.4',
            id_nomenclature: '6.1.1.5.4',
            nom: 'Monter un ou plusieurs projets de coop\u00e9ration d\u00e9centralis\u00e9e sur les th\u00e9matiques climat air \u00e9nergie',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.1.5.5',
            id_nomenclature: '6.1.1.5.5',
            nom: 'Budg\u00e9ter l\u0027aide au d\u00e9veloppement et les projets de coop\u00e9ration d\u00e9centralis\u00e9e (% du budget consacr\u00e9 \u00e0 ce sujet)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.1.2',
    id_nomenclature: '6.1.2',
    nom: 'Renforcer la coop\u00e9ration au sein de l\u0027intercommunalit\u00e9',
    description:
      '\u003cp\u003eLa collectivit\u00e9 met en place des actions de coop\u00e9ration renforc\u00e9e avec les autres collectivit\u00e9s de son territoire (dans le p\u00e9rim\u00e8tre administratif de l\u2019intercommunalit\u00e9), dans une approche solidaire et efficace en mati\u00e8re de politique climat-air-\u00e9nergie entre intercommunalit\u00e9 et communes membres. Elle s\u0027implique en tant qu\u0027animateur ou moteur du territoire. Elle accompagne les communes ou sert d\u2019exemple dans la mise en place de leur politique climat air \u00e9nergie et encourage la mise en place d\u2019actions mutualis\u00e9es.\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.1.2.1',
        id_nomenclature: '6.1.2.1',
        nom: 'Partager une strat\u00e9gie climat-air-\u00e9nergie commune',
        description: '',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.2.1.1',
            id_nomenclature: '6.1.2.1.1',
            nom: '\u00e9changer/relayer/diffuser des donn\u00e9es, des documents et des bonnes pratiques entre EPCI et communes membres, concernant leur politique climat air \u00e9nergie',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.2.1.2',
            id_nomenclature: '6.1.2.1.2',
            nom: 'la collectivit\u00e9 est \u00e0 l\u2019initiative ou participe \u00e0 des rencontres ponctuelles bilat\u00e9rales commune/intercommunalit\u00e9 en lien avec le climat, l\u2019air et l\u2019\u00e9nergie: conf\u00e9rences, groupes de travail th\u00e9matique, rencontres \u00e0 l\u2019occasion de l\u2019\u00e9laboration des documents de planification et d\u2019urbanisme- pour les EPCI : les rencontres sont fr\u00e9quemment d\u00e9localis\u00e9es sur le territoire pour les territoires \u00e9tendus pour faciliter la participation d\u2019un maximum de communes membres',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.2.2',
        id_nomenclature: '6.1.2.2',
        nom: 'Conna\u00eetre les r\u00f4les de chacun en mati\u00e8re de climat, d\u2019air et d\u2019\u00e9nergie',
        description: '',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.2.2.1',
            id_nomenclature: '6.1.2.2.1',
            nom: 'sur les th\u00e9matiques en lien avec le climat, l\u2019air et l\u2019\u00e9nergie, les r\u00f4les et comp\u00e9tences de chacun (intercommunalit\u00e9/commune) sont clairs, le cas \u00e9ch\u00e9ant des pr\u00e9cisions sont apport\u00e9es et formalis\u00e9es (d\u00e9lib\u00e9ration pr\u00e9cisant les comp\u00e9tences, convention EPCI-commune membre)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.2.2.2',
            id_nomenclature: '6.1.2.2.2',
            nom: 'les interlocuteurs climat-air-\u00e9nergie principaux dans chaque collectivit\u00e9 sont connus et ont \u00e9t\u00e9 rencontr\u00e9s (ex : le chef de projet \u00ab \u00e9nergie \u00bb de l\u2019intercommunalit\u00e9 a un interlocuteur privil\u00e9gi\u00e9 au sein de chaque commune membre, les homologues sur le sujet de l\u2019\u00e9nergie entre communes membres se connaissent)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.2.3',
        id_nomenclature: '6.1.2.3',
        nom: 'Initier et/ou participer \u00e0 des actions mutualis\u00e9es sur le territoire',
        description:
          '\u003cp\u003eExemples de projets collectifs concern\u00e9s (initiation ou participation a minima 2 actions collectives durant les 4 derni\u00e8res ann\u00e9es) :\u003c/p\u003e\n\u003cp\u003e\u2212 Conseil en \u00e9nergie partag\u00e9\u003c/p\u003e\n\u003cp\u003e\u2212 Op\u00e9ration collective d\u0027\u00e9laboration de strat\u00e9gie immobili\u00e8re (sdi)\u003c/p\u003e\n\u003cp\u003e\u2212 Achat group\u00e9 d\u0027\u00e9nergie renouvelable\u003c/p\u003e\n\u003cp\u003e\u2212 Op\u00e9ration collective d\u0027\u00e9laboration de plan de d\u00e9placement administration,\u003c/p\u003e\n\u003cp\u003e\u2212 Valorisation centralis\u00e9e de CEE\u003c/p\u003e\n\u003cp\u003e\u2212 Accompagnement des communes au renforcement de l\u0027achat durable (outils, grilles de crit\u00e8res communs)\u003c/p\u003e\n\u003cp\u003e\u2212 Formation collective des agents communaux sur des th\u00e9matiques techniques en lien avec le climat l\u2019air et l\u2019\u00e9nergie (ex : formation des secr\u00e9taires de mairie)\u003c/p\u003e\n\u003cp\u003e\u2212 Etc.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.2.3.1',
            id_nomenclature: '6.1.2.3.1',
            nom: 'EPCI : la collectivit\u00e9 est animatrice sur le sujet climat-air-\u00e9nergie sur son territoire. Elle a mis en place des actions mutualis\u00e9es avec ses communes, et les soutient dans leurs projets climat-air-\u00e9nergie.',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.2.3.2',
            id_nomenclature: '6.1.2.3.2',
            nom: 'Commune : la collectivit\u00e9 est force de proposition aupr\u00e8s de l\u2019intercommunalit\u00e9 pour la mise en place d\u2019actions mutualis\u00e9es et participe r\u00e9guli\u00e8rement aux actions collectives propos\u00e9es par son EPCI. En cas de faiblesse de l\u2019EPCI sur le sujet, elle initie des actions collectives entre communes-membres.',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.2.4',
        id_nomenclature: '6.1.2.4',
        nom: 'Syst\u00e9matiser la coop\u00e9ration intercommunale et donner l\u2019exemple sur le territoire',
        description: '\u003cp\u003eCommune :\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.2.4.1',
            id_nomenclature: '6.1.2.4.1',
            nom: 'Mise en place d\u2019un outil global pour accompagner les communes membres sur les th\u00e9matique climat-air-\u00e9nergie (kit p\u00e9dagogique, plateforme internet, cellule d\u2019appui technique\u2026)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.2.4.2',
            id_nomenclature: '6.1.2.4.2',
            nom: 'R\u00e9flexion sur de nouveaux outils juridico-financiers pour faciliter le passage \u00e0 l\u2019acte des communes (Faisabilit\u00e9 d\u2019un fonds local issu des ressources g\u00e9n\u00e9r\u00e9es par le d\u00e9veloppement des \u00e9nergies renouvelables \u00e0 l\u2019\u00e9chelle de l\u2019EPCI, faisabilit\u00e9 d\u2019une soci\u00e9t\u00e9 publique locale d\u00e9di\u00e9e \u00e0 la r\u00e9novation pour accompagner les communes dans leurs projets\u2026)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.2.4.3',
            id_nomenclature: '6.1.2.4.3',
            nom: 'Institutionnaliser les r\u00e9unions th\u00e9matiques avec les communes membres (composition et fr\u00e9quence de r\u00e9unions d\u00e9termin\u00e9es \u00e0 l\u2019avance, notion de \u00ab Club climat-air-\u00e9nergie \u00bb ou \u00e9quivalent r\u00e9unissant r\u00e9guli\u00e8rement les collectivit\u00e9s volontaires sur le territoire)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.2.4.4',
            id_nomenclature: '6.1.2.4.4',
            nom: 'Elle donne l\u2019exemple au sein de l\u2019EPCI : exp\u00e9rimentation d\u2019actions pilotes sur le territoire communal (ex : laur\u00e9at d\u2019appel \u00e0 projets de l\u2019EPCI, volontariat pour tester des outils\u2026), fait figure de r\u00e9f\u00e9rence aupr\u00e8s des autres communes membres (t\u00e9moignage fr\u00e9quent\u2026)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.2.4.5',
            id_nomenclature: '6.1.2.4.5',
            nom: 'Participation quasi-syst\u00e9matique aux actions propos\u00e9es par l\u2019EPCI',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.1.3',
    id_nomenclature: '6.1.3',
    nom: 'D\u00e9velopper un plan de communication pour chaque cible du territoire',
    description:
      '\u003cp\u003eLa collectivit\u00e9 \u00e9tablit chaque ann\u00e9e un plan de communication sp\u00e9cifique climat-air-\u00e9nergie et le met \u00e0 jour r\u00e9guli\u00e8rement. Il fixe les objectifs, distribue les t\u00e2ches et responsabilit\u00e9s et planifie les diff\u00e9rentes actions de communication qui seront conduites en continu (par groupes cibles, avec tous les m\u00e9dias). L\u2019identit\u00e9 climat air \u00e9nergie de la collectivit\u00e9 est d\u00e9clin\u00e9e dans ce plan de communication et toutes les actions men\u00e9es sont exemplaires en mati\u00e8re d\u2019\u00e9co-responsabilit\u00e9.\u003c/p\u003e\n',
    thematique_id: 'forma_sensib',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.1.3.1',
        id_nomenclature: '6.1.3.1',
        nom: 'Conna\u00eetre les besoins, identifier les cibles prioritaires et budg\u00e9ter le plan de communication',
        description: '',
        thematique_id: 'forma_sensib',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.3.1.1',
            id_nomenclature: '6.1.3.1.1',
            nom: 'Connaissance des besoins en information et identification des diff\u00e9rents publics cibles (habitants, entreprises, locataires de logements sociaux, promoteurs...)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.1.2',
            id_nomenclature: '6.1.3.1.2',
            nom: 'D\u00e9finir le budget, les ressources humaines et le calendrier (dates ou p\u00e9riodicit\u00e9) pr\u00e9vus pour les manifestations et actions de communication',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.3.2',
        id_nomenclature: '6.1.3.2',
        nom: 'D\u00e9cliner l\u2019identit\u00e9 climat air \u00e9nergie de la collectivit\u00e9 dans les diff\u00e9rents supports de communication',
        description: '',
        thematique_id: 'forma_sensib',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.3.2.1',
            id_nomenclature: '6.1.3.2.1',
            nom: 'Prendre en compte la th\u00e9matique climat air \u00e9nergie dans la charte graphique de la collectivit\u00e9',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.2.2',
            id_nomenclature: '6.1.3.2.2',
            nom: 'Mettre en avant des d\u00e9clarations claires relatives aux questions \u00e9nerg\u00e9tiques et climatiques sur le site internet de la collectivit\u00e9',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.2.3',
            id_nomenclature: '6.1.3.2.3',
            nom: 'Les d\u00e9marches et actions climat air \u00e9nergie (PCAET, Cit\u0027ergie, TEPOS, Agenda 21, etc.) sont mentionn\u00e9es r\u00e9guli\u00e8rement dans les diff\u00e9rents supports de communication \u00e9tablis et/ou utilis\u00e9s par la collectivit\u00e9 (minima 2 mentions/an et id\u00e9alement chaque mois notamment pour les CA, CU et M\u00e9tropoles)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.2.4',
            id_nomenclature: '6.1.3.2.4',
            nom: 'Exploiter les moyens de communication existants (journal de la collectivit\u00e9, r\u00e9unions publiques, m\u00e9dias locaux, affichage, etc) pour diffuser les informations',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.2.5',
            id_nomenclature: '6.1.3.2.5',
            nom: 'Mettre en avant des installations et projets exemplaires dans le secteur des \u00e9nergies renouvelables et de la lutte contre le changement climatique (par exemple, chaudi\u00e8re bois collective, maisons passives...)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.2.6',
            id_nomenclature: '6.1.3.2.6',
            nom: 'Coh\u00e9rence dans le travail quotidien et les d\u00e9cisions prises (pas de salon de l\u0027automobile, pas de vaisselle \u00e0 usage unique lors des manifestations de la collectivit\u00e9, etc.) ;',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.3.3',
        id_nomenclature: '6.1.3.3',
        nom: 'Donner du poids et cr\u00e9dibiliser les actions de la collectivit\u00e9 dans sa communication',
        description: '',
        thematique_id: 'forma_sensib',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.3.3.1',
            id_nomenclature: '6.1.3.3.1',
            nom: 'La collectivit\u00e9 inscrit ses d\u00e9marches et actions climat-air-\u00e9nergie dans des d\u00e9marches de reconnaissance locales, nationales ou europ\u00e9ennes pour cr\u00e9dibiliser et renforcer sa communication (ligue EnR, Cit\u2019ergie, Rubans du d\u00e9veloppement durable, etc.)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.3.4',
        id_nomenclature: '6.1.3.4',
        nom: 'D\u00e9cliner le plan de communication pour chaque cible du territoire',
        description: '',
        thematique_id: 'forma_sensib',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.3.4.1',
            id_nomenclature: '6.1.3.4.1',
            nom: 'Mettre en place des supports de communication diff\u00e9renci\u00e9s selon les cibles (contenu, m\u00e9dias et lieux de diffusion...)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.4.2',
            id_nomenclature: '6.1.3.4.2',
            nom: 'Pour les collectivit\u00e9s comptant moins de 15 000 hab, l\u2019\u00e9laboration de supports de communication peut \u00eatre mutualis\u00e9e avec d\u0027autres collectivit\u00e9s.',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.4.3',
            id_nomenclature: '6.1.3.4.3',
            nom: 'Mettre en place des actions (\u00e9v\u00e8nements) nombreuses et vari\u00e9es (lieux, formes, horaires) sur les th\u00e8mes climat-air-\u00e9nergie. La fr\u00e9quence de diffusion des informations est adapt\u00e9e \u00e0 la taille de la collectivit\u00e9 : 2 actions /an (\u003c 3 000 hab), 5 actions /an (\u003e3 000 hab), 10 actions /an (\u003e50 000 hab).',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.1.3.5',
        id_nomenclature: '6.1.3.5',
        nom: 'Contr\u00f4ler et \u00e9valuer l\u2019efficacit\u00e9 du plan de communication',
        description: '',
        thematique_id: 'forma_sensib',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.1.3.5.1',
            id_nomenclature: '6.1.3.5.1',
            nom: 'Evaluer et contr\u00f4ler de l\u0027efficacit\u00e9 des actions par des enqu\u00eates aupr\u00e8s des diff\u00e9rentes cibles',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.5.2',
            id_nomenclature: '6.1.3.5.2',
            nom: 'La collectivit\u00e9 est clairement identifi\u00e9e depuis l\u0027ext\u00e9rieur et depuis l\u0027int\u00e9rieur comme \u00e9tant une "collectivit\u00e9 engag\u00e9e et/ou novatrice dans les secteurs de l\u0027\u00e9nergie, de l\u0027environnement et du climat"',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.1.3.5.3',
            id_nomenclature: '6.1.3.5.3',
            nom: 'Les acteurs du territoire ont connaissance des d\u00e9marches et actions climat air \u00e9nergie men\u00e9es sur le territoire (Cit\u2019ergie, TEPOS, PCAET\u2026) et le suivi et l\u2019\u00e9valuation de ces d\u00e9marches sont mis \u00e0 leur disposition r\u00e9guli\u00e8rement (transparence de la collectivit\u00e9)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.2.1',
    id_nomenclature: '6.2.1',
    nom: 'Coop\u00e9rer avec les acteurs professionnels du b\u00e2timent et de l\u0027immobilier',
    description:
      '\u003cp\u003eLa collectivit\u00e9 informe et incite les acteurs professionnels du b\u00e2timent (bailleurs sociaux, promoteurs, investisseurs, artisans, bureau d\u0027\u00e9tudes, administrateurs de biens, notaires, agents immobiliers...) \u00e0 int\u00e9grer les enjeux climat-air-\u00e9nergie \u00e0 leurs activit\u00e9s. Ces actions sont r\u00e9alis\u00e9es via  des espaces conseils FAIRE ou des conventions volontaires, contenant des standards de construction et de r\u00e9novation \u00e9lev\u00e9s, des objectifs d\u0027efficacit\u00e9 \u00e9nerg\u00e9tique, la sensibilisation des occupants.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.2.1.1',
        id_nomenclature: '6.2.1.1',
        nom: 'Disposer d\u0027une connaissance fine des acteurs du b\u00e2timent et de l\u0027immobilier priv\u00e9 et les sensibiliser aux enjeux climat-air-\u00e9nergie',
        description: '',
        thematique_id: 'batiments',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.1.1.1',
            id_nomenclature: '6.2.1.1.1',
            nom: 'se dote d\u2019une bonne connaissance des acteurs du b\u00e2timent et de l\u0027immobilier priv\u00e9 de son territoire : investisseurs, promoteurs immobiliers, entreprises du b\u00e2timent et artisans, constructeurs de maisons individuelles, bureaux d\u0027\u00e9tudes, administrateurs de biens (dont les syndicats de copropri\u00e9t\u00e9 sur son territoire), notaires, agents immobiliers, ...',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.1.1.2',
            id_nomenclature: '6.2.1.1.2',
            nom: 'informe les acteurs du b\u00e2timent et de l\u2019immobilier sur la politique \u00e9nerg\u00e9tique et climatique de la collectivit\u00e9 et sur les objectifs \u00e0 atteindre dans le secteur du b\u00e2timent et de la mobilit\u00e9 pour les diff\u00e9rentes cibles (propri\u00e9taires occupants ou bailleurs, logements individuels ou collectifs\u2026)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.1.1.3',
            id_nomenclature: '6.2.1.1.3',
            nom: 'informe les acteurs du b\u00e2timent et de l\u2019immobilier sur la vuln\u00e9rabilit\u00e9 du territoire au changement climatique (vigilance quant au choix des implantations de b\u00e2timents et d\u0027\u00e9quipements)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.1.1.4',
            id_nomenclature: '6.2.1.1.4',
            nom: 'informe les acteurs du b\u00e2timent et de l\u2019immobilier des dispositifs mis en place au niveau r\u00e9gional et local ainsi que des formations disponibles, en s\u2019appuyant sur les acteurs de la formation professionnelle de son territoire',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.1.1.5',
            id_nomenclature: '6.2.1.1.5',
            nom: 'informe les am\u00e9nageurs sur les dispositifs permettant de d\u00e9velopper les usages cyclables (niveau de qualit\u00e9 des am\u00e9nagements, du stationnement, syst\u00e9matisation d\u2019une r\u00e9flexion int\u00e9grant le v\u00e9lo dans un projet\u2026).',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.1.2',
        id_nomenclature: '6.2.1.2',
        nom: 'Animer et inciter les acteurs \u00e0 qualifier leurs pratiques',
        description: '',
        thematique_id: 'batiments',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.1.2.1',
            id_nomenclature: '6.2.1.2.1',
            nom: 'l\u2019animation des acteurs avec mise en place de dispositifs vari\u00e9s (ateliers, visites, rencontres, formation) afin de cr\u00e9er une culture commune sur le territoire',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.1.2.2',
            id_nomenclature: '6.2.1.2.2',
            nom: 'la mise en r\u00e9seau des professionnels du b\u00e2timent et leur visibilit\u00e9 au travers du label RGE (mise en valeur des donn\u00e9es du r\u00e9pertoire disponible sur renovation-info-service.gouv.fr)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.1.2.3',
            id_nomenclature: '6.2.1.2.3',
            nom: 'les exon\u00e9rations fiscales (taxe fonci\u00e8re) et bonification des droits \u00e0 construire pour inciter les acteurs priv\u00e9s \u00e0 la construction (promoteurs/investisseurs) et \u00e0 la r\u00e9novation durable',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.1.3',
        id_nomenclature: '6.2.1.3',
        nom: 'Les bailleurs sociaux sont engag\u00e9s aux c\u00f4t\u00e9s de la collectivit\u00e9 dans des actions particuli\u00e8rement ambitieuses',
        description:
          '\u003cp\u003ePar exemple : cr\u00e9ation d\u0027un r\u00e9f\u00e9rentiel de performance \u00e9nergie-climat pour les op\u00e9rations de logements sociaux, signature d\u0027accords/de convention/d\u0027une charte d\u0027engagement entre la collectivit\u00e9 et les bailleurs, par exemple dans le cadre d\u0027un CLE ou de programmes ANRU, \u00e9co-conditionnement des garanties d\u0027empunts accord\u00e9s aux bailleurs sociaux, soutien \u00e0 la r\u00e9alisation de diagnostic de performance \u00e9nerg\u00e9tique dans les logements ou aux investissements \u00e9cologiques (soutien technique, conseil, groupement d\u0027achats, montage commun de dossier de certificats d\u0027\u00e9conomie d\u0027\u00e9nergie...).\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.1.4',
        id_nomenclature: '6.2.1.4',
        nom: 'Disposer d\u2019une strat\u00e9gie de mobilisation des professionnels du b\u00e2timent et de l\u2019immobilier formalis\u00e9e',
        description:
          '\u003cp\u003eLa collectivit\u00e9 dispose d\u2019une strat\u00e9gie de mobilisation des professionnels formalis\u00e9e, articul\u00e9e avec les actions des autres \u00e9chelons de gouvernance (d\u00e9partement, r\u00e9gion, Etat), et dot\u00e9e de moyens d\u00e9di\u00e9s (par exemple via une plateforme territoriale de la r\u00e9novation, un centre de ressources BEEP qu\u2019elle soutient, etc.)\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.2.2',
    id_nomenclature: '6.2.2',
    nom: 'Pr\u00e9venir et lutter contre la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique',
    description:
      '\u003cp\u003eLa collectivit\u00e9 engage une politique de pr\u00e9vention et de lutte contre la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique (li\u00e9e au logement et \u00e0 la mobilit\u00e9) et l\u0027inscrit dans ses documents strat\u00e9giques.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 a initialement r\u00e9alis\u00e9 un travail d\u2019inventaire des acteurs de la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique et des actions existantes, sur lesquelles elle peut construire son dispositif.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 utilise au mieux les moyens humains \u00e0 disposition pour identifier des situations de pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique et orienter les familles directement vers les dispositifs existants ou indirectement vers des associations sp\u00e9cialis\u00e9es. Dans une approche partenariale, des actions visant \u00e0 diminuer la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique sont men\u00e9es.\u003c/p\u003e\n',
    thematique_id: 'preca_energie',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.2.2.1',
        id_nomenclature: '6.2.2.1',
        nom: 'R\u00e9aliser un \u00e9tat des lieux de la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique li\u00e9e au logement et \u00e0 la mobilit\u00e9 sur le territoire',
        description: '',
        thematique_id: 'preca_energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.2.1.1',
            id_nomenclature: '6.2.2.1.1',
            nom: 'Disposer de la liste des acteurs intervenants sur la th\u00e9matique de pr\u00e9carit\u00e9, susceptibles d\u2019int\u00e9grer la question de la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique li\u00e9e au logement et \u00e0 la mobilit\u00e9 sur le territoire',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.1.2',
            id_nomenclature: '6.2.2.1.2',
            nom: 'R\u00e9aliser un diagnostic (donn\u00e9es INSEE, ANAH, CCAS/CIAS, CAF, FSL\u2026) afin d\u0027identifier et caract\u00e9riser les m\u00e9nages en situation de pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique (quantification, localisation, caract\u00e9ristiques sociod\u00e9mographiques des m\u00e9nages et de leurs logements, type de chauffage principal et d\u0027appoint ainsi que le type de syst\u00e8me de renouvellement d\u0027air, nombre d\u0027habitants au m2)',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.1.3',
            id_nomenclature: '6.2.2.1.3',
            nom: 'cartographier les zones d\u2019intervention (OPAH, PIG, programme de r\u00e9novation urbaine...) et les comparer aux zones o\u00f9 statistiquement il peut y avoir de la pr\u00e9carit\u00e9',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.2.2',
        id_nomenclature: '6.2.2.2',
        nom: 'Adopter une strat\u00e9gie de lutte contre la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique li\u00e9e au logement et \u00e0 la mobilit\u00e9',
        description: '',
        thematique_id: 'preca_energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.2.2.1',
            id_nomenclature: '6.2.2.2.1',
            nom: 'Introduire la lutte contre la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique comme un enjeu prioritaire de la politique du territoire dans les diff\u00e9rents documents directeurs (PLH, PDU\u2026)',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.2.2',
            id_nomenclature: '6.2.2.2.2',
            nom: 'Fixer et formaliser dans les documents du territoire des objectifs et des orientations en mati\u00e8re de lutte contre la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique et de recherche de baisse des charges pour les usagers',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.2.3',
        id_nomenclature: '6.2.2.3',
        nom: 'F\u00e9d\u00e9rer les acteurs autour de la probl\u00e9matique de la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique afin d\u2019initier la pr\u00e9vention contre la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique',
        description: '',
        thematique_id: 'preca_energie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.2.3.1',
            id_nomenclature: '6.2.2.3.1',
            nom: 'Coordonner et f\u00e9d\u00e9rer les acteurs locaux gravitant autour de la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique pour le logement (bailleurs sociaux, CCAS, ADIL...en lien avec l\u2019ANAH) et pour la mobilit\u00e9 : rencontres r\u00e9guli\u00e8res, mise en r\u00e9seau, outils partag\u00e9s',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.3.2',
            id_nomenclature: '6.2.2.3.2',
            nom: 'Sensibiliser les \u00e9lus et les services \u00e0 la lutte contre la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique (le CCAS ou CIAS -Centre Communal ou Intercommunal d\u0027Action Sociale- notamment)',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.3.3',
            id_nomenclature: '6.2.2.3.3',
            nom: 'Informer et sensibiliser les m\u00e9nages sur la pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique li\u00e9e au logement, \u00e0 la mobilit\u00e9 (dispositif \u201cFamilles \u00e0 Energie Positive\u201d par exemple)',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.3.4',
            id_nomenclature: '6.2.2.3.4',
            nom: 'Sensibiliser et communiquer sur les outils existants',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.3.5',
            id_nomenclature: '6.2.2.3.5',
            nom: 'Sensibiliser les acteurs et les habitants sur les enjeux sanitaires li\u00e9s \u00e0 une mauvaise qualit\u00e9 de l\u0027air int\u00e9rieur',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.2.4',
        id_nomenclature: '6.2.2.4',
        nom: 'Formaliser une offre d\u0027outils \u00e0 destination des m\u00e9nages en situation de pr\u00e9carit\u00e9',
        description: '',
        thematique_id: 'preca_energie',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.2.4.1',
            id_nomenclature: '6.2.2.4.1',
            nom: 'D\u00e9velopper et proposer une aide financi\u00e8re locale \u00e0 destination des m\u00e9nages en situation de pr\u00e9carit\u00e9 \u00e9nerg\u00e9tique (en particulier, aides \u00e0 la r\u00e9novation pour les propri\u00e9taires occupants)',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.4.2',
            id_nomenclature: '6.2.2.4.2',
            nom: 'Mettre en place des actions de suivi et d\u0027accompagnement des m\u00e9nages pr\u00e9caires',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.4.3',
            id_nomenclature: '6.2.2.4.3',
            nom: 'Mettre en place des actions conjointes avec les acteurs de l\u0027h\u00e9bergement pour diminuer la facture \u00e9nerg\u00e9tique des logements (ex : convention/charte d\u0027engagement/accords, contrat local d\u2019engagement \u2013CLE- convention ANRU...) et les inciter \u00e0 des constructions et r\u00e9novations performantes, \u00e0 recourir aux solutions \u00e9nerg\u00e9tiques les moins on\u00e9reuses (\u00e9co-conditionnement des garanties d\u0027emprunts accord\u00e9s aux bailleurs sociaux, soutien financier ou technique pour des travaux de performance \u00e9nerg\u00e9tique\u2026). Veiller \u00e0 prendre en compte en amont des travaux la qualit\u00e9 de l\u2019air int\u00e9rieur.',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.4.4',
            id_nomenclature: '6.2.2.4.4',
            nom: 'Utiliser les outils existants et en cr\u00e9er des nouveaux (PDALPD, baux \u00e0 r\u00e9habilitation, outil pr\u00e9ventif pour l\u0027am\u00e9lioration thermique des logements, outil curatif d\u0027aide au paiement des dettes d\u0027\u00e9nergie, Fonds de Solidarit\u00e9 pour le logement, Fonds Sociaux d\u0027Aide aux Travaux de Ma\u00eetrise de l\u0027Energie (FSATME), op\u00e9ration de distribution de "kits eau/\u00e9nergie"...)',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.2.4.5',
            id_nomenclature: '6.2.2.4.5',
            nom: 'Monter des partenariats pour proposer/\u00e9laborer une offre de solutions alternatives afin d\u0027\u00e9viter les d\u00e9placements contraints en v\u00e9hicule individuel pour les publics pr\u00e9caires (gratuit\u00e9/tarif r\u00e9duit des transports en commun, transports \u00e0 la demande ou locations de v\u00e9lo pour les demandeurs d\u2019emplois ou seniors, desserte TC ou transport \u00e0 la demande des agences P\u00f4le emploi\u2026)',
            description: '',
            thematique_id: 'preca_energie',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.2.3',
    id_nomenclature: '6.2.3',
    nom: 'Accompagner les particuliers pour la r\u00e9novation et la construction durable de leur logement (habitat individuel et collectif)',
    description:
      '\u003cp\u003eLa collectivit\u00e9 g\u00e8re ou soutient un ou des centre(s) de conseil (local ou r\u00e9gional) sur le climat, l\u0027air et l\u0027\u00e9nergie \u00e0 l\u0027intention des particuliers. Elle soutient \u00e9galement financi\u00e8rement les travaux de r\u00e9novation du secteur r\u00e9sidentiel. Ces missions sont assur\u00e9es dans l\u0027id\u00e9al par un guichet unique type espace conseil FAIRE .\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.2.3.1',
        id_nomenclature: '6.2.3.1',
        nom: 'Disposer de services d\u2019information climat-air-\u00e9nergie visibles et accessibles pour le particulier',
        description:
          '\u003cp\u003eExemple pour une commune non comp\u00e9tente : il s\u0027agit d\u0027accueillir une permanence, de diffuser de la documentation sur ce service, de faciliter les d\u00e9placements vers ce service...\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.3.1.1',
            id_nomenclature: '6.2.3.1.1',
            nom: 'Promouvoir activement l\u0027offre d\u0027information et de conseils',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.1.2',
            id_nomenclature: '6.2.3.1.2',
            nom: 'Disposer de structures d\u0027accueil centrales, ouvertes au moins une fois par semaine',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.1.3',
            id_nomenclature: '6.2.3.1.3',
            nom: 'Disposer d\u2019un service d\u0027information propre \u00e0 la collectivit\u00e9 ou participer activement \u00e0 un service d\u0027information local/d\u00e9partemental/r\u00e9gional neutre pour les questions concernant le climat, l\u0027air et l\u0027\u00e9nergie dans le b\u00e2timent pour les particuliers (suffisant pour les collectivit\u00e9s inf\u00e9rieures \u00e0 10 000 habitants)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.1.4',
            id_nomenclature: '6.2.3.1.4',
            nom: 'Simplifier l\u2019acc\u00e8s \u00e0 ces services d\u0027information (lieu, prix) pour le grand public',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.3.2',
        id_nomenclature: '6.2.3.2',
        nom: 'Adresser des conseils pour la r\u00e9novation BBC notamment, et la construction, \u00e0 des cibles vari\u00e9es',
        description:
          '\u003cp\u003eExemple pour une commune non comp\u00e9tente : elle rep\u00e8re les diff\u00e9rentes cibles et fait une communication diff\u00e9renci\u00e9e, elle facilite le rep\u00e9rage des b\u00e9n\u00e9ficiaires en relayant les op\u00e9rations port\u00e9es par l\u2019espace conseil FAIRE...\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.3.2.1',
            id_nomenclature: '6.2.3.2.1',
            nom: 'Propri\u00e9taires (occupant ou bailleur)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.2.2',
            id_nomenclature: '6.2.3.2.2',
            nom: 'Locataires',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.2.3',
            id_nomenclature: '6.2.3.2.3',
            nom: 'Logement individuel ou collectif (dont copropri\u00e9t\u00e9)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.2.4',
            id_nomenclature: '6.2.3.2.4',
            nom: 'R\u00e9sidence principale ou secondaire (selon enjeu sur le territoire)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.2.5',
            id_nomenclature: '6.2.3.2.5',
            nom: 'Personnes nouvellement \u00e9tablies',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.3.3',
        id_nomenclature: '6.2.3.3',
        nom: 'Accompagner le particulier jusqu\u2019aux travaux de r\u00e9novation \u00e9nerg\u00e9tique',
        description:
          '\u003cp\u003eLes ECF sont abord\u00e9s \u00e9galement dans les mesures 1.2.4 (volet planification) et 6.2.1 (volet mobilisation des professionnels du b\u00e2timent)\u003c/p\u003e\n\u003cp\u003eExemple pour une commune non comp\u00e9tente : elle participe \u00e0 la gouvernance du dispositif d\u0027accompagnement (si autoris\u00e9 par la structure comp\u00e9tente), elle en connait les modalit\u00e9s pr\u00e9cisemment et le relaie aupr\u00e8s de sa population...\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.3.3.1',
            id_nomenclature: '6.2.3.3.1',
            nom: 'la collectivit\u00e9 s\u0027appuie a minima sur les missions de son espace conseil FAIRE pour guider le particulier dans son parcours de r\u00e9novation de son logement. L\u0027accompagnement le plus complet possible est recherch\u00e9 : aide \u00e0 la r\u00e9alisation d\u0027un audit \u00e9nerg\u00e9tique, fl\u00e9chage artisan RGE, analyse des devis, aides au montage des dossiers de subvention)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.3.2',
            id_nomenclature: '6.2.3.3.2',
            nom: 'la collectivit\u00e9 dispose  d\u2019un espace conseil FAIRE actif sur son territoire pour accompagner le particulier jusqu\u2019aux travaux, qui inclut des prestations avanc\u00e9es (exemple : analyse de devis, visite-conseils \u00e0 domicile, r\u00e9cup\u00e9ration de CEE\u2026)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.3.4',
        id_nomenclature: '6.2.3.4',
        nom: 'Soutenir financi\u00e8rement  le particulier',
        description:
          '\u003cp\u003eExemple pour une commune non comp\u00e9tente : elle abonde les aides mises en place \u00e0 un \u00e9chelon sup\u00e9rieur.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.3.4.1',
            id_nomenclature: '6.2.3.4.1',
            nom: 'des aides financi\u00e8res ponctuelles existent \u00e0 la r\u00e9novation niveau BBC (notamment) et la construction durable',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.4.2',
            id_nomenclature: '6.2.3.4.2',
            nom: 'des programmes de financement globaux, coh\u00e9rents et partenariaux, ou pour certains publics ANRU, OPAH, PIG, CLE ou \u00e9quivalents sont mis en \u0153uvre pour une massification des actions de r\u00e9novation de l\u0027habitat.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.4.3',
            id_nomenclature: '6.2.3.4.3',
            nom: 'les aides financi\u00e8res couvrent des publics ANAH et hors ANAH.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.3.5',
        id_nomenclature: '6.2.3.5',
        nom: 'Mesurer les r\u00e9sultats de l\u2019accompagnement',
        description:
          '\u003cp\u003eLe suivi de l\u2019efficacit\u00e9 de la politique de r\u00e9novation \u00e9nerg\u00e9tique dans son ensemble est mesur\u00e9 dans la mesure 1.2.4.\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.3.5.1',
            id_nomenclature: '6.2.3.5.1',
            nom: 'contr\u00f4le des r\u00e9sultats des consultations',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.5.2',
            id_nomenclature: '6.2.3.5.2',
            nom: 'nombre de consultations et temps accord\u00e9 pour le conseil (valeur limite de 10 min/100 hab et cible de 60 min/100 hab) (pour les structures r\u00e9gionales ou intercommunales, chercher \u00e0 estimer la part concernant les usagers de la collectivit\u00e9 \u00e9valu\u00e9e)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.5.3',
            id_nomenclature: '6.2.3.5.3',
            nom: 'communiquer et transmettre les indicateurs \u00e0 ceux qui en font la demande, et en particulier les communes',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.3.6',
        id_nomenclature: '6.2.3.6',
        nom: 'Mettre en place un dispositif de suivi des projets subventionn\u00e9s pour analyser l\u0027efficacit\u00e9 des moyens investis',
        description:
          '\u003cp\u003ePour une commune non comp\u00e9tente : la commune demande \u00e0 son EPCI les indicateurs \u00e0 l\u2019\u00e9chelle de sa commune (10%) et les obtient (10%).\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.3.6.1',
            id_nomenclature: '6.2.3.6.1',
            nom: 'MWh \u00e9conomis\u00e9 ou produit /euro investi',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.6.2',
            id_nomenclature: '6.2.3.6.2',
            nom: 'Co\u00fbt moyen d\u0027accompagnement/r\u00e9novation,',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.3.6.3',
            id_nomenclature: '6.2.3.6.3',
            nom: 'Co\u00fbt d\u0027accompagnement/co\u00fbt de travaux g\u00e9n\u00e9r\u00e9s',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.2.4',
    id_nomenclature: '6.2.4',
    nom: 'Accompagner les acteurs du secteur tertiaire pour la r\u00e9novation et la construction durable de leurs locaux',
    description:
      '\u003cp\u003eLa collectivit\u00e9 a un r\u00f4le d\u2019animateur territorial \u00e0 jouer pour impulser une dynamique sur le territoire afin d\u2019agir indirectement sur les d\u00e9perditions \u00e9nerg\u00e9tiques des b\u00e2timents tertiaires.\u003c/p\u003e\n\u003cp\u003eLes acteurs du secteur tertiaire priv\u00e9 notamment sont incit\u00e9s et accompagn\u00e9s pour l\u0027am\u00e9lioration des performances \u00e9nerg\u00e9tiques et climatiques de leurs locaux.\u003c/p\u003e\n',
    thematique_id: 'batiments',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.2.4.1',
        id_nomenclature: '6.2.4.1',
        nom: 'Disposer de services d\u2019information climat-air-\u00e9nergie visibles et accessibles pour les acteurs tertiaires',
        description:
          '\u003cp\u003eNota : le service de conseil peut \u00eatre commun avec celui de la mesure 6.2.3\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.4.1.1',
            id_nomenclature: '6.2.4.1.1',
            nom: 'en partenariat avec les acteurs sp\u00e9cialis\u00e9s, promouvoir activement l\u0027offre d\u0027information et de conseils',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.4.1.2',
            id_nomenclature: '6.2.4.1.2',
            nom: 'disposer de structures d\u0027accueil centrales, ouvertes au moins une fois par semaine',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.4.1.3',
            id_nomenclature: '6.2.4.1.3',
            nom: 'disposer d\u2019un service d\u0027information propre \u00e0 la collectivit\u00e9 ou participer activement \u00e0 un service d\u0027information local/d\u00e9partemental/r\u00e9gional neutre pour les questions concernant le climat, l\u0027air et l\u0027\u00e9nergie dans le b\u00e2timent pour le secteur tertiaire priv\u00e9 (suffisant pour les collectivit\u00e9s inf\u00e9rieures \u00e0 10 000 habitants)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.4.1.4',
            id_nomenclature: '6.2.4.1.4',
            nom: 'simplifier l\u2019acc\u00e8s \u00e0 ces services d\u0027information (lieu, prix) pour les acteurs tertiaires',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.4.2',
        id_nomenclature: '6.2.4.2',
        nom: 'Aller au-del\u00e0 du conseil ponctuel pour la r\u00e9novation durable du secteur tertitaire priv\u00e9',
        description: '',
        thematique_id: 'batiments',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.4.2.1',
            id_nomenclature: '6.2.4.2.1',
            nom: 'en partenariat avec les acteurs sp\u00e9cialis\u00e9s (chambres consulaires...), accompagner concr\u00e8tement les entreprises du secteur tertiaire (TPE/PME et commer\u00e7ants notamment) et les artisans pour am\u00e9liorer la performance climat-air-\u00e9nergie de leurs locaux. Soutien m\u00e9thodologique ou financier, par exemple : appels \u00e0 projets pour inciter aux initiatives innovantes ou exemplaires, fonds de soutien aux projets laur\u00e9ats, op\u00e9ration collective de soutien \u00e0 l\u2019\u00e9laboration de plan d\u2019actions de r\u00e9duction de gaz \u00e0 effet de serre, d\u00e9signation/mise \u00e0 disposition d\u2019un animateur r\u00e9f\u00e9rent tertiaire, signature de charte d\u2019engagement climat-air-\u00e9nergie (objectifs qualitatifs et/ou quantitatif sur les consommations d\u2019\u00e9nergies, les \u00e9missions de gaz \u00e0 effet de serre, le confort d\u0027\u00e9t\u00e9 et de polluants atmosph\u00e9riques)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.4.2.2',
            id_nomenclature: '6.2.4.2.2',
            nom: 'soutien sp\u00e9cifique aux entreprises tertiaires \u003e 1000 m\u00b2 soumises aux obligations du "D\u00e9cret Tertiaire" (obligation de mise en \u0153uvre d\u2019actions de r\u00e9duction de la consommation d\u2019\u00e9nergie finale dans les b\u00e2timents existants \u00e0 usage tertiaire afin de parvenir \u00e0 une r\u00e9duction de la consommation d\u2019\u00e9nergie finale pour l\u2019ensemble des b\u00e2timents soumis \u00e0 l\u2019obligation d\u2019au moins 40 % en 2030, 50 % en 2040 et 60 % en 2050 par rapport \u00e0 2010) : lettre d\u0027information, club d\u0027\u00e9changes, visites de site, etc.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.4.3',
        id_nomenclature: '6.2.4.3',
        nom: 'Rationaliser et mutualiser la construction de nouveaux locaux tertiaires',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.4.3.1',
            id_nomenclature: '6.2.4.3.1',
            nom: 'Mettre en relation les disponibilit\u00e9s (recensement de bureaux d\u00e9laiss\u00e9s/inoccup\u00e9s) et les besoins en bureaux ou salles de r\u00e9union des principales TPE/PME et collectivit\u00e9s, afin d\u2019optimiser l\u2019utilisation des locaux existants.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.4.3.2',
            id_nomenclature: '6.2.4.3.2',
            nom: 'Favoriser l\u2019implantation d\u2019activit\u00e9 de co-working sur le territoire.',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.4.4',
        id_nomenclature: '6.2.4.4',
        nom: 'Inciter \u00e0 la limitation des consommations d\u0027\u00e9lectricit\u00e9 sp\u00e9cifique propres au secteur tertiaire',
        description: '',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.4.4.1',
            id_nomenclature: '6.2.4.4.1',
            nom: 'aider \u00e0 la mise en place d\u2019un syst\u00e8me de management \u00e9nerg\u00e9tique et inciter \u00e0 la certification des entreprises (ISO 50 001, ISO 26 000\u2026)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.4.4.2',
            id_nomenclature: '6.2.4.4.2',
            nom: 'sensibiliser et diffuser les bonnes pratiques en mati\u00e8re d\u0027utilisation sobre des technologiques num\u00e9riques, de l\u0027\u00e9clairage, des \u00e9quipements de r\u00e9frig\u00e9ration dans les commerces...',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.4.5',
        id_nomenclature: '6.2.4.5',
        nom: 'Coop\u00e9rer avec les autres acteurs du tertiaire public sur le territoire (enseignement, h\u00f4pitaux, services administratifs...)',
        description:
          '\u003cp\u003eLes actions de coop\u00e9ration entre EPCI et communes membres concernant leurs b\u00e2timents publics sont \u00e9tudi\u00e9es dans la mesure 6.1.2. Renforcer la coop\u00e9ration au sein de l\u0027intercommunalit\u00e9\u003c/p\u003e\n',
        thematique_id: 'batiments',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.4.5.1',
            id_nomenclature: '6.2.4.5.1',
            nom: 'partage  d\u0027exp\u00e9riences, convention de partenariat, achat group\u00e9 de mat\u00e9riaux ou d\u0027\u00e9nergie',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.2.4.6',
        id_nomenclature: '6.2.4.6',
        nom: 'Mesurer les r\u00e9sultats de l\u2019activit\u00e9 d\u0027accompagnement',
        description: '',
        thematique_id: 'batiments',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.2.4.6.1',
            id_nomenclature: '6.2.4.6.1',
            nom: 'Le nombre de consultations \u00e9manant des acteurs tertiaires priv\u00e9s est en augmentation',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.4.6.2',
            id_nomenclature: '6.2.4.6.2',
            nom: 'des locaux tertiaires r\u00e9nov\u00e9s (BBC r\u00e9novation) ou neufs exemplaires (E+C-, certification HQE\u2026), ayant fait l\u0027objet du soutien de la collectivit\u00e9, sont pr\u00e9sents sur le territoire',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.2.4.6.3',
            id_nomenclature: '6.2.4.6.3',
            nom: 'suivre le respect des obligations de performance du d\u00e9cret tertiaire sur son territoire (mise en place de partenariats pour obtenir les donn\u00e9es au niveau local, baisse constat\u00e9e des consommations moyennes par type de b\u00e2timent etc.)',
            description: '',
            thematique_id: 'batiments',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.3.1',
    id_nomenclature: '6.3.1',
    nom: 'Favoriser les activit\u00e9s \u00e9conomiques durables',
    description:
      '\u003cp\u003eLa collectivit\u00e9 initie, soutient ou participe \u00e0 des projets de coop\u00e9ration avec les acteurs de l\u0027\u00e9conomie locale ou r\u00e9gionale sur le climat, l\u0027air et l\u0027\u00e9nergie, afin d\u0027encourager la mutation des activit\u00e9s \u00e9conomiques vers un mod\u00e8le bas-carbon. Elle participe notamment au d\u00e9veloppement des projets d\u2019\u00e9cologie industrielle et plus g\u00e9n\u00e9ralement d\u0027\u00e9conomie circulaire sur le territoire. Elle contribue \u00e0 l\u0027am\u00e9lioration de la qualit\u00e9 environnementale des zones d\u2019activit\u00e9s .\u003c/p\u003e\n',
    thematique_id: 'dev_eco',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.3.1.1',
        id_nomenclature: '6.3.1.1',
        nom: 'Partager la strat\u00e9gie, les connaissances et les enjeux li\u00e9s aux entreprises au sein de la collectivit\u00e9',
        description: '',
        thematique_id: 'dev_eco',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.1.1.1',
            id_nomenclature: '6.3.1.1.1',
            nom: 'le service/chef de projet d\u00e9veloppement \u00e9conomique (ou \u00e9quivalent) travaille en transversalit\u00e9 avec d\u2019autres services, sur des projets communs (par exemple avec le service d\u00e9chets sur le sujet de l\u2019\u00e9cologie industrielle et territoriale)',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.1.2',
            id_nomenclature: '6.3.1.1.2',
            nom: 'le champ d\u2019exercice de la comp\u00e9tence \u00ab d\u00e9veloppement \u00e9conomique \u00bb est d\u00e9fini  pr\u00e9cis\u00e9ment (r\u00f4le, moyens, p\u00e9rim\u00e8tre, priorit\u00e9s\u2026) et la strat\u00e9gie adopt\u00e9e est coh\u00e9rente avec la politique climat-air-\u00e9nergie de la collectivit\u00e9 (\u00e9volution des activit\u00e9s vers des secteurs contribuant \u00e0 la transition \u00e9nerg\u00e9tique et la r\u00e9silience climatique, baisse des consommations d\u2019\u00e9nergie et des \u00e9missions de GES/polluants atmosph\u00e9riques, \u00e9conomie de mati\u00e8res premi\u00e8res\u2026)',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.1.3',
            id_nomenclature: '6.3.1.1.3',
            nom: 'la collectivit\u00e9 dispose d\u2019un argumentaire clair pour inciter les entreprises \u00e0 mettre en place des actions en faveur de la transition \u00e9nerg\u00e9tique et climatique',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.1.2',
        id_nomenclature: '6.3.1.2',
        nom: 'Capitaliser et travailler en partenariat avec les acteurs sp\u00e9cialis\u00e9s',
        description: '',
        thematique_id: 'dev_eco',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.1.2.1',
            id_nomenclature: '6.3.1.2.1',
            nom: 'identifier les acteurs sp\u00e9cialis\u00e9s au contact des entreprises (chambre de commerces et d\u2019industrie, chambre des m\u00e9tiers et de l\u2019artisanat, p\u00f4le emploi, agence d\u2019int\u00e9rim, f\u00e9d\u00e9rations ou associations professionnelles locales\u2026) , conna\u00eetre leurs actions et leur pr\u00e9senter la politique climat-air-\u00e9nergie de la collectivit\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.2.2',
            id_nomenclature: '6.3.1.2.2',
            nom: 'Pour le volet industriel (b\u00e2timent tertiaire trait\u00e9 dans la mesure 6.2.4), en partenariat avec les acteurs sp\u00e9cialis\u00e9s\u00a0: recenser les bonnes pratiques des entreprises du territoire, les entreprises \u00ab locomotives \u00bb pouvant servir de relais et d\u2019exemples',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.2.3',
            id_nomenclature: '6.3.1.2.3',
            nom: '(d\u00e9plac\u00e9 de la MOE) Formations des d\u00e9veloppeurs d\u2019entreprises sur les enjeux et bonnes pratiques climat-air-\u00e9nergie en entreprise ; travailler avec eux pour identifier et hi\u00e9rarchiser les enjeux les plus importants \u00e0 porter aupr\u00e8s des entreprises, et int\u00e9grer ensuite ces th\u00e9matiques dans les documents d\u0027accueil ou services d\u0027accompagnement propos\u00e9s par la collectivit\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.1.3',
        id_nomenclature: '6.3.1.3',
        nom: 'Am\u00e9liorer la qualit\u00e9 et la mixit\u00e9 des zones d\u0027activit\u00e9s \u00e9conomiques',
        description: '',
        thematique_id: 'dev_eco',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.1.3.1',
            id_nomenclature: '6.3.1.3.1',
            nom: '(d\u00e9plac\u00e9 de la MOE) Mettre en place et qualifier les missions des gestionnaires de zones d\u0027activit\u00e9s pour un am\u00e9nagement adapt\u00e9 et inclusif (services/commerces de la vie quotidienne de type cr\u00e8che/boulangerie dans les p\u00f4les d\u0027emplois)',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.3.2',
            id_nomenclature: '6.3.1.3.2',
            nom: '(d\u00e9plac\u00e9 de la MOE) d\u00e9cliner des orientations strat\u00e9giques fortes en mati\u00e8re de localisation et de qualit\u00e9 environnementale des zones d\u0027activit\u00e9s dans les documents d\u2019urbanisme : acc\u00e8s en TC, limitation de l\u2019imperm\u00e9abilisation, implantation sur des friches et en reconqu\u00eate urbaine plut\u00f4t qu\u2019en extension urbaine\u2026',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.3.3',
            id_nomenclature: '6.3.1.3.3',
            nom: '(d\u00e9plac\u00e9 de la MOE) Faire certifier les zones d\u2019activit\u00e9s (norme ISO 14001 / r\u00e8glement EMAS)',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.1.4',
        id_nomenclature: '6.3.1.4',
        nom: 'Impliquer les entreprises dans des projets d\u2019\u00e9cologie industrielle structur\u00e9s et collectifs',
        description: '',
        thematique_id: 'dev_eco',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.1.4.1',
            id_nomenclature: '6.3.1.4.1',
            nom: 'Identifier les p\u00e9rim\u00e8tres pertinents pour d\u00e9velopper le concept d\u2019\u00e9cologie industrielle et inviter les entreprises \u00e0 identifier les synergies possibles (soutien \u00e0 des \u00e9tudes de faisabilit\u00e9, poste d\u0027animateur EIT (\u00e9cologie industrielle et territoriale), analyse des flux et des mati\u00e8res, r\u00e9cup\u00e9ration de chaleur fatale \u2013 mesure 3.2.1  \u2026)',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.4.2',
            id_nomenclature: '6.3.1.4.2',
            nom: 'Elaborer un plan d\u2019action, une charte d\u2019engagement, un cahier des charges ou un r\u00e8glement d\u2019appel \u00e0 projets pour formaliser les engagements des entreprises dans un projet d\u0027\u00e9cologie industrielle/\u00e9conomie circulaire',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.4.3',
            id_nomenclature: '6.3.1.4.3',
            nom: 'S\u0027impliquer ou soutenir l\u0027utilisation de la d\u00e9marche territoriale/label "\u00e9conomie circulaire" \u00e0 l\u0027\u00e9chelle pertinente',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.4.4',
            id_nomenclature: '6.3.1.4.4',
            nom: 'dans les DOM, des actions sp\u00e9cifiques pour la fili\u00e8re "bateau" sont r\u00e9alis\u00e9es (\u00e9co-conception et gestion du recyclage/d\u00e9mant\u00e8lement des navires)',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.1.5',
        id_nomenclature: '6.3.1.5',
        nom: 'Maintenir une dynamique \u00e9conomique, en ad\u00e9quation avec les besoins d\u2019une soci\u00e9t\u00e9 bas carbone',
        description: '',
        thematique_id: 'dev_eco',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.1.5.1',
            id_nomenclature: '6.3.1.5.1',
            nom: 'Renforcer le r\u00f4le de relais des commer\u00e7ants et artisans aupr\u00e8s de leurs clients, pour modifier les habitudes de consommation (orienter vers des produits \u00e0 plus faible impact environnemental, de fabrication locale, affichage, mise \u00e0 disposition de document de sensibilisation pour les consommateurs, etc.)',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.5.2',
            id_nomenclature: '6.3.1.5.2',
            nom: 'Soutenir l\u2019artisanat et les commerces de proximit\u00e9 par des exon\u00e9rations de charge locale (fonci\u00e8re par exemple), par des mesures particuli\u00e8res dans le PLU, par une mise en valeur des produits/savoirs faires locaux ou \u00e0 faible impact environnemental (offres touristiques, partenariat dans le cadre des comit\u00e9s d\u2019entreprises, cr\u00e9ation d\u2019un label local etc.), par des op\u00e9rations FISAC\u2026',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.1.5.3',
            id_nomenclature: '6.3.1.5.3',
            nom: 'la collectivit\u00e9 cherche \u00e0 maintenir ou d\u00e9velopper l\u2019attractivit\u00e9 \u00e9conomique de son territoire, en ad\u00e9quation avec les besoins d\u2019une soci\u00e9t\u00e9 bas carbone (ex : \u00e9co-fili\u00e8res, low tech, \u00e9conomie sociale et solidaire, \u00e9conomie de la fonctionnalit\u00e9...)',
            description: '',
            thematique_id: 'dev_eco',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.3.2',
    id_nomenclature: '6.3.2',
    nom: 'D\u00e9velopper un  tourisme durable',
    description:
      '\u003cp\u003eLa collectivit\u00e9 \u00e9labore une strat\u00e9gie touristique durable prenant en compte de mani\u00e8re int\u00e9gr\u00e9e les impacts du tourisme sur les ressources naturelles et les \u00e9cosyst\u00e8mes (la pression sur la ressource locale en eau, \u2026), en mati\u00e8re d\u0027\u00e9missions GES (notamment li\u00e9es au transport) et l\u0027acc\u00e8s aux activit\u00e9s touristiques pour tous. Elle prend des mesures pour r\u00e9duire ces impacts.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 implique les prestataires de tourisme sp\u00e9cialis\u00e9s (tourisme d\u0027affaires, de sport, de loisirs, \u00e9v\u00e9nementiel) et inscrit cet objectif dans sa strat\u00e9gie de tourisme durable. Elle incite en particulier les acteurs de l\u0027h\u00e9bergement et de la restauration \u00e0 s\u0027engager dans une d\u00e9marche \u00e9coresponsable.\u003c/p\u003e\n',
    thematique_id: 'tourisme',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.3.2.1',
        id_nomenclature: '6.3.2.1',
        nom: 'Identifier les enjeux et les bonnes pratiques en mati\u00e8re de tourisme durable sur le territoire',
        description: '',
        thematique_id: 'tourisme',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.2.1.1',
            id_nomenclature: '6.3.2.1.1',
            nom: 'Identifier les pratiques de tourisme durable dans l\u0027offre existante notamment les \u00e9tablissements labellis\u00e9s (ex : Ecolabel europ\u00e9en).',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.1.2',
            id_nomenclature: '6.3.2.1.2',
            nom: 'Identifier les acteurs touristiques cl\u00e9s sur le territoire, les professionnels volontaires et les axes de progression',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.1.3',
            id_nomenclature: '6.3.2.1.3',
            nom: 'Conna\u00eetre les impacts environnementaux des activit\u00e9s touristiques locales et leur vuln\u00e9rabilit\u00e9 au changement climatique (en lien avec l\u2019action 1.1.3) et formaliser les enjeux prioritaires au regard de ce diagnostic, en concertation avec les acteurs concern\u00e9s',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.2.2',
        id_nomenclature: '6.3.2.2',
        nom: 'Mobiliser les acteurs du tourisme',
        description: '',
        thematique_id: 'tourisme',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.2.2.1',
            id_nomenclature: '6.3.2.2.1',
            nom: 'Engagement dans une d\u00e9marche \u00e9co-responsable de l\u2019Office de Tourisme',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.2.2',
            id_nomenclature: '6.3.2.2.2',
            nom: 'Valorisation par l\u2019office de tourisme des acteurs du tourisme engag\u00e9s dans une d\u00e9marche de tourisme durable (mise en exergue sur le site web, mise en exergue par un macaron sur la vitrine)',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.2.3',
            id_nomenclature: '6.3.2.2.3',
            nom: 'Sensibiliser aux enjeux climat-air-\u00e9nergie, l\u2019ensemble des acteurs professionnels et associatifs : les prestataires, les professionnels de l\u0027h\u00f4tellerie et de la restauration, les \u00e9lus et les agents des collectivit\u00e9s\u2026',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.2.4',
            id_nomenclature: '6.3.2.2.4',
            nom: 'Accueillir de fa\u00e7on responsable, sensibiliser et impliquer les travailleurs saisonniers',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.2.5',
            id_nomenclature: '6.3.2.2.5',
            nom: 'D\u00e9velopper un programme de formation \u00e0 la r\u00e9duction des \u00e9missions de gaz \u00e0 effet de serre, des consommations \u00e9nerg\u00e9tiques et la protection de l\u2019environnement pour ces acteurs et favoriser le partage des bonnes pratiques',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.2.6',
            id_nomenclature: '6.3.2.2.6',
            nom: 'Sensibiliser les touristes aux enjeux du tourisme durable et inciter aux bonnes pratiques (publicit\u00e9 pour des infrastructures touristiques durables, incitation \u00e0 l\u0027utilisation de transports collectifs, tri des d\u00e9chets, etc.) via des campagnes de communication, l\u0027organisation d\u0027\u00e9v\u00e9nements sur les sites touristiques, ...',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.2.3',
        id_nomenclature: '6.3.2.3',
        nom: 'D\u00e9velopper une offre touristique de haute qualit\u00e9 environnementale (hors mobilit\u00e9)',
        description: '',
        thematique_id: 'tourisme',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.2.3.1',
            id_nomenclature: '6.3.2.3.1',
            nom: 'D\u00e9velopper des activit\u00e9s touristiques au contenu p\u00e9dagogique permettant l\u0027\u00e9ducation \u00e0 l\u0027environnement et aux enjeux climat air \u00e9nergie, en particulier \u00e0 destination des jeunes',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.3.2',
            id_nomenclature: '6.3.2.3.2',
            nom: 'Cr\u00e9er des partenariats visant l\u2019information et la sensibilisation aux enjeux \u00e9nergie climat sur le territoire ou tout autre particularit\u00e9 environnementale du territoire ainsi que les produits locaux, la promotion de l\u0027artisanat local, etc. entre professionnels de l\u0027h\u00e9bergement et de la restauration et les autres acteurs du territoire',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.3.3',
            id_nomenclature: '6.3.2.3.3',
            nom: 'Augmenter le nombre de structures touristiques labellis\u00e9es (Ecolabel europ\u00e9en notamment), par exemple en soutenant une op\u00e9ration collective d\u0027\u00e9co labellisation de professionnels de la restauration et de l\u0027h\u00e9bergement',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.3.4',
            id_nomenclature: '6.3.2.3.4',
            nom: 'Soutien \u00e0 la cr\u00e9ation d\u0027entreprises \u0153uvrant pour le tourisme durable par le biais d\u0027appels \u00e0 projets, de valorisation m\u00e9diatique, de soutiens financiers (exemple appel \u00e0 projets Ecolabel europ\u00e9en)',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.3.5',
            id_nomenclature: '6.3.2.3.5',
            nom: 'Les \u00e9v\u00e9nements touristiques sur le territoire sont \u00e9co-responsables : festival, manifestation culturelle, manifestation sportive, congr\u00e8s, etc. au travers un engagement via une charte et visant la certification ISO 20121:2012 (\u00e9v\u00e8nements int\u00e9grant le d\u00e9veloppement durable)',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.2.4',
        id_nomenclature: '6.3.2.4',
        nom: 'Mettre en place une offre globale de mobilit\u00e9 durable en lien avec le tourisme',
        description: '',
        thematique_id: 'tourisme',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.2.4.1',
            id_nomenclature: '6.3.2.4.1',
            nom: 'Faciliter l\u2019acc\u00e8s pour se rendre sur le territoire par les transports en commun. Promouvoir l\u2019usage des transports en commun sur tous les supports de communication',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.4.2',
            id_nomenclature: '6.3.2.4.2',
            nom: 'Faciliter l\u2019acc\u00e8s \u00e0 l\u2019int\u00e9rieur du territoire aux activit\u00e9s/h\u00e9bergements par les transports en commun. Promouvoir l\u2019usage des transports en commun sur tous les supports de communication',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.4.3',
            id_nomenclature: '6.3.2.4.3',
            nom: 'Identifier et remettre en \u00e9tat / d\u00e9velopper les circuits de randonn\u00e9e p\u00e9destres et cyclables touristiques sur le territoire',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.4.4',
            id_nomenclature: '6.3.2.4.4',
            nom: 'Interdire/contraindre fortement l\u0027acc\u00e8s aux v\u00e9hicules motoris\u00e9s sur une ou des parties particuli\u00e8rement sensibles et fr\u00e9quent\u00e9es du territoire',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.4.5',
            id_nomenclature: '6.3.2.4.5',
            nom: 'Cr\u00e9ation de circuits touristiques sans voiture, de services de mobilit\u00e9 en particulier pour le \u201cdernier kilom\u00e8tre\u201d en lien avec les h\u00e9bergements (navettes, partenariats h\u00e9bergeur/services de location de v\u00e9lo\u2026)',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.4.6',
            id_nomenclature: '6.3.2.4.6',
            nom: 'Prendre en compte le d\u00e9placement des saisonniers dans l\u2019offre de transports et de logements (navette, co-voiturage, subventionner des logements au coeur des stations pour rendre les loyers accessibles)',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.2.5',
        id_nomenclature: '6.3.2.5',
        nom: 'Int\u00e9grer et formaliser de mani\u00e8re ambitieuse l\u2019enjeu du tourisme durable dans la vision climat air \u00e9nergie du territoire',
        description: '',
        thematique_id: 'tourisme',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.2.5.1',
            id_nomenclature: '6.3.2.5.1',
            nom: 'Porter une offre touristique durable et adapt\u00e9e au changement climatique dans le discours politique et les documents de planification (diversification des activit\u00e9s, tourisme 4 saisons, suppression progressive des activit\u00e9s constituant une mal-adaptation, c\u2019est-\u00e0-dire un changement op\u00e9r\u00e9 dans les syst\u00e8mes naturels ou humains et qui conduit de mani\u00e8re non intentionnelle \u00e0 augmenter la vuln\u00e9rabilit\u00e9 au lieu de la r\u00e9duire\u2026).',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.5.2',
            id_nomenclature: '6.3.2.5.2',
            nom: 'Adh\u00e9rer collectivement \u00e0 des chartes \u00e0 l\u2019\u00e9chelle du territoire : Charte de l\u2019Organisation Mondiale du Tourisme, Charte europ\u00e9enne du tourisme durable, charte des professionnels\u2026',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.5.3',
            id_nomenclature: '6.3.2.5.3',
            nom: 'Pr\u00e9sence d\u0027orientations strat\u00e9giques fortes en mati\u00e8re de qualit\u00e9 environnementale des zones d\u0027activit\u00e9s touristiques',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.5.4',
            id_nomenclature: '6.3.2.5.4',
            nom: 'Cr\u00e9er une taxe locale sur les prestations touristiques et de loisirs pour financer des projets d\u0027adaptation sur le territoire',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.2.5.5',
            id_nomenclature: '6.3.2.5.5',
            nom: 'Les zones de baignade et/ou les stations de ski sont g\u00e9r\u00e9es de fa\u00e7on durable et distingu\u00e9es par une labellisation (ex : flocon vert pour les stations de ski, pavillon bleu pour les plages)',
            description: '',
            thematique_id: 'tourisme',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.3.3',
    id_nomenclature: '6.3.3',
    nom: 'Contribuer \u00e0 l\u0027innovation et l\u0027excellence sur la th\u00e9matique climat-air-\u00e9nergie',
    description:
      '\u003cp\u003eLa collectivit\u00e9 contribue \u00e0 l\u2019innovation et l\u2019excellence sur la th\u00e9matique climat-air-\u00e9nergie. Elle peut collaborer avec les centres de formation et le milieu de la recherche ou soutenir un projet phare exemplaire et ambitieux priv\u00e9, dans ces m\u00eames domaines, en apportant son expertise et/ou ses conseils pour pousser le projet plus loin dans l\u2019excellence. Elle peut en outre favoriser l\u2019\u00e9mergence de projets en f\u00e9d\u00e9rant les acteurs (organisation de rencontres entre collectivit\u00e9, entreprises, associations et chercheurs) ou en facilitant le d\u00e9p\u00f4t de projets (recherche des projets, soutien m\u00e9thodologique).\u003c/p\u003e\n\u003cp\u003eEn particulier, la collectivit\u00e9 est coh\u00e9rente dans sa prise de position \u00e0 l\u2019\u00e9gard des grands projets impactant en mati\u00e8re d\u2019\u00e9mission de gaz \u00e0 effet de serre, de qualit\u00e9 de l\u2019air ou la consommation d\u2019\u00e9nergie ou l\u2019utilisation des terres agricoles sous l\u2019influence de son territoire.\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.3.3.1',
        id_nomenclature: '6.3.3.1',
        nom: 'Mener une veille pro-active sur les acteurs et projets phares',
        description: '',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.3.1.1',
            id_nomenclature: '6.3.3.1.1',
            nom: 'les acteurs priv\u00e9s et ceux de la recherche, de l\u0027enseignement sup\u00e9rieur, de la formation professionnelle (GRETA, lyc\u00e9e agricole, CFA, MFR\u2026), qui sont susceptibles de mener des projets sur les th\u00e9matiques climat-air-\u00e9nergie, sont recens\u00e9s (situ\u00e9s sur le territoire ou \u00e0 proximit\u00e9 de celui-ci pour le milieu rural)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.1.2',
            id_nomenclature: '6.3.3.1.2',
            nom: 'des acteurs ont \u00e9t\u00e9 rencontr\u00e9s pour \u00e9tudier des partenariats sur des projets concrets et/ou des axes de recherches et de formations',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.1.3',
            id_nomenclature: '6.3.3.1.3',
            nom: 'les principaux appels \u00e0 projets, notamment europ\u00e9ens, ont \u00e9t\u00e9 recens\u00e9s et les acteurs du territoire susceptibles d\u2019y r\u00e9pondre ont \u00e9t\u00e9 inform\u00e9s (lettre d\u2019information, journ\u00e9e de rencontres, etc.)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.3.2',
        id_nomenclature: '6.3.3.2',
        nom: 'Formaliser l\u2019engagement de la collectivit\u00e9 dans le soutien des projets des acteurs priv\u00e9s',
        description: '',
        thematique_id: 'parten_coop',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.3.2.1',
            id_nomenclature: '6.3.3.2.1',
            nom: 'le partenariat ou l\u0027implication de la collectivit\u00e9 avec les acteurs d\u00e9crits pr\u00e9c\u00e9demment a fait l\u0027objet d\u0027une discussion (inscrite dans un compte-rendu, voire d\u2019une d\u00e9lib\u00e9ration si n\u00e9cessaire au niveau de l\u0027organe d\u00e9lib\u00e9rant)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.3.3',
        id_nomenclature: '6.3.3.3',
        nom: 'Participer \u00e0 des \u00e9tudes et des recherches pour faire progresser les connaissances et techniques',
        description: '',
        thematique_id: 'parten_coop',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.3.3.1',
            id_nomenclature: '6.3.3.3.1',
            nom: 'des \u00e9tudes et recherches sont men\u00e9es avec les organismes de formation (stagiaires, apprentis), les \u00e9tablissements d\u0027enseignements sup\u00e9rieurs ou de recherche : \u00e9co-mat\u00e9riaux, efficacit\u00e9 \u00e9nerg\u00e9tique dans les b\u00e2timents ou les transports, agriculture durable (notamment les liens air et agriculture), surveillance des pollens, qualit\u00e9 de l\u0027air int\u00e9rieur, gestion des risques dans le cadre de l\u0027adaptation au changement climatique, \u00e9tudes des liens entre les conditions locales de circulation et les concentrations de polluants atmosph\u00e9riques ...',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.3.2',
            id_nomenclature: '6.3.3.3.2',
            nom: 'le territoire se propose comme territoire test/pilote pour des projets de recherche/exp\u00e9rimentation',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.3.4',
        id_nomenclature: '6.3.3.4',
        nom: 'S\u2019investir et se mobiliser concr\u00e8tement sur des r\u00e9alisations ambitieuses',
        description: '',
        thematique_id: 'parten_coop',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.3.4.1',
            id_nomenclature: '6.3.3.4.1',
            nom: 'Les projets soutenus vont au-del\u00e0 de la r\u00e9glementation et int\u00e8grent des performances environnementales et climatiques chiffr\u00e9es, dans une approche transversale. Ils sont men\u00e9s dans une approche participative.',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.4.2',
            id_nomenclature: '6.3.3.4.2',
            nom: 'des r\u00e9unions r\u00e9guli\u00e8res sont organis\u00e9es entre la ma\u00eetrise d\u0027ouvrage priv\u00e9e, la ma\u00eetrise d\u0027\u0153uvre et la collectivit\u00e9',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.4.3',
            id_nomenclature: '6.3.3.4.3',
            nom: 'la collectivit\u00e9 a tir\u00e9 vers le haut les objectifs fix\u00e9s pour le projet et a aid\u00e9 \u00e0 mettre en place un dispositif d\u0027\u00e9valuation des performances du projet',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.4.4',
            id_nomenclature: '6.3.3.4.4',
            nom: 'la collectivit\u00e9 a formul\u00e9 des avis techniques ou organisationnels sur le projet',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.4.5',
            id_nomenclature: '6.3.3.4.5',
            nom: 'des outils ou du personnel de la collectivit\u00e9 ont \u00e9t\u00e9 mobilis\u00e9s pour suivre le projet et fournir des conseils',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.4.6',
            id_nomenclature: '6.3.3.4.6',
            nom: 'la collectivit\u00e9 a communiqu\u00e9 sur le projet',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.4.7',
            id_nomenclature: '6.3.3.4.7',
            nom: 'la collectivit\u00e9 a permis la formation de partenariats entre les acteurs d\u00e9crits pr\u00e9c\u00e9demment (priv\u00e9s, enseignement, recherche, \u2026), en les mettant en relation gr\u00e2ce \u00e0 son r\u00f4le d\u2019animateur, m\u00e9diateur',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.3.3.5',
        id_nomenclature: '6.3.3.5',
        nom: 'Etre un territoire d\u2019innovation et d\u2019excellence sur certaines th\u00e9matiques',
        description: '',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.3.3.5.1',
            id_nomenclature: '6.3.3.5.1',
            nom: 'le territoire est membre d\u2019un p\u00f4le de comp\u00e9titivit\u00e9, p\u00f4le d\u0027excellence rural, cluster et/ou est laur\u00e9at d\u2019un appel \u00e0 projet sur le d\u00e9veloppement durable, notamment europ\u00e9en (LIFE, H2020, etc.), ...',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.5.2',
            id_nomenclature: '6.3.3.5.2',
            nom: 'pour les collectivit\u00e9s sup\u00e9rieures \u00e0 100 000 habitants : il existe une offre de formation locale et diversifi\u00e9e (th\u00e9matiques et niveaux de qualification) aux m\u00e9tiers utiles \u00e0 la transition \u00e9nerg\u00e9tique et climatique',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.3.3.5.3',
            id_nomenclature: '6.3.3.5.3',
            nom: 'la collectivit\u00e9 se positionne clairement contre les grands projets nuisibles en mati\u00e8re d\u2019impacts sur le climat, la qualit\u00e9 de l\u2019air ou la consommation d\u2019\u00e9nergie ou l\u2019utilisation des terres agricoles sous l\u2019influence de son territoire (ex : nouvelles capacit\u00e9s de productions d\u2019\u00e9nergies fossiles, grands projets de construction sur espaces naturels et agricoles ou \u00e0 urbaniser (ex : centres commerciaux d\u00e9centralis\u00e9s, constructions \u00e0 faible densit\u00e9, cr\u00e9ation d\u2019activit\u00e9s polluantes).',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.4.1',
    id_nomenclature: '6.4.1',
    nom: 'Soutenir une agriculture et une alimentation plus durable',
    description:
      '\u003cp\u003eAu travers de ses comp\u00e9tences, la collectivit\u00e9 soutient, promeut et encourage des pratiques agricoles et alimentaires durables sur son territoire et sur ses territoires d\u2019approvisionnement :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003een menant des actions visant \u00e0 r\u00e9duire les \u00e9missions de gaz \u00e0 effet de serre, de particules et plus globalement les impacts environnementaux du secteur agricole (formation aux pratiques agro-\u00e9cologiques, certification environnementale des exploitations...)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003een pr\u00e9servant le foncier agricole au travers des documents d\u2019urbanisme et en accompagnant la mise en place d\u2019espace agricoles ou jardiniers urbains ou p\u00e9ri-urbains (mesure 1.3.1)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003een mobilisant les acteurs du territoire, par exemple par le biais d\u2019un PAT \u2013 projet alimentaire territorial \u2013 sur l\u2019ensemble de la cha\u00eene alimentaire (du producteur au consommateur, en passant par la transformation, la distribution et la restauration)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003een orientant ses actions et ses soutiens (techniques et financiers) pour accompagner des projets exemplaires en terme d\u2019alimentation durable et les fili\u00e8res agricoles locales et durables\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003een agissant sur sa restauration collective et ses achats alimentaires (prestations \u00e9v\u00e8nementielles), par le biais de la commande publique (approvisionnements durables et des proximit\u00e9, sensibilisation des convives) en sensibilisant les habitants aux enjeux et aux actions \u00e0 mettre en place (plus v\u00e9g\u00e9tale et diversifi\u00e9e, qualit\u00e9 des produits, respect de la saisonnalit\u00e9, gestion durable des sols, lutte contre le gaspillage alimentaire...)\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'agri_alim',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.4.1.1',
        id_nomenclature: '6.4.1.1',
        nom: 'R\u00e9aliser un diagnostic agricole et alimentaire de son territoire',
        description:
          '\u003cp\u003eCe diagnostic agricole et alimentaire peut s\u2019inscrire dans le cadre d\u2019un projet alimentaire territorial.\u003c/p\u003e\n\u003cp\u003eLe volet foncier de ce diagnostic est \u00e9valu\u00e9 dans la mesure sur les documents d\u0027urbanisme (mesure 1.3.1).\u003c/p\u003e\n',
        thematique_id: 'agri_alim',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.1.1.1',
            id_nomenclature: '6.4.1.1.1',
            nom: 'l\u2019ensemble de la cha\u00eene alimentaire (production, transformation, distribution, restauration, consommation), incluant un volet sp\u00e9cifique relatif \u00e0 la restauration collective publique relevant de la collectivit\u00e9 (conformit\u00e9 loi Egalim)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.1.2',
            id_nomenclature: '6.4.1.1.2',
            nom: 'un volet chiffr\u00e9 concernant l\u2019impact \u00e9nerg\u00e9tique, GES et polluants atmosph\u00e9riques de l\u2019agriculture (de type ClimAgri\u00ae\u00a0)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.1.3',
            id_nomenclature: '6.4.1.1.3',
            nom: 'un volet qualitatif pour identifier les attentes, les besoins, les pratiques et la nature des activit\u00e9s agricoles, y compris pour leur adaptation au changement climatique, ainsi que les attentes, les besoins et les pratiques des acteurs de l\u2019alimentation, de la sant\u00e9 et du social en mati\u00e8re de transition alimentaire.',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.1.4',
            id_nomenclature: '6.4.1.1.4',
            nom: 'un volet sur le gaspillage alimentaire (volumes, sources, etc.)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.1.2',
        id_nomenclature: '6.4.1.2',
        nom: 'Animer son territoire sur le sujet de l\u2019agriculture et de l\u2019alimentation durable',
        description:
          '\u003cp\u003eCette animation peut prendre la forme de l\u2019initiation d\u2019un projet alimentaire territorial.\u003c/p\u003e\n',
        thematique_id: 'agri_alim',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.1.2.1',
            id_nomenclature: '6.4.1.2.1',
            nom: 'Initier une concertation entre les acteurs (r\u00e9unions professionnelles, r\u00e9unions publiques\u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.2.2',
            id_nomenclature: '6.4.1.2.2',
            nom: 'Mener des actions de sensibilisation (r\u00e9unions publiques, films, intervenants ext\u00e9rieurs, th\u00e9\u00e2tre, expos, d\u00e9fis Famille \u00e0 alimentation positive\u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.2.3',
            id_nomenclature: '6.4.1.2.3',
            nom: 'Mise en relation d\u2019acteurs (producteurs-consommateurs-restaurateurs, commissions locales \u00e0 l\u2019installation \u2013 caf\u00e9 installation-, limitation du gaspillage alimentaire, facilitation et accompagnement d\u2019associations d\u2019aide alimentaire, don, acteurs de l\u2019alimentation, de la sant\u00e9 et du social autour des questions d\u2019acc\u00e8s de tous \u00e0 une alimentation saine et durable  \u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.1.3',
        id_nomenclature: '6.4.1.3',
        nom: 'Am\u00e9liorer la performance environnementale de la production agricole',
        description:
          '\u003cp\u003eLes am\u00e9liorations visent les champs suivants :\u003c/p\u003e\n\u003cp\u003eetc.)\u003c/p\u003e\n',
        thematique_id: 'agri_alim',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.1.3.1',
            id_nomenclature: '6.4.1.3.1',
            nom: 'Favoriser le d\u00e9veloppement de pratiques agro\u00e9cologiques, l\u2019installation de producteurs bios/ avec des pratiques agro-\u00e9cologiques, favoriser les conversions en bio, soutenir les groupements locaux d\u2019agriculture biologique (GAB)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.3.2',
            id_nomenclature: '6.4.1.3.2',
            nom: 'Encourager les fili\u00e8res locales \u00e0 rentrer dans des logiques de performance environnementale et d\u2019\u00e9coconception : int\u00e9gration d\u2019exigences et suivi d\u2019indicateurs environnementaux dans les cahiers des charges, promotion des d\u00e9marches HVE, formation \u00e0 l\u2019agro-\u00e9cologie',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.3.3',
            id_nomenclature: '6.4.1.3.3',
            nom: 'Travail avec les AOC, IGP, marques r\u00e9gionales etc. pour qualifier les productions',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.3.4',
            id_nomenclature: '6.4.1.3.4',
            nom: 'la diminution des \u00e9missions de gaz \u00e0 effet de serre de l\u2019agriculture (diminuer l\u2019utilisation des engrais azot\u00e9s de synth\u00e8se, encourager la culture de l\u00e9gumineuses, am\u00e9liorer l\u2019autonomie alimentaire des \u00e9levages,\u00a0meilleur stockage des lisiers, am\u00e9lioration de la prise en compte de la qualit\u00e9 des sols,',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.3.5',
            id_nomenclature: '6.4.1.3.5',
            nom: 'l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique sur les syst\u00e8mes techniques (passage au banc d\u2019essai des tracteurs, mesures particuli\u00e8res pour limiter la consommation d\u2019\u00e9nergie de la production laiti\u00e8re, des serres agricoles et le s\u00e9chage, d\u00e9veloppement d\u2019\u00e9nergies renouvelables dans les b\u00e2timents agricoles\u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.3.6',
            id_nomenclature: '6.4.1.3.6',
            nom: '\u00e9volution des pratiques agricoles vers l\u2019am\u00e9lioration de la qualit\u00e9 des sols et l\u2019augmentation de la s\u00e9questration carbone (fraction organique, r\u00e9serve utile, rotations des cultures longues et \u00e0 esp\u00e8ces multiples, maintien des prairies, maintien et plantation des haies, agroforesterie\u2026) par le biais par exemple de la formation/sensibilisation',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.3.7',
            id_nomenclature: '6.4.1.3.7',
            nom: 'pr\u00e9servation des ressources en eau (esp\u00e8ces peu gourmandes en eau et am\u00e9lioration des techniques d\u2019irrigation\u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.3.8',
            id_nomenclature: '6.4.1.3.8',
            nom: 'limitation des \u00e9missions d\u2019ammoniac et de particules (\u00e9levage et culture, par exemple :  diminuer l\u2019utilisation des engrais azot\u00e9s, encourager la culture de l\u00e9gumineuses, favoriser les appareils d\u2019\u00e9pandage plus performants et moins propices \u00e0 la volatilisation des particules, encourager la mise en place de bonnes pratiques agricoles faisant consensus (, / MTD, \u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.1.4',
        id_nomenclature: '6.4.1.4',
        nom: 'Reterritorialiser l\u2019alimentation de la collectivit\u00e9 et contribuer \u00e0 sa r\u00e9silience alimentaire',
        description: '',
        thematique_id: 'agri_alim',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.1.4.1',
            id_nomenclature: '6.4.1.4.1',
            nom: 'Accompagner la diversification des productions agricoles locales pour r\u00e9pondre aux besoins du territoire  (l\u00e9gumes secs, fruits et l\u00e9gumes frais de saison, etc.)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.4.2',
            id_nomenclature: '6.4.1.4.2',
            nom: 'Int\u00e9grer les questions d\u2019approvisionnement alimentaire (durable) dans les r\u00e9flexions urbanistiques : types de commerces, march\u00e9s de d\u00e9tails et march\u00e9 de gros (MIN), acc\u00e8s aux modes doux\u2026',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.4.3',
            id_nomenclature: '6.4.1.4.3',
            nom: 'Favoriser l\u2019acc\u00e8s \u00e0 la terre et les regroupements de producteurs locaux pour optimiser la logistique du dernier kilom\u00e8tre et l\u2019installation de boutiques paysans',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.4.4',
            id_nomenclature: '6.4.1.4.4',
            nom: 'Valoriser les produits locaux / fili\u00e8res locales de qualit\u00e9 (cr\u00e9ation de march\u00e9 de producteurs locaux, guide, cartographie\u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.4.5',
            id_nomenclature: '6.4.1.4.5',
            nom: 'En milieu urbain : accompagner l\u2019installation de fermes urbaines durables ; de jardins partag\u00e9s ou p\u00e9dagogiques, des ruches (dans le respect de la biodiversit\u00e9 locale de pollinisateurs), les plantations comestibles en milieu urbain, encourager la multiplication des potagers priv\u00e9s (sensibiliser aux pratiques agro-\u00e9cologiques, enjeux environnementaux et sanitaires)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.4.6',
            id_nomenclature: '6.4.1.4.6',
            nom: 'Favoriser / soutenir les initiatives d\u2019acc\u00e8s \u00e0 tous \u00e0 une alimentation saine et durable. Faire se rencontrer les acteurs de l\u2019alimentation, de la sant\u00e9 et du social',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.4.7',
            id_nomenclature: '6.4.1.4.7',
            nom: 'Mettre en place ou soutenir les actions de sensibilisation du grand public \u00e0 l\u2019alimentation durable',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.1.5',
        id_nomenclature: '6.4.1.5',
        nom: 'Modifier les habitudes alimentaires, notamment dans la restauration collective, en respectant les obligations de la loi EGalim et en s\u2019engageant plus loin',
        description: '',
        thematique_id: 'agri_alim',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.1.5.1',
            id_nomenclature: '6.4.1.5.1',
            nom: 'Revoir les approvisionnements en restauration collective publique : a minima 50% de produits durables et de qualit\u00e9, dont au moins 20% issus de l\u2019agriculture biologique (crit\u00e8res Egalim) ; privil\u00e9gier les produits locaux ou ancr\u00e9s dans les territoires (PAT) ;  servir uniquement des fruits et l\u00e9gumes frais de saison, favoriser les produits issus du commerce \u00e9quitable',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.5.2',
            id_nomenclature: '6.4.1.5.2',
            nom: 'Informer les convives sur l\u2019origine, la saisonnalit\u00e9 et la qualit\u00e9 des produits servis (Egalim et autres crit\u00e8res de qualit\u00e9 / durabilit\u00e9); mettre en place un affichage environnemental et nutritionnel des menus',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.5.3',
            id_nomenclature: '6.4.1.5.3',
            nom: 'Diversifier les apports alimentaires, en coh\u00e9rence avec les nouvelles recommandations de Sant\u00e9 Publique France, notamment : mettre en place un plan de diversification prot\u00e9ique, introduisant notamment les l\u00e9gumineuses (obligatoire \u00e0 partir de 200 couverts/j, Egalim) ; proposer au moins un menu v\u00e9g\u00e9tarien hebdomadaire (obligatoire en restauration scolaire, Egalim) et/ou une alternative v\u00e9g\u00e9tarienne (choix multiples)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.5.4',
            id_nomenclature: '6.4.1.5.4',
            nom: 'Lutter contre le gaspillage alimentaire (ajuster les quantit\u00e9s aux besoins, sensibiliser les convives, organiser des pes\u00e9es annuelles sur une semaine, etc.)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.5.5',
            id_nomenclature: '6.4.1.5.5',
            nom: 'Lors des achats de mat\u00e9riels/r\u00e9novations importantes, r\u00e9fl\u00e9chir sur la globalit\u00e9 du repas (besoin en l\u00e9gumerie, cuisson basse temp\u00e9rature, contenants de diff\u00e9rentes tailles pour les petites/grandes faims, salade bar, \u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.5.6',
            id_nomenclature: '6.4.1.5.6',
            nom: 'Former les cuisinier\u00b7es et le personnel de cantine \u00e0 l\u0027introduction de produits bio locaux et \u00e0 la diversification des prot\u00e9ines, et plus globalement aux enjeux environnementaux, et leur fournir un corpus de recettes adapt\u00e9es \u00e0 la restauration collective. Les former \u00e9galement aux d\u00e9marches de r\u00e9duction du gaspillage alimentaire.',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.5.7',
            id_nomenclature: '6.4.1.5.7',
            nom: 'Former les acheteur\u00b7ses et les gestionnaires impliqu\u00e9\u00b7es dans la restauration collective aux questions environnementales, sociales, sanitaires de l\u2019alimentation, aux achats bios/locaux et aux d\u00e9marches de r\u00e9duction du gaspillage alimentaire.',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.5.8',
            id_nomenclature: '6.4.1.5.8',
            nom: 'En restauration scolaire en particulier : organiser des ateliers sur la provenance des aliments consomm\u00e9s par les enfants (dont les prot\u00e9ines animales), sur l\u0027impact environnemental de leur assiette, pour les produits locaux ou d\u2019importation faisant partie de nos habitudes alimentaires, organiser des visites de fermes d\u2019o\u00f9 proviennent les aliments cuisin\u00e9s ou des interventions des producteurs. Organiser avec les enfants des pes\u00e9es d\u2019assiette, et le tri s\u00e9lectif des d\u00e9chets, pour agir sur le gaspillage alimentaire. Co-construire les menus avec eux\u00b7elles (et le\u00b7a di\u00e9t\u00e9ticien\u00b7ne de la ville) (en lien avec la mesure 6.5.4)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.1.6',
        id_nomenclature: '6.4.1.6',
        nom: '(20% dans les DOM) Participer concr\u00e8tement \u00e0 des installations et au maintien des pratiques agricoles durables',
        description: '',
        thematique_id: 'agri_alim',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.1.6.1',
            id_nomenclature: '6.4.1.6.1',
            nom: 'cr\u00e9ation d\u2019une r\u00e9gie agricole et/ou utilisation de baux environnementaux',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.6.2',
            id_nomenclature: '6.4.1.6.2',
            nom: 'acquisition, mise en r\u00e9serve (convention de portage foncier EPF ou SAFER, stockage en direct par la collectivit\u00e9) ou mise \u00e0 disposition du foncier (terres ou b\u00e2timent, fermes communales ou intercommunales, fermes relais, r\u00e9gies communales) en partenariats avec des associations (exemple Fonci\u00e8re Terre de Liens)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.6.3',
            id_nomenclature: '6.4.1.6.3',
            nom: 'installation de porteurs de projets exemplaires et cr\u00e9ation d\u0027espaces-test (mise \u00e0 disposition de terres, portage ou financement de b\u00e2timents, aide \u00e0 d\u00e9marrage et au fonctionnement de la structure d\u0027accueil, portage politique et technique du projet)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.6.4',
            id_nomenclature: '6.4.1.6.4',
            nom: 'dans les DOM, les mesures sp\u00e9cifiques DOM plan Ecophyto sont d\u00e9clin\u00e9es/soutenues localement (exemple : plateforme d\u2019exp\u00e9rimentation \u00ab syst\u00e8mes de culture innovants \u00bb adapt\u00e9es au climat tropical, recherche sur les m\u00e9thodes de lutte biologique\u2026)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.1.7',
        id_nomenclature: '6.4.1.7',
        nom: 'Adopter une vision globale gr\u00e2ce \u00e0 la formalisation d\u2019un Projet Alimentaire Territorial (PAT)',
        description:
          '\u003cp\u003eFormaliser son PAT (par exemple via la reconnaissance au niveau national par le Minist\u00e8re de l\u2019agriculture et de l\u2019alimentation) avec des crit\u00e8res \u00e9cologiques et sociaux, compatible avec le PCAET, prenant en compte la r\u00e9silience alimentaire et appuyant la structuration de fili\u00e8res paysannes, biologiques et locales, r\u00e9mun\u00e9ratrices pour les agriculteurs.\u003c/p\u003e\n',
        thematique_id: 'agri_alim',
        points: 5,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.1.8',
        id_nomenclature: '6.4.1.8',
        nom: '(10% dans les DOM) Mesurer et atteindre des objectifs ambitieux en mati\u00e8re d\u2019agriculture et d\u2019alimentation durable',
        description: '',
        thematique_id: 'agri_alim',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.1.8.1',
            id_nomenclature: '6.4.1.8.1',
            nom: 'en lien avec les chambres d\u0027agriculture, les coop\u00e9ratives agricoles, les ONVAR (CIVAM, GAB, CUMA, etc.) et les agriculteurs : mise en place et suivi d\u0027indicateurs en mati\u00e8re d\u0027intrants (fr\u00e9quence, quantit\u00e9, produits...) selon les cultures, soutien et suivi technique des rendements/co\u00fbts/impacts environnementaux d\u2019espaces test agricoles\u2026',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.8.2',
            id_nomenclature: '6.4.1.8.2',
            nom: 'en restauration collective, sur le gaspillage alimentaire, atteinte de l\u2019objectif de 50% de r\u00e9duction par rapport \u00e0 la r\u00e9f\u00e9rence nationale du secteur',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.8.3',
            id_nomenclature: '6.4.1.8.3',
            nom: 's\u2019engager \u00e0 au moins 75% de l\u2019alimentation en restauration collective qui soit de qualit\u00e9 ou durable, dont au moins 40% issus de l\u2019agriculture biologique et 50% issue de produits locaux ; poursuite de la diversification alimentaire. (dans les DOM, suivi uniquement de l\u2019\u00e9volution)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.8.4',
            id_nomenclature: '6.4.1.8.4',
            nom: 'mise en place d\u2019un programme pour l\u2019acc\u00e8s \u00e0 tous \u00e0 une alimentation saine et durable, incluant : sensibilisation et accompagnement de la population, soutien \u00e0 des structures ESS type \u00e9piceries solidaires, AMAP, etc.), programme de type ch\u00e8que alimentaire ou S\u00e9curit\u00e9 sociale alimentaire locale',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.1.8.5',
            id_nomenclature: '6.4.1.8.5',
            nom: 'pourcentage \u00e9lev\u00e9 de Surface Agricole Utile en agricultue biologique : en m\u00e9tropole, objectif 20%, valoris\u00e9 progressivement \u00e0 partir de 6% (dans les DOM, suivi uniquement de l\u2019\u00e9volution)',
            description: '',
            thematique_id: 'agri_alim',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.4.2',
    id_nomenclature: '6.4.2',
    nom: 'Soutenir l\u0027utilisation durable des for\u00eats et des espaces bois\u00e9s',
    description:
      '\u003cp\u003eLa collectivit\u00e9 prend en compte la for\u00eat et les espaces bois\u00e9s dans ses documents d\u2019urbanisme, dans un objectif d\u2019identification, de pr\u00e9servation, d\u2019utilisation rationnelle ou de d\u00e9veloppement. Elle incite aux pratiques sylvicoles durables et au d\u00e9veloppement des pratiques de gestion raisonn\u00e9e des for\u00eats et espaces bois\u00e9s, en interne et aupr\u00e8s des particuliers et des professionnels. Elle contribue \u00e0 structurer et d\u00e9velopper des fili\u00e8res bois-\u00e9nergie et bois-construction.\u003c/p\u003e\n',
    thematique_id: 'foret_biodiv',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.4.2.1',
        id_nomenclature: '6.4.2.1',
        nom: 'Sensibiliser \u00e9lus, services et acteurs du territoire aux enjeux li\u00e9s \u00e0 la for\u00eat et aux espaces bois\u00e9s',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.2.1.1',
            id_nomenclature: '6.4.2.1.1',
            nom: 'Sensibilisation des \u00e9lus et services de la collectivit\u00e9 et particuliers \u00e0 la gestion durable de la for\u00eat (sensibilisation notamment aux leviers forestiers d\u2019att\u00e9nuation du changement climatique : s\u00e9questration carbone en for\u00eat et production durable de bois pour les usages bois mat\u00e9riau et bois \u00e9nergie) et \u00e0 l\u2019utilisation du bois \u00e9nergie sur le territoire, de fa\u00e7on compl\u00e9mentaire aux usages mat\u00e9riaux',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.1.2',
            id_nomenclature: '6.4.2.1.2',
            nom: 'Sensibilisation des \u00e9lus \u00e0 l\u2019utilisation du bois mat\u00e9riau, notamment \u00e0 l\u2019utilisation du bois dans la construction',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.1.3',
            id_nomenclature: '6.4.2.1.3',
            nom: 'Sensibilisation des \u00e9lus \u00e0 l\u2019utilisation optimale du bois (compl\u00e9mentarit\u00e9 des fili\u00e8res, principe d\u2019utilisation de bois en cascade, utilisation du bois local fili\u00e8res courtes (ex : marques type bois des Alpes, bois des Territoires du Massif Central, ...)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.1.4',
            id_nomenclature: '6.4.2.1.4',
            nom: 'Sensibiliser des \u00e9lus \u00e0 la lutte contre la d\u00e9forestation import\u00e9e',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.2.2',
        id_nomenclature: '6.4.2.2',
        nom: 'Lutter contre la d\u00e9forestation import\u00e9e',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.2.2.1',
            id_nomenclature: '6.4.2.2.1',
            nom: 'La collectivit\u00e9 est attentive \u00e0 la provenance du bois pour ses fournitures (par exemple son mobilier), il doit provenir de for\u00eat locales et g\u00e9r\u00e9es durablement',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.2.2',
            id_nomenclature: '6.4.2.2.2',
            nom: 'La collectivit\u00e9 dresse une liste des produits alimentaires dont la production est cause de d\u00e9forestation (par exemple\u00a0: soja, huile de palme, b\u0153uf et se coproduits, cacao, h\u00e9v\u00e9a). Elle contr\u00f4le leur provenance et les m\u00e9thodes de production lorsqu\u2019elle les utilise pour sa restauration publique, s\u2019ils ne proviennent pas de cultures durables ils sont limit\u00e9s voire interdits.',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.2.3',
        id_nomenclature: '6.4.2.3',
        nom: 'R\u00e9aliser des diagnostics, conna\u00eetre les enjeux li\u00e9s \u00e0 la for\u00eat et aux espaces bois\u00e9s sur son territoire',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.2.3.1',
            id_nomenclature: '6.4.2.3.1',
            nom: 'd\u0027un diagnostic pour identifier les attentes, les besoins, les pratiques et la nature des activit\u00e9s foresti\u00e8res, y compris pour leur adaptation au changement climatique',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.3.2',
            id_nomenclature: '6.4.2.3.2',
            nom: 'd\u2019un diagnostic de la for\u00eat incluant les surfaces par typologie des for\u00eats, les stocks de carbone et la s\u00e9questration de carbone par la for\u00eat, le taux des pr\u00e9l\u00e8vements, la r\u00e9partition de la r\u00e9colte entre les diff\u00e9rents usages du bois, de ses usages et de ses acteurs sur le territoire.',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.3.3',
            id_nomenclature: '6.4.2.3.3',
            nom: 'Les diff\u00e9rents potentiels de la for\u00eat et des espaces bois\u00e9s ont \u00e9t\u00e9 \u00e9tudi\u00e9s dans le cadre d\u2019une d\u00e9marche territoriale concert\u00e9e (ex : \u00e9laboration d\u2019une charte concert\u00e9e de territoire)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.2.4',
        id_nomenclature: '6.4.2.4',
        nom: 'Formaliser sa strat\u00e9gie dans des documents de planification d\u00e9di\u00e9s \u00e0 la for\u00eat et dans les documents d\u2019urbanisme',
        description:
          '\u003cp\u003eo la gestion et la pr\u00e9servation des zones foresti\u00e8res ;\u003c/p\u003e\n\u003cp\u003eo le d\u00e9veloppement de la diversit\u00e9 biologique, la protection des ressources hydriques, des sols et paysages ;\u003c/p\u003e\n\u003cp\u003eo la pr\u00e9servation de la vitalit\u00e9 et de la capacit\u00e9 de r\u00e9g\u00e9n\u00e9ration dans un contexte de changement climatique ;\u003c/p\u003e\n\u003cp\u003eo le d\u00e9veloppement des documents de gestion;\u003c/p\u003e\n\u003cp\u003eo l\u2019\u00e9valuation des ressources en bois pour le d\u00e9veloppement des fili\u00e8res ;\u003c/p\u003e\n\u003cp\u003eo la r\u00e9gulation des usages de la for\u00eat (ex : la canalisation du public sur les chemins, la prescription des loisirs motoris\u00e9s,..) ;\u003c/p\u003e\n\u003cp\u003eo l\u2019\u00e9valuation des actions permettant d\u2019optimiser la contribution de la for\u00eat et le bois \u00e0 l\u2019att\u00e9nuation du changement climatique tout en favorisant l\u2019adaptation au changement climatique.\u003c/p\u003e\n\u003cp\u003eo Des indicateurs concernant par exemple la vuln\u00e9rabilit\u00e9, la s\u00e9questration carbone, le taux de pr\u00e9l\u00e8vements et la r\u00e9partition de la r\u00e9colte entre les diff\u00e9rents usages du bois, la contribution de la for\u00eat.\u003c/p\u003e\n',
        thematique_id: 'foret_biodiv',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.2.4.1',
            id_nomenclature: '6.4.2.4.1',
            nom: 'La collectivit\u00e9 met en \u0153uvre avec les acteurs du territoire un plan de pr\u00e9servation et de valorisation de la for\u00eat, portant sur :',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.4.2',
            id_nomenclature: '6.4.2.4.2',
            nom: 'elle prend en compte les zones bois\u00e9es dans les documents d\u2019urbanisme (zonage appropri\u00e9, espaces bois\u00e9s class\u00e9s, \u00e9l\u00e9ments remarquables \u00e0 prot\u00e9ger et rep\u00e9r\u00e9s dans les documents graphiques)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.4.3',
            id_nomenclature: '6.4.2.4.3',
            nom: 'la collectivit\u00e9 veille \u00e0 articuler sa strat\u00e9gie avec les politiques locales de d\u00e9veloppement (Chartes de Pays, etc.) et les autres dispositifs de gestion foresti\u00e8re (sch\u00e9mas r\u00e9gionaux de gestion foresti\u00e8re, plan de d\u00e9veloppement de massif) en co-construction avec les acteurs locaux concern\u00e9s (ex : les Chartes foresti\u00e8res)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.4.4',
            id_nomenclature: '6.4.2.4.4',
            nom: 'La collectivit\u00e9 p\u00e9rennise un pilotage multi-partenarial de la politique de pr\u00e9servation et de valorisation de la for\u00eat',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.2.5',
        id_nomenclature: '6.4.2.5',
        nom: 'Mettre en place les actions d\u00e9finies dans le plan de pr\u00e9servation et valorisation de la for\u00eat permettant une mobilisation durable de bois et un renforcement durable des puits de carbone dans les for\u00eats (biomasse et sols)',
        description:
          '\u003cp\u003e(Si peu de ressource bois expoitable sur le territoire, les 30% concernant le d\u00e9veloppement des fili\u00e8res bois-contruction et bois-\u00e9nergie sont \u00e0 reporter vers les actions de pr\u00e9servation et lutte contre la d\u00e9forestation import\u00e9e)\u003c/p\u003e\n',
        thematique_id: 'foret_biodiv',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.2.5.1',
            id_nomenclature: '6.4.2.5.1',
            nom: 'La collectivit\u00e9 prot\u00e8ge les for\u00eats de l\u2019artificialisation des sols et favorise la restauration des for\u00eats impact\u00e9es par des \u00e9v\u00e8nements extr\u00eames.',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.5.2',
            id_nomenclature: '6.4.2.5.2',
            nom: 'La collectivit\u00e9 favorise le regroupement forestier.',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.5.3',
            id_nomenclature: '6.4.2.5.3',
            nom: 'La collectivit\u00e9 met en place des actions pour favoriser l\u2019\u00e9laboration des documents de gestion ciblant une production de bois de qualit\u00e9 et encourageant des pratiques sylvicoles comme la conversion des taillis en futaies ; l\u2019am\u00e9lioration sylvicole des accrus forestiers et en raisonnant les pratiques pouvant avoir des impacts n\u00e9gatifs sur les stocks de carbone du sol (ex : coupes rases associ\u00e9es \u00e0 un travail du sol, r\u00e9colte accrue des r\u00e9manents, et tout particuli\u00e8rement les souches).',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.5.4',
            id_nomenclature: '6.4.2.5.4',
            nom: 'La collectivit\u00e9 met en place des mesures pour favoriser la s\u00e9questration de carbone dans les for\u00eats et les espaces bois\u00e9s (ex : \u00eelots de s\u00e9nescence, arbres morts...).',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.5.5',
            id_nomenclature: '6.4.2.5.5',
            nom: 'La collectivit\u00e9 met en place des actions favorisant l\u2019utilisation optimale du bois (tri du bois, chantiers group\u00e9s).',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.2.6',
        id_nomenclature: '6.4.2.6',
        nom: 'Prendre en charge, promouvoir et soutenir le d\u00e9veloppement d\u2019une fili\u00e8re bois-construction locale et \u00e0 haute performance environnementale',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.2.6.1',
            id_nomenclature: '6.4.2.6.1',
            nom: 'La collectivit\u00e9 soutient la structuration et l\u2019optimisation de la fili\u00e8re bois (cr\u00e9ation de plateforme de s\u00e9chage et de stockage destin\u00e9es en priorit\u00e9 \u00e0 un usage local, espaces/groupes de discussion entre acteurs, cr\u00e9ation d\u0027association, de SEM ou de SCIC, label pour le bois local...)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.6.2',
            id_nomenclature: '6.4.2.6.2',
            nom: 'La collectivit\u00e9 engage une op\u00e9ration de construction / r\u00e9novation bois en adaptant les sp\u00e9cifications techniques aux caract\u00e9ristiques du bois local',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.6.3',
            id_nomenclature: '6.4.2.6.3',
            nom: 'La collectivit\u00e9 accompagne les acteurs de la fili\u00e8re bois du territoire pour p\u00e9n\u00e9trer le march\u00e9 de la construction bois sur le territoire et au-del\u00e0',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.6.4',
            id_nomenclature: '6.4.2.6.4',
            nom: 'La collectivit\u00e9 porte des actions d\u2019augmentation de la demande, notamment des actions de communication (et de formation) vers les constructeurs de b\u00e2timent, les architectes et ma\u00eetres d\u2019\u0153uvre, les particuliers qui font construire',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.2.7',
        id_nomenclature: '6.4.2.7',
        nom: 'Prendre en charge, promouvoir et soutenir le d\u00e9veloppement d\u2019une fili\u00e8re bois-\u00e9nergie \u00e0 haute performance environnementale',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.2.7.1',
            id_nomenclature: '6.4.2.7.1',
            nom: 'La collectivit\u00e9 accompagne le d\u00e9veloppement d\u2019une offre et d\u2019une demande collective en bois-\u00e9nergie sur le territoire adapt\u00e9 aux ressources disponibles dans le territoire (r\u00e9flexion globale et compl\u00e9mentaire avec la fili\u00e8re bois-construction, utilisation de la ressource bocag\u00e8re\u2026) ; puis d\u00e9veloppe et s\u00e9curise la fili\u00e8re d\u2019approvisionnement bois-\u00e9nergie locale en s\u2019appuyant sur la compl\u00e9mentarit\u00e9 des fili\u00e8res et le principe d\u2019utilisation de bois en cascade.',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.7.2',
            id_nomenclature: '6.4.2.7.2',
            nom: 'La collectivit\u00e9 participe \u00e0 une fili\u00e8re bois \u00e9nergie sur un bassin plus vaste (selon la ressource en bois disponible sur son territoire)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.4.2.8',
        id_nomenclature: '6.4.2.8',
        nom: 'Suivre et atteindre ses objectifs en mati\u00e8re de for\u00eat et d\u2019espaces bois\u00e9s',
        description: '',
        thematique_id: 'foret_biodiv',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.4.2.8.1',
            id_nomenclature: '6.4.2.8.1',
            nom: '% de surfaces foresti\u00e8res certifi\u00e9es : objectif \u003e70% pour les for\u00eats communales et \u003e20% pour les for\u00eats priv\u00e9es',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.4.2.8.2',
            id_nomenclature: '6.4.2.8.2',
            nom: 'suivi de la s\u00e9questration carbone de la for\u00eat et d\u2019autres indicateurs (par exemple taux de r\u00e9colte commercialis\u00e9)',
            description: '',
            thematique_id: 'foret_biodiv',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.5.1',
    id_nomenclature: '6.5.1',
    nom: 'Mobiliser la soci\u00e9t\u00e9 civile en d\u00e9veloppant la concertation',
    description:
      '\u003cp\u003eLa collectivit\u00e9 mobilise les citoyens dans le processus de d\u00e9cision et organise, en collaboration avec le service public concern\u00e9, des groupes de travail et des dispositifs participatifs vari\u00e9s relatifs aux projets climat-air-\u00e9nergie. La concertation peut \u00eatre aussi bien men\u00e9e en phase de diagnostic que lors de la construction du programme d\u2019actions ou de sa mise \u0153uvre.\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.5.1.1',
        id_nomenclature: '6.5.1.1',
        nom: 'D\u00e9finir une organisation et identifier des axes de travail',
        description: '',
        thematique_id: 'parten_coop',
        points: 35,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.1.1.1',
            id_nomenclature: '6.5.1.1.1',
            nom: 'entretenir la culture de la collaboration sur le territoire',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.1.2',
            id_nomenclature: '6.5.1.1.2',
            nom: 'conna\u00eetre les diff\u00e9rents niveaux d\u2019implication des citoyens : l\u2019information, la consultation, la concertation, la co-production, la cod\u00e9cision, l\u2019auto-gestion',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.1.3',
            id_nomenclature: '6.5.1.1.3',
            nom: 'formaliser les \u00ab r\u00e8gles du jeu \u00bb de la concertation : les objectifs et le pouvoir d\u2019influence des instances sont d\u00e9finis clairement, les droits et les devoirs de chacun (collectivit\u00e9 / citoyens) sont annonc\u00e9s, par exemple dans une charte',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.1.4',
            id_nomenclature: '6.5.1.1.4',
            nom: 'la collectivit\u00e9 d\u00e9finit un/des groupes de travail sur des th\u00e8mes vari\u00e9s : climat, air, \u00e9nergie, d\u00e9chets, eau, assainissement, mobilit\u00e9\u2026',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.1.5',
            id_nomenclature: '6.5.1.1.5',
            nom: 'institutionnaliser la collaboration entre les habitants et la collectivit\u00e9 sur les th\u00e8mes relevant de l\u0027\u00e9nergie et du climat en d\u00e9finissant un organe participatif et/de concertation ou en se basant sur les groupes de travail d\u00e9j\u00e0 existants (qualifier les Conseils de quartier, Conseils de d\u00e9veloppement, \u2026)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.1.2',
        id_nomenclature: '6.5.1.2',
        nom: 'Conduire une concertation r\u00e9guli\u00e8re et p\u00e9renne',
        description: '',
        thematique_id: 'parten_coop',
        points: 45,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.1.2.1',
            id_nomenclature: '6.5.1.2.1',
            nom: 'la collectivit\u00e9 anime et mobilise r\u00e9guli\u00e8rement (au moins trois fois par an) les habitants lors d\u2019ateliers th\u00e9matiques ou autour de projets particuliers (plan v\u00e9lo, r\u00e9novation d\u2019une \u00e9cole, etc.).',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.2.2',
            id_nomenclature: '6.5.1.2.2',
            nom: 'la collectivit\u00e9 s\u2019organise pour faire participer des publics vari\u00e9s en mobilisant des canaux de communication et des formats de concertation vari\u00e9s et adapt\u00e9s au diff\u00e9rents publics (par exemple, ateliers avec les centres sociaux, avec les Maisons des Jeunes et de la Culture (MJC), mise en place de garderies pour favoriser la participation des jeunes actifs, ...)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.2.3',
            id_nomenclature: '6.5.1.2.3',
            nom: 'les processus de concertation des habitants sont adapt\u00e9s au travail collaboratif et \u00e0 l\u2019expression de la parole de chacun. Un travail est conduit pour favoriser l\u2019appropriation des probl\u00e9matiques air-\u00e9nergie-climat afin que chacun se sente en capacit\u00e9 de s\u2019exprimer (p\u00e9dagogie des intervenants, production de documents synth\u00e9tiques et p\u00e9dagogiques...). Les modes d\u2019animation mises en place favorisent l\u2019\u00e9coute des participants',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.2.4',
            id_nomenclature: '6.5.1.2.4',
            nom: 'des formats participatifs favorisant les initiatives sont mis en place avec un budget et des moyens d\u00e9di\u00e9s : budget participatifs, appels \u00e0 projets, etc.',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.2.5',
            id_nomenclature: '6.5.1.2.5',
            nom: 'les instances de concertation r\u00e9guli\u00e8res (conseil de quartier, conseil de d\u00e9veloppement, ...) ont \u00e9t\u00e9 mobilis\u00e9es pour participer \u00e0 la construction du PCAET et sont tenus inform\u00e9es au moins une fois par an de l\u2019avanc\u00e9e du plan d\u2019actions',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.2.6',
            id_nomenclature: '6.5.1.2.6',
            nom: 'la collectivit\u00e9 implique les citoyens sur des questions concr\u00e8tes qui les concernent directement (\u00e0 l\u2019\u00e9chelle du b\u00e2timent, du quartier par exemple), mais \u00e9galement sur des \u00e9l\u00e9ments plus strat\u00e9giques (contribution \u00e0 la \u00ab vision \u00bb globale du territoire dans une approche de transition \u00e9nerg\u00e9tique)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.2.7',
            id_nomenclature: '6.5.1.2.7',
            nom: 'les d\u00e9lais et les moyens allou\u00e9s aux m\u00e9canismes participatifs sont suffisants pour une implication de qualit\u00e9',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.2.8',
            id_nomenclature: '6.5.1.2.8',
            nom: 'si n\u00e9cessaire, la collectivit\u00e9 pr\u00e9voit une expertise externe afin d\u2019animer les s\u00e9ances, de produire des comptes rendus rapidement, de disposer de lieux conviviaux et adapt\u00e9s, de mat\u00e9riels informatiques et audiovisuels de qualit\u00e9.',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.1.3',
        id_nomenclature: '6.5.1.3',
        nom: 'Utiliser les contributions des instances de concertation',
        description:
          '\u003cp\u003eEvalu\u00e9 dans la 5.1.4 : Une instance de concertation d\u00e9di\u00e9e \u00e0 la politique air-\u00e9nergie-climat ou d\u00e9veloppement durable est charg\u00e9e du suivi-\u00e9valuation de la politique.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.1.3.1',
            id_nomenclature: '6.5.1.3.1',
            nom: 'Le travail des habitants est reconnu et rendu public (plaquette de synth\u00e8se, article de presse...)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.3.2',
            id_nomenclature: '6.5.1.3.2',
            nom: 'Un retour est syst\u00e9matiquement fait aux instances participatives pour rendre compte des arbitrages faits au regard des contributions et pr\u00e9senter l\u2019avanc\u00e9e des projets.',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.3.3',
            id_nomenclature: '6.5.1.3.3',
            nom: 'Les dispositifs de concertation sont \u00e9valu\u00e9s de fa\u00e7on r\u00e9guli\u00e8re.',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.1.3.4',
            id_nomenclature: '6.5.1.3.4',
            nom: 'Au moins une d\u00e9cision par an est vot\u00e9e par l\u0027organe d\u00e9lib\u00e9rant de la collectivit\u00e9 issue du travail des groupes de travail',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.5.2',
    id_nomenclature: '6.5.2',
    nom: 'Inciter les citoyens et les relais d\u0027opinions \u00e0 une consommation responsable, limiter l\u0027emprise de la publicit\u00e9',
    description:
      '\u003cp\u003eLa collectivit\u00e9 incite les citoyens aux comportements et \u00e0 la consommation \u00e9co-responsables et soutient, sensibilise les relais d\u0027opinion (partis politiques, associations, ONG) pour qu\u0027ils deviennent des mod\u00e8les d\u0027exemplarit\u00e9 et exercent une influence sur les habitants pour qu\u0027ils agissent en conformit\u00e9 avec la politique climat-air-\u00e9nergie de la collectivit\u00e9. Des actions sont en particulier men\u00e9es pour limiter l\u2019emprise de la publicit\u00e9.\u003c/p\u003e\n',
    thematique_id: 'conso_resp',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.5.2.1',
        id_nomenclature: '6.5.2.1',
        nom: 'S\u0027organiser en interne et localement pour sensibiliser les habitants',
        description: '',
        thematique_id: 'conso_resp',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.2.1.1',
            id_nomenclature: '6.5.2.1.1',
            nom: 'une personne au sein de la collectivit\u00e9 est sp\u00e9cifiquement charg\u00e9e des actions de sensibilisation aupr\u00e8s des habitants et est form\u00e9e aux questions de changement de comportement',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.1.2',
            id_nomenclature: '6.5.2.1.2',
            nom: 'un budget est d\u00e9fini pour les actions de promotion des comportements \u00e9co-responsables des citoyens (dont les achats, l\u0027usage et la fin de vie de produits plus respectueux de l\u0027environnement comme ceux porteurs de l\u0027Ecolabel Europ\u00e9en)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.1.3',
            id_nomenclature: '6.5.2.1.3',
            nom: 'un lieu est d\u00e9di\u00e9 \u00e0 la sensibilisation climat-air-\u00e9nergie (il est visible et accessible) (plus large que le volet "r\u00e9novation" \u00e9tudi\u00e9 dans la mesure 6.2.3 et 6.2.4)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.2.2',
        id_nomenclature: '6.5.2.2',
        nom: 'Informer et mobiliser les relais d\u2019opinions (partis politiques, associations, ONG)',
        description: '',
        thematique_id: 'conso_resp',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.2.2.1',
            id_nomenclature: '6.5.2.2.1',
            nom: 'les relais d\u0027opinion connaissent les objectifs et les axes de la politique climat-air-\u00e9nergie de la collectivit\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.2.2',
            id_nomenclature: '6.5.2.2.2',
            nom: 'les relais d\u0027opinions sont convi\u00e9s aux groupes de travail ; ils sont identifi\u00e9s comme soutiens voire porteurs potentiels de certaines actions de la collectivit\u00e9.',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.2.3',
            id_nomenclature: '6.5.2.2.3',
            nom: 'le nombre d\u0027associations environnementales est important, elles font des propositions constructives, r\u00e9guli\u00e8res et sont soutenues par la collectivit\u00e9 (convention de partenariat, mise en place de forum des associations, etc.). En fonction du tissu associatif local, les relais d\u2019opinions sont vari\u00e9s d\u2019un territoire \u00e0 l\u2019autre.',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.2.3',
        id_nomenclature: '6.5.2.3',
        nom: 'Sensibiliser les habitants sur l\u2019\u00e9co-consommation et les \u00e9co-gestes',
        description:
          '\u003cp\u003epromotion et information sur les produits plus respectueux de l\u0027environnement (expositions, film, brochures, sites web...)\u003c/p\u003e\n\u003cp\u003edes appels \u00e0 projets ou des concours visant \u00e0 diminuer les consommations d\u0027\u00e9nergie dans les m\u00e9nages sont organis\u00e9s (de type \u0026quot;Famille \u00e0 Energie Positive\u0026quot;), et notamment pour les copropri\u00e9t\u00e9s\u003c/p\u003e\n\u003cp\u003ela collectivit\u00e9 fait la promotion d\u0027outils de calculs d\u0027empreinte \u00e9cologique, d\u0027empreinte carbone ou d\u0027identification de sources de pollution aupr\u00e8s des habitants et essaie de conna\u00eetre le niveau d\u0027utilisation de ces outils (par le biais du site de la collectivit\u00e9 par exemple)\u003c/p\u003e\n\u003cp\u003ela collectivit\u00e9 fait la promotion d\u2019outils d\u2019\u00e9valuation et de ma\u00eetrise du budget familial et fait la promotion des b\u00e9n\u00e9fices \u00e0 passer \u00e0 une consommation responsable (AMAP, achats d\u2019occasion, repair caf\u00e9, etc.) (\u00e9conomiques et autres (sant\u00e9, environnement, social, d\u00e9veloppement \u00e9conomique local)\u003c/p\u003e\n\u003cp\u003esuivi de \u0026quot;foyers-t\u00e9moins\u0026quot; pour conna\u00eetre les habitudes d\u0027achats/de gestion des d\u00e9chets/de consommations d\u0027\u00e9nergie et d\u0027eau...\u003c/p\u003e\n\u003cp\u003ed\u00e9veloppement d\u0027op\u00e9rations pilotes sur l\u0027\u00e9co-consommation (ex : partenariat avec des enseignes du territoire sur l\u0027affichage environnemental de certains produits, etc.)\u003c/p\u003e\n\u003cp\u003eD\u2019autres actions de sensibilisation/animation sur le sujet des d\u00e9chets ou de l\u2019alimentation sont trait\u00e9es plus en d\u00e9tail dans les mesures d\u00e9di\u00e9es 1.2.3 et 6.4.1.\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 30,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.2.4',
        id_nomenclature: '6.5.2.4',
        nom: 'Montrer l\u2019exemple lors des \u00e9v\u00e8nements',
        description: '',
        thematique_id: 'conso_resp',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.2.4.1',
            id_nomenclature: '6.5.2.4.1',
            nom: '\u00e0 l\u0027occasion de manifestations ou \u00e0 l\u0027occasion de r\u00e9compenses \u00e0 des jeux ou objets "promotionnels", des objets incitant aux comportements \u00e9co-responsables sont privil\u00e9gi\u00e9s (r\u00e9ducteurs de pression, lampes basses consommations, gilet fluo pour faire du v\u00e9lo, produits (biens ou services) porteurs de l\u0027Ecolabel Europ\u00e9en...)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.4.2',
            id_nomenclature: '6.5.2.4.2',
            nom: 'des \u201cponts\u201d entre les diff\u00e9rents postes de consommation sont mis en place : lors des manifestations pour une alimentation biologique et locale la collectivit\u00e9 promeut (ou invite les organisateurs \u00e0 promouvoir) aussi les initiatives sur les \u00e9conomies d\u2019\u00e9nergie, etc. afin de favoriser une approche globale de la consommation responsable',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.4.3',
            id_nomenclature: '6.5.2.4.3',
            nom: 'la tenue des \u00e9v\u00e8nements des relais d\u0027opinions est r\u00e9alis\u00e9e de mani\u00e8re \u00e9co-responsable (\u00e9laboration d\u0027un guide par la collectivit\u00e9, autorisation ou caution li\u00e9es aux \u00e9co-gestes, relev\u00e9 des consommations d\u0027\u00e9nergie et d\u0027eau avant et apr\u00e8s l\u0027utilisation des locaux par les associations...)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.2.5',
        id_nomenclature: '6.5.2.5',
        nom: 'Limiter l\u2019emprise de la publicit\u00e9',
        description: '',
        thematique_id: 'conso_resp',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.2.5.1',
            id_nomenclature: '6.5.2.5.1',
            nom: 'Sensibiliser les habitants \u00e0 travers des actions rapides et efficaces (par exemple distribution g\u00e9n\u00e9ralis\u00e9e d\u2019autocollants \u00ab Stop Pub \u00bb avec le bulletin municipal)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.5.2',
            id_nomenclature: '6.5.2.5.2',
            nom: 'Faire respecter les obligations concernant les enseignes lumineuses et l\u0027affichage par exemple en s\u2019appuyant sur les associations locales pour vous accompagner dans le travail de recensement et de sensibilisation',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.5.3',
            id_nomenclature: '6.5.2.5.3',
            nom: 'Mettre en place une taxe locale sur les enseignes et publicit\u00e9s ext\u00e9rieures (TPLE)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.5.4',
            id_nomenclature: '6.5.2.5.4',
            nom: 'Devenir une ville sans publicit\u00e9 en instaurant une Zone de Publicit\u00e9 Restreinte',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.5.5',
            id_nomenclature: '6.5.2.5.5',
            nom: 'Mettre en place un r\u00e8glement local de publicit\u00e9 (RLP)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.2.6',
        id_nomenclature: '6.5.2.6',
        nom: 'Soutenir l\u2019\u00e9co-consommation locale, notamment via un syst\u00e8me d\u0027\u00e9change local ou une monnaie locale',
        description:
          '\u003cp\u003eLes circuits de proximit\u00e9 alimentaires sont trait\u00e9s plus en d\u00e9tail dans la mesure 6.4.1\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.2.6.1',
            id_nomenclature: '6.5.2.6.1',
            nom: 'initier la cr\u00e9ation d\u2019une monnaie locale ou soutenir les associations \u00e0 l\u2019initiative de ces projets (Charte d\u2019engagement environnemental adoss\u00e9 \u00e0 la monnaie locale par exemple)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.6.2',
            id_nomenclature: '6.5.2.6.2',
            nom: 'informer les habitants de l\u2019int\u00e9r\u00eat d\u2019une monnaie locale',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.2.6.3',
            id_nomenclature: '6.5.2.6.3',
            nom: 'd\u00e9velopper des circuits de proximit\u00e9 et favoriser les initiatives de consommation alternative (mise \u00e0 disposition de lieux par exemple)',
            description: '',
            thematique_id: 'conso_resp',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.5.3',
    id_nomenclature: '6.5.3',
    nom: 'D\u00e9velopper des actions d\u0027\u00e9ducation et de sensibilisation dans les \u00e9tablissements scolaires et centres de petite enfance',
    description:
      '\u003cp\u003eLa collectivit\u00e9 d\u00e9veloppe des actions d\u2019\u00e9ducation et de sensibilisation \u00e0 la probl\u00e9matique climat-air-\u00e9nergie dans les \u00e9tablissements scolaires, cr\u00e8ches et garderies. Ces actions sont vari\u00e9es (forme et contenu), et impliquent les \u00e9l\u00e8ves, le corps enseignant et le personnel. Autant que possible, elles s\u2019int\u00e8grent dans un projet p\u00e9dagogique global et sont planifi\u00e9es sur l\u2019ann\u00e9e voire sur l\u2019ensemble du cycle. Certaines actions visent directement la r\u00e9duction des consommations d\u2019\u00e9nergie, d\u2019eau et les \u00e9missions de polluants li\u00e9es \u00e0 l\u2019utilisation des locaux et aux d\u00e9placements scolaires.\u003c/p\u003e\n',
    thematique_id: 'forma_sensib',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.5.3.1',
        id_nomenclature: '6.5.3.1',
        nom: 'Rencontrer les acteurs locaux de l\u2019\u00e9ducation et la petite enfance et s\u2019organiser pour mener des actions communes',
        description: '',
        thematique_id: 'forma_sensib',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.3.1.1',
            id_nomenclature: '6.5.3.1.1',
            nom: 'd\u00e9finir le budget et les ressources humaines pr\u00e9vus pour les actions de sensibilisation climat-air-\u00e9nergie dans les \u00e9coles et structures d\u2019accueil de jeunes enfants',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.1.2',
            id_nomenclature: '6.5.3.1.2',
            nom: 'pr\u00e9senter les enjeux et la politique climat-air-\u00e9nergie de la collectivit\u00e9 aux enseignants et professionnels de la petite enfance',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.1.3',
            id_nomenclature: '6.5.3.1.3',
            nom: 'identifier les bonnes pratiques, ressources et projets d\u00e9j\u00e0 mis en place dans les structures et les besoins d\u2019accompagnement',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.1.4',
            id_nomenclature: '6.5.3.1.4',
            nom: 'faire travailler les acteurs de l\u2019\u00e9ducation et de la petite enfance en r\u00e9seau sur ces sujets (groupe de travail, formation collective\u2026)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.3.2',
        id_nomenclature: '6.5.3.2',
        nom: 'Sensibiliser les enfants aux enjeux climat-air-\u00e9nergie et \u00e0 l\u2019\u00e9co-citoyennet\u00e9',
        description: '',
        thematique_id: 'forma_sensib',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.3.2.1',
            id_nomenclature: '6.5.3.2.1',
            nom: 'journ\u00e9e ou semaine-\u00e9v\u00e8nement sur le climat, l\u2019air ou l\u2019\u00e9nergie',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.2.2',
            id_nomenclature: '6.5.3.2.2',
            nom: 'd\u00e9fi inter-\u00e9coles ou inter-classes sur le th\u00e8me de l\u2019\u00e9nergie, la mobilit\u00e9, le tri des d\u00e9chets\u2026',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.2.3',
            id_nomenclature: '6.5.3.2.3',
            nom: 'visite d\u2019une v\u00e9lo-station, d\u2019un centre de tri des d\u00e9chets, d\u2019un jardin partag\u00e9\u2026',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.2.4',
            id_nomenclature: '6.5.3.2.4',
            nom: 'implication des \u00e9l\u00e8ves et des enseignants dans le diagnostic, le suivi et les mesures prises pour am\u00e9liorer la qualit\u00e9 de l\u0027air int\u00e9rieur',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.2.5',
            id_nomenclature: '6.5.3.2.5',
            nom: 'implication des \u00e9l\u00e8ves dans les projets climat-air-\u00e9nergie de la collectivit\u00e9 (trouver le nom ou dessiner le logo d\u2019un projet ENR citoyen ou des panneaux de sensibilisation\u2026)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.2.6',
            id_nomenclature: '6.5.3.2.6',
            nom: 'r\u00e9alisation d\u2019une vid\u00e9o participative, r\u00e9alisation d\u2019une exposition en lien avec l\u2019\u00e9nergie, l\u2019air ou le climat',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.2.7',
            id_nomenclature: '6.5.3.2.7',
            nom: 'appels \u00e0 projets en direction des \u00e9tablissements pour inciter \u00e0 la mise en place d\u2019actions p\u00e9dagogiques climat-air-\u00e9nergie',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.2.8',
            id_nomenclature: '6.5.3.2.8',
            nom: 'labellisation \u00ab \u00e9co-\u00e9cole \u00bb',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.3.3',
        id_nomenclature: '6.5.3.3',
        nom: 'Mettre en place des lignes de bus p\u00e9destre ou cycliste dans le cadre d\u2019un Plan de d\u00e9placement \u00e9tablissement scolaire (PDES)',
        description: '',
        thematique_id: 'forma_sensib',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.3.3.1',
            id_nomenclature: '6.5.3.3.1',
            nom: 'identification et localisation des parents et \u00e9l\u00e8ves volontaires',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.3.2',
            id_nomenclature: '6.5.3.3.2',
            nom: 'organisation d\u2019une journ\u00e9e test (choix d\u2019une date festive pour faire participer le maximum d\u2019\u00e9l\u00e8ves)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.3.3',
            id_nomenclature: '6.5.3.3.3',
            nom: 'mat\u00e9rialisation des arr\u00eats et itin\u00e9raires des p\u00e9dibus/v\u00e9lobus',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.3.4',
            id_nomenclature: '6.5.3.3.4',
            nom: 'offre d\u2019\u00e9quipements \u00e0 toutes les \u00e9coles participantes (mobilier urbain, gilets r\u00e9fl\u00e9chissants, etc.)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.3.5',
            id_nomenclature: '6.5.3.3.5',
            nom: 'analyse et valorisation des retours d\u2019exp\u00e9riences',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.3.4',
        id_nomenclature: '6.5.3.4',
        nom: 'P\u00e9renniser et massifier la sensibilisation',
        description: '',
        thematique_id: 'forma_sensib',
        points: 10,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.3.4.1',
            id_nomenclature: '6.5.3.4.1',
            nom: 'large public vis\u00e9 (toutes les classes d\u0027\u00e2ges, corps enseignant, personnel, parents d\u2019\u00e9l\u00e8ves)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.4.2',
            id_nomenclature: '6.5.3.4.2',
            nom: 'r\u00e9alisation r\u00e9guli\u00e8re dans diff\u00e9rentes classes',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.4.3',
            id_nomenclature: '6.5.3.4.3',
            nom: 'int\u00e9gration dans un projet p\u00e9dagogique global',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.4.4',
            id_nomenclature: '6.5.3.4.4',
            nom: 'partenariat institutionnalis\u00e9 et planifi\u00e9 sur le long terme',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.4.5',
            id_nomenclature: '6.5.3.4.5',
            nom: 'int\u00e9ressement aux r\u00e9sultats',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.4.6',
            id_nomenclature: '6.5.3.4.6',
            nom: 'valorisation des actions men\u00e9es en les publiant sur des sites Internet d\u00e9di\u00e9s aux jeunes et \u00e0 l\u2019\u00e9ducation au d\u00e9veloppement durable (ex : site de l\u2019ADEME \u00ab M ta Terre \u00bb)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.3.5',
        id_nomenclature: '6.5.3.5',
        nom: 'Suivre les r\u00e9sultats et atteindre les objectifs fix\u00e9s',
        description: '',
        thematique_id: 'forma_sensib',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.3.5.1',
            id_nomenclature: '6.5.3.5.1',
            nom: '% \u00e9lev\u00e9 (\u003e 50%) d\u2019\u00e9l\u00e8ves concern\u00e9s par une d\u00e9marche de sensibilisation/action',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.5.2',
            id_nomenclature: '6.5.3.5.2',
            nom: 'part d\u2019\u00e9tablissements scolaires couverts par un PDES ou un p\u00e9dibus/v\u00e9lobus en augmentation',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.5.3',
            id_nomenclature: '6.5.3.5.3',
            nom: 'contr\u00f4le de l\u2019efficacit\u00e9 des actions mises en place, par exemple : baisse constat\u00e9e des consommations d\u2019\u00e9conomies d\u0027\u00e9nergie ou d\u2019eau r\u00e9alis\u00e9es, baisse de la quantit\u00e9 de d\u00e9chets r\u00e9siduels\u2026',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.3.5.4',
            id_nomenclature: '6.5.3.5.4',
            nom: 'reconnaissance via un dispositif de labellisation ou des retomb\u00e9es presse (\u00e9co-\u00e9cole, \u00e9colo cr\u00e8che, article de presse\u2026)',
            description: '',
            thematique_id: 'forma_sensib',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'citergie__6.5.5',
    id_nomenclature: '6.5.5',
    nom: 'Soutenir financi\u00e8rement les initiatives climat-air-\u00e9nergie exemplaires des m\u00e9nages et des acteurs \u00e9conomiques du territoire',
    description:
      '\u003cp\u003eLa collectivit\u00e9 soutient financi\u00e8rement les initiatives climat-air-\u00e9nergie exemplaires des m\u00e9nages et des acteurs \u00e9conomiques du territoire.\u003c/p\u003e\n\u003cp\u003ePar exemple :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003esoutien \u00e0 des consultations techniques sp\u00e9cialis\u00e9es (ch\u00e8ques/bons de conseils)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003esoutien aux mesures d\u0027efficacit\u00e9 \u00e9nerg\u00e9tique et aux \u00e9nergies renouvelables\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003esoutien aux actions de r\u00e9duction des polluants atmosph\u00e9riques\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003esoutien \u00e0 la mobilit\u00e9 durable\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003emesures d\u0027\u00e9conomie d\u0027eau (\u00e9conomiseurs d\u0027eau, utilisation des eaux grises)\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003esoutien financier \u00e0 l\u0027agriculture biologique\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'parten_coop',
    points: -1.0,
    actions: [
      new ActionReferentiel({
        id: 'citergie__6.5.5.1',
        id_nomenclature: '6.5.5.1',
        nom: 'Formaliser son engagement',
        description: '',
        thematique_id: 'parten_coop',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.5.1.1',
            id_nomenclature: '6.5.5.1.1',
            nom: 'budget des subventions int\u00e9gr\u00e9 dans le plan financier \u00e0 long terme',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.1.2',
            id_nomenclature: '6.5.5.1.2',
            nom: 'r\u00e8glement des aides disponibles',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.5.2',
        id_nomenclature: '6.5.5.2',
        nom: 'Etre coh\u00e9rent dans sa politique de subventionnement',
        description: '',
        thematique_id: 'parten_coop',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.5.2.1',
            id_nomenclature: '6.5.5.2.1',
            nom: 'ne pas octroyer d\u2019aides pour des projets en contradiction avec les enjeux climatiques et \u00e9nerg\u00e9tiques (ex : courses automobile\u2026)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.2.2',
            id_nomenclature: '6.5.5.2.2',
            nom: 'lorsque cela est possible, l\u0027\u00e9co-conditionnement des aides habituelles de la collectivit\u00e9 est pratiqu\u00e9 (bonification, diff\u00e9renciation des montants d\u2019aides selon des crit\u00e8res \u00e9cologiques pour des projets sans rapport initialement avec le climat, l\u2019air ou l\u2019\u00e9nergie)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.2.3',
            id_nomenclature: '6.5.5.2.3',
            nom: 'l\u2019enveloppe li\u00e9e aux aides financi\u00e8res climat-air-\u00e9nergie est maintenue ou en augmentation',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.5.3',
        id_nomenclature: '6.5.5.3',
        nom: 'Soutenir financi\u00e8rement des initiatives climat-air-\u00e9nergie exemplaires',
        description: '',
        thematique_id: 'parten_coop',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.5.3.1',
            id_nomenclature: '6.5.5.3.1',
            nom: 'des th\u00e9matiques environnementales vari\u00e9es : b\u00e2timents, \u00e9nergie, air, eau, agriculture, ENR, mobilit\u00e9...',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.3.2',
            id_nomenclature: '6.5.5.3.2',
            nom: 'des publics vari\u00e9s et \u00e0 enjeux : jeunes, personnes \u00e2g\u00e9es, classes moyennes ne b\u00e9n\u00e9ficiant pas d\u0027autres aides, co-propri\u00e9taires, locataires, TPME, PME, agriculteurs, industriels, propri\u00e9taires forestiers priv\u00e9s...',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.3.3',
            id_nomenclature: '6.5.5.3.3',
            nom: 'des structures locales op\u00e9rationnelles de d\u00e9veloppement de projets d\u2019efficacit\u00e9 \u00e9nerg\u00e9tique et d\u2019\u00e9nergies renouvelables (SEM, SPL, SAS, SCOP, SCIC\u2026)',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.3.4',
            id_nomenclature: '6.5.5.3.4',
            nom: 'des programmes globaux, coh\u00e9rents et partenariaux, de type ANRU, OPAH, PIG, CLE ou \u00e9quivalents sont mis en \u0153uvre pour une massification des actions de r\u00e9novation de l\u0027habitat',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.3.5',
            id_nomenclature: '6.5.5.3.5',
            nom: 'l\u2019uniformisation/simplification du montage des dossiers de demande d\u2019aides est recherch\u00e9 par exemple gr\u00e2ce \u00e0 une plateforme de la r\u00e9novation \u00e9nerg\u00e9tique',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.3.6',
            id_nomenclature: '6.5.5.3.6',
            nom: 'Assurer la promotion des dispositifs existants et encourager les projets citoyens sur le territoire, pouvant par exemple mobiliser l\u2019\u00e9pargne citoyenne',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.5.4',
        id_nomenclature: '6.5.5.4',
        nom: 'Etre innovant dans les modalit\u00e9s du soutien financier',
        description:
          '\u003cp\u003eLa collectivit\u00e9 fait preuve d\u0027innovation pour soutenir financi\u00e8rement les initiatives priv\u00e9es : partenariat avec des banques, tiers-investissement, fonds de garantie, fonds d\u0027investissement, prise de participation dans des SCIC/SEM \u0153uvrant pour le DD ou des SAS/SA portant des projets de production d\u2019\u00e9nergie renouvelable sur leur territoire, CEE, appels \u00e0 projets...\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 15,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'citergie__6.5.5.5',
        id_nomenclature: '6.5.5.5',
        nom: 'Mettre en place un dispositif de suivi des projets subventionn\u00e9s (r\u00e9novation, ENR, etc.) pour analyser l\u0027efficacit\u00e9 des moyens investis',
        description: '',
        thematique_id: 'parten_coop',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'citergie__6.5.5.5.1',
            id_nomenclature: '6.5.5.5.1',
            nom: 'MWh \u00e9conomis\u00e9 ou produit /euro investi',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.5.2',
            id_nomenclature: '6.5.5.5.2',
            nom: 'Co\u00fbt moyen d\u0027accompagnement/r\u00e9novation,',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'citergie__6.5.5.5.3',
            id_nomenclature: '6.5.5.5.3',
            nom: 'Co\u00fbt d\u0027accompagnement/co\u00fbt de travaux g\u00e9n\u00e9r\u00e9s',
            description: '',
            thematique_id: 'parten_coop',
            points: -1.0,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__1.1',
    id_nomenclature: '1.1',
    nom: 'D\u00e9finir une strat\u00e9gie globale de la politique Economie Circulaire et assurer un portage politique fort',
    description:
      '\u003cp\u003eUne strat\u00e9gie territoriale de la politique Economie Circulaire et l\u0027inscription dans le territoire n\u00e9cessite un portage politique et un pilotage technique d\u00e9di\u00e9s, ainsi qu\u0027un diagnostic et une strat\u00e9gie d\u0027\u00e9conomie circulaire avec des objectifs et des cibles clairement exprim\u00e9s, coh\u00e9rents avec les documents r\u00e9gionaux et nationaux.\u003c/p\u003e\n',
    thematique_id: 'strategie',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__1.1.1',
        id_nomenclature: '1.1.1',
        nom: 'S\u0027engager politiquement et mettre en place des moyens',
        description:
          '\u003cp\u003eLa collectivit\u00e9 justifie d\u0027un portage politique de l\u0027\u00e9conomie circulaire : un \u00e9lu s\u2019engage \u00e0 travers l\u2019\u00e9tablissement d\u2019une politique Economie Circulaire.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 s\u0027est dot\u00e9e d\u0027une \u00e9quipe technique en charge de d\u00e9ployer la politique Economie Circulaire en interne et en externe.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.1.1.1',
            id_nomenclature: '1.1.1.1',
            nom: 'Identifier un \u00e9lu r\u00e9f\u00e9rent en charge de la politique Economie Circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.1.2',
            id_nomenclature: '1.1.1.2',
            nom: 'Engager la politique Economie Circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.1.3',
            id_nomenclature: '1.1.1.3',
            nom: 'Identifier l\u0027\u00e9quipe technique',
            description: '',
            thematique_id: 'strategie',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.1.4',
            id_nomenclature: '1.1.1.4',
            nom: 'Allouer un budget \u00e0 la politique \u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 10,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__1.1.2',
        id_nomenclature: '1.1.2',
        nom: 'R\u00e9aliser le diagnostic de l\u0027\u00e9conomie circulaire',
        description:
          '\u003cp\u003eLa collectivit\u00e9 r\u00e9alise son diagnostic de l\u0027\u00e9conomie circulaire sur le territoire \u00e0 partir des analyses suivantes :\u003c/p\u003e\n\u003cp\u003e\u2022 une identification des orientations et des objectifs d\u0027\u00e9conomie circulaire r\u00e9gionaux et locaux s\u0027inscrivant dans les documents de planification (SRDEII, PRPGD, PRAEC, SRADDET, S3, PLU, SCOT, PCAET, PAT, SRDT, etc.).\u003c/p\u003e\n\u003cp\u003e\u2022 une analyse du tissu territorial afin d\u0027identifier des enjeux \u00e9conomiques, environnementaux et sociaux prioritaires en mati\u00e8re d\u0027\u00e9conomie circulaire. Ces analyses peuvent provenir des travaux pr\u00e9c\u00e9dents ou de nouvelles \u00e9tudes.\u003c/p\u003e\n\u003cp\u003e\u2022 un recensement des principaux acteurs mobilisables (acteurs institutionnels, acteurs \u00e9conomiques du territoire, acteurs associatifs et citoyens) associ\u00e9s \u00e0 une premi\u00e8re prise de contact et un recensement des initiatives d\u0027\u00e9conomie circulaire du territoire.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.1.2.1',
            id_nomenclature: '1.1.2.1',
            nom: 'Identifier les enjeux et objectifs en lien avec l\u0027\u00e9conomie circulaire  dans les documents de planification existants',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.2.2',
            id_nomenclature: '1.1.2.2',
            nom: 'Int\u00e9grer dans le diagnostic une analyse des secteurs \u00e9conomiques',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.2.3',
            id_nomenclature: '1.1.2.3',
            nom: 'Int\u00e9grer dans le diagnostic une analyse des enjeux environnementaux',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.2.4',
            id_nomenclature: '1.1.2.4',
            nom: 'Int\u00e9grer dans le diagnostic une analyse des enjeux sociaux',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.2.5',
            id_nomenclature: '1.1.2.5',
            nom: 'R\u00e9aliser un recensement des acteurs et des initiatives',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__1.1.3',
        id_nomenclature: '1.1.3',
        nom: '\u00c9largir la gouvernance en interne et en externe',
        description:
          '\u003cp\u003eLa collectivit\u00e9 met en place une gouvernance \u00e9largie permettant de construire une strat\u00e9gie et des actions Economie Circulaire  en ad\u00e9quation avec la r\u00e9alit\u00e9 du  territoire. Co-construite avec les acteurs du territoire, la strat\u00e9gie Economie Circulaire sera ainsi  soutenue par les acteurs du territoire lors de  sa mise en \u0153uvre.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.1.3.1',
            id_nomenclature: '1.1.3.1',
            nom: 'Mettre en place un comit\u00e9 de pilotage interne \u00e9largi',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.3.2',
            id_nomenclature: '1.1.3.2',
            nom: 'Mettre en place une gouvernance \u00e9largie avec les repr\u00e9sentants des acteurs du territoire (soci\u00e9t\u00e9 civile, acteurs publiques, acteurs \u00e9conomiques)',
            description: '',
            thematique_id: 'strategie',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.3.3',
            id_nomenclature: '1.1.3.3',
            nom: 'Mettre en place des groupes de travail pour la construction des actions \u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__1.1.4',
        id_nomenclature: '1.1.4',
        nom: 'Adopter une strat\u00e9gie et un programme d\u0027actions \u00c9conomie Circulaire',
        description:
          '\u003cp\u003eSur la base des r\u00e9sultats du diagnostic, la collectivit\u00e9 adopte le document cadre de la strat\u00e9gie Economie Circulaire.\u003c/p\u003e\n\u003cp\u003eElle cr\u00e9e un programme d\u0027actions.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.1',
            id_nomenclature: '1.1.4.1',
            nom: 'Int\u00e8grer dans la strat\u00e9gie les enjeux \u00e9conomiques, environnementaux et sociaux',
            description: '',
            thematique_id: 'strategie',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.2',
            id_nomenclature: '1.1.4.2',
            nom: 'Fixer dans la strat\u00e9gie des caps \u00e0 court, moyen et long terme',
            description: '',
            thematique_id: 'strategie',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.3',
            id_nomenclature: '1.1.4.3',
            nom: 'Cibler dans la strat\u00e9gie la soci\u00e9t\u00e9 civile, les acteurs publics et les acteurs \u00e9conomiques',
            description: '',
            thematique_id: 'strategie',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.4',
            id_nomenclature: '1.1.4.4',
            nom: 'Couvrir dans la strat\u00e9gie tous les axes de l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.5',
            id_nomenclature: '1.1.4.5',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions vers la soci\u00e9t\u00e9 civile',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.6',
            id_nomenclature: '1.1.4.6',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions vers les acteurs publics',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.7',
            id_nomenclature: '1.1.4.7',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions vers les acteurs \u00e9conomiques',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.8',
            id_nomenclature: '1.1.4.8',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions sur le pilier approvisionnement durable de l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.9',
            id_nomenclature: '1.1.4.9',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions sur le pilier \u00e9co-conception de l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.10',
            id_nomenclature: '1.1.4.10',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions sur le pilier \u00e9cologie industrielle et territoriale de l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.11',
            id_nomenclature: '1.1.4.11',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions sur le pilier \u00e9conomie de la fonctionnalit\u00e9 de l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.12',
            id_nomenclature: '1.1.4.12',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions sur le pilier consommation responsable de l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.13',
            id_nomenclature: '1.1.4.13',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions sur le pilier allongement de la dur\u00e9e d\u0027usage de l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.4.14',
            id_nomenclature: '1.1.4.14',
            nom: 'Int\u00e9grer dans le programme d\u0027actions des actions sur le pilier recyclage de l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'strategie',
            points: 4,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__1.1.5',
        id_nomenclature: '1.1.5',
        nom: 'Mettre en \u0153uvre et valoriser les actions',
        description:
          '\u003cp\u003eLa collectivit\u00e9 met en \u0153uvre sur ses comp\u00e9tences et de mani\u00e8re op\u00e9rationnelle des actions co-construites avec les acteurs du territoire.\u003c/p\u003e\n\u003cp\u003eElle capitalise les retours relatifs aux  actions effectu\u00e9es.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.1.5.1',
            id_nomenclature: '1.1.5.1',
            nom: 'Valoriser des actions ant\u00e9rieures \u00e0 la strat\u00e9gie',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.5.2',
            id_nomenclature: '1.1.5.2',
            nom: 'Valoriser plus de 20% des actions issues du programme d\u0027actions',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.5.3',
            id_nomenclature: '1.1.5.3',
            nom: 'Valoriser plus de 50% des actions issues du programme d\u0027actions',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.1.5.4',
            id_nomenclature: '1.1.5.4',
            nom: 'Couvrir les diff\u00e9rents pilliers de l\u0027\u00e9conomie circulaire avec le programme d\u0027actions r\u00e9alis\u00e9',
            description: '',
            thematique_id: 'strategie',
            points: 40,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__1.2',
    id_nomenclature: '1.2',
    nom: 'D\u00e9velopper une d\u00e9marche transversale avec l\u0027ensemble des politiques de la collectivit\u00e9',
    description:
      '\u003cp\u003eUne d\u00e9marche transversale au sein de la collectivit\u00e9 implique une participation de tous les services dans l\u0027objectif commun de d\u00e9velopper l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n\u003cp\u003eLes \u00e9quipes pilotes de la d\u00e9marche \u00e9conomie circulaire doivent participer \u00e0 la construction et \u00e0 l\u0027am\u00e9lioration de l\u0027ensemble des politiques.\u003c/p\u003e\n\u003cp\u003eCette d\u00e9marche transversale est aussi men\u00e9e dans une logique d\u0027\u00e9co-exemplarit\u00e9.\u003c/p\u003e\n',
    thematique_id: 'orga_interne',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__1.2.1',
        id_nomenclature: '1.2.1',
        nom: 'Former en interne',
        description:
          '\u003cp\u003eLa collectivit\u00e9 r\u00e9pertorie les comp\u00e9tences n\u00e9cessaires pour la mise en \u0153uvre de la strat\u00e9gie, du programme d\u0027actions, ainsi que pour leur suivi.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 met en place des formations internes (aupr\u00e8s des \u00e9lus, des charg\u00e9s de mission, des agents techniques, etc.), sur l\u0027\u00e9conomie circulaire dans sa globalit\u00e9 ou sur les th\u00e9matiques qu\u0027elle comprend.\u003c/p\u003e\n\u003cp\u003eEn collaboration avec les Ressources Humaines, le plan de formation annuel int\u00e8gre des formations sur l\u2019\u00e9conomie circulaire pertinentes pour chaque m\u00e9tier.\u003c/p\u003e\n',
        thematique_id: 'orga_interne',
        points: 33,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.2.1.1',
            id_nomenclature: '1.2.1.1',
            nom: 'D\u00e9finir un programme de formation \u00e9conomie circulaire',
            description: '',
            thematique_id: 'orga_interne',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.2.1.2',
            id_nomenclature: '1.2.1.2',
            nom: 'Inclure dans le programme de formation des formations \u00e9conomie circulaire pour les \u00e9lus et les techniciens',
            description: '',
            thematique_id: 'orga_interne',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.2.1.3',
            id_nomenclature: '1.2.1.3',
            nom: 'Disposer de plus de 20% des unit\u00e9s de gestion qui ont au moins 1 salari\u00e9 form\u00e9 \u00e0 l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'orga_interne',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.2.1.4',
            id_nomenclature: '1.2.1.4',
            nom: 'Former le DGA/DGS \u00e0 l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'orga_interne',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.2.1.5',
            id_nomenclature: '1.2.1.5',
            nom: 'Former plus de 20% des \u00e9lus \u00e0 l\u0027\u00e9conomie circulaire',
            description: '',
            thematique_id: 'orga_interne',
            points: 20,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__1.2.2',
        id_nomenclature: '1.2.2',
        nom: 'Mettre en place une transversalit\u00e9 des actions et des projets',
        description:
          '\u003cp\u003eLes personnes en charge de la d\u00e9marche d\u0027\u00e9conomie circulaire sont invit\u00e9es dans la comitologie de pilotage et de suivi des autres strat\u00e9gies de la collectivit\u00e9.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 co-construit des actions en \u00e9conomie circulaire, en mode  inter-services pour favoriser la transversalit\u00e9 entre les services de la collectivit\u00e9.\u003c/p\u003e\n\u003cp\u003eLa strat\u00e9gie Economie Circulaire est ainsi li\u00e9e avec les strat\u00e9gies sectorielles existantes.\u003c/p\u003e\n',
        thematique_id: 'orga_interne',
        points: 33,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__1.2.3',
        id_nomenclature: '1.2.3',
        nom: 'Int\u00e9grer l\u0027\u00e9conomie circulaire dans les politiques territoriales',
        description:
          '\u003cp\u003eLa collectivit\u00e9 int\u00e8gre les \u00e9quipes \u00e9conomie circulaire dans la conception de ses politiques et strat\u00e9gies territoriales.\u003c/p\u003e\n',
        thematique_id: 'orga_interne',
        points: 33,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__1.2.4',
        id_nomenclature: '1.2.4',
        nom: 'Mettre en place une transversalit\u00e9 inter-collectivit\u00e9s',
        description:
          '\u003cp\u003eDans l\u0027objectif de r\u00e9duire la production de d\u00e9chets ou d\u0027am\u00e9liorer leur qualit\u00e9, le syndicat agit aupr\u00e8s de ses collectivit\u00e9s adh\u00e9rentes afin qu\u0027elles int\u00e8grent  l\u0027\u00e9conomie circulaire dans leurs actions.\u003c/p\u003e\n\u003cp\u003eLe syndicat assiste et accompagne les EPCI adh\u00e9rents pour les aider \u00e0 int\u00e9ger la dimension \u00e9conomie circulaire.dans leurs comp\u00e9tences (urbanisme, mobilit\u00e9, affaires scolaires, d\u00e9veloppement \u00e9conomique, etc.).\u003c/p\u003e\n',
        thematique_id: 'orga_interne',
        points: 66,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.2.4.1',
            id_nomenclature: '1.2.4.1',
            nom: 'Partager avec les EPCI les observations sur les gisements de d\u00e9chets \u00e0 optimiser',
            description: '',
            thematique_id: 'orga_interne',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.2.4.2',
            id_nomenclature: '1.2.4.2',
            nom: 'Accompagner collectivement les EPCI adh\u00e9rents vers la construction d\u0027actions sur leurs autres comp\u00e9tences',
            description: '',
            thematique_id: 'orga_interne',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.2.4.3',
            id_nomenclature: '1.2.4.3',
            nom: 'R\u00e9aliser des actions d\u0027am\u00e9lioration en amont de la production de d\u00e9chets dans le cadre d\u0027une comp\u00e9tence',
            description: '',
            thematique_id: 'orga_interne',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.2.4.4',
            id_nomenclature: '1.2.4.4',
            nom: 'R\u00e9aliser des actions d\u0027am\u00e9lioration en amont de la production de d\u00e9chets dans le cadre de plusieurs comp\u00e9tences',
            description: '',
            thematique_id: 'orga_interne',
            points: 25,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__1.3',
    id_nomenclature: '1.3',
    nom: 'Suivre, \u00e9valuer et am\u00e9liorer le d\u00e9ploiement de la politique Economie Circulaire',
    description:
      '\u003cp\u003eL\u0027efficacit\u00e9 de la politique Economie Circulaire de la collectivit\u00e9 d\u00e9pend de sa capacit\u00e9 \u00e0 suivre, \u00e9valuer et adapter ses plans d\u0027actions. Pour cela, la collectivit\u00e9 doit mettre en \u0153uvre des outils de reporting, quantifier les r\u00e9sultats obtenus et adapter/r\u00e9orienter r\u00e9guli\u00e8rement les actions envisag\u00e9es.\u003c/p\u003e\n',
    thematique_id: 'strategie',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__1.3.1',
        id_nomenclature: '1.3.1',
        nom: 'D\u00e9terminer des indicateurs sp\u00e9cifiques dot\u00e9s d\u0027objectifs',
        description:
          '\u003cp\u003eDans le cadre de sa strat\u00e9gie, la collectivit\u00e9 d\u00e9termine :\u003c/p\u003e\n\u003cp\u003edes indicateurs de r\u00e9sultats lui permettant de piloter la r\u00e9alisation du programme d\u2019actions.\u003c/p\u003e\n\u003cp\u003edes indicateurs d\u0027impact lui permettant de mesurer l\u0027efficacit\u00e9 de son programme d\u0027actions et suivre la trajectoire de sa strat\u00e9gie.\u003c/p\u003e\n\u003cp\u003eEn accord avec la strat\u00e9gie, elle d\u00e9termine un objectif pour chaque indicateur sp\u00e9cifique.\u003c/p\u003e\n\u003cp\u003eLes indicateurs sont suivis avec des donn\u00e9es fiables.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.3.1.1',
            id_nomenclature: '1.3.1.1',
            nom: 'Identifier les indicateurs de r\u00e9sultat',
            description: '',
            thematique_id: 'strategie',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.3.1.2',
            id_nomenclature: '1.3.1.2',
            nom: 'Identifier les indicateurs d\u0027impact',
            description: '',
            thematique_id: 'strategie',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.3.1.3',
            id_nomenclature: '1.3.1.3',
            nom: 'Identifier les indicateurs sp\u00e9cifiques par secteur strat\u00e9gique (en lien avec l\u0027orientation 3.1)',
            description: '',
            thematique_id: 'strategie',
            points: 25,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__1.3.2',
        id_nomenclature: '1.3.2',
        nom: 'Effectuer le bilan et ajuster les actions',
        description:
          '\u003cp\u003eLa collectivit\u00e9 effectue un bilan annuel sur la base des indicateurs  propos\u00e9s par le R\u00e9f\u00e9rentiel Economie Circulaire ou choisis par la collectivit\u00e9. Elle en tire des conclusions aboutissant \u00e0 un ajustement de sa politique et de sa strat\u00e9gie Economie Circulaire ainsi qu\u0027\u00e0 une modification du programme d\u0027actions.\u003c/p\u003e\n\u003cp\u003eElle \u00e9labore un document synth\u00e9tique pour pr\u00e9senter l\u0027\u00e9volution des indicateurs et la mise \u00e0 jour des actions.\u003c/p\u003e\n',
        thematique_id: 'strategie',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__1.3.2.1',
            id_nomenclature: '1.3.2.1',
            nom: 'R\u00e9aliser le bilan',
            description: '',
            thematique_id: 'strategie',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.3.2.2',
            id_nomenclature: '1.3.2.2',
            nom: 'Partager le bilan avec la gouvernance',
            description: '',
            thematique_id: 'strategie',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.3.2.3',
            id_nomenclature: '1.3.2.3',
            nom: 'Communiquer sur le bilan \u00e0 l\u0027externe',
            description: '',
            thematique_id: 'strategie',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__1.3.2.4',
            id_nomenclature: '1.3.2.4',
            nom: 'Mettre \u00e0 jour r\u00e9guli\u00e8rement le programme d\u0027actions au regard, notamment, de l\u0027\u00e9valuation',
            description: '',
            thematique_id: 'strategie',
            points: 30,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__2.1',
    id_nomenclature: '2.1',
    nom: 'Disposer d\u0027un programme de pr\u00e9vention des d\u00e9chets',
    description:
      '\u003cp\u003eLe Programme Local de Pr\u00e9vention des D\u00e9chets M\u00e9nagers et Assimil\u00e9s (PLPDMA) d\u0027un territoire vise \u00e0 r\u00e9duire la quantit\u00e9 et la nocivit\u00e9 des d\u00e9chets (via l\u0027atteinte d\u0027un objectif partag\u00e9). Ce programme s\u0027inscrit dans la dur\u00e9e au travers de la coordination, de la mise en place et du suivi d\u0027actions concert\u00e9es avec les acteurs locaux.\u003c/p\u003e\n',
    thematique_id: 'dechets',
    points: 20,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__2.1.0',
        id_nomenclature: '2.1.0',
        nom: 'Suivre la r\u00e9glementation',
        description:
          '\u003cp\u003eLa collectivit\u00e9 est conforme \u00e0 la r\u00e9glementation\u003c/p\u003e\n\u003cp\u003eEn cas de non-conformit\u00e9, la collectivit\u00e9 doit justifier d\u0027un plan d\u0027actions correctives et de l\u0027absence de contentieux\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: -1.0,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.1.1',
        id_nomenclature: '2.1.1',
        nom: 'Mettre en \u0153uvre les actions du PLPDMA',
        description:
          '\u003cp\u003eLes actions pr\u00e9vues dans le PLPDMA sont mises en \u0153uvre\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.1.1.1',
            id_nomenclature: '2.1.1.1',
            nom: 'D\u00e9ployer 3 \u00e0 9 actions sur l\u0027ann\u00e9e',
            description: '',
            thematique_id: 'dechets',
            points: 17,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.1.1.2',
            id_nomenclature: '2.1.1.2',
            nom: 'D\u00e9ployer 10 \u00e0 14 actions sur l\u0027ann\u00e9e',
            description: '',
            thematique_id: 'dechets',
            points: 16,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.1.1.3',
            id_nomenclature: '2.1.1.3',
            nom: 'D\u00e9ployer 15 actions ou plus',
            description: '',
            thematique_id: 'dechets',
            points: 17,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.1.1.4',
            id_nomenclature: '2.1.1.4',
            nom: 'Exploiter 1 ou 2 axes du guide PLPDMA de l\u0027ADEME',
            description: '',
            thematique_id: 'dechets',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.1.1.5',
            id_nomenclature: '2.1.1.5',
            nom: 'Exploiter 3 ou 4 axes du guide PLPDMA de l\u0027ADEME',
            description: '',
            thematique_id: 'dechets',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.1.1.6',
            id_nomenclature: '2.1.1.6',
            nom: 'Exploiter 5 ou 6 axes du guide PLPDMA de l\u0027ADEME',
            description: '',
            thematique_id: 'dechets',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.1.1.7',
            id_nomenclature: '2.1.1.7',
            nom: 'Exploiter les 7 axes du guide PLPDMA de l\u0027ADEME',
            description: '',
            thematique_id: 'dechets',
            points: 10,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.1.2',
        id_nomenclature: '2.1.2',
        nom: 'Disposer d\u0027une commission consultative d\u0027\u00e9laboration et de suivi (CCES) \u00e9largie',
        description:
          '\u003cp\u003eLa collectivit\u00e9 fait vivre une gouvernance participative \u00e9largie avec la commission consultative d\u0027\u00e9laboration et de suivi (CCES).\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.1.2.1',
            id_nomenclature: '2.1.2.1',
            nom: 'Organiser au moins 1 r\u00e9union de la CCES par an',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.1.2.2',
            id_nomenclature: '2.1.2.2',
            nom: '\u00c9largir la composition de la CCES au-del\u00e0 des \u00e9lus',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.1.3',
        id_nomenclature: '2.1.3',
        nom: 'Suivre le PLPDMA',
        description:
          '\u003cp\u003eLa collectivit\u00e9 assure suivi la d\u00e9marche, dresse des bilans des actions et ajuste le programme d\u0027actions selon les r\u00e9sultats\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 40,
        actions: [],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__2.2',
    id_nomenclature: '2.2',
    nom: 'Am\u00e9liorer l\u0027efficience du syst\u00e8me de collecte',
    description:
      '\u003cp\u003eSouvent responsable des plus gros impacts environnementaux et des plus gros co\u00fbts, la collecte des d\u00e9chets doit \u00eatre pens\u00e9e pour \u00eatre plus efficiente en elle-m\u00eame mais \u00e9galement \u00eatre en lien avec la pr\u00e9vention dans une logique de r\u00e9duction des d\u00e9chets et en coh\u00e9rence avec les moyens de traitement.\u003c/p\u003e\n\u003cp\u003eL\u2019optimisation de la collecte commence chez le producteur du d\u00e9chet et doit donc \u00eatre associ\u00e9e \u00e0 une communication efficace notamment lors du d\u00e9ploiement de nouvelles solutions (passage de \u00ab Porte A Porte \u00bb (PAP) \u00e0 \u00ab Par Apport Volontaire \u00bb (PAV), mise en place de la Tarification Incitative (TI), \u2026).\u003c/p\u003e\n\u003cp\u003eL\u2019optimisation en elle-m\u00eame consiste en un ensemble de questions dont les r\u00e9ponses doivent imp\u00e9rativement \u00eatre adapt\u00e9es au contexte local afin de garantir la qualit\u00e9 du service rendu : PAP ou PAV ? Quels flux doivent \u00eatre collect\u00e9s s\u00e9par\u00e9ment et dans quels contenants ? O\u00f9 placer les points de collecte pour qu\u0027ils soient accessibles et r\u00e9duire la longueur des tourn\u00e9es ? Quelles fr\u00e9quences choisir pour les diff\u00e9rentes tourn\u00e9es ? Quels v\u00e9hicules de collecte utiliser et comment les utiliser efficacement ? Comment optimiser les moyens humains associ\u00e9s \u00e0 la collecte ?\u003c/p\u003e\n',
    thematique_id: 'dechets',
    points: 20,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__2.2.0',
        id_nomenclature: '2.2.0',
        nom: 'Respecter la r\u00e9glementation',
        description:
          '\u003cp\u003eLa gestion de la collecte des d\u00e9chets est conforme \u00e0 la r\u00e9glementation.\u003c/p\u003e\n\u003cp\u003eEn cas de non-conformit\u00e9, la collectivit\u00e9 doit justifier d\u0027un plan d\u0027actions correctives et de l\u0027absence de contentieux.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: -1.0,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.2.1',
        id_nomenclature: '2.2.1',
        nom: 'Connaitre l\u0027\u00e9tat du service public de collecte des d\u00e9chets',
        description:
          '\u003cp\u003eLa collectivit\u00e9 a r\u00e9alis\u00e9 les \u00e9tudes n\u00e9cessaires en faveur d\u0027une d\u00e9marche d\u0027optimisation du service public de collecte des d\u00e9chets. Les \u00e9tudes peuvent \u00eatre r\u00e9alis\u00e9es en interne ou par un prestataire.\u003c/p\u003e\n\u003cp\u003eElle dispose notamment des analyses suivantes :\u003c/p\u003e\n\u003cp\u003e\u2022 Etude d\u0027optimisation pr\u00e9-collecte/collecte (peut \u00eatre r\u00e9alis\u00e9e ponctuellement ou organis\u00e9e au fil de l\u0027eau) qui porte \u00e9galement sur le taux d\u0027utilisation du service en vue d\u0027une diminution/adaptation des fr\u00e9quences et modes de collecte et des volumes des contenants.\u003c/p\u003e\n\u003cp\u003e\u2022 Evaluation du parc de d\u00e9ch\u00e8teries en vue de l\u0027adaptation et de l\u0027optimisation de son r\u00e9seau sur le territoire.\u003c/p\u003e\n\u003cp\u003e\u2022 Etude pr\u00e9alable \u00e0 la mise en place de solutions alternatives pour diminuer les flux trait\u00e9s.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.2.1.1',
            id_nomenclature: '2.2.1.1',
            nom: 'Disposer d\u0027une analyse actualis\u00e9e par rapport \u00e0 l\u0027\u00e9tat du syst\u00e8me de collecte sur le taux d\u0027utilisation du service',
            description: '',
            thematique_id: 'dechets',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.2.1.2',
            id_nomenclature: '2.2.1.2',
            nom: 'Disposer d\u0027une analyse actualis\u00e9e par rapport \u00e0 l\u0027\u00e9tat du syst\u00e8me de collecte sur l\u0027\u00e9valuation du parc de d\u00e9ch\u00e8teries',
            description: '',
            thematique_id: 'dechets',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.2.1.3',
            id_nomenclature: '2.2.1.3',
            nom: 'Disposer d\u0027une \u00e9tude pr\u00e9alable \u00e0 la mise en place de solutions alternatives pour diminuer les flux trait\u00e9s',
            description: '',
            thematique_id: 'dechets',
            points: 34,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.2.2',
        id_nomenclature: '2.2.2',
        nom: 'D\u00e9finir un plan d\u0027action',
        description:
          '\u003cp\u003eSur la base des donn\u00e9es du suivi ou des r\u00e9sultats des \u00e9tudes, la collectivit\u00e9 d\u00e9fini un plan d\u0027actions d\u0027optimisation de la collecte, en coh\u00e9rence avec les objectifs de la loi relative \u00e0 la lutte contre le gaspillage et pour l\u0027\u00e9conomie circulaire (loi AGEC).\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.2.2.1',
            id_nomenclature: '2.2.2.1',
            nom: 'Disposer d\u0027un plan d\u0027actions en cours d\u0027\u00e9laboration',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.2.2.2',
            id_nomenclature: '2.2.2.2',
            nom: 'Disposer d\u0027un plan d\u0027actions valid\u00e9 par les \u00e9lus',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.2.3',
        id_nomenclature: '2.2.3',
        nom: 'Mettre en \u0153uvre le plan d\u0027actions et communiquer',
        description:
          '\u003cp\u003eLa collectivit\u00e9 met en \u0153uvre le plan d\u0027actions du Niveau 2. Elle pilote la mise en \u0153uvre du plan d\u0027actions pour s\u0027assurer de l\u0027atteinte des objectifs.\u003c/p\u003e\n\u003cp\u003eElle d\u00e9ploie la communication associ\u00e9e pour valoriser ses progr\u00e8s.\u003c/p\u003e\n\u003cp\u003eUne fois le plan d\u0027actions  r\u00e9alis\u00e9, la collectivit\u00e9 peut recommencer une nouvelle boucle d\u0027optimisation.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.2.3.1',
            id_nomenclature: '2.2.3.1',
            nom: 'Disposer de bac puc\u00e9s et contr\u00f4ler l\u0027acc\u00e8s aux d\u00e9ch\u00e8teries',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.2.3.2',
            id_nomenclature: '2.2.3.2',
            nom: 'Optimiser le r\u00e9seau de d\u00e9ch\u00e8teries',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.2.3.3',
            id_nomenclature: '2.2.3.3',
            nom: 'D\u00e9velopper l\u0027accueil de nouvelles fili\u00e8res en d\u00e9ch\u00e8teries (li\u00e9es aux REP ou non)',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.2.3.4',
            id_nomenclature: '2.2.3.4',
            nom: 'Trier \u00e0 la source les bio d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.2.3.5',
            id_nomenclature: '2.2.3.5',
            nom: '\u00c9tendre les consignes de tri',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__2.3',
    id_nomenclature: '2.3',
    nom: 'Am\u00e9liorer la valorisation des d\u00e9chets (dont organiques)',
    description:
      '\u003cp\u003eLa collectivit\u00e9 privil\u00e9gie le respect de la hi\u00e9rarchie des modes de traitement et tend vers des taux de recyclage et de valorisation de plus en plus \u00e9lev\u00e9s.\u003c/p\u003e\n',
    thematique_id: 'dechets',
    points: 20,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__2.3.0',
        id_nomenclature: '2.3.0',
        nom: 'Respecter la r\u00e8glementation',
        description:
          '\u003cp\u003eLes installations et \u00e9quipements sont conformes \u00e0 la r\u00e9glementation (tous flux et tous modes de traitement).\u003c/p\u003e\n\u003cp\u003eEn cas de non-conformit\u00e9, la collectivit\u00e9 doit justifier d\u0027un plan d\u0027actions correctives et de l\u0027absence de contentieux\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: -1.0,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.3.1',
        id_nomenclature: '2.3.1',
        nom: 'Connaitre les flux',
        description:
          '\u003cp\u003eEn amont de l\u2019optimisation de la valorisation des d\u00e9chets sur son territoire, la collectivit\u00e9 doit :\u003c/p\u003e\n\u003cp\u003e\u2022 Identifier les principaux flux de d\u00e9chets du territoire et leur m\u00e9thode de traitement actuelle.\u003c/p\u003e\n\u003cp\u003e\u2022 Identifier les flux insuffisamment valoris\u00e9s au regard de la hi\u00e9rarchie de traitement et les causes de cette insuffisance (absence de moyen de traitement, moyen de traitement satur\u00e9, absence d\u2019exutoire adapt\u00e9, co\u00fbt des autres traitements trop \u00e9lev\u00e9, \u2026)\u003c/p\u003e\n\u003cp\u003e\u2022 R\u00e9aliser des \u00e9tudes de faisabilit\u00e9 technico-\u00e9conomiques sur des solutions pour am\u00e9liorer la valorisation de flux s\u00e9lectionn\u00e9s en tenant compte des probl\u00e9matiques associ\u00e9es aux d\u00e9tournements de flux (sous-alimentation des installations de traitement, reconversion des installation, etc.)\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 33,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.3.1.1',
            id_nomenclature: '2.3.1.1',
            nom: 'Connaitre les flux de d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.1.2',
            id_nomenclature: '2.3.1.2',
            nom: 'Disposer d\u0027un \u00e9tat des lieux de l\u0027utilisation des fili\u00e8res existantes',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.1.3',
            id_nomenclature: '2.3.1.3',
            nom: 'Etudier l\u0027optimisation des fili\u00e8res envisageables',
            description: '',
            thematique_id: 'dechets',
            points: 40,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.3.2',
        id_nomenclature: '2.3.2',
        nom: 'Concr\u00e9tiser les solutions issues des \u00e9tudes d\u0027optimisation',
        description:
          '\u003cp\u003eLa collectivit\u00e9 concr\u00e9tise les solutions issues des \u00e9tudes d\u0027optimisation. Elle met en place les conditions (financi\u00e8res et organisationnelles) pour favoriser l\u2019\u00e9mergence de ces solutions.\u003c/p\u003e\n\u003cp\u003eElle m\u00e8ne et accompagne l\u0027\u00e9volution des moyens de traitement.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 33,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.3.2.1',
            id_nomenclature: '2.3.2.1',
            nom: 'Concr\u00e9tiser au moins une solution et avoir concr\u00e9tis\u00e9 moins d\u0027un tiers des solutions retenues dans l\u2019\u00e9tude',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.2.2',
            id_nomenclature: '2.3.2.2',
            nom: 'Concr\u00e9tiser entre un tiers et deux tiers des solutions',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.2.3',
            id_nomenclature: '2.3.2.3',
            nom: 'Concr\u00e9tiser plus de deux tiers des solutions',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.2.4',
            id_nomenclature: '2.3.2.4',
            nom: 'Toutes les solutions ont \u00e9t\u00e9 concr\u00e9tis\u00e9es',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.3.3',
        id_nomenclature: '2.3.3',
        nom: 'Suivre et accompagner les installations de traitement',
        description:
          '\u003cp\u003eLa collectivit\u00e9 suit les installations de traitement sous sa responsabilit\u00e9 et s\u2019assure de leur efficacit\u00e9 en mati\u00e8re de valorisation. Dans cette optique, elle accompagne les \u00e9quipes en charge de ces installations.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 doit ainsi :\u003c/p\u003e\n\u003cp\u003e\u2022 S\u2019assurer que l\u2019ensemble des flux du territoire puissent \u00eatre trait\u00e9s, en priorisant le r\u00e9emploi et le recyclage.\u003c/p\u003e\n\u003cp\u003e\u2022 S\u2019assurer que les contr\u00f4les soient effectu\u00e9s pour assurer l\u2019optimisation du processus de traitement, ainsi que la qualit\u00e9 des flux entrants et sortants.\u003c/p\u003e\n\u003cp\u003e\u2022 Alerter les producteurs de d\u00e9chets et les acteurs qui interviennent en amont en cas de non-qualit\u00e9 des flux entrants,  et s\u2019assurer que les actions correctives soient effectu\u00e9es si les autres contr\u00f4les r\u00e9v\u00e8lent des \u00e9carts.\u003c/p\u003e\n\u003cp\u003e\u2022 Quantifier et caract\u00e9riser les refus de tri (ou les m\u00e2chefers) dans le but de les r\u00e9duire, notamment en rehaussant les exigences de qualit\u00e9 du flux entrant si n\u00e9cessaire, et, \u00e9ventuellement \u00e9viter la sur-qualit\u00e9.\u003c/p\u003e\n\u003cp\u003e\u2022 S\u2019assurer que les refus de tri (ou les m\u00e2chefers) sont valoris\u00e9s selon la hi\u00e9rarchie de traitement.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 33,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.3.3.1',
            id_nomenclature: '2.3.3.1',
            nom: 'Mesurer l\u0027effet de l\u0027accompagnement',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.3.2',
            id_nomenclature: '2.3.3.2',
            nom: 'Valoriser au moins 50% des d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.3.3',
            id_nomenclature: '2.3.3.3',
            nom: 'Valoriser au moins 60% des d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.3.4',
            id_nomenclature: '2.3.3.4',
            nom: 'Valoriser au moins 70% des d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.3.5',
            id_nomenclature: '2.3.3.5',
            nom: 'Valoriser au moins 80% des d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.3.3.6',
            id_nomenclature: '2.3.3.6',
            nom: 'Valoriser au moins 90% des d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: 10,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__2.4',
    id_nomenclature: '2.4',
    nom: 'R\u00e9duire les impacts environnementaux et sociaux de la gestion des d\u00e9chets',
    description:
      '\u003cp\u003eLa gestion des d\u00e9chets g\u00e9n\u00e8re des impacts environnementaux (li\u00e9s notamment au transport...) et sociaux (p\u00e9nibilit\u00e9 du travail, nuisances olfactives et sonores, ...) ; la r\u00e9duction de ces impacts s\u2019appuie respectivement sur l\u2019optimisation des syst\u00e8mes de transport ainsi que sur les diverses recommandations et guides des CARSAT (Caisses d\u2019Assurance Retraite et de la Sant\u00e9 Au Travail).\u003c/p\u003e\n',
    thematique_id: 'dechets',
    points: 20,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__2.4.1',
        id_nomenclature: '2.4.1',
        nom: 'Identifier les pistes de r\u00e9duction des impacts',
        description:
          '\u003cp\u003eLa collectivit\u00e9 \u00e9tudie et priorise des pistes de r\u00e9duction des \u00e9missions et nuisances.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.4.1.1',
            id_nomenclature: '2.4.1.1',
            nom: 'Programmer une \u00e9tude pour identifier les pistes de r\u00e9duction des impacts',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.1.2',
            id_nomenclature: '2.4.1.2',
            nom: 'R\u00e9aliser l\u0027\u00e9tude et identifier les pistes de r\u00e9duction des impacts',
            description: '',
            thematique_id: 'dechets',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.1.3',
            id_nomenclature: '2.4.1.3',
            nom: 'Prioriser les actions d\u0027optimisation',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.4.2',
        id_nomenclature: '2.4.2',
        nom: 'G\u00e9rer les impacts de la collecte des d\u00e9chets',
        description:
          '\u003cp\u003eLa collectivit\u00e9 a identifi\u00e9 les impacts de la collecte des d\u00e9chets, a d\u00e9fini un plan d\u0027actions pour les diminuer et le met en \u0153uvre.\u003c/p\u003e\n\u003cp\u003eCe plan d\u0027actions devrait \u00eatre en coh\u00e9rence avec les mesures de pr\u00e9vention des d\u00e9chets et d\u0027am\u00e9lioration des syst\u00e8mes de collecte et de valorisation de d\u00e9chets. Il donne des objectifs pertinents pour le territoire, ainsi que les outils de pilotage de la progression.\u003c/p\u003e\n\u003cp\u003eCe plan d\u0027actions peut \u00eatre it\u00e9ratif. Une fois termin\u00e9 sur la p\u00e9riode donn\u00e9e, la collectivit\u00e9 peut construire un nouveau plan avec de nouveaux objectifs.\u003c/p\u003e\n\u003cp\u003ePour les collectivit\u00e9s portant la comp\u00e9tence collecte et traitement, les niveaux 2.4.2 et 2.4.3 peuvent faire objet d\u2019un plan d\u2019action unique.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.4.2.1',
            id_nomenclature: '2.4.2.1',
            nom: 'Mettre en place le plan d\u0027actions',
            description: '',
            thematique_id: 'dechets',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.2.2',
            id_nomenclature: '2.4.2.2',
            nom: 'Chiffer les objectifs du plan d\u0027actions',
            description: '',
            thematique_id: 'dechets',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.2.3',
            id_nomenclature: '2.4.2.3',
            nom: 'D\u00e9marrer la mise en \u0153uvre des actions',
            description: '',
            thematique_id: 'dechets',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.2.4',
            id_nomenclature: '2.4.2.4',
            nom: 'Mettre en place le pilotage de la progression des actions',
            description: '',
            thematique_id: 'dechets',
            points: 30,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.4.3',
        id_nomenclature: '2.4.3',
        nom: 'Mettre en place le report modal de la collecte des d\u00e9chets',
        description:
          '\u003cp\u003eLa collectivit\u00e9 met en place un report modal de transport des d\u00e9chets via un syst\u00e8me de collecte autre que le syst\u00e8me routier \u00e0 moteur thermique.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 10,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.4.4',
        id_nomenclature: '2.4.4',
        nom: 'G\u00e9rer les impacts du traitement des d\u00e9chets',
        description:
          '\u003cp\u003eLa collectivit\u00e9 identifie les impacts du traitement. Elle d\u00e9finit un plan d\u0027actions pour les diminuer et le met en \u0153uvre.\u003c/p\u003e\n\u003cp\u003eCe plan d\u0027actions devrait \u00eatre en coh\u00e9rence avec les mesures de pr\u00e9vention et d\u0027am\u00e9lioration des syst\u00e8mes de collecte et de valorisation des d\u00e9chets. Il donne des objectifs pertinents pour le territoire, ainsi que les outils de pilotage de la progression.\u003c/p\u003e\n\u003cp\u003eCe plan d\u0027actions peut \u00eatre it\u00e9ratif. Une fois termin\u00e9 sur la p\u00e9riode donn\u00e9e, la collectivit\u00e9 peut construire un nouveau plan avec de nouveaux objectifs.\u003c/p\u003e\n\u003cp\u003ePour les collectivit\u00e9s portant la comp\u00e9tence collecte et traitement, les niveaux 2.4.2 et 2.4.3 peuvent faire l\u0027objet d\u2019un plan d\u2019action unique.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.4.4.1',
            id_nomenclature: '2.4.4.1',
            nom: 'Mettre en place le plan d\u0027actions',
            description: '',
            thematique_id: 'dechets',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.4.2',
            id_nomenclature: '2.4.4.2',
            nom: 'Chiffrer les objectifs du plan d\u0027actions',
            description: '',
            thematique_id: 'dechets',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.4.3',
            id_nomenclature: '2.4.4.3',
            nom: 'D\u00e9marrer la mise en \u0153uvre des actions',
            description: '',
            thematique_id: 'dechets',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.4.4',
            id_nomenclature: '2.4.4.4',
            nom: 'Mettre en place le pilotage de la progression des actions',
            description: '',
            thematique_id: 'dechets',
            points: 30,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.4.5',
        id_nomenclature: '2.4.5',
        nom: 'Communiquer sur les impacts',
        description:
          '\u003cp\u003eLa collectivit\u00e9 communique sur ses donn\u00e9es d\u0027impacts environnementaux et sociaux\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.4.5.1',
            id_nomenclature: '2.4.5.1',
            nom: 'Planifier les actions de communication',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.5.2',
            id_nomenclature: '2.4.5.2',
            nom: 'R\u00e9aliser une communication \u00e9crite',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.5.3',
            id_nomenclature: '2.4.5.3',
            nom: 'R\u00e9aliser une communication orale (r\u00e9unions d\u0027information, etc.)',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.5.4',
            id_nomenclature: '2.4.5.4',
            nom: 'Communiquer sur les impacts de la gestion des d\u00e9chets',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.4.5.5',
            id_nomenclature: '2.4.5.5',
            nom: 'Communiquer pour pr\u00e9venir les comportements ind\u00e9sirables',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__2.5',
    id_nomenclature: '2.5',
    nom: 'Cr\u00e9er du lien avec les acteurs \u00e9conomiques du territoire pour cr\u00e9er des dynamiques sur leurs d\u00e9chets',
    description:
      '\u003cp\u003eLa mobilisation des acteurs \u00e9conomiques (entreprises industrielles et du BTP, artisans et commer\u00e7ants, services tertiaires\u2026) est indispensable pour am\u00e9liorer la pr\u00e9vention et la gestion des d\u00e9chets sur un territoire en raison des quantit\u00e9s et de la nature des d\u00e9chets qu\u2019ils produisent.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9, dans le cadre du Service Public de Pr\u00e9vention et  Gestion des D\u00e9chets (SPPGD) ou de sa comp\u00e9tence de d\u00e9veloppement \u00e9conomique, cr\u00e9\u00e9 du lien avec et entre les acteurs \u00e9conomiques du territoire en collaboration avec les interlocuteurs locaux des entreprises (chambres consulaires, maisons de l\u2019emploi, agence de d\u00e9veloppement \u00e9conomique, associations d\u2019entreprises \u2026)\u003c/p\u003e\n',
    thematique_id: 'dechets',
    points: 20,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__2.5.1',
        id_nomenclature: '2.5.1',
        nom: 'Informer les professionnels',
        description:
          '\u003cp\u003eLa collectivit\u00e9 oriente les professionnels b\u00e9n\u00e9ficiant du SPPGD et leur propose l\u0027ensemble des solutions de gestion de leurs d\u00e9chets disponibles sur le territoire, y compris si ces solutions sont hors de leur p\u00e9rim\u00e8tre SPPGD (renvoi vers les solutions priv\u00e9es)\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 25,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.5.2',
        id_nomenclature: '2.5.2',
        nom: 'Conseiller les professionnels',
        description:
          '\u003cp\u003eLa collectivit\u00e9 propose un service de conseil aux entreprises, collectif et/ou individuel, pour les aider \u00e0   r\u00e9duire les d\u00e9chets, mieux les trier et ma\u00eetriser les co\u00fbts associ\u00e9s.\u003c/p\u003e\n\u003cp\u003eElle \u00e9value la satisfaction des entreprises conseill\u00e9es.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.5.2.1',
            id_nomenclature: '2.5.2.1',
            nom: 'Identifier les crit\u00e8res de priorisation des entreprises \u00e0 conseiller',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.5.2.2',
            id_nomenclature: '2.5.2.2',
            nom: 'Conseiller toutes les entreprises cibl\u00e9es',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.5.2.3',
            id_nomenclature: '2.5.2.3',
            nom: 'Disposer d\u0027un taux de satisfaction \u00e9lev\u00e9 des entreprises conseill\u00e9es',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__2.5.3',
        id_nomenclature: '2.5.3',
        nom: 'Structurer et mettre en r\u00e9seau les acteurs',
        description:
          '\u003cp\u003eLa collectivit\u00e9 joue un r\u00f4le de facilitateur et un r\u00f4le moteur aupr\u00e8s des entreprises dans l\u0027implantation ou la consolidation de services de pr\u00e9vention et de gestion des d\u00e9chets, adapt\u00e9s aux besoins du territoire et, quand c\u0027est possible, en lien avec le service d\u00e9veloppement \u00e9conomique.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__2.5.3.1',
            id_nomenclature: '2.5.3.1',
            nom: 'Mettre en place des moyens pour identifier ou f\u00e9d\u00e9rer des r\u00e9seaux d\u0027acteurs sur le territoire',
            description: '',
            thematique_id: 'dechets',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.5.3.2',
            id_nomenclature: '2.5.3.2',
            nom: 'Mettre en place des moyens pour accompagner les projets dans leur d\u00e9finition',
            description: '',
            thematique_id: 'dechets',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__2.5.3.3',
            id_nomenclature: '2.5.3.3',
            nom: 'Mettre en place des moyens pour soutenir le d\u00e9ploiement des projets',
            description: '',
            thematique_id: 'dechets',
            points: 34,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__3.1',
    id_nomenclature: '3.1',
    nom: 'Identifier et d\u00e9velopper des fili\u00e8res/domaines \u00e0 enjeu en lien avec l\u0027\u00e9conomie circulaire sur le territoire',
    description:
      '\u003cp\u003eEn lien avec le diagnostic de l\u0027\u00e9conomie circulaire r\u00e9alis\u00e9 dans l\u0027orientation 1.1, la collectivit\u00e9 identifie pr\u00e9cis\u00e9ment les fili\u00e8res \u00e0 enjeux sur son territoire et met en place un plan d\u0027action \u0026quot;boucle\u0026quot; d\u00e9di\u00e9 par fili\u00e8re. Une boucle locale d\u0027\u00e9conomie circulaire vise \u00e0 conserver le plus longtemps possible dans l\u2019\u00e9conomie (locale) la valeur d\u2019un produit, de ses composants ou des mati\u00e8res (des ressources) en limitant la g\u00e9n\u00e9ration de d\u00e9chets (et en d\u00e9veloppant le partage, la r\u00e9paration, le r\u00e9emploi, la r\u00e9utilisation, la r\u00e9novation, la refabrication et le recyclage) dans une perspective de d\u00e9veloppement d\u2019activit\u00e9 \u00e9conomique  (durable, faible en carbone et r\u00e9duction de l\u0027utilisation des ressources naturelles) et d\u2019emplois locaux (ou de proximit\u00e9).\u003c/p\u003e\n',
    thematique_id: 'dev_eco',
    points: 14,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__3.1.1',
        id_nomenclature: '3.1.1',
        nom: 'R\u00e9aliser le diagnostic des fili\u00e8re(s) \u00e0 enjeux d\u0027\u00e9conomie circulaire',
        description:
          '\u003cp\u003eA l\u0027appui de la strat\u00e9gie adopt\u00e9e dans l\u0027orientation 1.1, la collectivit\u00e9 approfondit le diagnostic sur les secteurs \u00e9conomiques analys\u00e9s sous l\u0027angle de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n\u003cp\u003eLe diagnostic porte sur l\u0027analyse des flux, des acteurs, des chaines de valeurs et des march\u00e9s. Son but est d\u0027identifier des opportunit\u00e9s d\u0027instaurer des boucles locales d\u0027\u00e9conomie circulaire.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 priorise les secteurs \u00e0 enjeux le plus fort pour son territoire.\u003c/p\u003e\n\u003cp\u003eLes diagnostics pourront s\u0027appuyer sur la strat\u00e9gie de d\u00e9veloppement \u00e9conomique du territoire.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 33,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.1.1.1',
            id_nomenclature: '3.1.1.1',
            nom: 'Prioriser la fili\u00e8re (les fili\u00e8res) \u00e0 diagnostiquer',
            description: '',
            thematique_id: 'dev_eco',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.1.1.2',
            id_nomenclature: '3.1.1.2',
            nom: 'Disposer d\u0027un diagnostic de fili\u00e8re(s) \u00e0 enjeux d\u0027\u00e9conomie circulaire en cours de r\u00e9alisation',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.1.1.3',
            id_nomenclature: '3.1.1.3',
            nom: 'Disposer d\u0027un diagnostic de fili\u00e8re(s) \u00e0 enjeux d\u0027\u00e9conomie circulaire finalis\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.1.1.4',
            id_nomenclature: '3.1.1.4',
            nom: 'Partager le diagnostic avec les acteurs cl\u00e9s des fili\u00e8res \u00e9tudi\u00e9es',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.1.2',
        id_nomenclature: '3.1.2',
        nom: 'Constuire un plan d\u0027action sp\u00e9cifique',
        description:
          '\u003cp\u003eLa collectivit\u00e9 construit son plan d\u0027actions sp\u00e9cifique autour d\u0027au moins une fili\u00e8re \u00e0 enjeu sur son territoire. Elle consulte les acteurs cl\u00e9s de la fili\u00e8re et d\u00e9finit les partenariats associ\u00e9s au plan d\u0027action. Les partenariats sont pr\u00e9cis\u00e9s dans l\u0027Axe 5 du R\u00e9f\u00e9rentiel.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 r\u00e9dige le plan d\u0027actions, se fixe des objectifs concrets avec un horizon temps d\u00e9fini et int\u00e8gre des indicateurs d\u0027impact.\u003c/p\u003e\n\u003cp\u003eElle met en \u0153uvre le plan d\u0027actions en collaboration avec les acteurs et les initiatives de son territoire.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 33,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.1.2.1',
            id_nomenclature: '3.1.2.1',
            nom: 'Construire le plan d\u0027actions',
            description: '',
            thematique_id: 'dev_eco',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.1.2.2',
            id_nomenclature: '3.1.2.2',
            nom: 'Co-construire le plan d\u0027action avec les acteurs cl\u00e9s des fili\u00e8res',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.1.2.3',
            id_nomenclature: '3.1.2.3',
            nom: 'Valider le plan d\u0027actions',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.1.2.4',
            id_nomenclature: '3.1.2.4',
            nom: 'R\u00e9aliser les actions du plan d\u0027actions',
            description: '',
            thematique_id: 'dev_eco',
            points: 30,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.1.3',
        id_nomenclature: '3.1.3',
        nom: 'Piloter et suivre les r\u00e9sultats du plan d\u0027actions',
        description:
          '\u003cp\u003eLa collectivit\u00e9 met en \u0153uvre un suivi du (des) plan(s) d\u0027action sp\u00e9cifique(s) par fili\u00e8re en y associant les acteurs impliqu\u00e9s dans sa r\u00e9alisation.\u003c/p\u003e\n\u003cp\u003eElle \u00e9value r\u00e9guli\u00e8rement l\u0027avancement des travaux, notamment au regard des indicateurs d\u0027impact.\u003c/p\u003e\n\u003cp\u003eEn fin de p\u00e9riode, elle fait un bilan final, qu\u0027elle communique aux acteurs du territoire (grand public et associations, collectivit\u00e9s, entreprises).\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 peut envisager un nouvel plan d\u0027action sp\u00e9cifique pour la fili\u00e8re ou travailler sur d\u0027autres fili\u00e8res toute en apprenant de son exp\u00e9rience pr\u00e9c\u00e9dente.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 33,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.1.3.1',
            id_nomenclature: '3.1.3.1',
            nom: 'D\u00e9finir un protocole de suivi',
            description: '',
            thematique_id: 'dev_eco',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.1.3.2',
            id_nomenclature: '3.1.3.2',
            nom: 'Recueillir les donn\u00e9es',
            description: '',
            thematique_id: 'dev_eco',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.1.3.3',
            id_nomenclature: '3.1.3.3',
            nom: 'Analyser l\u0027\u00e9volution des indicateurs et ajuster le plan d\u0027actions',
            description: '',
            thematique_id: 'dev_eco',
            points: 34,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__3.2',
    id_nomenclature: '3.2',
    nom: 'R\u00e9aliser des achats responsables',
    description:
      '\u003cp\u003eLes achats responsables consistent \u00e0 acheter en tenant compte, \u00e0 chaque \u00e9tape du cycle de vie d\u0027un produit ou d\u0027une prestation, des impacts \u00e9conomiques (producteurs locaux, ...), environnementaux (produits lab\u00e9lis\u00e9s, transport, \u00e9missions polluantes, consommation de ressources,...) et sociaux (respect des conditions de travail, \u00e9galit\u00e9 des sexes, acc\u00e8s \u00e0 l\u0027emploi pour les handicap\u00e9s, ESS,...) qui sont g\u00e9n\u00e9r\u00e9s.\u003c/p\u003e\n',
    thematique_id: 'conso_resp',
    points: 14,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__3.2.0',
        id_nomenclature: '3.2.0',
        nom: 'Mettre en place le Sch\u00e9ma de promotion des achats publics socialement et \u00e9cologiquement responsables (SPASER)',
        description:
          '\u003cp\u003eSi la collectivit\u00e9 g\u00e8re un montant annuel d\u0027achats sup\u00e9rieur \u00e0 100 millions d\u0027euros, elle est dans l\u0027obligation d\u0027avoir mis en place un Sch\u00e9ma de promotion des achats publics socialement et \u00e9cologiquement responsables (SPASER).\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 est conforme \u00e0 la r\u00e9glementation.\u003c/p\u003e\n\u003cp\u003eEn cas de non-conformit\u00e9, la collectivit\u00e9 doit justifier d\u0027un plan d\u0027actions correctives et de l\u0027absence de contentieux.\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: -1.0,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.2.1',
        id_nomenclature: '3.2.1',
        nom: 'D\u00e9finir la politique d\u0027achats responsables et sensibiliser',
        description:
          '\u003cp\u003eLa collectivit\u00e9 d\u00e9finit le cadre et formalise sa politique d\u0027achats responsables dans un document \u00e9crit.\u003c/p\u003e\n\u003cp\u003eElle r\u00e9alise la cartographie de ses achats.\u003c/p\u003e\n\u003cp\u003eElle sensibilise et forme ses acheteurs aux enjeux et pratiques des achats responsables au regard de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.2.1.1',
            id_nomenclature: '3.2.1.1',
            nom: 'D\u00e9cider d\u0027engager une structuration de sa politique d\u0027achats responsables',
            description: '',
            thematique_id: 'conso_resp',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.2.1.2',
            id_nomenclature: '3.2.1.2',
            nom: 'Disposer d\u0027une politique d\u0027achat structur\u00e9e',
            description: '',
            thematique_id: 'conso_resp',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.2.1.3',
            id_nomenclature: '3.2.1.3',
            nom: 'R\u00e9aliser une cartographie des achats',
            description: '',
            thematique_id: 'conso_resp',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.2.1.4',
            id_nomenclature: '3.2.1.4',
            nom: 'Sensibiliser et former \u00e0 la pratique des achats responsables au sein de la collectivit\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.2.2',
        id_nomenclature: '3.2.2',
        nom: 'Exp\u00e9rimenter l\u0027int\u00e9gration de dispositions relevant de l\u0027\u00e9conomie circulaire',
        description:
          '\u003cp\u003eEn lien avec le r\u00e9seau d\u0027acheteurs \u0026quot;Commande publique et d\u00e9veloppement durable\u0026quot;, les acheteurs exp\u00e9rimentent l\u0027int\u00e9gration de dispositions relevant de l\u0027\u00e9conomie circulaire en plus des dispositions environnementales et sociales dans plusieurs march\u00e9s de la collectivit\u00e9, en se basant sur la logique cycle de vie des produits et des services.\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.2.2.1',
            id_nomenclature: '3.2.2.1',
            nom: 'Disposer d\u0027au moins 30% des march\u00e9s publics incluant des dispositions environnementales',
            description: '',
            thematique_id: 'conso_resp',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.2.2.2',
            id_nomenclature: '3.2.2.2',
            nom: 'Disposer d\u0027au moins 60% des march\u00e9s publics incluant des dispositions environnementales',
            description: '',
            thematique_id: 'conso_resp',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.2.2.3',
            id_nomenclature: '3.2.2.3',
            nom: 'Disposer d\u0027au moins 30% des march\u00e9s publics incluant des dispositions sociales',
            description: '',
            thematique_id: 'conso_resp',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.2.3',
        id_nomenclature: '3.2.3',
        nom: 'P\u00e9renniser la d\u00e9marche',
        description:
          '\u003cp\u003eLe service Achats met en place les outils n\u00e9cessaires \u00e0 la p\u00e9rennisation de la d\u00e9marche : la d\u00e9marche est syst\u00e9matis\u00e9e \u00e0 l\u0027ensemble des march\u00e9s pass\u00e9s par la collectivit\u00e9 dans une logique d\u0027am\u00e9lioration continue, une veille sur les caract\u00e9ristiques environnementales, sociales et de l\u0027\u00e9conomie circulaire de l\u0027offre est assur\u00e9e, le pilotage de ses achats (mise en place d\u0027indicateurs, d\u0027un tableau de bord de suivi des progr\u00e8s) est r\u00e9alis\u00e9.\u003c/p\u003e\n\u003cp\u003eLes acheteurs participent activement aux travaux du r\u00e9seau d\u0027acheteurs de leur territoire, ils capitalisent leurs retours d\u0027exp\u00e9rience.\u003c/p\u003e\n\u003cp\u003eIls participent \u00e0 la promotion des achats responsables aupr\u00e8s des \u00e9lus et des acheteurs non encore sensibilis\u00e9s au sein de leur territoire.\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.2.3.1',
            id_nomenclature: '3.2.3.1',
            nom: 'Mettre en place un tableau de bord',
            description: '',
            thematique_id: 'conso_resp',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.2.3.2',
            id_nomenclature: '3.2.3.2',
            nom: 'Participer au r\u00e9seau d\u0027acheteurs',
            description: '',
            thematique_id: 'conso_resp',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.2.3.3',
            id_nomenclature: '3.2.3.3',
            nom: 'Promouvoir les achats responsables',
            description: '',
            thematique_id: 'conso_resp',
            points: 30,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__3.3',
    id_nomenclature: '3.3',
    nom: 'Soutenir et accompagner la consommation responsable et la sobri\u00e9t\u00e9 des acteurs du territoire',
    description:
      '\u003cp\u003eLa consommation responsable correspond \u00e0 un engagement civique actif en vue de la qualit\u00e9 de vie des citoyens, mais aussi en faveur de la collectivit\u00e9 dans son ensemble. Elle concerne aussi bien le citoyen consommateur que l\u0027acheteur professionnel (priv\u00e9 ou public).\u003c/p\u003e\n\u003cp\u003eLa consommation responsable consiste \u00e0 nous questionner sur la pertinence de nos besoins dans une logique de sobri\u00e9t\u00e9 et \u00e0 les satisfaire en limitant l\u2019impact n\u00e9gatif sur l\u2019environnement (\u00e0 toutes les \u00e9tapes du cycle de vie du produit) et sur la soci\u00e9t\u00e9. Elle doit nous conduire \u00e0 faire \u00e9voluer nos modes de production et de consommation et plus globalement nos modes de vie, \u00e0 l\u2019\u00e9chelle individuelle et collective.\u003c/p\u003e\n',
    thematique_id: 'conso_resp',
    points: 14,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__3.3.1',
        id_nomenclature: '3.3.1',
        nom: 'Communiquer et sensibiliser \u00e0 la consommation responsable et \u00e0 la sobri\u00e9t\u00e9',
        description:
          '\u003cp\u003eLa collectivit\u00e9 communique (elle-m\u00eame ou en partenariat avec la R\u00e9gion, les chambres consulaires, les associations environnementales ou de consommateurs, les offices du tourisme\u2026) sur les activit\u00e9s de son territoire pour rendre visibles et accessibles les structures contribuant \u00e0 une consommation responsable et/ou \u00e0 la sobri\u00e9t\u00e9.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 sensibilise tous les acteurs aux enjeux environnementaux des activit\u00e9s et des consommations sur son territoire et \u00e0 la sobri\u00e9t\u00e9.\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.3.1.1',
            id_nomenclature: '3.3.1.1',
            nom: 'Disposer de support(s) de communication recensant les solutions de consommation sobre et responsable sur la territoire',
            description: '',
            thematique_id: 'conso_resp',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.1.2',
            id_nomenclature: '3.3.1.2',
            nom: 'Organiser des ateliers de sensibilisation \u00e0 la consommation sobre et responsable',
            description: '',
            thematique_id: 'conso_resp',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.1.3',
            id_nomenclature: '3.3.1.3',
            nom: 'Soutenir financi\u00e8rement ou organiser des \u00e9v\u00e8nements mettant en avant la consommation responsable et la sobri\u00e9t\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.3.2',
        id_nomenclature: '3.3.2',
        nom: 'Promouvoir et lancer une dynamique relative \u00e0 la consommation responsable et de sobri\u00e9t\u00e9',
        description:
          '\u003cp\u003eLa collectivit\u00e9 sensibilise et forme \u00e0 la consommation responsable et la sobri\u00e9t\u00e9 ses \u00e9lus et ses techniciens.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 \u00e9labore un document formalisant une vision et des actions de la consommation responsable et de sobri\u00e9t\u00e9 \u00e0 mettre en place pour son territoire. Ce document d\u00e9cline notamment la sobri\u00e9t\u00e9 sur les 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.3.2.1',
            id_nomenclature: '3.3.2.1',
            nom: 'Sensibiliser les \u00e9lus et les techniciens',
            description: '',
            thematique_id: 'conso_resp',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.2.2',
            id_nomenclature: '3.3.2.2',
            nom: 'Former les \u00e9lus et les techniciens',
            description: '',
            thematique_id: 'conso_resp',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.2.3',
            id_nomenclature: '3.3.2.3',
            nom: 'Disposer d\u0027une liste d\u2019actions \u00e0 d\u00e9cliner dans chaque service form\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.2.4',
            id_nomenclature: '3.3.2.4',
            nom: 'Formaliser dans un document une vision et un plan d\u0027action de la collectivit\u00e9 sur consommation responsable et la sobri\u00e9t\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: 25,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.3.3',
        id_nomenclature: '3.3.3',
        nom: 'Agir pour la consommation responsable et la sobri\u00e9t\u00e9 dans le cadre de ses comp\u00e9tences',
        description:
          '\u003cp\u003eLa collectivit\u00e9 met en place des actions de consommation responsable et de sobri\u00e9t\u00e9 sur ses comp\u00e9tences (\u00e9coles, garderies, espaces verts, gestion des d\u00e9chets \u2026)\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.3.3.1',
            id_nomenclature: '3.3.3.1',
            nom: 'R\u00e9aliser des actions \u00e0 destination d\u0027\u00e9tablissements scolaires',
            description: '',
            thematique_id: 'conso_resp',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.3.2',
            id_nomenclature: '3.3.3.2',
            nom: 'R\u00e9aliser des actions sur au moins 1 autre comp\u00e9tence de la collectivit\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.3.3',
            id_nomenclature: '3.3.3.3',
            nom: 'R\u00e9aliser des actions sur au moins 3 comp\u00e9tences de la collectivit\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.3.4',
            id_nomenclature: '3.3.3.4',
            nom: 'R\u00e9aliser des actions de fa\u00e7on transversale qui concernent toutes les actions de la collectivit\u00e9',
            description: '',
            thematique_id: 'conso_resp',
            points: 30,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.3.4',
        id_nomenclature: '3.3.4',
        nom: 'Accompagner les acteurs externes sur des actions de consommation responsable et de sobri\u00e9t\u00e9',
        description:
          '\u003cp\u003eLa collectivit\u00e9 accompagne les acteurs de son territoire sur des actions de consommation responsable et de sobri\u00e9t\u00e9. Elle aide au changement de comportement et favorise le d\u00e9veloppement d\u2019une offre sobre.\u003c/p\u003e\n',
        thematique_id: 'conso_resp',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.3.4.1',
            id_nomenclature: '3.3.4.1',
            nom: 'Mettre en place au moins une action',
            description: '',
            thematique_id: 'conso_resp',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.4.2',
            id_nomenclature: '3.3.4.2',
            nom: 'Mettre en place un ensemble d\u2019actions vers une cible',
            description: '',
            thematique_id: 'conso_resp',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.3.4.3',
            id_nomenclature: '3.3.4.3',
            nom: 'Mettre en place un ensemble d\u2019actions vers l\u0027ensemble des cibles cl\u00e9s du territoire',
            description: '',
            thematique_id: 'conso_resp',
            points: 40,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__3.4',
    id_nomenclature: '3.4',
    nom: 'Soutenir et accompagner l\u0027\u00e9coconception des produits transform\u00e9s et des services du territoire',
    description:
      '\u003cp\u003eL\u0027\u00e9coconception vise, d\u00e8s la conception d\u0027un proc\u00e9d\u00e9, d\u0027un bien ou d\u0027un service, \u00e0 prendre en compte l\u0027ensemble du cycle de vie en minimisant les impacts environnementaux.\u003c/p\u003e\n',
    thematique_id: 'dev_eco',
    points: 14,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__3.4.1',
        id_nomenclature: '3.4.1',
        nom: 'Animer le r\u00e9seau',
        description:
          '\u003cp\u003eLa collectivit\u00e9 anime (elle-m\u00eame ou en partenariat avec la R\u00e9gion, les chambres consulaires, les associations environnementales, \u2026) ou participe \u00e0 l\u0027animation d\u0027un r\u00e9seau d\u0027entreprises, afin d\u0027impulser une dynamique d\u0027engagement de celles-ci dans les d\u00e9marches d\u0027\u00e9co-conception ou d\u0027\u00e9co-innovation.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.4.1.1',
            id_nomenclature: '3.4.1.1',
            nom: 'Organiser au moins un \u00e9v\u00e8nement par an avec les entreprises du territoire',
            description: '',
            thematique_id: 'dev_eco',
            points: 5,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.4.1.2',
            id_nomenclature: '3.4.1.2',
            nom: 'Organiser au moins 2 \u00e9v\u00e8nements par an avec les entreprises du territoire',
            description: '',
            thematique_id: 'dev_eco',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.4.1.3',
            id_nomenclature: '3.4.1.3',
            nom: 'Organiser au moins 3 \u00e9v\u00e8nements par an avec les entreprises du territoire',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.4.1.4',
            id_nomenclature: '3.4.1.4',
            nom: 'Organiser au moins 4 \u00e9v\u00e8nements par an avec les entreprises du territoire',
            description: '',
            thematique_id: 'dev_eco',
            points: 100,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.4.2',
        id_nomenclature: '3.4.2',
        nom: 'Encourager la collaboration entreprises-\u00e9tablissements de formation',
        description:
          '\u003cp\u003eSi des \u00e9tablissements de formation (initiale ou continue) sont pr\u00e9sents sur son territoire, la collectivit\u00e9 encourage des collaborations entre les entreprises et ces \u00e9tablissements pour d\u00e9velopper de nouvelles solutions d\u0027\u00e9co-conception et une mont\u00e9e en comp\u00e9tences sur le sujet. Elle s\u0027appuie en particulier sur la R\u00e9gion (qui a la comp\u00e9tence formation / \u00e9ducation sup\u00e9rieure).\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.4.2.1',
            id_nomenclature: '3.4.2.1',
            nom: 'Etablir la liste des \u00e9tablissements du territoire qui dispensent une formation en \u00e9coconception',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.4.2.2',
            id_nomenclature: '3.4.2.2',
            nom: 'Disposer au moins d\u0027un partenariat avec un organisme/entreprise conclu sous l\u2019\u00e9gide de la collectivit\u00e9 abordant le d\u00e9veloppement de l\u0027\u00e9coconception',
            description: '',
            thematique_id: 'dev_eco',
            points: 80,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.4.3',
        id_nomenclature: '3.4.3',
        nom: 'Accompagner les entreprises',
        description:
          '\u003cp\u003eLa collectivit\u00e9 accompagne, seule ou en partenariat, les entreprises \u00e0 la mise en place de d\u00e9marches d\u0027\u00e9co-conception s\u0027appuyant ou non sur un \u00e9co-label (des labels environnementaux \u0026quot;100 labels environnementaux recommand\u00e9s par l\u2019ADEME\u0026quot;: https://agirpourlatransition.ademe.fr/particuliers/labels-environnementaux).\u003c/p\u003e\n\u003cp\u003eElle cible ses actions d\u0027accompagnement en mati\u00e8re d\u0027\u00e9co-conception, notamment sur les fili\u00e8res \u00e0 enjeux sur son territoire.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.4.3.1',
            id_nomenclature: '3.4.3.1',
            nom: 'Accompagner les entreprises au travers d\u0027op\u00e9rations collectives',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.4.3.2',
            id_nomenclature: '3.4.3.2',
            nom: 'Accompagner les entreprises au travers d\u0027un accompagnement individuel',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.4.4',
        id_nomenclature: '3.4.4',
        nom: 'Ecoconcevoir les projets \u00e0 impacts',
        description:
          '\u003cp\u003eLa collectivit\u00e9 encourage ou met en \u0153uvre la prise en compte de l\u0027ensemble du cycle de vie dans les \u00e9tudes d\u0027impacts de projets r\u00e9alis\u00e9s sur son territoire, au-del\u00e0 des impacts locaux dus \u00e0 son implantation.\u003c/p\u003e\n\u003cp\u003eL\u0027enjeux est de g\u00e9n\u00e9raliser la pens\u00e9e cycle de vie pour les projets structurants implant\u00e9s sur le territoire, notamment via l\u0027\u00e9co-conception des b\u00e2timents, des infrastractures, des ICPE, etc.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.4.4.1',
            id_nomenclature: '3.4.4.1',
            nom: 'Disposer d\u0027une m\u00e9thodologie d\u0027\u00e9coconception des projets \u00e0 impact',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.4.4.2',
            id_nomenclature: '3.4.4.2',
            nom: 'Mettre en \u0153uvre la pens\u00e9e cycle de vie sur les projets structurants',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__3.5',
    id_nomenclature: '3.5',
    nom: 'Soutenir et accompagner les projets d\u0027Ecologie Industrielle et Territoriale (EIT)',
    description:
      '\u003cp\u003eL\u0027EIT s\u0027appuie sur l\u0027\u00e9tude des flux  pour identifier et d\u00e9velopper des synergies entre acteurs \u00e9conomiques d\u2019un territoire :  substituer des flux de mati\u00e8res, d\u0027\u00e9nergies et d\u0027eau, initier la mutualisation de moyens et de services, le partage d\u0027infrastructures.\u003c/p\u003e\n\u003cp\u003eL\u2019EIT, par ses d\u00e9marches collectives et volontaires men\u00e9es sur un territoire en vue d\u2019en optimiser les ressources, r\u00e9concilie ainsi d\u00e9veloppement \u00e9conomique et meilleur usage des ressources, en privil\u00e9giant l\u2019ancrage des activit\u00e9s et de l\u2019emploi dans les territoires.\u003c/p\u003e\n\u003cp\u003eUne collectivit\u00e9 qui soutient et accompagne ce type de projet intervient \u00e0 diff\u00e9rents stades :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eimpulsion : mise en r\u00e9seau et sensibilisation des acteurs\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eop\u00e9ration : accompagner\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003efinancement\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n',
    thematique_id: 'dev_eco',
    points: 14,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__3.5.1',
        id_nomenclature: '3.5.1',
        nom: 'Elaborer la strat\u00e9gie et structurer en interne',
        description:
          '\u003cp\u003eConjointement avec les services D\u00e9veloppement \u00e9conomique et Environnement (d\u00e9chets, \u00e9conomie circulaire, climat, \u00e9nergie, etc.), la collectivit\u00e9 \u00e9labore un document formalisant sa strat\u00e9gie EIT (politique, feuille de route, etc.).\u003c/p\u003e\n\u003cp\u003eCe document doit notamment comporter les \u00e9l\u00e9ments suivants :\u003c/p\u003e\n\u003cp\u003e\u2022 Des objectifs chiffr\u00e9s (exemples : nombre de projets EIT dans lesquels elle va s\u0027impliquer, nombre d\u0027entreprises mobilis\u00e9es, impacts attendus : environnementaux, \u00e9conomiques, sociaux, emplois).\u003c/p\u003e\n\u003cp\u003e\u2022 Le niveau d\u2019implication de la collectivit\u00e9 :\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003esoit elle anime elle-m\u00eame la d\u00e9marche d\u0027EIT dans sa phase de structuration via un(e) charg\u00e9(e) de mission d\u00e9di\u00e9(e) (recrut\u00e9(e) ou interne form\u00e9(e))\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003esoit elle contribue au d\u00e9ploiement de la d\u00e9marche d\u0027EIT de son territoire en tant que partenaire-facilitateur-financeur (relais pour mobiliser les entreprises, participation au comit\u00e9 de pilotage et \u00e0 la gouvernance, financements \u00e9ventuels d\u0027\u00e9tudes ou de postes, ...)\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u2022 La fa\u00e7on dont les services concern\u00e9s doivent se structurer et s\u2019organiser pour int\u00e9grer les principes de l\u0027EIT dans leurs projets (am\u00e9nagement, urbanisme et tous autres services dont l\u2019implication est jug\u00e9e pertinente).\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 20,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.5.2',
        id_nomenclature: '3.5.2',
        nom: 'Mettre en r\u00e9seau les acteurs et mettre en place une gouvernance',
        description:
          '\u003cp\u003eLa collectivit\u00e9 contribue \u00e0 la mobilisation autour de l\u0027EIT par une mise en r\u00e9seau des acteurs pertinents (chambres consulaires, agences de d\u00e9veloppement \u00e9conomique, syndicats d\u00e9chets, associations d\u0027entreprises et de zones d\u0027activit\u00e9s, DREAL/DIRECCTE, universit\u00e9/laboratoire de recherche, etc.). Elle r\u00e9alise notamment des actions de communication et de sensibilisation sur l\u0027EIT et organise des rencontres entre les acteurs.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 contribue \u00e0 la mise en place d\u2019une gouvernance territoriale de la d\u00e9marche d\u0027EIT avec l\u0027ensemble de ses acteurs.\u003c/p\u003e\n\u003cp\u003eElle participe et contribue au r\u00e9seau r\u00e9gional d\u2019EIT quand il existe.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.5.2.1',
            id_nomenclature: '3.5.2.1',
            nom: 'R\u00e9aliser au moins une action',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.2.2',
            id_nomenclature: '3.5.2.2',
            nom: 'R\u00e9aliser au moins 2 actions',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.2.3',
            id_nomenclature: '3.5.2.3',
            nom: 'R\u00e9aliser au moins 3 actions',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.2.4',
            id_nomenclature: '3.5.2.4',
            nom: 'R\u00e9aliser au moins 4 actions',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.5.3',
        id_nomenclature: '3.5.3',
        nom: 'Accompagner op\u00e9rationnellement les projets',
        description:
          '\u003cp\u003eLa collectivit\u00e9 a attribu\u00e9 un financement pluriannuel \u00e0 la d\u00e9marche d\u0027EIT ou a internalis\u00e9 un poste d\u0027animateur(trice) en charge de l\u0027accompagnement des projets d\u0027EIT du territoire.\u003c/p\u003e\n\u003cp\u003eEn tant que porteur ou partenaire-facilitateur-financeur, la collectivit\u00e9 participe \u00e0 la recherche et \u00e0 l\u2019identification de nouvelles synergies sur son territoire (via les outils m\u00e9thodologiques de l\u2019EIT : diagnostic de flux, animation d\u2019ateliers collaboratifs inter-entreprises, visites d\u0027entreprises, etc.).\u003c/p\u003e\n\u003cp\u003eLe travail de coop\u00e9ration avec les acteurs du territoire a permis de qualifier des opportunit\u00e9s de synergies. Gr\u00e2ce \u00e0 l\u0027accompagnement de la collectivit\u00e9 (cofinancement d\u0027\u00e9tudes de faisabilit\u00e9 de synergies), certaines d\u2019entre elles ont \u00e9t\u00e9 mises en \u0153uvre.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 int\u00e8gre les principes de l\u0027EIT dans ses projets de d\u00e9veloppement \u00e9conomique et d\u0027am\u00e9nagement du territoire (cr\u00e9ation, extension, requalification de zones d\u2019activit\u00e9s).\u003c/p\u003e\n\u003cp\u003eDes activit\u00e9s de la collectivit\u00e9 sont engag\u00e9es dans des synergies, en particulier sur des th\u00e9matiques telles que les b\u00e2timents, la voirie/infrastructure de transport, le d\u00e9veloppement ou l\u2019animation des parcs et zones d\u2019activit\u00e9s, le traitement de l\u2019eau et des eaux us\u00e9es, ou encore la gestion des d\u00e9chets.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.5.3.1',
            id_nomenclature: '3.5.3.1',
            nom: 'Financer ou internaliser un animateur EIT',
            description: '',
            thematique_id: 'dev_eco',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.3.2',
            id_nomenclature: '3.5.3.2',
            nom: 'Contribuer \u00e0 l\u0027identification de nouvelles synergies',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.3.3',
            id_nomenclature: '3.5.3.3',
            nom: 'Mettre en \u0153uvre au moins une synergie par an',
            description: '',
            thematique_id: 'dev_eco',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.3.4',
            id_nomenclature: '3.5.3.4',
            nom: 'Mettre en \u0153uvre au moins 2 synergies par an',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.3.5',
            id_nomenclature: '3.5.3.5',
            nom: 'Mettre en \u0153uvre 3 synergies ou plus par an',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.3.6',
            id_nomenclature: '3.5.3.6',
            nom: 'Int\u00e9grer l\u0027eit dans les projets d\u0027am\u00e9nagement du territoire (zones d\u0027activit\u00e9s)',
            description: '',
            thematique_id: 'dev_eco',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.3.7',
            id_nomenclature: '3.5.3.7',
            nom: 'Au moins une synergie mise en \u0153uvre sur les activit\u00e9s de la collectivit\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: 10,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.5.4',
        id_nomenclature: '3.5.4',
        nom: 'P\u00e9renniser et partager les exp\u00e9riences',
        description:
          '\u003cp\u003eLa collectivit\u00e9 impulse et/ou pilote la cr\u00e9ation ou le transfert du pilotage de la d\u00e9marche d\u0027EIT \u00e0 une structure externe d\u00e9di\u00e9e (acteur-tiers) dont la gouvernance est multi-acteurs. Si la structure existe d\u00e9j\u00e0, elle participe \u00e0 sa consolidation. Elle participe aux instances de gouvernance aupr\u00e8s des autres acteurs partenaires (entreprises, associations, etc.).\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 participe \u00e0 la d\u00e9finition du mod\u00e8le \u00e9conomique de l\u2019acteur-tiers sur le territoire et s\u2019assure d\u2019un \u00e9quilibre de financement priv\u00e9s et publics et d\u2019autofinancement de l\u2019acteur-tiers.\u003c/p\u003e\n\u003cp\u003eUn ETP est d\u00e9di\u00e9 au portage de la d\u00e9marche pour assurer sa p\u00e9rennit\u00e9.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 incite les projets d\u0027EIT de son territoire \u00e0 s\u0027\u00e9valuer sur la plateforme ELIPSE et \u00e0 valoriser les retours d\u0027exp\u00e9rience au sein du r\u00e9seau SYNAPSE (r\u00e9seau national des acteurs de l\u0027EIT).\u003c/p\u003e\n\u003cp\u003eElle communique plus largement sur les projets \u00e0 forte valeur ajout\u00e9e.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.5.4.1',
            id_nomenclature: '3.5.4.1',
            nom: 'Transf\u00e9rer le pilotage de la d\u00e9marche',
            description: '',
            thematique_id: 'dev_eco',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.4.2',
            id_nomenclature: '3.5.4.2',
            nom: 'Disposer d\u0027un ETP d\u00e9di\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.5.4.3',
            id_nomenclature: '3.5.4.3',
            nom: 'Renseigner les projets EIT sur la plateforme ELIPSE et SYNAPSE et communiquer',
            description: '',
            thematique_id: 'dev_eco',
            points: 20,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__3.6',
    id_nomenclature: '3.6',
    nom: 'Soutenir et accompagner l\u0027\u00e9conomie de la fonctionnalit\u00e9',
    description:
      '\u003cp\u003eL\u2019\u00e9conomie de la fonctionnalit\u00e9 \u00e9tablit une nouvelle relation entre l\u2019offre et la demande qui n\u2019est plus uniquement bas\u00e9e sur la simple vente de biens ou de services. La contractualisation repose sur les effets utiles (b\u00e9n\u00e9fices) et l\u2019offre s\u2019adapte aux besoins r\u00e9els des personnes, des entreprises et des collectivit\u00e9s ainsi qu\u2019aux enjeux relatifs au d\u00e9veloppement durable. Ce mod\u00e8le \u00e9conomique induit plus largement des transformations profondes dans les modes de production et de consommation. Les solutions doivent permettre une moindre consommation des ressources naturelles dans une perspective d\u2019\u00e9conomie circulaire, un accroissement du bien-\u00eatre des personnes et un d\u00e9veloppement \u00e9conomique.\u003c/p\u003e\n',
    thematique_id: 'dev_eco',
    points: 14,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__3.6.1',
        id_nomenclature: '3.6.1',
        nom: 'Sensibiliser et former',
        description:
          '\u003cp\u003eLa collectivit\u00e9 forme les \u00e9lus et son personnel aux nouveaux mod\u00e8les \u00e9conomiques en lien avec la transition \u00e9cologique et sociale des territoires.\u003c/p\u003e\n\u003cp\u003eElle sensibilise les acteurs \u00e9conomiques de son territoire \u00e0 l\u2019\u00e9conomie de la fonctionnalit\u00e9 (entreprises, associations, collectivit\u00e9s, etc.).\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.6.1.1',
            id_nomenclature: '3.6.1.1',
            nom: 'D\u00e9cider d\u0027engager une formation du personnel de la collectivit\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.6.1.2',
            id_nomenclature: '3.6.1.2',
            nom: 'Disposer d\u0027un personnel de la collectivit\u00e9 form\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.6.1.3',
            id_nomenclature: '3.6.1.3',
            nom: 'D\u00e9cider d\u0027engager une sensibilisation des acteurs du territoire',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.6.1.4',
            id_nomenclature: '3.6.1.4',
            nom: 'Sensibiliser les acteurs du territoire',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.6.2',
        id_nomenclature: '3.6.2',
        nom: 'Soutenir des structures d\u0027animation territoriale et int\u00e9grer des pratiques d\u0027\u00e9conomie de la fonctionnalit\u00e9 dans la commande publique',
        description:
          '\u003cp\u003eLa collectivit\u00e9 soutient des structures d\u0027animation territoriale qui portent des actions d\u2019\u00e9conomie de la fonctionnalit\u00e9 vers les entreprises ou les collectivit\u00e9s territoriales. Elle adh\u00e8re \u00e0 une telle structure et participe \u00e0 la promotion de cette structure et finance des actions sp\u00e9cifiques.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 int\u00e8gre elle-m\u00eame des crit\u00e8res d\u0027\u00e9conomie de la fonctionnalit\u00e9 dans sa politique d\u0027achats publics pour r\u00e9pondre \u00e0 ses besoins internes.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 35,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.6.2.1',
            id_nomenclature: '3.6.2.1',
            nom: 'Participer \u00e0 des actions d\u0027animation',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.6.2.2',
            id_nomenclature: '3.6.2.2',
            nom: 'Adh\u00e9rer \u00e0 une structure d\u0027animation',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.6.2.3',
            id_nomenclature: '3.6.2.3',
            nom: 'Int\u00e9grer des crit\u00e8res d\u0027\u00e9conomie de la fonctionnalit\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.6.3',
        id_nomenclature: '3.6.3',
        nom: 'Initier ou participer \u00e0 des projets coop\u00e9ratifs territoriaux',
        description:
          '\u003cp\u003eLa collectivit\u00e9 initie ou participe \u00e0 des projets coop\u00e9ratifs territoriaux d\u0027\u00e9conomie de la fonctionnalit\u00e9 pour r\u00e9pondre \u00e0 ses missions de service public ou pour r\u00e9pondre plus largement aux enjeux de d\u00e9veloppement durable (DD) sur son territoire.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.6.3.1',
            id_nomenclature: '3.6.3.1',
            nom: 'Commencer \u00e0 \u00e9laborer un projet coop\u00e9ratif territorial d\u0027\u00e9conomie de la fonctionnalit\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.6.3.2',
            id_nomenclature: '3.6.3.2',
            nom: 'Constituer et stabiliser un groupe projet  coop\u00e9ratif territorial d\u0027\u00e9conomie de la fonctionnalit\u00e9',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.6.4',
        id_nomenclature: '3.6.4',
        nom: 'Evaluer les effets',
        description:
          '\u003cp\u003eLa collectivit\u00e9 \u00e9value les effets utiles de la mise en place d\u0027actions de l\u0027\u00e9conomie de la fonctionnalit\u00e9 pour les parties prenantes et pour le territoire. Elle tient compte des retours d\u0027exp\u00e9rience pour ses futures actions.\u003c/p\u003e\n',
        thematique_id: 'dev_eco',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.6.4.1',
            id_nomenclature: '3.6.4.1',
            nom: 'Identifier les effets \u00e0 \u00e9valuer',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.6.4.2',
            id_nomenclature: '3.6.4.2',
            nom: 'Identifier les modalit\u00e9s d\u0027\u00e9valuation',
            description: '',
            thematique_id: 'dev_eco',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.6.4.3',
            id_nomenclature: '3.6.4.3',
            nom: 'Mettre en place une \u00e9valuation',
            description: '',
            thematique_id: 'dev_eco',
            points: 50,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__3.7',
    id_nomenclature: '3.7',
    nom: 'Soutenir et accompagner la recherche, l\u0027innovation et l\u0027exp\u00e9rimentation',
    description:
      '\u003cp\u003eLa collectivit\u00e9 soutient des projets de recherche et d\u0027innovation (R\u0026amp;I), tant sur le volet technologique qu\u0027organisationnel afin de promouvoir les pratiques d\u0027\u00e9conomie circulaire (hors 3.4 \u00e0 3.7).\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: 14,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__3.7.1',
        id_nomenclature: '3.7.1',
        nom: 'Accompagner non financi\u00e8rement des programmes',
        description:
          '\u003cp\u003eDans un souci de l\u0027am\u00e9lioration continue, la collectivit\u00e9 accueille des programmes d\u0027\u00e9tude ou de R\u0026amp;I sur son territoire. La R\u0026amp;I et l\u0027exp\u00e9rimentation peuvent porter sur des nouvelles techniques, ainsi que sur les modes d\u0027organisation ou des mod\u00e8les d\u0027affaires.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 \u00e9tablit des partenariats avec les acteurs de la recherche.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.7.1.1',
            id_nomenclature: '3.7.1.1',
            nom: 'Accepter des sollicitations pour des programmes d\u0027\u00e9tudes ou de R\u0026I',
            description: '',
            thematique_id: 'parten_coop',
            points: 40,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.7.1.2',
            id_nomenclature: '3.7.1.2',
            nom: 'S\u0027impliquer dans le suivi des travaux',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.7.1.3',
            id_nomenclature: '3.7.1.3',
            nom: 'S\u0027approprier les r\u00e9sultats afin d\u0027am\u00e9liorer ses pratiques',
            description: '',
            thematique_id: 'parten_coop',
            points: 40,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__3.7.2',
        id_nomenclature: '3.7.2',
        nom: 'Financer des projets de R\u0026I',
        description:
          '\u003cp\u003eLa collectivit\u00e9 soutient financi\u00e8rement un (ou des) projet(s) de R\u0026amp;I sur des fili\u00e8res \u00e9conomie circulaire. Elle r\u00e9alise une veille permanente des innovations en \u00e9conomie circulaire sur son territoire afin de valoriser et d\u0027accompagner le d\u00e9veloppement d\u0027initiatives locales. La collectivit\u00e9 fait partie de l\u0027\u00e9cosyst\u00e8me r\u00e9gional qui finance les projets de recherche.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 participe financi\u00e8rement aux programmes d\u0027innovation r\u00e9gionaux (incubateurs, programmes de formation, etc.).\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 75,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__3.7.2.1',
            id_nomenclature: '3.7.2.1',
            nom: 'Disposer d\u0027au moins 1 projet en tant que collectivit\u00e9 \u003c 100 000 habitants ou entre 2 \u00e0 9 projets en tant que collectivit\u00e9 \u003e 100 000 habitants',
            description: '',
            thematique_id: 'parten_coop',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__3.7.2.2',
            id_nomenclature: '3.7.2.2',
            nom: 'Disposer d\u0027au moins 2 projets  en tant que collectivit\u00e9 \u003c 100 000 habitants ou au moins 10 projets en tant que collectivit\u00e9 \u003e 100 000 habitants',
            description: '',
            thematique_id: 'parten_coop',
            points: 50,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__4.1',
    id_nomenclature: '4.1',
    nom: 'Conna\u00eetre les co\u00fbts de la gestion des d\u00e9chets pour ma\u00eetriser les d\u00e9penses publiques',
    description:
      '\u003cp\u003eLa ma\u00eetrise des d\u00e9penses publiques se caract\u00e9rise par la capacit\u00e9 de la collectivit\u00e9 \u00e0 identifier les marges de man\u0153uvre \u00e9conomiques des services dont elle a la ma\u00eetrise d\u0027ouvrage tout en maintenant la qualit\u00e9 du service. Concernant l\u0027\u00e9conomie circulaire, il s\u0027agit principalement de la collecte et du traitement des d\u00e9chets mais aussi d\u0027autres actions en faveur de l\u0027\u00e9conomie circulaire. Cela n\u00e9cessite un suivi pr\u00e9cis et d\u00e9taill\u00e9 des co\u00fbts et permet, in fine, de mettre en place des actions optimisant ces co\u00fbts.\u003c/p\u003e\n',
    thematique_id: 'dechets',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__4.1.0',
        id_nomenclature: '4.1.0',
        nom: 'R\u00e9diger le rapport annuel SPPGD',
        description:
          '\u003cp\u003eLa collectivit\u00e9 produit le rapport annuel du service public de pr\u00e9vention et de gestion des d\u00e9chets m\u00e9nagers et assimil\u00e9s (SPPGD) qui r\u00e9pond aux exigences r\u00e9glementaires en mati\u00e8re d\u0027indicateurs techniques et \u00e9conomiques.\u003c/p\u003e\n\u003cp\u003eEn cas de non-conformit\u00e9, la collectivit\u00e9 doit justifier d\u0027un plan d\u0027actions correctives et de l\u0027absence de contentieux.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: -1.0,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.1.0.1',
            id_nomenclature: '4.1.0.1',
            nom: 'R\u00e9diger le rapport annuel',
            description: '',
            thematique_id: 'dechets',
            points: 60,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.1.0.2',
            id_nomenclature: '4.1.0.2',
            nom: 'R\u00e9diger le rapport annuel avec tous les \u00e9l\u00e9ments du d\u00e9cret et le publier en ligne',
            description: '',
            thematique_id: 'dechets',
            points: 40,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.1.1',
        id_nomenclature: '4.1.1',
        nom: 'Conna\u00eetre la structure des co\u00fbts de la gestion des d\u00e9chets',
        description:
          '\u003cp\u003eLa collectivit\u00e9 r\u00e9alise annuellement la matrice des co\u00fbts.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 se positionne par rapport \u00e0 d\u0027autres collectivit\u00e9s via la matrice des co\u00fbts.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.1.1.1',
            id_nomenclature: '4.1.1.1',
            nom: 'R\u00e9aliser la matrice des co\u00fbts',
            description: '',
            thematique_id: 'dechets',
            points: 60,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.1.1.2',
            id_nomenclature: '4.1.1.2',
            nom: 'Positionner les r\u00e9sultats de la matrice des co\u00fbts par rapport \u00e0 d\u0027autres collectivit\u00e9s',
            description: '',
            thematique_id: 'dechets',
            points: 40,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.1.2',
        id_nomenclature: '4.1.2',
        nom: 'Etudier les pistes d\u0027optimisation',
        description:
          '\u003cp\u003eLa collectivit\u00e9 analyse les r\u00e9sultats de la matrice afin d\u0027identifier les pistes d\u0027optimisation.\u003c/p\u003e\n\u003cp\u003eLa collectivit\u00e9 a r\u00e9alis\u00e9 une \u00e9tude d\u0027optimisation sur tout ou partie de ses services.\u003c/p\u003e\n\u003cp\u003eSi cela est n\u00e9cessaire, la collectivit\u00e9 a \u00e9tudi\u00e9 une r\u00e9organisation possible pour ma\u00eetriser les co\u00fbts du service.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.1.2.1',
            id_nomenclature: '4.1.2.1',
            nom: 'Analyser la matrice des co\u00fbts',
            description: '',
            thematique_id: 'dechets',
            points: 80,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.1.2.2',
            id_nomenclature: '4.1.2.2',
            nom: 'R\u00e9aliser une \u00e9tude au cours des deux derni\u00e8res ann\u00e9es \u00e9coul\u00e9es',
            description: '',
            thematique_id: 'dechets',
            points: 20,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.1.3',
        id_nomenclature: '4.1.3',
        nom: 'Agir pour optimiser les d\u00e9penses publiques de gestion de d\u00e9chets',
        description:
          '\u003cp\u003eSuite \u00e0 l\u2019\u00e9tude d\u2019optimisation d\u00e9sign\u00e9e en 4.1.2., la collectivit\u00e9 met en \u0153uvre des actions d\u0027optimisation et \u00e9value les r\u00e9sultats.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.1.3.1',
            id_nomenclature: '4.1.3.1',
            nom: 'Mettre en \u0153uvre jusqu\u0027\u00e0 50% des actions suite \u00e0 l\u0027\u00e9tude',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.1.3.2',
            id_nomenclature: '4.1.3.2',
            nom: 'Mettre en \u0153uvre plus de 50% des actions suite \u00e0 l\u0027\u00e9tude',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.1.3.3',
            id_nomenclature: '4.1.3.3',
            nom: 'Mettre en \u0153uvre toutes les actions suite \u00e0 l\u0027\u00e9tude',
            description: '',
            thematique_id: 'dechets',
            points: 25,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.1.4',
        id_nomenclature: '4.1.4',
        nom: 'Communiquer sur la d\u00e9marche d\u0027optimisation',
        description:
          '\u003cp\u003eLa collectivit\u00e9 s\u0027engage dans une communication transparente sur sa d\u00e9marche d\u0027optimisation des co\u00fbts de la gestion des d\u00e9chets. Faire connaitre ces efforts d\u0027optimisation est un levier de mobilisation des usagers pour la pr\u00e9vention des d\u00e9chets et le changement de comportement.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.1.4.1',
            id_nomenclature: '4.1.4.1',
            nom: 'Communiquer sur le positionnement et les r\u00e9sultats',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.1.4.2',
            id_nomenclature: '4.1.4.2',
            nom: 'Communiquer sur les objectifs et la d\u00e9marche d\u0027am\u00e9lioration',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__4.2',
    id_nomenclature: '4.2',
    nom: 'Mettre en place un syst\u00e8me de financement qui encourage l\u0027adh\u00e9sion aux pratiques de l\u0027\u00e9conomie circulaire',
    description:
      '\u003cp\u003eUn syst\u00e8me de financement adapt\u00e9 peut \u00eatre un levier de sensibilisation important pour susciter l\u0027adh\u00e9sion aux pratiques de l\u0027\u00e9conomie circulaire. Un tel syst\u00e8me de financement vise au changement de comportement des acteurs du territoire et b\u00e9n\u00e9ficiaires des financements.\u003c/p\u003e\n',
    thematique_id: 'dechets',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__4.2.1',
        id_nomenclature: '4.2.1',
        nom: 'Facturer des usagers non m\u00e9nagers',
        description:
          '\u003cp\u003eLa collectivit\u00e9, si elle n\u0027est pas en REOM, met en place la Redevance Sp\u00e9ciale pour les usagers non m\u00e9nagers.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.2.1.1',
            id_nomenclature: '4.2.1.1',
            nom: 'Engager la mise en place de la redevance sp\u00e9ciale',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.2.1.2',
            id_nomenclature: '4.2.1.2',
            nom: 'Couvrir toutes les communes du territoire avec la redevance sp\u00e9ciale',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.2.2',
        id_nomenclature: '4.2.2',
        nom: 'Etudier le potentiel de mise en place de la Tarification incitative (Ti)',
        description:
          '\u003cp\u003eLa collectivit\u00e9 \u00e9tudie la mise en place d\u0027un syst\u00e8me de Ti (y compris redevance sp\u00e9ciale en cas de Taxe d\u2019Enl\u00e8vement des Ordures M\u00e9nag\u00e8res (TEOM) incitative) sur l\u0027ensemble du territoire.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.2.2.1',
            id_nomenclature: '4.2.2.1',
            nom: 'Engager l\u0027\u00e9tude de la mise en place de la tarification incitative (phase de lancement)',
            description: '',
            thematique_id: 'dechets',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.2.2.2',
            id_nomenclature: '4.2.2.2',
            nom: 'Disposer d\u0027une \u00e9tude de mise en place de la tarification incitative en cours de r\u00e9alisation (phase de r\u00e9alisation)',
            description: '',
            thematique_id: 'dechets',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.2.2.3',
            id_nomenclature: '4.2.2.3',
            nom: 'Disposer d\u0027une \u00e9tude de mise en place de la tarification incitative r\u00e9alis\u00e9e (\u00e9tude termin\u00e9e)',
            description: '',
            thematique_id: 'dechets',
            points: 34,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.2.3',
        id_nomenclature: '4.2.3',
        nom: 'Mettre en \u0153uvre la Redevance Sp\u00e9ciale incitative pour les usagers non m\u00e9nagers',
        description:
          '\u003cp\u003eLa collectivit\u00e9, si elle n\u0027est pas en REOM, facture la Redevance Sp\u00e9ciale avec une part variable en fonction des lev\u00e9es et/ou pes\u00e9es effectu\u00e9es.\u003c/p\u003e\n\u003cp\u003eLa facturation est diff\u00e9renti\u00e9e par flux et donc pour le service mobilis\u00e9.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.2.3.1',
            id_nomenclature: '4.2.3.1',
            nom: 'Inclure une part variable dans la redevance sp\u00e9ciale en fonction des lev\u00e9es et/ou pes\u00e9es',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.2.3.2',
            id_nomenclature: '4.2.3.2',
            nom: 'Diff\u00e9rencier la redevance sp\u00e9ciale en fonction des flux',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.2.4',
        id_nomenclature: '4.2.4',
        nom: 'Mettre en \u0153uvre la Tarification incitative (Ti) pour tous les usagers',
        description:
          '\u003cp\u003eAu cas o\u00f9 l\u0027\u00e9tude sur la mise en place de la Ti est concluante, la collectivit\u00e9 met en place la Ti (y compris Redevance Sp\u00e9ciale en cas de TEOM incitative).\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: 15,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.2.4.1',
            id_nomenclature: '4.2.4.1',
            nom: 'Lancer la mise en place de la tarification incitative',
            description: '',
            thematique_id: 'dechets',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.2.4.2',
            id_nomenclature: '4.2.4.2',
            nom: 'Couvrir toute la population de la collectivit\u00e9 avec la tarification incitative',
            description: '',
            thematique_id: 'dechets',
            points: 70,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.2.5',
        id_nomenclature: '4.2.5',
        nom: 'Mettre en place la Tarification incitative (Ti) du second niveau',
        description:
          '\u003cp\u003eAfin de r\u00e9compenser les collectivit\u00e9s qui fournissent les efforts de pr\u00e9vention et de collecte s\u00e9lective les plus significatifs, la collectivit\u00e9 en charge de traitement mets en place la Ti du second niveau.\u003c/p\u003e\n',
        thematique_id: 'dechets',
        points: -1.0,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.2.5.1',
            id_nomenclature: '4.2.5.1',
            nom: 'Inclure une part variable en fonction de sa production de d\u00e9chets dans la facturation des adh\u00e9rents',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.2.5.2',
            id_nomenclature: '4.2.5.2',
            nom: 'Diff\u00e9rentier la facturation des adh\u00e9rents en fonction des  flux',
            description: '',
            thematique_id: 'dechets',
            points: 50,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__4.3',
    id_nomenclature: '4.3',
    nom: 'Promouvoir et mettre en place des outils financiers en faveur de l\u0027\u00e9conomie circulaire \u00e0 destination des autres acteurs du territoire',
    description:
      '\u003cp\u003eLes outils financiers constituent une voie de mobilisation des autres acteurs du territoire. La collectivit\u00e9 peut promouvoir les financements tiers et l\u0027\u00e9mergence de nouveaux mod\u00e8les \u00e9conomiques.\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__4.3.1',
        id_nomenclature: '4.3.1',
        nom: 'R\u00e9aliser une veille',
        description:
          '\u003cp\u003eLa collectivit\u00e9 s\u0027informe sur les moyens de financements existants aupr\u00e8s des organismes qui agr\u00e8gent d\u00e9j\u00e0 l\u0027information dans le but de d\u00e9velopper et porter des projets d\u0027\u00e9conomie circulaire. Les acteurs relais possibles : agences de d\u00e9veloppement, CCI, r\u00e9seaux, etc.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.3.2',
        id_nomenclature: '4.3.2',
        nom: 'Communiquer sur les moyens de financement',
        description:
          '\u003cp\u003eLa collectivit\u00e9 communique sur ces moyens de financement.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.3.3',
        id_nomenclature: '4.3.3',
        nom: 'Accompagner les acteurs du territoire',
        description:
          '\u003cp\u003eLa collectivit\u00e9 accompagne les acteurs de son territoire dans leur recherche de financements en faveur de l\u0027\u00e9conomie circulaire en fonction de leurs besoins. Elle identifie, valorise et communique autour des d\u00e9marches exemplaires du territoire.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 35,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.3.3.1',
            id_nomenclature: '4.3.3.1',
            nom: 'Mettre en place des moyens pour identifier les acteurs en recherche de financements',
            description: '',
            thematique_id: 'parten_coop',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.3.3.2',
            id_nomenclature: '4.3.3.2',
            nom: 'Mettre en place des moyens pour accompagner les acteurs sur la recherche de financements',
            description: '',
            thematique_id: 'parten_coop',
            points: 33,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.3.3.3',
            id_nomenclature: '4.3.3.3',
            nom: 'Accompagner des projets',
            description: '',
            thematique_id: 'parten_coop',
            points: 34,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__4.3.4',
        id_nomenclature: '4.3.4',
        nom: 'Financer des projets sur le sujet de l\u0027\u00e9conomie circulaire',
        description:
          '\u003cp\u003eLa collectivit\u00e9 r\u00e9serve une part de son budget au financement de projets sur le sujet de l\u0027\u00e9conomie circulaire. Elle mets en coh\u00e9rence les subventions des acteurs du territoire au regard de la sobri\u00e9t\u00e9.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 25,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__4.3.4.1',
            id_nomenclature: '4.3.4.1',
            nom: 'Disposer de document de r\u00e9f\u00e9rence pr\u00e9sentant les modalit\u00e9s de financement',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.3.4.2',
            id_nomenclature: '4.3.4.2',
            nom: 'Lister les projets',
            description: '',
            thematique_id: 'parten_coop',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__4.3.4.3',
            id_nomenclature: '4.3.4.3',
            nom: 'Mettre en coh\u00e9rence les subventions allou\u00e9es aux acteurs du territoire au regard de la sobri\u00e9t\u00e9',
            description: '',
            thematique_id: 'parten_coop',
            points: 50,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__5.1',
    id_nomenclature: '5.1',
    nom: 'Actions dirig\u00e9es vers le Grand Public et les associations',
    description:
      '\u003cp\u003eL\u0027objectif est d\u0027encourager la collectivit\u00e9 \u00e0 mettre en place une politique d\u0027actions avec les cibles grand public (citoyens, scolaires, groupements citoyens associatifs ou non, ...) sur l\u0027ensemble des 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__5.1.1',
        id_nomenclature: '5.1.1',
        nom: 'Informer et sensibiliser le grand public',
        description:
          '\u003cp\u003eDans une logique de sobri\u00e9t\u00e9, la collectivit\u00e9 informe, sensibilise et forme le grand public sur les enjeux environnementaux en lien avec les 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.1.1.1',
            id_nomenclature: '5.1.1.1',
            nom: 'R\u00e9aliser au moins 1 action sur 1 pilier (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 1 pilier (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.1.2',
            id_nomenclature: '5.1.1.2',
            nom: 'R\u00e9aliser au moins 1 action sur 2 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 2 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.1.3',
            id_nomenclature: '5.1.1.3',
            nom: 'R\u00e9aliser au moins 1 action sur 3 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 3 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.1.4',
            id_nomenclature: '5.1.1.4',
            nom: 'R\u00e9aliser au moins 1 action sur 4 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 4 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.1.5',
            id_nomenclature: '5.1.1.5',
            nom: 'R\u00e9aliser au moins 1 action sur 5 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 5 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.1.6',
            id_nomenclature: '5.1.1.6',
            nom: 'R\u00e9aliser au moins 1 action sur 6 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 6 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.1.7',
            id_nomenclature: '5.1.1.7',
            nom: 'R\u00e9aliser au moins 1 action sur 7 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 7 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__5.1.2',
        id_nomenclature: '5.1.2',
        nom: 'Aider \u00e0 l\u0027action en direction du grand public',
        description:
          '\u003cp\u003eLa collectivit\u00e9 soutient des actions concr\u00e8tes r\u00e9alis\u00e9es en direction du grand public sur les 7 piliers de l\u0027\u00e9conomie circulaire en s\u0027appuyant sur les initiatives du territoire.\u003c/p\u003e\n\u003cp\u003eCes actions peuvent \u00eatre d\u00e9j\u00e0 mentionn\u00e9es dans les axes pr\u00e9c\u00e9dents.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.1.2.1',
            id_nomenclature: '5.1.2.1',
            nom: 'R\u00e9aliser au moins 1 action sur 1 pilier (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 1 pilier (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.2.2',
            id_nomenclature: '5.1.2.2',
            nom: 'R\u00e9aliser au moins 1 action sur 2 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 2 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.2.3',
            id_nomenclature: '5.1.2.3',
            nom: 'R\u00e9aliser au moins 1 action sur 3 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 3 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.2.4',
            id_nomenclature: '5.1.2.4',
            nom: 'R\u00e9aliser au moins 1 action sur 4 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 4 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.2.5',
            id_nomenclature: '5.1.2.5',
            nom: 'R\u00e9aliser au moins 1 action sur 5 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 5 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.2.6',
            id_nomenclature: '5.1.2.6',
            nom: 'R\u00e9aliser au moins 1 action sur 6 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 6 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.2.7',
            id_nomenclature: '5.1.2.7',
            nom: 'R\u00e9aliser au moins 1 action sur 7 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 7 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__5.1.3',
        id_nomenclature: '5.1.3',
        nom: 'F\u00e9d\u00e9rer les acteurs du territoire',
        description:
          '\u003cp\u003eLa collectivit\u00e9 cr\u00e9e des espaces communs de dialogue afin d\u0027encourager et amplifier les actions sur le territoire. Elle structure des partenariats avec les associations (et autres acteurs) sur les 7 piliers de l\u0027\u00e9conomie circulaire. Elle mesure la r\u00e9ussite des partenariats mis en place et valorise les r\u00e9sultats.\u003c/p\u003e\n\u003cp\u003eUn partenariat peut couvrir plusieurs piliers.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.1.3.1',
            id_nomenclature: '5.1.3.1',
            nom: 'R\u00e9aliser une enqu\u00eate sur les besoins des acteurs',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.3.2',
            id_nomenclature: '5.1.3.2',
            nom: 'Analyser les besoins',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.3.3',
            id_nomenclature: '5.1.3.3',
            nom: 'Cr\u00e9er un ou des espaces communs de dialogue pour les acteurs du territoire',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.3.4',
            id_nomenclature: '5.1.3.4',
            nom: 'Disposer d\u0027accord(s) avec un ou plusieurs acteurs grand public du territoire',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.1.3.5',
            id_nomenclature: '5.1.3.5',
            nom: 'Publier les indicateurs de r\u00e9ussite des partenariats',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__5.2',
    id_nomenclature: '5.2',
    nom: 'Actions dirig\u00e9es vers les autres collectivit\u00e9s du territoire',
    description:
      '\u003cp\u003eL\u0027objectif est d\u0027encourager la collectivit\u00e9 \u00e0 d\u00e9ployer une politique d\u0027actions \u00e9conomie circulaire vers les collectivit\u00e9s infra et supra et les EPCI qui interviennent sur son territoire sur l\u0027ensemble des 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n\u003cp\u003eCes actions peuvent \u00eatre d\u00e9j\u00e0 mentionn\u00e9es dans les axes pr\u00e9c\u00e9dents.\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__5.2.1',
        id_nomenclature: '5.2.1',
        nom: 'Informer, sensibiliser et former les autres collectivit\u00e9s et EPCI de son territoire',
        description:
          '\u003cp\u003eDans une logique de sobri\u00e9t\u00e9, la collectivit\u00e9 informe, sensibilise et forme les autres collectivit\u00e9s et EPCI de son territoire sur les 7 piliers de l\u0027\u00e9conomie circulaire\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.2.1.1',
            id_nomenclature: '5.2.1.1',
            nom: 'R\u00e9aliser au moins 1 action sur 1 pilier (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 1 pilier (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.1.2',
            id_nomenclature: '5.2.1.2',
            nom: 'R\u00e9aliser au moins 1 action sur 2 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 2 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.1.3',
            id_nomenclature: '5.2.1.3',
            nom: 'R\u00e9aliser au moins 1 action sur 3 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 3 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.1.4',
            id_nomenclature: '5.2.1.4',
            nom: 'R\u00e9aliser au moins 1 action sur 4 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 4 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.1.5',
            id_nomenclature: '5.2.1.5',
            nom: 'R\u00e9aliser au moins 1 action sur 5 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 5 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.1.6',
            id_nomenclature: '5.2.1.6',
            nom: 'R\u00e9aliser au moins 1 action sur 6 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 6 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.1.7',
            id_nomenclature: '5.2.1.7',
            nom: 'R\u00e9aliser au moins 1 action sur 7 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 7 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__5.2.2',
        id_nomenclature: '5.2.2',
        nom: 'Aider \u00e0 l\u0027action des autres collectivit\u00e9s et EPCI de son territoire',
        description:
          '\u003cp\u003eLa collectivit\u00e9 soutient des actions concr\u00e8tes r\u00e9alis\u00e9es en direction des autres EPCI sur les 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n\u003cp\u003eLes actions peuvent \u00eatre r\u00e9alis\u00e9es par la collectivit\u00e9 elle-m\u00eame ou avec d\u0027autres EPCI.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.2.2.1',
            id_nomenclature: '5.2.2.1',
            nom: 'R\u00e9aliser au moins 1 action sur 1 pilier (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 1 pilier (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.2.2',
            id_nomenclature: '5.2.2.2',
            nom: 'R\u00e9aliser au moins 1 action sur 2 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 2 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.2.3',
            id_nomenclature: '5.2.2.3',
            nom: 'R\u00e9aliser au moins 1 action sur 3 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 3 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.2.4',
            id_nomenclature: '5.2.2.4',
            nom: 'R\u00e9aliser au moins 1 action sur 4 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 4 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.2.5',
            id_nomenclature: '5.2.2.5',
            nom: 'R\u00e9aliser au moins 1 action sur 5 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 5 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.2.6',
            id_nomenclature: '5.2.2.6',
            nom: 'R\u00e9aliser au moins 1 action sur 6 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 6 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.2.7',
            id_nomenclature: '5.2.2.7',
            nom: 'R\u00e9aliser au moins 1 action sur 7 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 7 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__5.2.3',
        id_nomenclature: '5.2.3',
        nom: 'Structurer des partenariats',
        description:
          '\u003cp\u003eLa collectivit\u00e9 structure des partenariats avec les EPCI pour g\u00e9n\u00e9raliser et amplifier la d\u00e9marche sur l\u0027ensemble du territoire.\u003c/p\u003e\n\u003cp\u003eElle mesure la r\u00e9ussite des partenariats mis en place et valorise les r\u00e9sultats.\u003c/p\u003e\n\u003cp\u003eUn partenariat peut couvrir plusieurs piliers de l\u0027\u00e9conomie circualire.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 40,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.2.3.1',
            id_nomenclature: '5.2.3.1',
            nom: 'Identifier les EPCI \u00e0 potentiel de collaboration',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.3.2',
            id_nomenclature: '5.2.3.2',
            nom: 'Identifier les enjeux',
            description: '',
            thematique_id: 'parten_coop',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.2.3.3',
            id_nomenclature: '5.2.3.3',
            nom: 'Conclure un/des accord(s) avec un ou plusieurs EPCI du territoire',
            description: '',
            thematique_id: 'parten_coop',
            points: 50,
            actions: [],
          }),
        ],
      }),
    ],
  }),

  new ActionReferentiel({
    id: 'economie_circulaire__5.3',
    id_nomenclature: '5.3',
    nom: 'Actions dirig\u00e9es vers les acteurs \u00e9conomiques (TPE/PME, grandes entreprises, commer\u00e7ants, artisans, \u2026 y compris associations \u00e0 activit\u00e9 \u00e9conomique et acteurs \u00e9conomiques publics : type CHU, EHPAD, SEM, ...)',
    description:
      '\u003cp\u003eL\u0027objectif est d\u0027encourager la collectivit\u00e9 \u00e0 d\u00e9ployer une politique d\u0027actions \u00e9conomie circulaire vers les acteurs \u00e9conomiques du territoire, sur l\u0027ensemble des 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n',
    thematique_id: 'parten_coop',
    points: 33,
    actions: [
      new ActionReferentiel({
        id: 'economie_circulaire__5.3.1',
        id_nomenclature: '5.3.1',
        nom: 'Informer et former les acteurs \u00e9conomiques',
        description:
          '\u003cp\u003eDans une logique de sobri\u00e9t\u00e9, la collectivit\u00e9 met en place des actions de sensibilisation et de formations \u00e0 l\u0027attention des acteurs \u00e9conomiques sur les 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 20,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.3.1.1',
            id_nomenclature: '5.3.1.1',
            nom: 'R\u00e9aliser au moins 1 action sur 1 pilier (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 1 pilier (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.1.2',
            id_nomenclature: '5.3.1.2',
            nom: 'R\u00e9aliser au moins 1 action sur 2 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 2 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.1.3',
            id_nomenclature: '5.3.1.3',
            nom: 'R\u00e9aliser au moins 1 action sur 3 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 3 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.1.4',
            id_nomenclature: '5.3.1.4',
            nom: 'R\u00e9aliser au moins 1 action sur 4 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 4 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.1.5',
            id_nomenclature: '5.3.1.5',
            nom: 'R\u00e9aliser au moins 1 action sur 5 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 5 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.1.6',
            id_nomenclature: '5.3.1.6',
            nom: 'R\u00e9aliser au moins 1 action sur 6 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 6 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.1.7',
            id_nomenclature: '5.3.1.7',
            nom: 'R\u00e9aliser au moins 1 action sur 7 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 7 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__5.3.2',
        id_nomenclature: '5.3.2',
        nom: 'Aider \u00e0 l\u0027action \u00e0 destination des acteurs \u00e9conomiques',
        description:
          '\u003cp\u003eLa collectivit\u00e9 met en place des actions concr\u00e8tes avec les acteurs \u00e9conomiques de son territoire sur les 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n\u003cp\u003eCes actions peuvent \u00eatre d\u00e9j\u00e0 mentionn\u00e9es dans les axes pr\u00e9c\u00e9dents.\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 50,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.3.2.1',
            id_nomenclature: '5.3.2.1',
            nom: 'R\u00e9aliser au moins 1 action sur 1 pilier (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 1 pilier (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.2.2',
            id_nomenclature: '5.3.2.2',
            nom: 'R\u00e9aliser au moins 1 action sur 2 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 2 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.2.3',
            id_nomenclature: '5.3.2.3',
            nom: 'R\u00e9aliser au moins 1 action sur 3 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 3 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.2.4',
            id_nomenclature: '5.3.2.4',
            nom: 'R\u00e9aliser au moins 1 action sur 4 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 4 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.2.5',
            id_nomenclature: '5.3.2.5',
            nom: 'R\u00e9aliser au moins 1 action sur 5 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 5 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 14,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.2.6',
            id_nomenclature: '5.3.2.6',
            nom: 'R\u00e9aliser au moins 1 action sur 6 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 6 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.2.7',
            id_nomenclature: '5.3.2.7',
            nom: 'R\u00e9aliser au moins 1 action sur 7 piliers (collectivit\u00e9 \u003c 100 000 habitants) ou r\u00e9aliser au moins 2 actions sur 7 piliers (collectivit\u00e9 \u003e 100 000 habitants)',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),
        ],
      }),

      new ActionReferentiel({
        id: 'economie_circulaire__5.3.3',
        id_nomenclature: '5.3.3',
        nom: 'F\u00e9d\u00e9rer les acteurs du territoire',
        description:
          '\u003cp\u003eLa collectivit\u00e9 d\u00e9ploie des partenariats ayant aboutis \u00e0 des actions avec les acteurs \u00e9conomiques de son territoire sur les 7 piliers de l\u0027\u00e9conomie circulaire.\u003c/p\u003e\n\u003cp\u003e(Un partenariat peut couvrir plusieurs piliers)\u003c/p\u003e\n',
        thematique_id: 'parten_coop',
        points: 30,
        actions: [
          new ActionReferentiel({
            id: 'economie_circulaire__5.3.3.1',
            id_nomenclature: '5.3.3.1',
            nom: '\u00c9tablir une cartographie de repr\u00e9sentants locaux \u00e0 potentiel de partenariat',
            description: '',
            thematique_id: 'parten_coop',
            points: 10,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.3.2',
            id_nomenclature: '5.3.3.2',
            nom: 'Construire des accords avec les repr\u00e9sentants locaux sur 1 \u00e0 2 piliers',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.3.3',
            id_nomenclature: '5.3.3.3',
            nom: 'Construire des accords avec les repr\u00e9sentants locaux sur 3 \u00e0 4 piliers',
            description: '',
            thematique_id: 'parten_coop',
            points: 15,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.3.4',
            id_nomenclature: '5.3.3.4',
            nom: 'Construire des accords avec les repr\u00e9sentants locaux sur plus de 4 piliers',
            description: '',
            thematique_id: 'parten_coop',
            points: 20,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.3.5',
            id_nomenclature: '5.3.3.5',
            nom: 'Suivre les indicateurs des partenariats',
            description: '',
            thematique_id: 'parten_coop',
            points: 30,
            actions: [],
          }),

          new ActionReferentiel({
            id: 'economie_circulaire__5.3.3.6',
            id_nomenclature: '5.3.3.6',
            nom: 'Communiquer les r\u00e9sultats',
            description: '',
            thematique_id: 'parten_coop',
            points: 10,
            actions: [],
          }),
        ],
      }),
    ],
  }),
];
