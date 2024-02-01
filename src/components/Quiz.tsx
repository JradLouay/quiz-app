import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Header from "./Header";
import HomeComponent from "./HomeComponent";
import QuizComponent from "./QuizComponent";
import ScoreComponent from "./ScoreComponent";

function Quiz() {
  const quiz = useContext(QuizContext);
  return (
    <div className="grid gap-y-[49px] md:gap-y-[85px]">
      <Header />
      {!quiz?.finished &&
        (quiz && quiz.quizTopic ? <QuizComponent /> : <HomeComponent />)}
      {quiz?.finished && <ScoreComponent />}
    </div>
  );
}

export default Quiz;
