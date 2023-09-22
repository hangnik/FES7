import React, { useMemo, useRef, useState } from "react";

export default function App2() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const inputName = useRef(null);
  const inputId = useRef(null);

  const handleInputName = (event) => {
    setName(event.target.value);
    console.log("렌더링 - 1");
  };

  const handleInputId = (event) => {
    setId(event.target.value);
    console.log("렌더링 - 2");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // input 초기화
    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus();

    // 유저의 입력 값을 userInfo 변수에 저장
    const newInfo = [...userInfo, { name, id }];
    setUserInfo(newInfo);

    console.log("렌더링 - 3");
  };

  const getNum = (list) => {
    console.log("렌더링!");
    return list.length;
  };

  // userInfo가 업데이트 될 때만 실행
  const itemLength = useMemo(() => {
    getNum(userInfo);
  }, [userInfo]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          onChange={handleInputId}
          ref={inputId}
        />
        <button>회원명부 작성</button>
      </form>

      <ul>
        {userInfo.map((value, index) => {
          return (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          );
        })}
      </ul>
      {/* <span>현재 회원 수 : {getNum(userInfo)}</span> */}
      <span>현재 회원 수 : {itemLength}</span>
    </div>
  );
}
