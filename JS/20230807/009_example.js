// 문제 1
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 문제 : 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
// 변수를 사용하지 않을 때 관습적으로 _(언더바)를 사용함
function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

// 문제 2
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120585
// 문제 : 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
let result2 = 0;
[149, 180, 192, 170].forEach((v) => {
  v > 168 ? result2++ : null;
});

[149, 180, 192, 170].filter((v) => v > 168).length;

function solution(array, height) {
  return array.filter((v) => v > height).length;
}

// 문제 3
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120849
// 문제 : 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  let 모음 = ["a", "e", "i", "o", "u"];
  var answer = my_string
    .split("")
    .filter((v) => !모음.includes(v))
    .join("");
  return answer;
}

// 문제4
// 1부터 100까지의 숫자 중 3의 배수만 더한 값을 출력해주세요.
// 앞에서는 forEach사용했는데, 이번에는 map과 filter, reduce를 사용해주세요.
Array(100)
  .fill(0)
  .map((_, i) => i + 1)
  .filter((v) => v % 3 === 0)
  .reduce((a, c) => a + c, 0);

// 문제5
// 1부터 100까지의 숫자 중 1이라는 숫자가 들어간 숫자는 모두 더해주세요.
// 더하는 숫자 : 1. 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21
// 더하지 않는 숫자 : 2, 3, 4, 5, 6, 7, 8, 9, 20
Array(100)
  .fill(0)
  .map((_, i) => i + 1)
  .filter((v) => v.toString().includes("1"))
  .reduce((a, c) => a + c, 0);
