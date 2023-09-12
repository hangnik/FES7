import DisplayMood from "./components/DisplayMood/DisplayMood";
import MenuList from "./components/MenuList/MenuList";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <>
      <h1>오늘의 기분을 선택해주세요 😄</h1>
      <MenuList setCurrentMood={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </>
  );
}
export default App;
