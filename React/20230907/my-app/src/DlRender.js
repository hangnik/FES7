import React from "react";

function DlRender() {
  const items = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
  ];

  const fruits = items.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <dt>{item.name}</dt>
        <dd>{item.desc}</dd>
      </React.Fragment>
    );
  });

  return (
    <>
      <dl>{fruits}</dl>
    </>
  );
}

export default DlRender;
