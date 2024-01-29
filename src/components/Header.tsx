import ToggleButton from "./ToggleButton";
import QuizTitle from "./QuizTitle";
import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";

function Header() {
  const quiz = useContext(QuizContext);
  const Icon = <div className="w-14 h-14 bg-purple-600 rounded-md"></div>;
  return (
    <div className="justify-between items-center flex flex-row-reverse">
      <ToggleButton />
      {quiz.quizTopic && <QuizTitle title={quiz.quizTopic.title} icon={Icon} />}
    </div>
  );
}

export default Header;
