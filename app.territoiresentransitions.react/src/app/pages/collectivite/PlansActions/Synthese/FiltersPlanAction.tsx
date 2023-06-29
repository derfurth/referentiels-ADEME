import TagFilters from 'ui/shared/filters/TagFilters';
import {useFichesNonClasseesListe} from '../FicheAction/data/useFichesNonClasseesListe';
import {usePlansActionsListe} from '../PlanAction/data/usePlansActionsListe';
import {generateTitle} from '../FicheAction/data/utils';
import {ITEM_ALL} from 'ui/shared/filters/commons';

export type PlanActionFilter = {id: number | 'nc' | 'tous'; name: string};
export const filtreToutesLesFiches: PlanActionFilter = {
  id: ITEM_ALL,
  name: 'Toutes les fiches',
};
export const filtreFichesNonClassees: PlanActionFilter = {
  id: 'nc',
  name: 'Fiches non classées',
};

/**
 * Filtres tags par plan d'action
 *
 * @param collectiviteId - (number) id de la collectivité affichée
 * @param onChangePlan - action lancée lors du changement de plan d'action
 * @param onChangeWithoutPlan - action lancée lors du toggle avec / sans plan d'action
 */

type FiltersPlanActionProps = {
  collectiviteId: number;
  initialPlan?: string;
  onChangePlan: ({id, name}: PlanActionFilter) => void;
};

const FiltersPlanAction = ({
  collectiviteId,
  initialPlan,
  onChangePlan,
}: FiltersPlanActionProps): JSX.Element => {
  const plansActions = usePlansActionsListe(collectiviteId);
  const fichesNonClassees = useFichesNonClasseesListe(collectiviteId);

  // Construction de la liste de filtres par plan d'action
  const filters = [
    {
      value: filtreToutesLesFiches.id?.toString(),
      label: filtreToutesLesFiches.name,
    },
  ];

  if (plansActions?.plans && plansActions.plans.length) {
    filters.push(
      ...plansActions.plans.map(plan => ({
        value: plan.id.toString(),
        label: generateTitle(plan.nom),
      }))
    );
  }

  if (fichesNonClassees?.fiches && fichesNonClassees.fiches.length > 0) {
    filters.push({
      value: filtreFichesNonClassees.id.toString(),
      label: filtreFichesNonClassees.name,
    });
  }

  // Mise à jour des filtres sélectionnés
  const handleChangeFilter = (id: string) => {
    // Toutes les fiches
    if (id === ITEM_ALL) {
      onChangePlan(filtreToutesLesFiches);
      // Fiches non classées
    } else if (id === 'nc') {
      onChangePlan(filtreFichesNonClassees);
      // Les plans d'action
    } else {
      onChangePlan({
        id: parseInt(id),
        name: filters.filter(f => f.value === id)[0].label,
      });
    }
  };

  return (
    // Filtres affichés si plus d'un plan d'action défini
    filters.length > 2 ? (
      <TagFilters
        defaultOption={initialPlan}
        name="plans_actions"
        options={filters}
        onChange={handleChangeFilter}
      />
    ) : (
      <></>
    )
  );
};

export default FiltersPlanAction;
