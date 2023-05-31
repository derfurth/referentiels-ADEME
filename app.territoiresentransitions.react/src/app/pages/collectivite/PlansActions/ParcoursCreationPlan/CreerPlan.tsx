import {Form, Formik} from 'formik';
import FormikInput from 'ui/shared/form/formik/FormikInput';
// import FormikSelect from 'ui/shared/form/formik/FormikSelect';
import * as Yup from 'yup';
import {useCreatePlanAction} from '../PlanAction/data/useUpsertAxe';
import {useCollectiviteId} from 'core-logic/hooks/params';

// const PlanTypeOptions = [
//   {
//     value: 'Plan Climat Air Énergie territorial',
//     label: 'Plan Climat Air Énergie territorial',
//   },
//   {value: 'Plan Économie circulaire', label: 'Plan Économie circulaire'},
//   {value: 'Plan Territoire Engagé', label: 'Plan Territoire Engagé'},
//   {value: 'Plan thématique', label: 'Plan thématique'},
//   {value: 'Projet de territoire', label: 'Projet de territoire'},
//   {value: 'Autre', label: 'Autre'},
// ];

const formValidation = Yup.object({
  nom: Yup.string(),
  type: Yup.string(),
});

type FormProps = {nom: string; type: string};

type Props = {
  onBackClick: () => void;
};

const CreerPlan = ({onBackClick}: Props) => {
  const collectivite_id = useCollectiviteId();

  const {mutate: createPlanAction} = useCreatePlanAction();

  const handleFormSubmit = (values: FormProps) => {
    createPlanAction({
      collectivite_id: collectivite_id!,
      nom: values.nom,
      // type: values.type,
    });
  };

  return (
    <div className="w-full mx-auto">
      <h3 className="mb-8">
        <span className="fr-icon-edit-box-fill mr-2" />
        Créer un plan d’action
      </h3>
      <div className="flex flex-col mt-2 mb-10 py-14 px-24 bg-gray-100">
        <div className="mb-8 text-gray-500">Aucun champ n’est obligatoire</div>
        <Formik
          initialValues={{nom: '', type: ''}}
          validationSchema={formValidation}
          onSubmit={handleFormSubmit}
        >
          <Form>
            <FormikInput
              name="nom"
              label="Nom du plan d’action"
              hint="Exemple : Plan Climat Air Énergie territorial 2022-2026"
            />
            {/* <FormikSelect
              name="type"
              label="Type de plan d’action"
              hint="Cette information sera utile pour vous proposer une arborescence et un format de fiche adaptés"
              options={PlanTypeOptions}
            /> */}
            <div className="flex items-center justify-end gap-6 mt-12">
              <button
                className="fr-btn fr-btn--tertiary fr-btn--icon-left !mb-0 fr-icon-arrow-left-line"
                onClick={onBackClick}
              >
                Revenir à l’étape précédente
              </button>
              <button type="submit" className="fr-btn !mb-0">
                Valider
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreerPlan;
