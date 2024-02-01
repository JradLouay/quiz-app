function Welcome() {
  return (
    <div>
      <div className="mb-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-white md:mb-12">
        <h3 className="text-[64px] font-light leading-[64px]">
          Welcome to the
        </h3>
        <h3 className="text-[64px] font-medium leading-[64px]">
          Frontend Quiz!
        </h3>
      </div>
      <p className="text-xl font-normal italic leading-[30px] text-gray-500 dark:text-indigo-300">
        Pick a subject to get started.
      </p>
    </div>
  );
}

export default Welcome;
