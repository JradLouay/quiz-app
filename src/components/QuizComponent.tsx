import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

import Question from "./Question";
import Steps from "./Steps";
import ResponseList from "./ResponseList";
import { QuizContext } from "../context/QuizContext";

function QuizComponent() {
  let currentQuestion;
  const quiz = useContext(QuizContext);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const { data } = useFetch(
    "https://quizapi.io/api/v1/questions?apiKey=NZcUX62tqCNU0vTgmhG5rN0dr7RYLdWZVfK6ROiS&limit=10&category=" +
      quiz.quizTopic.title
  );

  if (data) {
    currentQuestion = data[currentQuestionIndex];
  }

  function nextQuestion() {
    if (data && currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex((previousState) => previousState + 1);
    }
  }
  return (
    <>
      {currentQuestion && data && (
        <div className="grid lg:grid-cols-2 gap-y-8 mt-[49px] md:mt-[85px]">
          <div className="lg:max-w-[465px] flex flex-col justify-between gap-10 md:gap-12 text-left">
            <Question
              question={currentQuestion}
              totalQuestions={data.length}
              questionNumber={currentQuestionIndex + 1}
            />
            <Steps
              quizLength={data.length}
              currentQuestion={currentQuestionIndex + 1}
            />
          </div>
          <ResponseList
            key={currentQuestion.id}
            answers={currentQuestion.answers}
            nextQuestion={nextQuestion}
          />
        </div>
      )}
    </>
  );
}

export default QuizComponent;
