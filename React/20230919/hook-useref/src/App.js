import { useEffect, useRef, useState } from "react";

function Conuter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  // 컴포넌트가 업데이트돼도 값을 저장하고 있음. 단, 화면엔 렌더링되지 않음
  const countThree = useRef(0);

  // 일반 변수는 컴포넌트가 업데이트되면 초기화 됨
  let countFour = 0;

  const handleCountUp = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  const handleCountUpThree = () => {
    countThree.current += 1;
    console.log(countThree);
  };

  const handleCountUpFour = () => {
    countFour += 1;
    console.log(countFour);
  };

  useEffect(() => {
    console.log("count가 감시되고 있습니다.", count);
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Conuter />
    </div>
  );
}
export default App;
