import "./App.css";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <div className="py-[85px]">
      {/* <div className="absolute -z-50 w-[977px] h-[977px] -top-[50%] -left-[53%] rounded-full border-[144px] border-[#EDF1F9]" />
      <div className="absolute -z-50 w-[977px] h-[977px] -bottom-[50%] -right-[53%] rounded-full border-[144px] border-[#EDF1F9]" /> */}
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default App;
