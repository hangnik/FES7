import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // state 함수가 실행되고 state가 변경되면 컴포넌트가 다시 렌더링.
    // state 함수는 비동기적! 따라서 여러개의 동일한 state 함수가 실행되도 기다렸다가 마지막 함수만 실행됨
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1); // 이 함수만 실행되서 똑같이 1씩만 증가함

    // 함수형 업데이트 사용
    setCount((prev) => {
      return prev + 1;
    });
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
