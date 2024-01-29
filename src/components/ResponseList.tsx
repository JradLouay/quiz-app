import ResponseItem from "./ResponseItem";

function ResponseList() {
  return (
    <div className="flex-col gap-8 flex">
      <div className="flex-col gap-6 flex">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ResponseItem
              selected={index == 3}
              showResult={index == 2}
              correct={index == 2}
            />
          ))}
      </div>
    </div>
  );
}

export default ResponseList;
