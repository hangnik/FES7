// if문(statement)
let x = 3;
let y = 7;

// x == y가 false이므로 else 안에 코드 실행
if (x == y) {
  console.log("if문으로 실행되었습니다.");
} else {
  console.log("else문으로 실행되었습니다.");
}

// 문제
// 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요.
//나이가 18세 이상이면 "안녕하세요!"를 출력하고, 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 출력하며, 10세 미만이면 “부럽다…” 를 출력합니다.

const age = prompt("나이를 입력해주세요");
if (age >= 18) {
  console.log("안녕하세요!");
} else if (age >= 10) {
  console.log("안녕! 반가워 꼬마친구!");
} else {
  console.log("부럽다,,,");
}
