// 함수 스코프
function hello(a) {
  const b = "good";
  return a + "hello";
}
// 변수 a와 b는 함수 스코프 내에 있기 때문에 외부에서 접근 불가
hello("hayoung");

let z = 100;
function sum(x) {
  // x는 매개변수(parameter)이면서 지역변수(local val)
  let y = 50; // y는 지역변수
  z = z + y;
  return x + y;
}
console.log(sum(10)); // 60
console.log(x); // 에러
console.log(y); // 에러
console.log(z); // 150

// 블록 스코프
if (true) {
  // for문이어도 마찬가지
  let x = 10;
  const y = 10;
}
console.log(x, y); // 에러
