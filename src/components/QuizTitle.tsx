function QuizTitle({ icon, title }) {
  return (
    <div className="justify-start items-center gap-6 flex">
      {icon}
      <div className="text-slate-700 text-[28px] font-medium  leading-7">
        {title}
      </div>
    </div>
  );
}

export default QuizTitle;
