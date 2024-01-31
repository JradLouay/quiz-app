import { useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

import Question from "./Question";
import Steps from "./Steps";
import ResponseList from "./ResponseList";
import { QuizContext, QuizDispatchContext } from "../context/QuizContext";

function QuizComponent() {
  let currentQuestion;
  const quiz = useContext(QuizContext);
  const dispatch = useContext(QuizDispatchContext);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const { data } = useFetch(
    "https://quizapi.io/api/v1/questions?apiKey=NZcUX62tqCNU0vTgmhG5rN0dr7RYLdWZVfK6ROiS&limit=10&category=" +
      quiz?.quizTopic?.title,
  );
  if (data) {
    currentQuestion = data[currentQuestionIndex];
  }

  useEffect(() => {
    if (data) {
      console.log("useEffect() called", data.length);
      dispatch({
        type: "set_length",
        length: data.length,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function nextQuestion() {
    if (data && currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex((previousState) => previousState + 1);
    }
  }
  return (
    <>
      {currentQuestion && data && (
        <div className="mt-[49px] grid gap-y-8 md:mt-[85px] lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-10 text-left md:gap-12 lg:max-w-[465px]">
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
            lastQuestion={!(currentQuestionIndex < data.length - 1)}
          />
        </div>
      )}
    </>
  );
}

export default QuizComponent;
