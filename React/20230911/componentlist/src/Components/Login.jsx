import { useState } from "react";

function Login({ infoUser, setLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      alert("아이디를 입력하지 않았습니다.");
    } else if (pw === "") {
      alert("패스워드를 입력하지 않았습니다");
    }

    if (id === infoUser.idUser && pw === infoUser.pwUser.toString()) {
      setLogin(true);
    } else if (id !== infoUser.idUser || pw !== infoUser.pwUser.toString()) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleLoginInput} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
