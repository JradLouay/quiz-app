import { Answer, quizQuestion } from "../hooks/useFetch";

export function mapAndFilterArray (question: quizQuestion){
    return Object.entries(question?.answers)
    .map(function mapAnswers([, value]) {
      return value;
    })
    .filter(function filterAnswers(answer) {
      if (answer) {
        return answer;
      }
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatAnswers (quizQuestion: any){
    const {id, question, answers, correct_answers } = quizQuestion;
    const newAnswers = Object.entries(answers)
    
    .map(function mapAnswers([key, value], index): Answer {
        
      return {
        id: index + 1,
        answer: value as string,
        correct: JSON.parse(correct_answers[key + "_correct"])
      };
      
    })
    .filter(function filterAnswers(answer) {
        if (answer.answer) {
          return answer;
        }})
    

    return {id,question, answers: newAnswers }
}