function QuizTitle({ icon, title }) {
  return (
    <div className="flex items-center justify-start gap-6">
      {icon}
      <div className="text-[28px] font-medium leading-7 text-slate-700  dark:text-white">
        {title}
      </div>
    </div>
  );
}

export default QuizTitle;
