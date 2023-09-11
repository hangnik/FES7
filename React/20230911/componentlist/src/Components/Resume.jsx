import { useState } from "react";

function Resume({ name, hello, hobby, food, color }) {
  // 구조분해할당을 사용하여 props를 생략할 수도 있다.
  //console.log("useState: ", useState(0));
  const [like, setLike] = useState(0);
  let [like2, setLike2] = useState("");

  // 함수를 통해 더 안전하게 값 할당해주기 => useState const로 선언 가능
  const clickLike = () => {
    setLike((like) => like + 1);
  };

  const showLike = () => {
    if (like2 === "") {
      setLike2("like");
    } else {
      setLike2("");
    }
  };

  return (
    <>
      <h1>{name} 자기소개서</h1>
      <h2>{hello}</h2>
      <h3>취미 : {hobby}</h3>
      <h3>좋아하는 음식 : {food}</h3>
      <h3>
        좋아하는 색 : <span style={{ color: color }}>{color}</span>
      </h3>
      <button onClick={clickLike}>like {like}</button>
      <button onClick={showLike}>like</button>
      <span>{like2}</span>
    </>
  );
}

export default Resume;
