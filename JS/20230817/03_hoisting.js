// 호이스팅 : 변수나 함수 선언문이 해당 스코프의 최상단으로 끌어올려지는 현상
console.log(x); // undefined
console.log(y); // 에러, Cannot access 'y' before initialization
console.log(z); // 에러, Cannot access 'z' before initialization
var x = 1;
let y = 2;
const z = 3;

// 호이스팅 현상 결과
/* var x;
let y;
const z;
console.log(x);
console.log(y);
console.log(z);
x = 1;
y = 2;
z = 3; */

// let, const => TDZ(Temporal Dead Zone) 구역에 배치되어 호이스팅이 되었지만 안된 것처럼 동작하게 해줌(변수가 초기화 될 때까지)

// 함수는 코드 안의 내용도 같이 끌어올려지기 때문에 실행 가능
// 함수의 호이스팅을 막으려면 함수를 const/let 변수에 할당(포현식)하면 됨
sayHi(); // "Hello, lions!"
function sayHi() {
  console.log("Hello, lions!");
}
