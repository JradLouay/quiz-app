import classNames from "classnames";
import { Answer } from "../../hooks/useFetch";
import RightWrongIconComponent from "./RightWrongComponent";
import { Dispatch, SetStateAction } from "react";

type responseItemProps = {
  selected: Answer | null;
  showResult: boolean;
  answer: Answer | null;
  setAnswer: Dispatch<SetStateAction<Answer | null>>;
};

function ResponseItem({
  selected,
  showResult,
  answer,
  setAnswer,
}: responseItemProps) {
  function itemClick(answer: Answer | null) {
    if (!showResult) {
      setAnswer(answer);
    }
  }
  const buttonClass = classNames({
    "max-h-[64px] border-[3px] border-white dark:border-slate-600 text-lg sm:text-[28px] leading-none sm:max-h-[80px] lg:max-h-[92px] group p-3 lg:px-5 lg:py-[18px] bg-white dark:bg-slate-600 dark:shadow-custom_dark rounded-3xl shadow items-center justify-between flex":
      true,
    "!border-purple-600": selected === answer && !showResult,
    "!border-emerald-400":
      selected === answer && showResult && selected?.correct,
    "!border-red-500": selected === answer && showResult && !selected?.correct,
  });

  const questionNumberClass = classNames({
    "rounded-md text-gray-500 bg-slate-100 h-10 w-10 sm:h-[56px] sm:w-[56px] flex justify-center items-center font-medium":
      true,
    "!bg-purple-600 text-white": selected === answer && !showResult,
    "text-gray-500": !(selected === answer),
    "!bg-emerald-400 text-white":
      selected === answer && showResult && selected?.correct,
    "!bg-red-500 text-white":
      selected === answer && showResult && !selected?.correct,
    "group-hover:bg-purple-100 group-hover:text-purple-600": !showResult,
  });

  return (
    <button onClick={() => itemClick(answer)} className={buttonClass}>
      <div className="flex items-center gap-8">
        <div className={questionNumberClass}>A</div>
        <p className="font-medium text-slate-700 dark:text-white">
          {answer?.answer}
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
