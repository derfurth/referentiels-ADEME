import classNames from 'classnames';

import {MultiSelectFilter} from 'ui/shared/select/MultiSelectFilter';
import ActionStatutBadge from 'ui/shared/actions/ActionStatutBadge';

import {ITEM_ALL} from 'ui/shared/select/commons';
import {TFiltreProps} from './filters';
import {ITEMS} from './SelectStatut';
import {ActionAvancement} from 'generated/dataLayer/action_statut_read';

const items = [{value: ITEM_ALL, label: 'Tous les statuts'}, ...ITEMS];
const FILTER_NAME = 'statut';

/**
 * Affiche le filtre par statuts
 */
export const FiltreStatut = (props: TFiltreProps) => {
  const {filters, setFilters} = props;

  return (
    <MultiSelectFilter
      values={filters[FILTER_NAME]}
      options={items}
      onSelect={values => setFilters({...filters, [FILTER_NAME]: values})}
      renderSelection={values => (
        <span
          className={classNames(
            'fr-fi--sm w-full text-center text-bf500 font-bold',
            {'fr-fi-filter-fill': values.includes(ITEM_ALL)},
            {'fr-fi-filter-line': !values.includes(ITEM_ALL)}
          )}
        >
          &nbsp;Statut
        </span>
      )}
      renderOption={option =>
        option === ITEM_ALL ? (
          <span className="leading-6">Tous les statuts</span>
        ) : (
          <ActionStatutBadge statut={option as ActionAvancement} small />
        )
      }
    />
  );
};
