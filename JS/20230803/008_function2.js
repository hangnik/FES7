// function 특징

// 1. return은 생략 가능. 암묵적으로 undefined값을 내포한다.
function add(a, b) {
  let answer = a + b;
}
add(10, 20); // undefined

function add(a, b) {
  let answer = a + b;
  return;
}

let result = add(10, 20); // 이렇게 변수에 할당도 가능

function add(a, b) {
  let answer = a + b;
  return undefined;
}

let result2 = add(10, 20);

// 2. return을 만나면 함수는 즉시 종료됨. 만약 그 이후에 다른 구문이 존재하면 실행되지 않는다.
function test() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  // js는 자바스크립트 엔진이 보지 않는 공간에서는 에러를 출력하지 않음
  console.logfsds("hello");
}
test(); // hello 3번 출력

// 반환보다는 종료의 느낌으로 쓰는 코드
function test() {
  if (true) {
    if (false) {
      console.log("1");
      return;
    }
  }
  console.log("2");
  // 여러 코드...
  return;
}

// 3. 함수의 이름은 결국 변수이다.
console.log("hello"); // 'hello'는 아규먼트
let lee = console.log;
lee("hello"); // hello 출력

function test() {
  console.log("hello");
}
test(); // hello 출력
let hojun = test;
hojun(); // hello 출력

// 4. 함수의 이름은 변수이기 때문에 아규먼트 또는 리턴값으로도 전달할 수 있다.
function add(a, b) {
  return a + b;
}
let x = 10;
let y = 10;
console.log(add(x, y));

// 4-1) 함수를 아규먼트로 전달 : 콜백함수
function add(x, y) {
  return x + y;
}

function addAndMutify(x, y, z) {
  let sum = z(x, y) * z(x, y);
  return sum;
}

addAndMutify(1, 2, add);

// 4-2) 함수를 리턴값으로 전달 (스코프와 클로저를 배우고 다시 다룸)
function one(x) {
  function two(y) {
    return x + y;
  }
  return two;
}

let result3 = one(10);
result3(100); // 110
