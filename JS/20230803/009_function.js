// 함수의 이름이 동일할 경우 뒤에 있는 함수로 덮어씌워짐
function test() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

function test() {
  console.log("hello");
}

test(); // hello 1번 출력
