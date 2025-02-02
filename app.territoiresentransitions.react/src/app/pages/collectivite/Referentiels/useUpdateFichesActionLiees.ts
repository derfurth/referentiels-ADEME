import {useMutation, useQueryClient} from 'react-query';
import {supabaseClient} from 'core-logic/api/supabase';
import {FicheResume} from '../PlansActions/FicheAction/data/types';
import {useCollectiviteId} from 'core-logic/hooks/params';

type TUpdateFichesActionLieesArgs = {
  /** liste courante des fiches associées à l'action */
  fiches: FicheResume[];
  /** liste mise à jour des fiches associées à l'action */
  fiches_liees: FicheResume[];
};

/**
 * Met à jour la liste des fiches action liées à une action
 */
export const useUpdateFichesActionLiees = (action_id: string) => {
  const queryClient = useQueryClient();
  const collectivite_id = useCollectiviteId();

  return useMutation(
    async ({fiches, fiches_liees}: TUpdateFichesActionLieesArgs) => {
      // extrait les ids des listes
      const current_ids = fiches.map(f => f.id);
      const new_ids = fiches_liees.map(f => f.id);
      // extrait les ids des fiches à ajouter ou supprimer
      const idsToDelete = diff(current_ids, new_ids);
      const idsToAdd = diff(new_ids, current_ids);

      // supprime les anciennes entrées
      if (idsToDelete.length) {
        await supabaseClient
          .from('fiche_action_action')
          .delete()
          .match({fiche_id: idsToDelete})
          .like('action_id', `${action_id}%`);
      }

      // et ajoute les nouvelles
      if (idsToAdd.length) {
        const toAdd = idsToAdd.map(fiche_id => ({
          fiche_id: fiche_id!,
          action_id,
        }));
        await supabaseClient.from('fiche_action_action').insert(toAdd);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['fiche_action_liees', collectivite_id]);
      },
    }
  );
};

const diff = <T>(array1: T[], array2: T[]) =>
  array1.filter(v => !array2.includes(v));
