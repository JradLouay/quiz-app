import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Header from "./Header";
import HomeComponent from "./HomeComponent";
import QuizComponent from "./QuizComponent";
import ScoreComponent from "./ScoreComponent";

function Quiz() {
  const quiz = useContext(QuizContext);
  return (
    <div className={"sm:py-[97px]"}>
      {/* <div className="absolute -left-[53%] -top-[50%] -z-50 h-[977px] w-[977px] rounded-full border-[144px] border-[#EDF1F9]" />
      <div className="absolute -bottom-[50%] -right-[53%] -z-50 h-[977px] w-[977px] rounded-full border-[144px] border-[#EDF1F9]" /> */}

      <Header />
      {!quiz?.finished &&
        (quiz && quiz.quizTopic ? <QuizComponent /> : <HomeComponent />)}
      {quiz?.finished && <ScoreComponent />}
    </div>
  );
}

export default Quiz;
