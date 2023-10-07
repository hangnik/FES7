import { useState } from "react";
import JoinPage from "./components/JoinPage";
import LoginPage from "./components/LoginPage";

function App() {
  const [page, setPage] = useState(true);

  const handlePage = () => {
    setPage((prevPage) => !prevPage);
  };

  const getMyInfo = async () => {
    // 로컬스토리지에서 토큰 가져오기
    const token = localStorage.getItem("token");
    const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";
    const res = await fetch(reqUrl, {
      //method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();
    console.log(json);
  };

  return (
    <div>
      <button type="button" onClick={getMyInfo}>
        내 정보 불러오기
      </button>
      {page ? (
        <LoginPage handlePage={handlePage} />
      ) : (
        <JoinPage handlePage={handlePage} />
      )}
    </div>
  );
}
export default App;
