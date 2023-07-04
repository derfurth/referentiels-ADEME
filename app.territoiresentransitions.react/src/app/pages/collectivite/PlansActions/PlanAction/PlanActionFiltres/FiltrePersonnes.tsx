import FilterField from 'ui/shared/filters/FilterField';
import {TOption} from 'ui/shared/select/commons';
import {MultiSelectFilter} from 'ui/shared/select/MultiSelectFilter';
import {TFilters, TFiltreProps} from '../../FicheAction/data/filters';
import {getIsAllSelected, ITEM_ALL} from 'ui/shared/filters/commons';
import {getPersonneId} from '../../FicheAction/data/utils';
import {usePersonneListe} from '../../FicheAction/data/options/usePersonneListe';

type Props = TFiltreProps & {
  label: string;
  filterKey: keyof TFilters;
  dataTest?: string;
};

const FiltrePersonnes = ({
  label,
  filterKey,
  filters,
  setFilters,
  dataTest,
}: Props) => {
  const {data: personnes} = usePersonneListe();

  // Initialisation du tableau d'options pour le multi-select
  const options: TOption[] = [];

  // Ajoute l'option "Tous" s'il y a plus d'une option
  if (personnes && personnes.length > 1) {
    options.push({value: ITEM_ALL, label: 'Tous'});
  }

  if (filterKey === 'pilotes') {
    options.push({
      value: 'sans_pilote',
      label: 'Sans pilote',
    });
  }

  if (filterKey === 'referents') {
    options.push({
      value: 'sans_referent',
      label: 'Sans élu·e référent·e',
    });
  }

  // Transformation et ajout des personnes aux options
  personnes &&
    personnes.forEach(personne =>
      options.push({
        value: getPersonneId(personne),
        label: personne.nom!,
      })
    );

  // Renvoie les bonnes valeurs en fonction du filtre personne utlisé
  const values = (): string[] => {
    if (filterKey === 'pilotes') {
      if (filters.sans_pilote && filters.sans_pilote === 1) {
        return ['sans_pilote'];
      } else {
        return filters.pilotes || [];
      }
    }
    if (filterKey === 'referents') {
      if (filters.sans_referent && filters.sans_referent === 1) {
        return ['sans_referent'];
      } else {
        return filters.referents || [];
      }
    }

    return [];
  };

  // onSelect en fonction du filtre personne utilisé
  const onSelect = (newValues: string[]) => {
    const newFilters = filters;
    const newPersonnes = personnes
      ?.filter(p => newValues.includes(getPersonneId(p)))
      .map(p => getPersonneId(p));

    // onClick "tous" ou toggle option
    if (getIsAllSelected(newValues)) {
      delete newFilters.sans_referent;
      delete newFilters.sans_pilote;
      if (filterKey === 'referents') {
        delete newFilters.referents;
      }
      if (filterKey === 'pilotes') {
        delete newFilters.pilotes;
      }
      return {...newFilters};
    } else {
      if (filterKey === 'pilotes') {
        if (newValues.includes('sans_pilote')) {
          if (filters.sans_pilote === 1) {
            delete newFilters.sans_pilote;
            return {...newFilters, [filterKey]: newPersonnes};
          } else {
            delete newFilters.pilotes;
            return {...newFilters, sans_pilote: 1};
          }
        } else {
          return {
            ...newFilters,
            [filterKey]: newPersonnes,
          };
        }
      }
      if (filterKey === 'referents') {
        if (newValues.includes('sans_referent')) {
          if (filters.sans_referent === 1) {
            delete newFilters.sans_referent;
            return {...newFilters, [filterKey]: newPersonnes};
          } else {
            delete newFilters.referents;
            return {...newFilters, sans_referent: 1};
          }
        } else {
          return {
            ...newFilters,
            [filterKey]: newPersonnes,
          };
        }
      }
      return newFilters;
    }
  };

  return (
    <FilterField title={label}>
      <MultiSelectFilter
        data-test={dataTest}
        values={values()}
        options={options}
        onSelect={newValues => setFilters(onSelect(newValues))}
        placeholderText="Sélectionner des options"
        disabled={options.length === 0}
      />
    </FilterField>
  );
};

export default FiltrePersonnes;
