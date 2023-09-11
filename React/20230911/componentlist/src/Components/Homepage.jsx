import React from "react";

function Homepage({ setLogin }) {
  const handleLogout = () => {
    setLogin(false);
  };
  return (
    <div>
      <h2>환영합니다!</h2>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default Homepage;
