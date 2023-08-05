// true / false 판단

// 1. 비교 연산을 했을 때
let x = 3;
let y = 5;
console.log(x > y); // false

// 2. 논리 연산을 했을 때 비교값이 true나 false일 경우
// true나 false가 아닐 경우 단락회로평가가 일어남
let a = true;
let b = false;
console.log(a && b); // false

// 3. true나 false로 평가되는 것들

if (Boolean("hello")) {
  console.log("실행되었음!"); // 실행되었음이 출력되는가? O
}

if ("hello") {
  console.log("실행되었음!"); // 실행되었음이 출력되는가? O
}

Boolean("hello"); // true
Boolean(""); // false
Boolean(" "); // true
Boolean(0); // false
Boolean(1); // true
Boolean(-1); // true
Boolean(100); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

!!null; // 실무에서 true, false 구분할 때 자주 사용

// 4. 혼란스러운 것들,,,
Boolean([]); // true

x = [1, 2, 3];
Boolean(x); // true
x.pop();
x.pop();
x.pop();
Boolean(x); // true (x는 빈 배열)
// js : x가 가리키고 있는 값은 변한적이 없는데 true, false로 바뀌는 것은 옳지 않다고 판단

Boolean({ one: 1 }); // true
Boolean({}); // true

null == undefined; // true
null > undefined; // false (다른 비교도 false)
undefined < 100; // false (숫자와 비교는 모두 false)
