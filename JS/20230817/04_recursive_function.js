// 재귀함수 : 함수가 자기 자신을 호출하는 것
// 무한히 반복될 수 있기 때문에 종료 조건을 꼭 써줘야 함
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}
// 5 * 4 * 3 * 2 * 1

// 문제 : 재귀 함수를 사용하여 숫자를 원소로하는 배열의 모든 요소를 합하는 함수를 만들어 보세요!
function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}
