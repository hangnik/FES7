// 객체 타입 : 변수에 저장할 때 값의 참조(위치)가 저장됨

// 객체타입은 값이 변경 되어도 화살표가 달라지지 않음
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2); // [1, 2, 3]

arr1[0] = 10;
// arr1 = [10, 20];
console.log(arr2); // [10, 2, 3]

// 원시타입은 값이 변경 되면 화살표가 달라짐
let value1 = 10;
let value2 = value1;
console.log(value2); // 10

value1 = 20;
console.log(value2); // 10
