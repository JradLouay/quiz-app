import Question from "./Question";
import Steps from "./Steps";
import ResponseList from "./ResponseList";
import Button from "./Button";

function QuizComponent() {
  return (
    <div className="grid lg:grid-cols-2 gap-y-8 mt-[49px] md:mt-[85px]">
      <div className="lg:max-w-[465px] flex flex-col justify-between gap-10 md:gap-12 text-left">
        <Question />
        <Steps quizLength={5} currentQuestion={2} />
      </div>
      <div className="flex gap-6 flex-col lg:max-w-[564px]">
        <ResponseList />
      </div>
      {true && (
        <div className="lg:col-start-2">
          <Button />
        </div>
      )}
    </div>
  );
}

export default QuizComponent;
