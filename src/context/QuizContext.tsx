import { createContext, useReducer } from "react";

export const QuizContext = createContext(null);
export const QuizDispatchContext = createContext(null);

export function QuizProvider({ children }) {
  const [quiz, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={quiz}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizContext.Provider>
  );
}

function quizReducer(quiz, action) {
  switch (action.type) {
    case "select_topic": {
      return {
        ...quiz,
        quizTopic: action.quizTopic,
      };
    }
    case "add_result": {
      return {
        ...quiz,
        quizScore: action.quizScore,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = {
  quizTopic: null,
  quizScore: null,
};
