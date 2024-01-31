type QuestionProps = {
  question: object;
  totalQuestions: number;
  questionNumber: number;
};

function Question({ question, totalQuestions, questionNumber }: QuestionProps) {
  return (
    <>
      <div className="flex flex-col gap-[27px]">
        {" "}
        <div className="self-stretch text-xl font-normal leading-[30px] text-gray-500 dark:text-indigo-300">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="self-stretch text-4xl font-medium leading-[43.20px] text-slate-700 dark:text-white">
          {question?.question}
        </div>
      </div>
    </>
  );
}

export default Question;
