import {TReponse} from 'types/personnalisation';
import {TFilters, useQuestions} from './useQuestions';
import {useReponses} from './useReponses';

/**
 * Charge la liste des questions de personnalisation et leur éventuelle réponse
 * pour la collectivité courante. La liste est filtrable par action(s) ou par
 * thématique.
 */
export const useQuestionsReponses = (filters: TFilters) => {
  // charge les questions et les réponses
  const {data: questions} = useQuestions(filters);
  const reponses = useReponses(questions!);

  // indexe les réponses par id de question
  const reponsesByQuestionId = new Map<string, TReponse>();
  reponses.forEach(({data}) => {
    if (data) {
      const {question_id, reponse} = data;
      reponsesByQuestionId.set(question_id, reponse.reponse);
    }
  });

  // associe les réponses aux questions
  const qrList = questions?.map(question => {
    const reponse = reponsesByQuestionId.get(question.id);
    return {...question, reponse};
  });

  return qrList || [];
};
