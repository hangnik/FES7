// 1. 배열의 형태
let arr1 = [];
let arr2 = [1, 2, 3];
let arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arr4 = ["ha", 10, 180]; // 이렇게 여러개의 타입을 혼합하여 쓰는 것을 권하지 않음

// 2. length : 배열의 길이 출력
arr2.length; // 3
arr3.flat().length; // 9
// 다중 배열의 경우 배열을 벗겨주는 flat 사용
arr3.flat(Infinity); // 보통 이렇게 많이 사용
