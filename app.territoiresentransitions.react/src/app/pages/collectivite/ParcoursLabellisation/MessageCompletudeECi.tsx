import Alerte from 'ui/shared/Alerte';
import {TLabellisationParcours} from './types';

export const MessageCompletudeECi = ({
  parcours,
}: {
  parcours: TLabellisationParcours | null;
}) => {
  const {referentiel, etoiles} = parcours || {};

  return referentiel === 'eci' && etoiles !== '1' ? (
    <Alerte state="warning" classname="fr-mb-4w">
      <>
        <p>
          Pour cet audit ECi, l’ensemble des tâches déclarées « faites » ou «
          détaillées » comprenant du « fait » doivent présenter des preuves
          téléchargées au niveau de la sous-action correspondante dans le
          référentiel.{' '}
          <b>
            Aucun auditeur ne pourra être attribué en cas de dossier incomplet.
          </b>
        </p>
        <p>
          Pour rappel, cet audit a un coût qui est aujourd’hui financé par
          l’ADEME. La validation de votre demande d’audit vous engage à
          respecter les conditions de complétude.
        </p>
      </>
    </Alerte>
  ) : null;
};
