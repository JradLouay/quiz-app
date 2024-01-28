import React from "react";

function Welcome() {
  return (
    <div>
      {" "}
      <div className="flex-col justify-start items-start gap-2 text-slate-700 flex">
        <h3 className="text-[64px] font-light leading-[64px]">
          Welcome to the
        </h3>
        <h3 className="text-[64px] font-medium leading-[64px]">
          Frontend Quiz!
        </h3>
      </div>
      <p className="w- text-gray-500 text-xl font-normal leading-[30px]">
        Pick a subject to get started.
      </p>
    </div>
  );
}

export default Welcome;
