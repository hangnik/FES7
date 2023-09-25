import React, { useContext } from "react";
import { ThemeContext } from "../DarkMode";

export default function ThemeSwitch() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>테마 전환</button>
    </div>
  );
}
