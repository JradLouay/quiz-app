function ResponseItem({ selected = true, showResult = false }) {
  return (
    <div
      className={`group px-5 py-[18px] bg-white rounded-3xl shadow ${
        selected ? "border-[3px] border-purple-600" : "border"
      } items-center gap-8 flex`}
    >
      <div
        className={`${
          selected ? "bg-purple-600 text-white" : "bg-slate-100 text-gray-500"
        } text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600 rounded-md h-14 w-14 flex justify-center items-center text-[28px] font-medium leading-7`}
      >
        A
      </div>
      <div className="text-slate-700 text-[28px] font-medium leading-7">
        4.5 : 1
      </div>
    </div>
  );
}

export default ResponseItem;
