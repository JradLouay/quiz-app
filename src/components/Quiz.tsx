import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Header from "./Header";
import HomeComponent from "./HomeComponent";
import QuizComponent from "./QuizComponent";
import ScoreComponent from "./ScoreComponent";

function Quiz() {
  const quiz = useContext(QuizContext);
  return (
    <div className={`py-[85px]`}>
      {/* <div className="absolute -z-50 w-[977px] h-[977px] -top-[50%] -left-[53%] rounded-full border-[144px] border-[#EDF1F9]" />
      <div className="absolute -z-50 w-[977px] h-[977px] -bottom-[50%] -right-[53%] rounded-full border-[144px] border-[#EDF1F9]" /> */}

      <Header />
      {quiz && quiz.quizTopic ? <QuizComponent /> : <HomeComponent />}
      {/* <ScoreComponent /> */}
    </div>
  );
}

export default Quiz;
