# README

Il y a trois types de règles possibles dans une personnalisation :

* Désactivation :
  * la sortie de la règle est un booléen et la conséquence est la désactivation de l'action en question.
  * Exemple de formule : `**reponse**(***dechets_1, NON)*** **ou reponse(dechets_3, NON)**` signifie que l'action sera désactivée si la collectivité répond NON à l'un des questions `dechets_1` ou `dechets_3`
* Réduction :
  * la sortie de la règle est un float, et la conséquence est la réduction du postentiel de l'action en question.
  * Exemple de formule : `**max(reponse(mobilite_2), 0.5)**` signifie que le potentiel de l'action sera réduit proportionnellement à la réponse à la question mobilite\_2 dans la limite de 50%.
* Score :
  * Un seul cas : Le score de la 3.3.5 ne peut pas dépasser le score de la 1.2.3
  * Formule : `**min(score(cae_1.2.3), score(cae_3.3.5 ))**`
