import { Answer } from "../hooks/useFetch";
import RightWrongIconComponent from "./RightWrongComponent";

type responseItemProps = {
  selected: Answer | null;
  showResult: boolean;
  answer: Answer | null;
  setAnswer: (answer: object) => void;
};

function ResponseItem({
  selected,
  showResult,
  answer,
  setAnswer,
}: responseItemProps) {
  function itemClick(answer: Answer) {
    if (!showResult) {
      setAnswer(answer);
    }
  }
  return (
    <button
      onClick={() => itemClick(answer)}
      className={`group px-5 py-[18px] bg-white rounded-3xl shadow ${
        selected === answer ? "border-[3px] border-purple-600" : "border"
      } ${
        selected === answer &&
        showResult &&
        selected.correct &&
        "border-emerald-400"
      }
      ${
        selected === answer &&
        showResult &&
        !selected.correct &&
        "border-red-500"
      } items-center justify-between flex`}
    >
      <div className="flex gap-8 items-center">
        <div
          className={`${
            selected === answer
              ? "bg-purple-600 text-white"
              : "bg-slate-100 text-gray-500"
          } ${
            selected === answer &&
            showResult &&
            selected.correct &&
            "bg-emerald-400"
          } ${
            selected === answer &&
            showResult &&
            !selected.correct &&
            "bg-red-500"
          } text-gray-500 ${
            !showResult &&
            "group-hover:bg-purple-100 group-hover:text-purple-600"
          } rounded-md h-14 w-14 flex justify-center items-center text-[28px] font-medium leading-7`}
        >
          A
        </div>
        <p className="text-slate-700 text-[28px] font-medium leading-7">
          {answer.answer}
        </p>
      </div>

      <RightWrongIconComponent
        answer={answer}
        selected={selected}
        showResult={showResult}
      />
    </button>
  );
}

export default ResponseItem;
