import ColorText from "./Components/ColorText";
import Event from "./Components/Event";
import Hello from "./Components/Hello";
import HelloProps from "./Components/HelloProps";
import Resume from "./Components/Resume";
import Time from "./Components/Time";
import Login from "./Components/Login";
import { useState } from "react";
import Homepage from "./Components/Homepage";
import Modal from "./Components/Modal";

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
  };

  // 로그인 상태를 판단하는 state
  const [login, setLogin] = useState(false);
  // 모달 보여주기
  const [modalShow, setModalShow] = useState(true);

  return (
    <div>
      <Hello name="gary" />
      <Time />
      <HelloProps
        name="hayoung"
        age={15}
        someFun={() => "awesome!!"}
        someJSX={<img src="https://picsum.photos/id/237/200/300" alt="" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
      <hr />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
      <hr />
      <Event />
      <hr />
      {login ? (
        <Homepage setLogin={setLogin} />
      ) : (
        <Login infoUser={user} setLogin={setLogin} />
      )}
      {modalShow && <Modal setModalShow={setModalShow} />}
    </div>
  );
}

export default App;
