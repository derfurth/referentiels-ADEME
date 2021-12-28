from dataclasses import dataclass
from pathlib import Path
from typing import List

from .action_definition import ActionDefinition
from .action_children import ActionChildren
from .action_points import ActionPoints
from business.core.domain.models.referentiel import ActionReferentiel
from business.core.domain.models.event import DomainEvent, DomainFailureEvent
from .markdown_action_node import MarkdownActionNode
from .indicateur import Indicateur


@dataclass
class MarkdownReferentielFolderUpdated(DomainEvent):
    folder_path: str


@dataclass
class MarkdownReferentielFolderParsed(DomainEvent):
    referentiel_node: MarkdownActionNode


@dataclass
class ParseMarkdownReferentielFolderFailed(DomainFailureEvent):  # FAILURE
    pass


@dataclass
class MarkdownReferentielNodeConvertedToEntities(DomainEvent):
    definitions: List[ActionDefinition]
    points: List[ActionPoints]
    children: List[ActionChildren]
    referentiel: ActionReferentiel


@dataclass
class MarkdownReferentielNodeInconsistencyFound(DomainFailureEvent):  # FAILURE
    pass


@dataclass
class ReferentielActionsStored(DomainEvent):
    referentiel: ActionReferentiel


@dataclass
class ReferentielIndicateursStored(DomainEvent):
    referentiel: ActionReferentiel


@dataclass
class ReferentielStorageFailed(DomainFailureEvent):
    pass


@dataclass
class IndicateurStored(DomainEvent):
    referentiel: ActionReferentiel


@dataclass
class IndicateurMarkdownConvertedToEntities(DomainEvent):
    indicateurs: List[Indicateur]
    referentiel: ActionReferentiel


@dataclass
class IndicateurMarkdownParsingOrConvertionFailed(DomainFailureEvent):
    pass


@dataclass
class IndicateurEntitiesStored(DomainEvent):
    pass


@dataclass
class ExtractReferentielActionsToCsvTriggered(DomainEvent):
    referentiel: ActionReferentiel
    csv_path: Path


@dataclass
class ParseAndConvertMarkdownIndicateursToEntitiesTriggered(DomainEvent):
    folder_path: str
    referentiel: ActionReferentiel
