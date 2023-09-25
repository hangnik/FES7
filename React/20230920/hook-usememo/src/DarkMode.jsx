import React, { createContext, useState } from "react";
import ThemeComponent from "./components/ThemeComponent";
import ThemeSwitch from "./components/ThemeSwitch";

const ThemeContext = createContext();

function DarkMode() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    // 이전 값을 가져와서 light 이면 dark로, 아니면 light 테마로 변경
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeComponent />
      <ThemeSwitch />
    </ThemeContext.Provider>
  );
}

export { DarkMode, ThemeContext };
