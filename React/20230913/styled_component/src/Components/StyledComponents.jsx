import React from "react";
import styled from "styled-components";

// 함수를 실행해서 스타일을 만들고 클래스명을 랜덤으로 정해줌
const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: red;
`;

const StyledComponents = () => {
  return (
    <ContentDiv>
      <ContentH2>Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
      <Hello />
    </ContentDiv>
  );
};

function Hello() {
  return <h2>hello world</h2>;
}

export default StyledComponents;
