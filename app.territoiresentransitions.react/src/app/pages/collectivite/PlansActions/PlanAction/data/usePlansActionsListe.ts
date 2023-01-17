import {useQuery} from 'react-query';

import {supabaseClient} from 'core-logic/api/supabase';
import {TPlanActionAxeRow} from './types/alias';

type TFetchedData = {
  plans: TPlanActionAxeRow[];
};

const fetchPlansActionsListe = async (
  collectivite_id: number
): Promise<TFetchedData> => {
  const query = supabaseClient
    .from('axe')
    .select()
    .eq('collectivite_id', collectivite_id)
    .is('parent', null);

  const {error, data} = await query;
  if (error) {
    throw new Error(error.message);
  }

  return {plans: (data as TPlanActionAxeRow[]) || []};
};

export const usePlansActionsListe = (collectivite_id: number) => {
  const {data} = useQuery(['plans_actions', collectivite_id], () =>
    fetchPlansActionsListe(collectivite_id)
  );

  return data;
};
