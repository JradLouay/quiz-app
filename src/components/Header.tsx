import React from "react";
import ToggleButton from "./ToggleButton";

function Header() {
  return (
    <div className="justify-between items-center flex">
      <div className="justify-start items-center gap-6 flex">
        <div className="w-14 h-14 relative">
          <div className="w-10 h-10 left-[8px] top-[8px] absolute" />
        </div>
        <div className="text-slate-700 text-[28px] font-medium  leading-7">
          Accessibility
        </div>
      </div>
      <ToggleButton />
    </div>
  );
}

export default Header;
