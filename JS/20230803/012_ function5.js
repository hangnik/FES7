// 함수를 선언하는 방법

// 1. 함수 선언문
function sum(x, y) {
  return x + y;
}

// 2. 함수 표현식
let sumXY = function (x, y) {
  return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));

// 3. 화살표 함수
// 3-1) return문만 있는 경우
let sum = (x, y) => x + y;

// 3-2) 기능 + return문이 있는 경우
let sum = (x, y) => {
  let result = x + y;
  console.log(result);
  return result;
};

// 3-3) 인자가 하나인 경우
let pow = (x) => x * x; // 파라미터에 괄호를 써도되고 안써도됨

// 4. 즉시 실행 함수
// main 함수로 만들어서 사용하는 경우가 많음
// main을 다시 사용할 수 없게 하며, 전역변수 등을 사용하지 않게 할 수 있음
(function () {
  console.log("이 함수는 만들어지자마자 바로 실행됩니다!");
})();

// 5. 재귀 함수
// 중급자가 될때까지 권하지 않음 (대부분 반복문으로도 표현 가능)
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
factorial(5); // 120
// 5! == 5 * 4 * 3 * 2 * 1

// 6. 내부 함수
let a = 10; // 전역변수
function test() {
  console.log(a);
}
test(); // 10

let b = 10;
function one() {
  let b = 100; // 지역변수
  function two() {
    function three() {
      console.log(b);
    }
    three();
  }
  two();
}
one(); // 100

// 자신의 공간에 해당 변수가 없으면 상위 공간에서 찾고, 못찾으면 error
// 지역변수 끼리는 서로 간섭하지 못함
function one() {
  // 메모장
  let x = 10; // x는 라인 수
  console.log(x);
}

function two() {
  // 카메라
  let x = 100; // x는 조리개값
  console.log(x);
}
one(); // 10
two(); // 100
