import React from "react";
import Question from "./components/Question";
import styles from "./App.module.css";

const App = () => {
  // 똑같은 class명을 쓸 경우 css파일 import 위치에 따라 적용되는 css가 달라질 수 있음
  // 이를 방지하기 위해 module.css 사용
  return (
    <>
      <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.text}>
            상세정보
          </li>
          <li id="qa" className={styles.text}>
            Q&A
          </li>
          <li id="review" className={styles.text}>
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;
