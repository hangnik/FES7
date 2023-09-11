import React, { useState } from "react";

function Event() {
  const [message, setMessage] = useState("여기를 주목해주세요");
  const handleOnMouseEnter = () => {
    setMessage("안녕하세요");
  };

  const handleOnMouseLeave = () => {
    setMessage("안녕히가세요");
  };

  return (
    <div>
      <h2 onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        마우스를 올려보세요
        <p>{message}</p>
      </h2>
    </div>
  );
}

export default Event;
