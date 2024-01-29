function ScoreComponent() {
  return (
    <div className="p-12 bg-white rounded-3xl shadow-custom border flex-col justify-start items-center gap-10 flex">
      <div className="justify-start items-center gap-6 flex">
        <div className="w-14 h-14 relative">
          <div className="w-10 h-10 left-[8px] top-[8px] absolute" />
        </div>
        <div className="text-slate-700 text-[28px] font-medium leading-7">
          Accessibility
        </div>
      </div>
      <div className="self-stretch h-[196px] flex-col justify-start items-center gap-4 flex">
        <div className="text-slate-700 text-[144px] font-medium leading-[144px]">
          8
        </div>
        <div className="text-gray-500 text-2xl font-normal leading-9">
          out of 10
        </div>
      </div>
    </div>
  );
}

export default ScoreComponent;
