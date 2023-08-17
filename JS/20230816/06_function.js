// 구조분해할당을 이용하여 아규먼트의 기본값 지정하기
// 인자를 넘기지 않고 실행했을 때 에러가 발생하므로 빈 객체를 할당해 예외 처리 하기!
function printMe({ name, age, email } = {}) {
  console.log(`이름: ${name}, 나이: ${age}, 이메일: ${email}`);
}

const me = {
  name: "재현",
  age: 25,
  email: "jaehyun@something.com",
};

printMe(me); // 이름: 재현, 나이: 25, 이메일: jaehyun@something.com

// 함수에서 객체를 인자로 전달받는 방법
// 전달 시 입력되지 않는 값은 undefined
function 함수4({ 회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 }) {
  console.log("함수기능");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}

함수4({
  회원등급: "Gold",
  채널관리: false,
  백업: "부분가능",
  소셜로그인여부: true,
}); // Gold undefined undefined false 부분가능 true

// 초기값 설정
function 함수4({
  회원등급 = "Gold",
  글쓰기 = true,
  글읽기 = true,
  채널관리 = true,
  백업 = "부분가능",
  소셜로그인여부 = true,
}) {
  console.log("함수기능");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
}

함수4({
  회원등급: "Silver",
  소셜로그인여부: true,
}); // Silver true true true 부분가능 true

// 함수에서 받는 부분             // 아규먼트를 전달해주는 부분
let { one = 30, two, three } = { one: 10, two: 100, three: 200 };

// rest 문법
// 매개변수에는 하나의 rest만 존재할 수 있음
// rest는 반드시 함수 정의의 마지막 매개변수여야 함
function 함수2(a, b, ...c) {
  console.log(a); // hello
  console.log(b); // wolrd
  console.log(c); // [10, 20, 30, 40]
  return Math.max(...c); // 40
}

함수2("hello", "world", 10, 20, 30, 40);

function 함수2([a, b], ...c) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // [10, 20, 30, 40]
}

함수2([1, 2], 10, 20, 30, 40);

// 일반적인 객체나 배열안에서 사용되는 ...은 spread!
// 함수의 마지막 매개변수에 사용되는 ...은 rest!
