// 문제 1. 사칙연산 함수
// 더하기
function add(x, y) {
  return x + y;
}
add(1, 2);

// 빼기
function subtract(x, y) {
  return x - y;
}

// 곱하기
function multify(x, y) {
  return x * y;
}

// 나누기
function divide(x, y) {
  return x / y;
}

// 문제 2. '10,000,000'와 같은 문자를 입력받아 숫자로 반환하는 함수
function stringToNumber(str) {
  const result = parseInt(str.replaceAll(",", ""));
  return result;
}

stringToNumber("12,345");

// 문제 3. 입력된 문자열을 콘솔로 출력하고 입력된 문자열을 쪼개서 출력하는 함수
function printAndSplit(str) {
  console.log(str);
  return str.split("");
}

printAndSplit("world");

// 문제 4. 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수
// 풀이 1)
function addAndMutify(x, y) {
  const add = x + y;
  return add ** 2;
}
addAndMutify(1, 2);

// 풀이 2)
function add(x, y) {
  const sum = x + y;
}

function addAndMutify(x, y) {
  return add(x, y) * add(x, y);
}

// 풀이 3)
function addAndMutify(x, y) {
  // 메모리 효율을 위해 함수를 내부에서 만들어 사용할 수 있음
  function add(x, y) {
    const sum = x + y;
  }
  return add(x, y) * add(x, y);
}

// 문제 5. x**2 + 4x - 12를 구해주는 함수
function calculation(num) {
  return num ** 2 + num * 4 - 12;
}
calculation(3);
