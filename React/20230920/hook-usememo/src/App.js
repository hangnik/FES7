import { useMemo, useState } from "react";

function 부하() {
  // time~timeEnd 안의 코드 실행되는 시간 로그 찍기
  //console.time();
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  //console.timeEnd();
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  /* let result = 부하()
  // 렌더링 할때마다 계산하기 때문에 부하 발생
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  } */

  // useMemo 사용
  let result = useMemo(() => {
    return 부하();
  }, []); //만약 의존배열이 없다면 콜백함수를 무조건 실행

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <div>{countTwo}</div>
      <button onClick={handleCountUp}>UP!</button>
      <button onClick={handleCountUpTwo}>UP2!</button>
    </div>
  );
}
export default App;
