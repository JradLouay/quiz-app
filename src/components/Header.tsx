import ToggleButton from "./ToggleButton";
import QuizTitle from "./QuizTitle";
import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";

function Header() {
  const quiz = useContext(QuizContext);
  // const Icon = <div className="h-14 w-14 rounded-md bg-purple-600"></div>;
  return (
    <div className="flex flex-row-reverse items-center justify-between">
      <ToggleButton />
      {quiz?.quizTopic && (
        <QuizTitle title={quiz?.quizTopic.title} icon={quiz?.quizTopic.icon} />
      )}
    </div>
  );
}

export default Header;
