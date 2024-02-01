import { useContext } from "react";
import Button from "./Button";
import CompletedComponent from "./scoreComponents/CompletedComponent";
import { QuizContext, QuizDispatchContext } from "../context/QuizContext";

function ScoreComponent() {
  const dispatch = useContext(QuizDispatchContext);
  const quiz = useContext(QuizContext);

  function resetQuiz() {
    dispatch({
      type: "reset",
    });
  }

  return (
    <>
      <div className="grid gap-y-8 lg:grid-cols-2">
        <CompletedComponent />
        <div className="flex flex-col gap-6 lg:max-w-[564px]">
          <div className="flex flex-col items-center justify-start gap-10 rounded-3xl border bg-white p-12 shadow-custom dark:border-none dark:bg-slate-600 dark:shadow-custom_dark">
            <div className="flex items-center justify-start gap-6">
              <div className="text-[28px] font-medium leading-7 text-slate-700 dark:text-white">
                {quiz?.quizTopic?.title}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-4">
              <span className="text-[144px] font-medium leading-[144px] text-slate-700 dark:text-white">
                {quiz?.quizScore}
              </span>
              <span className="text-2xl font-normal leading-9 text-gray-500 dark:text-indigo-300">
                out of {quiz?.length}
              </span>
            </div>
          </div>{" "}
        </div>
        <div className="lg:col-start-2">
          <Button text="Play again" action={resetQuiz} />
        </div>
      </div>
    </>
  );
}

export default ScoreComponent;
