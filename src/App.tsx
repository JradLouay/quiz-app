import "./App.css";
import Quiz from "./components/Layout";
import { ThemeProvider } from "./context/DarkModeContext";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;
