import { useContext } from "react";
import { QuizDispatchContext, Topic } from "../../context/QuizContext";

type MenuItemProps = {
  topic: Topic;
};

function MenuItem({ topic }: MenuItemProps) {
  const { title, icon } = topic;
  const dispatch = useContext(QuizDispatchContext);
  function selectTopic() {
    dispatch({
      type: "select_topic",
      quizTopic: {
        title: topic.title,
        icon: topic.icon,
        color: topic.color,
      },
    });
    dispatch({
      type: "start_quiz",
    });
  }
  return (
    <button
      onClick={selectTopic}
      className="600 group inline-flex max-h-[64px] items-center justify-start gap-6 rounded-3xl border-[3px] border-white bg-white p-3 shadow-custom hover:!border-purple-600 dark:border-slate-600 dark:bg-slate-600 dark:shadow-custom_dark sm:max-h-[80px] md:gap-8 md:p-5 lg:max-h-[96px]"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg lg:h-14 lg:w-14`}
        style={{ backgroundColor: topic.color }}
      >
        <img src={icon} className="h-[29px] w-[29px] lg:h-10 lg:w-10" />
      </div>
      <span className="text-[28px] font-medium leading-7 text-slate-700 dark:text-white">
        {title}
      </span>
    </button>
  );
}

export default MenuItem;
