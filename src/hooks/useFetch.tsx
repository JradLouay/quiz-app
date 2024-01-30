import { useEffect, useState } from "react";
import { formatAnswers } from "../utility/utility";

export interface quizQuestion {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  answer: string;
  correct: boolean;
}

export function useFetch(url: string) {
  // Used to prevent state update if the component is unmounted
  const [data, setData] = useState<quizQuestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newData = json.map(function formatResponse(answer: any) {
          return formatAnswers(answer);
        });
        setData(newData);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
      }
    }
    fetchData();
    return function cleanUp() {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { data, error };
}
