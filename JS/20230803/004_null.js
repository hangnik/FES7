// null

let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(value2); // null

// null과 숫자연산은 가능 (null은 0으로 취급)
// 하지만 undefined와 연산하면 NaN
null * 100; // 0
undefined + 100; // NaN
