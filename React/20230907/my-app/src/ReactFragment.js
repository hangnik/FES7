import React from "react";

const arr = [1, 2, 3, 4, 5, 6];

function ReactFragment() {
  const myArr = arr.map((item) => {
    return (
      <React.Fragment key={item}>
        <dt>숫자</dt>
        <dd>{item}</dd>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <h2>라이캣!!</h2>
      <dl>{myArr}</dl>
    </React.Fragment>
  );
}

export default ReactFragment;
