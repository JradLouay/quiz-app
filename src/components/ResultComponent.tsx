import Button from "./Button";
import CompletedComponent from "./CompletedComponent";
import ScoreComponent from "./ScoreComponent";

function ResultComponent() {
  return (
    <div className="grid lg:grid-cols-2 gap-y-8 mt-[49px] md:mt-[85px]">
      <div className="lg:max-w-[465px] flex flex-col justify-between gap-10 md:gap-12 text-left">
        <CompletedComponent />
      </div>
      <div className="flex gap-6 flex-col lg:max-w-[564px]">
        <ScoreComponent />
      </div>
      {true && (
        <div className="lg:col-start-2">
          <Button text={"Play again"} />
        </div>
      )}
    </div>
  );
}

export default ResultComponent;
