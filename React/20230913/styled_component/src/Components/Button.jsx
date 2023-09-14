import React from "react";
import styled from "styled-components";

const OriginalBtn = styled.button`
  background-color: #4169e1;
  color: white;
  padding: 10px;
`;

const SecondBtn = styled(OriginalBtn)`
  color: black;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  box-shadow: 3px 3px 3px #bbbbbb;
`;

const ThirdBtn = styled(SecondBtn)`
  color: white;
  background-color: #90ee90;
`;

function Button() {
  return (
    <div>
      <OriginalBtn>버튼1</OriginalBtn>
      <SecondBtn>버튼2</SecondBtn>
      <ThirdBtn>버튼3</ThirdBtn>
    </div>
  );
}

export default Button;
