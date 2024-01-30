type QuestionProps = {
  question: object;
  totalQuestions: number;
  questionNumber: number;
};

function Question({ question, totalQuestions, questionNumber }: QuestionProps) {
  return (
    <>
      <div className="gap-[27px] flex-col flex">
        {" "}
        <div className="self-stretch text-gray-500 text-xl font-normal leading-[30px]">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="self-stretch text-slate-700 text-4xl font-medium leading-[43.20px]">
          {question?.question}
        </div>
      </div>
    </>
  );
}

export default Question;
