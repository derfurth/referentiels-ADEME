from typing import List, Optional

import pytest

from api.models.generated.action_referentiel_score import ActionReferentielScore
from api.notation.notation import Notation, Status, UnknownActionIndex
from api.notation.referentiel import Referentiel
from api.notation.referentiel import (
    defaut_referentiel_root_points_value,
)
from tests.utils.factory import make_action_referentiel


def find_score_with_id_nomenclature(
    scores: List[ActionReferentielScore], nomenclature_id: str
) -> Optional[ActionReferentielScore]:
    return next(
        iter(
            [
                score
                for score in scores
                if score.action_nomenclature_id == nomenclature_id
            ]
        ),
        None,
    )


def assert_score_with_nomenclature_id_equals(
    scores: List[ActionReferentielScore],
    nomenclature_id: str,
    *,
    points: float,
    percentage: float,
    potentiel: float,
    referentiel_points: float,
    referentiel_percentage: float,
):
    score = find_score_with_id_nomenclature(scores, nomenclature_id)
    assert score

    assert score.points == points
    assert score.percentage == percentage
    assert score.potentiel == potentiel
    assert score.referentiel_points == referentiel_points
    assert score.referentiel_percentage == referentiel_percentage


def test_notation_only_root_default_status():
    referentiel = Referentiel(root_action=make_action_referentiel(points=42))
    notation = Notation(referentiel)

    scores = notation.compute_and_get_scores()

    assert_score_with_nomenclature_id_equals(
        scores,
        "",
        points=0.0,
        percentage=0.0,
        potentiel=defaut_referentiel_root_points_value,
        referentiel_points=defaut_referentiel_root_points_value,
        referentiel_percentage=1,
    )


@pytest.fixture
def referentiel() -> Referentiel:
    action_1_1 = make_action_referentiel(id_nomenclature="1.1", actions=[], points=30)
    action_1_2 = make_action_referentiel(id_nomenclature="1.2", actions=[], points=70)
    action_1 = make_action_referentiel(
        id_nomenclature="1", actions=[action_1_1, action_1_2]
    )
    action_2_mandatory = make_action_referentiel(
        id_nomenclature="2.mandatory", actions=[], points=0
    )
    action_2 = make_action_referentiel(
        id_nomenclature="2", actions=[action_2_mandatory]
    )
    root_action = make_action_referentiel(actions=[action_1, action_2])
    referentiel = Referentiel(root_action)
    return referentiel


@pytest.fixture
def notation(referentiel) -> Notation:
    return Notation(referentiel)


def test_notation_with_two_actions_default_status(notation):
    scores = notation.compute_and_get_scores()

    assert_score_with_nomenclature_id_equals(
        scores,
        "",
        points=0.0,
        percentage=0.0,
        potentiel=defaut_referentiel_root_points_value,
        referentiel_points=defaut_referentiel_root_points_value,
        referentiel_percentage=1,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1",
        points=0.0,
        percentage=0.0,
        potentiel=100,
        referentiel_points=100,
        referentiel_percentage=0.2,
    )
    assert_score_with_nomenclature_id_equals(
        scores,
        "1.1",
        points=0.0,
        percentage=0.0,
        potentiel=30,
        referentiel_points=30,
        referentiel_percentage=0.3,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.2",
        points=0.0,
        percentage=0.0,
        potentiel=70,
        referentiel_points=70,
        referentiel_percentage=0.7,
    )


def test_status_if_index_exists(notation):
    notation.set_status(index=("1", "1"), status=Status.non_concernee)
    assert notation.statuses[("1", "1")] == Status.non_concernee


def test_status_if_index_does_not_exists(notation):
    with pytest.raises(UnknownActionIndex):
        notation.set_status(index=(1, 3), status=Status.non_concernee)


def test_notation_with_two_actions_amongst_which_one_is_non_concernee(notation):
    notation.set_status(index=("1", "1"), status=Status.non_concernee)

    scores = notation.compute_and_get_scores()

    assert_score_with_nomenclature_id_equals(
        scores,
        "",
        points=0.0,
        percentage=0.0,
        potentiel=defaut_referentiel_root_points_value,
        referentiel_points=defaut_referentiel_root_points_value,
        referentiel_percentage=1,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1",
        points=0.0,
        percentage=0.0,
        potentiel=100,
        referentiel_points=100,
        referentiel_percentage=0.2,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.1",
        points=0.0,
        percentage=0.0,
        potentiel=0.0,
        referentiel_points=30,
        referentiel_percentage=0.3,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.2",
        points=0.0,
        percentage=0.0,
        potentiel=100,  # points have been redistributed
        referentiel_points=70,
        referentiel_percentage=0.7,
    )


def test_notation_with_two_actions_amongst_which_one_is_faite(notation):
    notation.set_status(index=("1", "1"), status=Status.faite)

    scores = notation.compute_and_get_scores()

    assert_score_with_nomenclature_id_equals(
        scores,
        "",
        points=30.0,
        percentage=0.3 * 0.2,
        potentiel=defaut_referentiel_root_points_value,
        referentiel_points=defaut_referentiel_root_points_value,
        referentiel_percentage=1,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1",
        points=30.0,
        percentage=0.3,
        potentiel=100,
        referentiel_points=100,
        referentiel_percentage=0.2,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.1",
        points=30.0,
        percentage=1.0,
        potentiel=30,
        referentiel_points=30,
        referentiel_percentage=0.3,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.2",
        points=0.0,
        percentage=0.0,
        potentiel=70,
        referentiel_points=70,
        referentiel_percentage=0.7,
    )


def test_notation_with_two_actions_from_which_parent_axis_is_faite(notation):
    notation.set_status(index=("1",), status=Status.faite)

    scores = notation.compute_and_get_scores()

    assert notation.statuses[("1", "1")] == Status.faite
    assert notation.statuses[("1", "2")] == Status.faite

    assert_score_with_nomenclature_id_equals(
        scores,
        "",
        points=100,
        percentage=0.2,
        potentiel=defaut_referentiel_root_points_value,
        referentiel_points=defaut_referentiel_root_points_value,
        referentiel_percentage=1,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1",
        points=100,
        percentage=1.0,
        potentiel=100,
        referentiel_points=100,
        referentiel_percentage=0.2,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.1",
        points=30.0,
        percentage=1.0,
        potentiel=30,
        referentiel_points=30,
        referentiel_percentage=0.3,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.2",
        points=70.0,
        percentage=1.0,
        potentiel=70,
        referentiel_points=70,
        referentiel_percentage=0.7,
    )


def test_percentage_is_100_if_points_is_0_and_status_faite(notation):
    notation.set_status(index=("2", "mandatory"), status=Status.faite)

    scores = notation.compute_and_get_scores()

    assert_score_with_nomenclature_id_equals(
        scores,
        "2.mandatory",
        points=0.0,
        percentage=1.0,
        potentiel=0,
        referentiel_points=0,
        referentiel_percentage=0.0,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "2",
        points=0.0,
        percentage=1.0,
        potentiel=100,
        referentiel_points=100,
        referentiel_percentage=0.2,
    )


def test_notation_non_concernee_changes_parents_potentiels():
    """
    A l'intérieur d'une mesure/orientation :
    - Si une action a un statut "Non concerné", alors cette action n'est pas prise en compte pour calculer le score.
    *Exemple : Orientation 1.2. = 30 points
    Si niveau 1.2.1 dont le poids est 20% est "Non concerné" alors l'orientation 1.2 reste évaluée sur 30 points
    et le poids est reventilé sur les autres niveaux en augmentant de façon proportionnelle
    (1.2.2=20%+1/3x20%, 1.2.3=20%+1/3x20%, 1.2.4=40%+1/3x40%).*

    - Si toutes les actions sœurs ont un statut "Non concerné" (en dehors des mesures/orientations),
    alors le niveau parent est "Non concerné" et l'action n'est pas prise en compte pour calculer le score.
    *Exemple : Niveau 1.2.1.
    Si 1.2.1.1/2/3/4/5 sont "Non concerné" alors 1.2.1 = Non concerné*

    - Cas particulier : Si tous les enfants d'une mesure/orientation sont "Non concerné"
    alors la mesure/orientation a bien un statut "Non concerné"
    MAIS son nombre de points passe à "0" sans être reventilé sur les autres mesures/orientations.

    *Exemple : Orientation 1.2 = 30 points
    Si 1.2.1/2/3/4 = "Non concerné"
    alors 1.2= "Non concerné" et "0/0 points" et la collectivité n'est plus évaluée sur 500 points mais sur 470 points.*
    """
    action_1_2_1 = make_action_referentiel(
        id_nomenclature="1.2.1", actions=[], points=25
    )
    action_1_2_2 = make_action_referentiel(
        id_nomenclature="1.2.2", actions=[], points=25
    )
    action_1_2_3 = make_action_referentiel(
        id_nomenclature="1.2.3", actions=[], points=25
    )
    action_1_2_4 = make_action_referentiel(
        id_nomenclature="1.2.4", actions=[], points=25
    )
    action_1_2 = make_action_referentiel(
        id_nomenclature="1.2",
        actions=[action_1_2_1, action_1_2_2, action_1_2_3, action_1_2_4],
        points=30,
    )
    action_1 = make_action_referentiel(
        id_nomenclature="1", actions=[action_1_2], points=30
    )
    action_2 = make_action_referentiel(id_nomenclature="2", actions=[], points=470)
    root_action = make_action_referentiel(actions=[action_1, action_2])

    referentiel = Referentiel(root_action)

    notation = Notation(referentiel)

    notation.set_status(index=("1", "2", "1"), status=Status.non_concernee)
    notation.set_status(index=("1", "2", "2"), status=Status.non_concernee)
    notation.set_status(index=("1", "2", "3"), status=Status.non_concernee)
    notation.set_status(index=("1", "2", "4"), status=Status.non_concernee)

    scores = notation.compute_and_get_scores()

    assert_score_with_nomenclature_id_equals(
        scores,
        "",
        points=0.0,
        percentage=0.0,
        potentiel=470,
        referentiel_points=defaut_referentiel_root_points_value,
        referentiel_percentage=1,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1",
        points=0,
        percentage=0.0,
        potentiel=0,
        referentiel_points=30,
        referentiel_percentage=30 / defaut_referentiel_root_points_value,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.2",
        points=0,
        percentage=0.0,
        potentiel=0,
        referentiel_points=30,
        referentiel_percentage=1,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "1.2.1",
        points=0,
        percentage=0.0,
        potentiel=0,
        referentiel_points=30 / 4,
        referentiel_percentage=1 / 4,
    )

    assert_score_with_nomenclature_id_equals(
        scores,
        "2",
        points=0,
        percentage=0.0,
        potentiel=470,
        referentiel_points=470,
        referentiel_percentage=0.94,
    )
