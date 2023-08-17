// 콜백 함수 : 함수에 매개변수로 전달되어 실행하는 함수
function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  return x + y;
}

function documentWriter(s) {
  document.write("콜백함수", s);
}

sum(10, 20, documentWriter); // '콜백함수 30' 출력, 30 반환
