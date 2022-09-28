/**
 * Affiche le formulaire d'ajout de liens
 */

import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Spacer} from 'ui/shared/Spacer';
import FormInput from 'ui/shared/form/FormInput';

export type TAddLink = (titre: string, url: string) => void;

export type TAddLinkProps = {
  onAddLink: TAddLink;
  onClose: () => void;
};

type TPreuveLienParams = {
  titre: string;
  url: string;
};

const initialData: TPreuveLienParams = {
  titre: '',
  url: '',
};

const validation = Yup.object({
  titre: Yup.string().required('Merci de renseigner un titre pour ce lien '),
  url: Yup.string()
    .url('Merci de renseigner un lien valide')
    .required('Merci de renseigner un lien'),
});

export const AddLink = (props: TAddLinkProps) => {
  const {onClose, onAddLink} = props;

  const onSubmit = ({titre, url}: TPreuveLienParams) => {
    onAddLink(titre, url);
    onClose();
  };

  return (
    <Formik<TPreuveLienParams>
      initialValues={initialData}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      {({values, isValid}) => {
        return (
          <Form data-test="AddLink">
            <div className="fr-form-group">
              <fieldset className="fr-fieldset">
                <div className="fr-fieldset__content"></div>
                <FormInput name="titre" label="Titre (obligatoire)" />
                <Spacer size={2} />
                <FormInput name="url" label="Lien (obligatoire)" />
              </fieldset>
            </div>
            <button
              className="fr-btn mt-2"
              disabled={!values.titre || !values.url || !isValid}
              type="submit"
            >
              Ajouter
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
