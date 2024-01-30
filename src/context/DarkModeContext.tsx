// import { createContext, useState } from "react";

// type Theme = "light" | "dark";
// export const ThemeContext = createContext({
//   theme: "light",
//   toggleTheme: () => {},
// });

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState<Theme>("light");

//   function toggleTheme() {
//     console.log("Toggling theme");
//     setTheme((theme) => (theme === "dark" ? "light" : "dark"));
//   }
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
import { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
type Theme = "light" | "dark";
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    console.log("Toggling theme");
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  useLayoutEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
export { ThemeProvider, useTheme };
