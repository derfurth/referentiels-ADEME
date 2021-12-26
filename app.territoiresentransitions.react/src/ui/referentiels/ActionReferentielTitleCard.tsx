import {Link} from 'react-router-dom';
import type {ActionReferentiel} from 'generated/models/action_referentiel';
import {ProgressStatStatic} from 'ui/referentiels';
import {ActionDescriptionExpandPanel} from 'ui/shared';
import {ActionReferentielTitle} from './ActionReferentielTitle';
import {referentielToName} from 'app/labels';
import {referentielId} from 'utils/actions';
import {currentCollectiviteBloc} from 'core-logic/observables';
import {makeCollectiviteActionUrl} from 'app/paths';
import {scoreBloc} from 'core-logic/observables/scoreBloc';

export const ActionReferentielTitleCard = ({
  action,
}: {
  action: ActionReferentiel;
}) => {
  const collectiviteId =
    currentCollectiviteBloc.currentCollectivite?.collectivite_id;
  const referentiel = referentielId(action.id);
  return (
    <article className="bg-beige my-4">
      <Link
        to={makeCollectiviteActionUrl({
          collectiviteId: collectiviteId!,
          referentielId: referentiel,
          actionId: action.id,
        })}
        className="LinkedCardHeader"
      >
        <div className="flex p-4 justify-between">
          <div>
            <span className="inline-block text-xs font-thin">
              {referentielToName[referentiel]}
            </span>
          </div>
          <ProgressStatStatic
            className="w-100"
            action={action}
            position="right"
            showPoints={true}
            scoreBloc={scoreBloc}
          />
        </div>
        <div className="p-4 flex justify-between">
          <ActionReferentielTitle action={action} />
          <div className="fr-fi-arrow-right-line text-bf500" />
        </div>
      </Link>
      <div className="p-4 w-2/3">
        <ActionDescriptionExpandPanel action={action} />
      </div>
    </article>
  );
};
