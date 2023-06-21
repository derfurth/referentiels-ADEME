import {useMutation, useQuery, useQueryClient} from 'react-query';
import {supabaseClient} from 'core-logic/api/supabase';
import {useCurrentCollectivite} from './useCurrentCollectivite';
import {useAudit, useIsAuditeur} from 'app/pages/collectivite/Audit/useAudit';
import {useActionScore} from './scoreHooks';
import {Database} from 'types/database.types';

/**
 * Charge le statut d'une action
 */
export const useActionStatut = (args: TActionStatutParams) => {
  const {action_id, collectivite_id} = args;
  const {data, isLoading} = useQuery(['action_statut', collectivite_id], () =>
    fetchCollectiviteActionStatuts(collectivite_id)
  );

  const statut = data?.find(action => action.action_id === action_id) || null;

  const filled =
    data?.find(
      action =>
        action.action_id.includes(action_id) &&
        action.action_id.split(action_id)[1] !== '' &&
        action.avancement !== 'non_renseigne'
    ) || null;

  return {
    statut,
    filled,
    isLoading,
  };
};

type TActionStatutParams = {
  collectivite_id?: number;
  action_id: string;
};

const fetchCollectiviteActionStatuts = async (collectivite_id?: number) => {
  if (!collectivite_id) {
    return null;
  }
  const query = supabaseClient
    .from('action_statut')
    .select()
    .eq('collectivite_id', collectivite_id);
  const {error, data} = await query;

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

/**
 * Met à jour le statut d'une action
 */
export const useSaveActionStatut = (args: TActionStatutParams) => {
  const {collectivite_id} = args;
  const queryClient = useQueryClient();
  const {isLoading, mutate: saveActionStatut} = useMutation(write, {
    mutationKey: 'action_statut',
    onSuccess: () => {
      queryClient.invalidateQueries(['action_statut', collectivite_id]);
    },
  });

  return {
    isLoading,
    saveActionStatut,
  };
};

type TActionStatutWrite =
  Database['public']['Tables']['action_statut']['Insert'];
const write = async (statut: TActionStatutWrite) =>
  supabaseClient.from('action_statut').upsert([statut], {
    onConflict: 'collectivite_id,action_id',
  });

/**
 * Détermine si l'utilisateur a le droit de modifier le statut d'une action
 */
export const useEditActionStatutIsDisabled = (actionId: string) => {
  const collectivite = useCurrentCollectivite();
  const {data: audit} = useAudit();
  const isAuditeur = useIsAuditeur();
  const score = useActionScore(actionId);

  return Boolean(
    !collectivite ||
      collectivite.readonly ||
      !score ||
      score.desactive ||
      (audit && (!isAuditeur || audit.valide))
  );
};
