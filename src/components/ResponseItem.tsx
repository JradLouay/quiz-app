import classNames from "classnames";
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
  const buttonClass = classNames({
    "group px-5 py-[18px] bg-white dark:bg-slate-600 dark:shadow-custom_dark rounded-3xl shadow items-center justify-between flex":
      true,
    "border-[3px] border-purple-600": selected === answer && !showResult,
    "border-[3px] border-emerald-400":
      selected === answer && showResult && selected.correct,
    "border-[3px] border-red-500":
      selected === answer && showResult && !selected.correct,
  });

  const questionNumberClass = classNames({
    "rounded-md text-gray-500 bg-slate-100 h-14 w-14 flex justify-center items-center text-[28px] font-medium leading-7":
      true,
    "!bg-purple-600 text-white": selected === answer && !showResult,
    "text-gray-500": !selected === answer,
    "!bg-emerald-400 text-white":
      selected === answer && showResult && selected.correct,
    "!bg-red-500 text-white":
      selected === answer && showResult && !selected.correct,
    "group-hover:bg-purple-100 group-hover:text-purple-600": !showResult,
  });

  return (
    <button onClick={() => itemClick(answer)} className={buttonClass}>
      <div className="flex items-center gap-8">
        <div className={questionNumberClass}>A</div>
        <p className="text-[28px] font-medium leading-7 text-slate-700 dark:text-white">
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
