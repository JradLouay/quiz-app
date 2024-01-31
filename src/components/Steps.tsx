type StepProps = {
  quizLength: number;
  currentQuestion: number;
};

function Steps({ quizLength, currentQuestion }: StepProps) {
  return (
    <div className="flex h-4 flex-col items-start justify-center gap-2 rounded-[999px] bg-white p-1 dark:bg-slate-600">
      <div
        style={{ width: `${(currentQuestion * 100) / quizLength}%` }}
        className={"h-2 rounded-[104px] border bg-purple-600 dark:border-none"}
      ></div>
    </div>
  );
}

export default Steps;
