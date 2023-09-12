import { useState } from "react";

function Delete() {
  // 아이템 삭제하기
  const [data, setData] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  // function deleteItem(id) {
  //     setData(
  //         data.filter((item) => {
  //             return item.id !== id
  //         })
  //     )
  // }

  // 함수형 업데이트
  // 콜백 함수의 인자에 이전의 상태가 들어가는 것을 리액트가 보장하기 때문에 더 안전
  const deleteItem = (id) => {
    setData((prevData) => {
      return prevData.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <strong>{item.price}</strong>

            {/* 함수를 실행하는 것이 아니라 호출해야 하기 때문에 익명함수로 감싸기 */}
            <button onClick={() => deleteItem(item.id)}>삭제</button>

            {/* 돔에 직접 접근하여 삭제할 수도 있지만, 이는 컴포넌트 관리의 일관성에 위배된다 */}
            {/* <button onClick={(event) => event.target.closest('li').remove()}>삭제</button> */}
          </li>
        );
      })}
    </ul>
  );
}

export default Delete;
