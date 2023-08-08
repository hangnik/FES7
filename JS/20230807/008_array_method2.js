// 1. filter : return 값이 true인것만 새로운 배열로 반환
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((item) => item % 2 === 0); // [2, 4, 6, 8]

// 메서드 체이닝으로 많이 사용

// 2. reduce
// 배열의 요소를 모두 더할 때 사용
[10, 20, 30, 40, 50].reduce((a, c) => a + c); // 150 -> 초기값이 없을 경우 빈 배열이면 에러남
[10, 20, 30, 40, 50].reduce((a, c) => a + c, 0); // 꼬옥 초기값을 0으로 지정하기!!

// 3. includes : 요소가 포함이 되어 있으면 true 아니면 false를 반환
const arr1 = ["hello", "world", "hojun"];
arr1.includes("world"); // true

const arr2 = ["hello", "world", "hojun"];
arr2.includes("leehojun"); // false

const arr3 = ["hello", "world", "hojun"];
arr3.includes("jun"); // false

// 4. join : 문자열로 연결할 때 사용
let arr4 = ["hello", "world", "hojun"];
arr4.join("!"); // hello!world!hojun

let arr5 = ["hello", "world", "hojun"];
arr5.join(" "); // hello world hojun

let arr6 = ["010", "5044", "2903"];
arr6.join("-"); // 010-5044-2903

// join 주의사항
// 0으로 시작하면 앞에 0이 사라짐. 0 다음에 숫자가 나오기 시작하면 진법으로 인식

// [010, 5044, 2903].join(''); // '850442903' // 010은 8진법으로 8이 나옴.
["010", "5044", "2904"].join(""); // 01050442904

// 4. reverse() : 배열의 순서를 반전시킴
[10, 20, 30].reverse(); // [30, 20, 10]
