import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    // state가 변경되어 렌더링 될 때 실행하는 부분!
    if (count % 2 === 0) {
      alert("짝수입니다");
    } else {
      alert("홀수입니다");
    }
    // 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
    // 이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠.
    return () => {
      alert("컴포넌트가 바뀌기 직전입니다");
    };
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
