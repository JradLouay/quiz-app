function QuizTitle({ icon, title }) {
  return (
    <div className="flex items-center justify-start gap-6">
      {icon}
      <div className="text-lg font-medium leading-[100%] text-slate-700 dark:text-white sm:text-[28px]  sm:leading-7">
        {title}
      </div>
    </div>
  );
}

export default QuizTitle;
