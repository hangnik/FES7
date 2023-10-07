import { useState } from "react";

const JoinPage = ({ handlePage }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountName, setAccountName] = useState("");
  const [imgSrc, setImgSrc] = useState(
    "https://api.mandarin.weniv.co.kr/Ellipse.png"
  );
  const [info, setInfo] = useState("");

  const join = async (joinData) => {
    const reqUrl = "https://api.mandarin.weniv.co.kr/user/";
    const res = await fetch(reqUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(joinData),
    });

    const json = await res.json();
    console.log(json);
  };

  const inputUserName = (e) => {
    setUserName(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const inputAccountName = (e) => {
    setAccountName(e.target.value);
  };

  const inputInfo = (e) => {
    setInfo(e.target.value);
  };

  // 이미지업로드
  const uploadImage = async (imageFile) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr/";
    const reqUrl = baseUrl + "image/uploadfile";

    // 폼데이터 만들어서 추가하기
    const form = new FormData();
    form.append("image", imageFile);

    const res = await fetch(reqUrl, {
      method: "POST",
      body: form,
      // content-type의 기본은 multipart/form-data이기 때문에 안적어도 됨
    });

    const json = await res.json();
    const imageUrl = baseUrl + json.filename;
    setImgSrc(imageUrl);
  };

  const handleChangeImage = (e) => {
    // 파일 가져오기
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };

  const submitJoin = () => {
    const joinData = {
      user: {
        username: userName,
        email: email,
        password: password,
        accountname: accountName,
        intro: info,
        image: imgSrc,
      },
    };

    join(joinData);
  };

  return (
    <>
      <section>
        <h2>이메일로 회원가입</h2>
        <div>
          <label htmlFor="emailInput">이메일</label>
          <input
            value={email}
            onChange={inputEmail}
            type="email"
            id="emailInput"
            name="email"
            placeholder="이메일 주소를 알려주세요."
          />
        </div>
        <div>
          <label htmlFor="passwordInput">비밀번호</label>
          <input
            value={password}
            onChange={inputPassword}
            type="password"
            name="password"
            id="passwordInput"
            placeholder="비밀번호를 설정해 주세요."
          />
        </div>
        <button type="button">다음</button>
      </section>

      <section>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <label htmlFor="profileImg">
          <img src={imgSrc} alt="프로필 이미지" id="imagePre" />
        </label>
        <input
          type="file"
          id="profileImg"
          name="image"
          accept="image/*"
          onChange={handleChangeImage}
        />
        <div>
          <label htmlFor="userNameInput">사용자 이름</label>
          <input
            value={userName}
            onChange={inputUserName}
            type="text"
            id="userNameInput"
            name="username"
            placeholder="2~10자 이내여야 합니다."
          />
        </div>
        <div>
          <label htmlFor="userIdInput">계정 ID</label>
          <input
            value={accountName}
            onChange={inputAccountName}
            type="text"
            id="userIdInput"
            name="accountname"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          />
        </div>
        <div>
          <label htmlFor="userIntroInput">소개</label>
          <input
            onChange={inputInfo}
            type="text"
            id="userIntroInput"
            name="intro"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요."
          />
        </div>
        <button type="button" onClick={submitJoin}>
          감귤마켓 시작하기
        </button>
        <button type="button" onClick={handlePage}>
          로그인페이지로 돌아가기
        </button>
      </section>
    </>
  );
};

export default JoinPage;
