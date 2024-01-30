type StepProps = {
  quizLength: number;
  currentQuestion: number;
};

function Steps({ quizLength, currentQuestion }: StepProps) {
  return (
    <div className="h-4 p-1 bg-white rounded-[999px] flex-col justify-center items-start gap-2 flex">
      <div
        style={{ width: `${(currentQuestion * 100) / quizLength}%` }}
        className={"h-2 bg-purple-600 rounded-[104px] border"}
      ></div>
    </div>
  );
}

export default Steps;
