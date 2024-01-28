function TopicsMenu() {
  return (
    <>
      <div className="p-5 bg-white rounded-3xl shadow-custom border justify-start items-center gap-8 inline-flex">
        <div className="w-14 h-14 bg-[#FFF1E9] rounded-md"></div>
        <h4 className="text-slate-700 text-[28px] font-medium leading-7">
          HTML
        </h4>
      </div>
      <div className="p-5 bg-white rounded-3xl shadow-custom border justify-start items-center gap-8 inline-flex">
        <div className="w-14 h-14 "></div>
        <h4 className="text-slate-700 text-[28px] font-medium leading-7">
          CSS
        </h4>
      </div>
      <div className="p-5 bg-white rounded-3xl shadow-custom border justify-start items-center gap-8 inline-flex">
        <div className="w-14 h-14 "></div>
        <h4 className="text-slate-700 text-[28px] font-medium leading-7">
          Javascript
        </h4>
      </div>
      <div className="p-5 bg-white rounded-3xl shadow-custom border justify-start items-center gap-8 inline-flex">
        <div className="w-14 h-14 "></div>
        <h4 className="text-slate-700 text-[28px] font-medium leading-7">
          Accessibility
        </h4>
      </div>
    </>
  );
}

export default TopicsMenu;
