import React, { createContext, useReducer } from "react";

export type Quiz = {
  quizTopic?: Topic;
  quizScore: number;
  length: number | undefined;
  finished: boolean | null;
};

export type Topic = {
  title: string;
  color: string;
  // give it type any because i don't know how this will be handled
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};

type ActionType = {
  type: string;
  quizTopic?: Topic;
  length?: number;
};

type QuizProviderProps = {
  children: React.ReactNode;
};

export const QuizContext = createContext<Quiz | null>(null);
export const QuizDispatchContext = createContext<React.Dispatch<ActionType>>(
  {} as React.Dispatch<ActionType>,
);

export function QuizProvider({ children }: QuizProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [quiz, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={quiz}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizContext.Provider>
  );
}

function quizReducer(quiz: Quiz, action: ActionType): Quiz {
  switch (action.type) {
    case "start_quiz": {
      return {
        ...quiz,
        finished: false,
      };
    }
    case "set_length": {
      return {
        ...quiz,
        length: action.length,
      };
    }
    case "finish_quiz": {
      return {
        ...quiz,
        finished: true,
      };
    }
    case "reset": {
      return initialState;
    }
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
  // quizTopic: null,
  quizScore: 0,
  length: 0,
  finished: false,
};
