import { useContext } from "react";
import { QuizDispatchContext } from "../context/QuizContext";

function MenuItem({ topic }) {
  const { title, icon } = topic;
  const dispatch = useContext(QuizDispatchContext);
  function selectTopic() {
    dispatch({
      type: "select_topic",
      quizTopic: topic,
    });
    dispatch({
      type: "start_quiz",
    });
  }
  return (
    <button
      onClick={selectTopic}
      className="p-3 md:p-5 bg-white dark:bg-slate-600 rounded-3xl shadow-custom dark:shadow-custom_dark dark:border-none border justify-start items-center gap-6 md:gap-8 inline-flex"
    >
      <div className={`w-14 h-14 bg-[${"#FFF1E9"}] rounded-md p-2`}>{icon}</div>
      <h4 className="text-slate-700 dark:text-white text-[28px] font-medium leading-7">
        {title}
      </h4>
    </button>
  );
}

export default MenuItem;
