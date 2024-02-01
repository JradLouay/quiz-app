import Quiz from "./Quiz";

type QuestionProps = {
  question: Quiz;
  totalQuestions: number;
  questionNumber: number;
};

function Question({ question, totalQuestions, questionNumber }: QuestionProps) {
  return (
    <>
      <div className="flex flex-col gap-3 lg:gap-[27px]">
        {" "}
        <div className="self-stretch text-sm font-normal leading-none text-gray-500 dark:text-indigo-300 sm:text-xl sm:leading-[30px]">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="self-stretch text-xl font-medium text-slate-700 dark:text-white sm:text-4xl sm:leading-[43.20px]">
          {question?.question}
        </div>
      </div>
    </>
  );
}

export default Question;
