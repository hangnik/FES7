// sort
let data = ["a", "z", "b", "e"];
data.sort(); // ['a', 'b', 'e', 'z']
// 에러 안나는 sort 코드
data.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));

// 사전식 정렬이어서 숫자형 데이터 배열은 정렬이 되지 않음!
let data3 = [1, 11, 2, 111, 22];
data3.sort(); // [1, 11, 111, 2, 22]

// 실무 DB로 갖고 있으면 좋은 코드
// data.sort((a, b) => (a > b ? -1 : (a < b ? 1 : 0)))
// data.sort((a, b) => (a < b ? -1 : (a > b ? 1 : 0)))

// 자주 사용하는 코드
let data4 = [1, 11, 2, 111, 22];
data4.sort((a, b) => a - b); // 오름차순
data4.sort((a, b) => b - a); // 내림차순

// (a, b) => (a - b)가 콜백함수
// a - b 값이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
// a - b 값이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
// a - b 값이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다. 즉, b가 먼저옵니다.

// 원리
let test = [13, 9, 10, 2];
test.sort((a, b) => {
  console.log(a, b);
});
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지 않습니다.
// 9 13
// 10 9
// 2 10

let test2 = [13, 9, 10, 2];
test2.sort((a, b) => {
  console.log(a, b);
  console.log(a - b); // 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
});

let test3 = [13, 9, 10, 2];
test3.sort((a, b) => {
  return a - b; // 작은 값이 앞으로 간다 => 오름차순
});
