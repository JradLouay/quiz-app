import { createContext, useReducer } from "react";

type Quiz = {
  quizTopic: string | null;
  quizScore: number;
};
type ActionType = {
  type: string;
  quizTopic: string;
};
type QuizProviderProps = {
  children: React.ReactNode;
};

export const QuizContext = createContext(null);
export const QuizDispatchContext = createContext(null);

export function QuizProvider({ children }: QuizProviderProps) {
  const [quiz, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={quiz}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizContext.Provider>
  );
}

function quizReducer(quiz: Quiz, action: ActionType) {
  switch (action.type) {
    case "select_topic": {
      return {
        ...quiz,
        quizTopic: action.quizTopic,
      };
    }
    case "incr_score": {
      return {
        ...quiz,
        quizScore: quiz.quizScore + 1,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState: Quiz = {
  quizTopic: null,
  quizScore: 0,
};
