import { useEffect, useState } from "react";

function useMouseLocation(initValue) {
  // initValue가 undefined일 경우 x,y는 null인 객체를 반환
  const [mouseLocation, setMouseLocation] = useState(
    initValue || { x: null, y: null }
  );

  // DOM을 이용해서 화면상의 마우스 좌표를 얻어내고  mouseLocation에 업데이트하기
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMouseLocation({ x: event.x, y: event.y });
    });

    // 컴포넌트가 제거되면 이벤트도 제거 -> cleanUp 함수 사용
  }, []);

  return mouseLocation;
}

export default useMouseLocation;
