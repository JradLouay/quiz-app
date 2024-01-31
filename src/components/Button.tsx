type buttonProps = {
  text: string;
  action: () => void;
};

function Button({ text = "Submit Answer", action }: buttonProps) {
  return (
    <button
      onClick={action}
      className="w-full gap-2 rounded-3xl border bg-purple-600 p-8 text-[28px] font-medium leading-7 text-white shadow hover:bg-opacity-50 dark:border-none"
    >
      {text}
    </button>
  );
}

export default Button;
