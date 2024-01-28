import React from "react";

function MenuItem({ topic }) {
  const { title, icon, color = "#FFF1E9" } = topic;
  return (
    <div className="p-5 bg-white rounded-3xl shadow-custom border justify-start items-center gap-8 inline-flex">
      <div className={`w-14 h-14 bg-[${color}] rounded-md p-2`}>{icon}</div>
      <h4 className="text-slate-700 text-[28px] font-medium leading-7">
        {title}
      </h4>
    </div>
  );
}

export default MenuItem;
