// isNaN()
// 어떤 값이 NaN인지 판별
// 어떤 값이 숫자가 아닌지 판별
// 숫자로 판별되는 것들은 false를 반환하고, 숫자로 판별되지 않는 것들은 true를 반환

/* https://en.wikipedia.org/wiki/IEEE_754 Because 'Not a Number' is not a number, and is not equal to anything, including Not a Number. */

isNaN(NaN); //true
isNaN(10); //false
isNaN("10"); //false
isNaN("a"); //true
isNaN("10px"); //true
isNaN([]); //true
isNaN({}); //true

//Number.isNaN 사용을 권고
Number.isNaN(NaN); //true
Number.isNaN(10); //false
Number.isNaN("10"); //false
Number.isNaN("a"); //false
Number.isNaN("10px"); //false
Number.isNaN([]); //false
Number.isNaN({}); //false

// isNaN은 내부적으로 Number() 함수를 사용
// Number() 함수는 인수를 숫자로 변환할 수 없으면 NaN을 반환

// isNaN은 Number로 숫자 변환이 가능한 값을 false로 준다
// !isNaN은 숫자를 걸러내는 방법
// 문제 : 문자열에서 숫자만 걸러서 합계 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120850
let value = "p2o4i8gj2";
let sum = 0;
for (let i = 0; i < value.length; i++) {
  if (!isNaN(value[i])) {
    sum += parseInt(value[i]);
  }
}
console.log(sum);
// filter 사용
value.split("").filter((v) => !isNaN(v));

// '숫자가 아님'은 '숫자가 아님'과 동일한가?
console.log(NaN === NaN); // false

// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성합니다. 이러한 비교는 다음과 같이 수행됩니다.

/* 
Type(x)가 NaN이면 false를 반환합니다. y가 NaN이면 false를 반환합니다. 이것은 알고리즘이 먼저 피연산자 중하나가 NaN유형을 확인하기 전에 있는지 확인하고 그렇다면 false어쨌든 반환할 것임을 의미합니다.
*/

console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log("hello world" - 100); // NaN
console.log("hello world" / 100); // NaN
console.log("hello world" * 100); // NaN
console.log("2" * 10); // 20
console.log("---");

// 암기
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log("---");

console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---");

// ES6에서 추가 도입(암기)(*)
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

/*
// https://www.designcise.com/web/tutorial/what-is-the-difference-between-isnan-and-number-isnan-in-javascript

x                Number(x)    isNaN(x)
undefined        NaN            true
{}                NaN            true
'foo'            NaN            true
new Date('')    NaN            true
new Number(0/0)    NaN            true


x               typeof x === 'number'   Number.isNaN(x)
undefined        false                    false
{}                false                    false
'foo'            false                    false
new Date('')    false                    false
new Number(0/0)    false                    false
*/
