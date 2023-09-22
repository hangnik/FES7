import React from "react";

let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>{guest}번 손님을 위한 컵입니다.</h2>;
}

export default function App3() {
  return (
    <div>
      <Cup />
    </div>
  );
}
