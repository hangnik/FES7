import React from "react";
import styled, { css } from "styled-components";

// css 확장하기
const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

// css를 확장해서 또 css를 만들 수도 있음
/* const four = css`
  ${One}
  ${Two}
`; */

// css 재사용해서 컴포넌트 만들기
const Three = styled.div`
  ${One}
  ${Two}
`;

const CssExtention = () => {
  return <Three>Lorem ipsum dolor</Three>;
};

export default CssExtention;
