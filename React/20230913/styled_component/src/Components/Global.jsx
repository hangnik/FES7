import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Example from "./Example";

// 태그드 템프릿 리터럴을 사용하여 함수를 사용하는 기법
// createGlobalStyle함수를 이용하여 전역 스타일 정의하기
/* const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
` */

// 보통 App.js에 추가
const GlobalStyle = createGlobalStyle`
  // reset css 추가하기 
    ${reset}
    
    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`;

function Global() {
  return (
    <>
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default Global;
