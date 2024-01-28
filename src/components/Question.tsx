import Steps from "./Steps";

function Question() {
  return (
    <>
      <div className="gap-[27px] flex-col flex">
        {" "}
        <div className="self-stretch text-gray-500 text-xl font-normal leading-[30px]">
          Question 6 of 10
        </div>
        <div className="self-stretch text-slate-700 text-4xl font-medium leading-[43.20px]">
          Which of these color contrast ratios defines the minimum WCAG 2.1
          Level AA requirement for normal text?
        </div>
      </div>
      <Steps />
    </>
  );
}

export default Question;
