// JSON
// parse() : JSON 문자열 -> 객체
const json = '{"result": true, "count": 42}';
const obj = JSON.parse(json);
console.log(obj); // { result: true, count: 42 }

const json2 = "[1, 2, 3]";
const arr = JSON.parse(json2);
console.log(arr); // [ 1, 2, 3 ]

// stringify() : 객체 -> JSON 문자열
const obj2 = { result: true, count: 42 };
const json3 = JSON.stringify(obj2);
console.log(json3); // '{"result":true,"count":42}'

// JSON을 이용한 깊은 복사
let l = { ten: 10, twenty: 20, thirty: { forty: 40 } };
let a = JSON.parse(JSON.stringify(l));
console.log(a); // { ten: 10, twenty: 20, thirty: { forty: 40 } }

l.thirty.forty = 4000;
console.log(l); // { ten: 10, twenty: 20, thirty: { forty: 4000 } }
console.log(a); // { ten: 10, twenty: 20, thirty: { forty: 40 } }

// 하지만 최근엔 깊은 복사를 생성해주는 structuredClone() 이라는 함수가 생김
let s = structuredClone(l);
console.log(s);
