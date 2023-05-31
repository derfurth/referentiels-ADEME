# Tests de personnalisation

On retrouvera dans ce dossier les tests du référentiels et des règles de personnalisation (aujourd'hui au format **yaml**)

Voir les tests ici, en attendant la conversion au format **md**: [https://github.com/derfurth/referentiels-ADEME/blob/main/markdown/tests/personnalisation/cae\_1.2.2.1\_potentiel\_sous\_actions.test.yml](cae\_1.2.2.1\_potentiel\_sous\_actions.test.yml)

```yaml
Test:
  La redistribution des points non concernés
  des tâches de la sous-action cae_1.2.2.1
  avec trois tâches sur trois non-concernée.
Statuts:
  cae_1.2.2.1.1: non_concerne
  cae_1.2.2.1.2: non_concerne
  cae_1.2.2.1.3: non_concerne
Scores:
  cae_1.2.2:
    test: le potentiel de l'action ne devrait pas changer
    point_referentiel: 12
    point_potentiel: 12
    point_non_renseigne: 12
  cae_1.2.2.1:
    test:
      Le potentiel devrait être à 0 car 3/3 tâches sont déclarées non-concernées
      Les points `referentiel` de cette sous action devraient être redistribués
      sur les 4 sous actions suivantes soit une augmentation de 1.2 / 4 = 0.3
    point_referentiel: 1.2 # 10% de 12
    point_potentiel: 0.0
  cae_1.2.2.2:
    point_referentiel: 1.8 # 15% de 12
    point_potentiel: 2.1 # +0.3
  cae_1.2.2.3:
    point_referentiel: 3.6 # 30% de 12
    point_potentiel: 3.9 # +0.3
  cae_1.2.2.4:
    point_referentiel: 1.8 # 15% de 12
    point_potentiel: 2.1 # +0.3
  cae_1.2.2.5:
    point_referentiel: 3.6 # 30% de 12
    point_potentiel: 3.9 # +0.3

```
