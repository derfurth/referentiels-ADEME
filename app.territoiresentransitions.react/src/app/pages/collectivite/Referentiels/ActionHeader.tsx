import classNames from 'classnames';
import ActionProgressBar from 'ui/referentiels/ActionProgressBar';
import {ActionDefinitionSummary} from 'core-logic/api/endpoints/ActionDefinitionSummaryReadEndpoint';
import {useScrollTop} from 'utils/useScrollTop';
import {ActionTopNav} from './ActionNav';
import {ActionSidePanel} from './ActionSidePanel';
import {PersoPotentiel} from '../PersoPotentielModal/PersoPotentiel';
import ScoreDisplay from '../EtatDesLieux/Referentiel/SuiviAction/ScoreDisplay';

/**
 * Affiche la partie de l'en-tête de la page Action sensible à la position du
 * défilement vertical
 */
export const ActionHeader = ({
  action,
  nextActionLink,
  prevActionLink,
}: {
  action: ActionDefinitionSummary;
  nextActionLink: string | undefined;
  prevActionLink: string | undefined;
}) => {
  // détermine si la page a suffisamment défilée pour afficher la version
  // réduite de l'en-tête
  const scrollTop = useScrollTop('main');
  const isScrolled = scrollTop >= 170;

  return (
    <div
      className={classNames('sticky top-0 z-40 bg-white', {
        'border-b border-b-[#e5e7eb]': isScrolled,
      })}
    >
      <div
        className={classNames(
          'flex flex-col justify-between bg-[#6A6AF4] text-white fr-px-5w',
          {
            'fr-py-3w': !isScrolled,
            'fr-py-1w': isScrolled,
          }
        )}
      >
        <div className="fr-container">
          <p
            className={classNames('text-white font-bold !mb-0', {
              'text-[1.375rem]': !isScrolled,
              'text-md': isScrolled,
            })}
          >
            {action.identifiant} {action.nom}
          </p>
          {!isScrolled && (
            <ActionTopNav
              prevActionLink={prevActionLink}
              nextActionLink={nextActionLink}
            />
          )}
        </div>
      </div>
      <div className="fr-container flex justify-between items-center fr-text--sm fr-my-2w">
        <div className="flex gap-4 items-center fr-pl-1v text-grey425">
          <ActionProgressBar
            actionId={action.id}
            className="border-r border-r-[#ddd] fr-pr-5v"
          />
          <ScoreDisplay action={action} legend="Score réalisé" size="sm" />
          {action.have_questions && (
            <div className="border-l border-l-[#ddd] fr-pl-3v">
              <PersoPotentiel actionDef={action} />
            </div>
          )}
        </div>
        <ActionSidePanel action={action} />
      </div>
    </div>
  );
};
