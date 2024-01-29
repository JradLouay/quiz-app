function Steps({ quizLength, currentQuestion }) {
  return (
    <div className="h-4 p-1 bg-white rounded-[999px] flex-col justify-center items-start gap-2 flex">
      <div
        className={`w-[${
          (currentQuestion * 100) / quizLength + "%"
        }] h-2 bg-purple-600 rounded-[104px] border`}
      ></div>
    </div>
  );
}

export default Steps;
