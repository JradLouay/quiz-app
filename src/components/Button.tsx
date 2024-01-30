type buttonProps = {
  text: string;
  action: () => void;
};

function Button({ text = "Submit Answer", action }: buttonProps) {
  return (
    <button
      onClick={action}
      className="w-full text-white text-[28px] hover:bg-opacity-50 font-medium leading-7 p-8 bg-purple-600 rounded-3xl shadow border gap-2"
    >
      {text}
    </button>
  );
}

export default Button;
