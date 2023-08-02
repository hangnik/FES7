// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

// 널 병합 연산자 (??)
// 왼쪽 피연산자가 null 이나 undefined일 때 오른쪽 피연산자 반환
// 그렇지 않으면 왼쪽 피연산자 반환
let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firstName ?? nickName); // 'licat'

let a = null;
let b = 10;
let c = null;
console.log(a ?? b ?? c); // 10

let height = 0;
console.log(height ?? 100); // 0이 null인지 판단 -> 0도 value이기 때문에 0 출력
console.log(height || 100); // 0은 false이기 때문에 100 출력

let height2;
console.log(height2 ?? 100); // undefined이기 때문에 100 출력
console.log(height2 || 100); // 100 출력

let height3 = "";
console.log(height3 ?? "world"); // ''도 value이기 때문에 '' 출력
console.log(height3 || "hello"); // ''는 false이기 때문에 hello 출력

// || (falsy하다) : 0, null, undefined, false, NaN, ''(빈 문자열)
// ?? (nullish하다) : null, undefined

let username = "";
let nickname = "";

console.log(username || nickname || "guest"); // guest
console.log(username ?? nickname ?? "guest"); // 아무것도 출력X
