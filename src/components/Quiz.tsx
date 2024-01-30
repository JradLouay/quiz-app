import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Header from "./Header";
import HomeComponent from "./HomeComponent";
import QuizComponent from "./QuizComponent";
import ScoreComponent from "./ScoreComponent";

function Quiz() {
  const quiz = useContext(QuizContext);
  return (
    <>
      <Header />
      {quiz && quiz.quizTopic ? <QuizComponent /> : <HomeComponent />}
      {/* <ScoreComponent /> */}
    </>
  );
}

export default Quiz;
