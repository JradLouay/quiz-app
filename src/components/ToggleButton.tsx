import React from "react";

function ToggleButton() {
  return (
    <div className="justify-start items-center gap-4 flex">
      <div className="w-6 h-6 relative" />
      <div className="p-1 bg-purple-600 rounded-[999px] justify-start items-start flex">
        <div className="w-5 h-5 bg-white rounded-full" />
        <div className="w-5 h-5 rounded-full" />
      </div>
      <div className="w-6 h-6 relative" />
    </div>
  );
}

export default ToggleButton;
