// while문
let num = 0;

while (num < 11) {
  console.log(num);
  num += 1;
}

// do-while문
// 코드 블록을 실행하고 조건식이 평가됨
let input;

do {
  input = prompt("숫자를 입력하세요."); // 최초 한 번은 무조건 입력을 받음 (이때 prompt는 js 동작을 입력값을 받을 때까지 멈춤)
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");
////////
let num2 = 0;

do {
  console.log(num);
  num2 += 1;
} while (num2 < 11);
