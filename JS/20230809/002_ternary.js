// 삼항연산자

// 문제
// 사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요.
// 성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.
const grade = parseInt(prompt("성적을 입력해주세요.")); // prompt로 받는 값은 무조건 문자열
const result = "";
// if문
if (grade >= 90) {
  result = "A";
} else if (grade >= 80) {
  result = "B";
} else if (grade >= 70) {
  result = "C";
} else if (grade >= 60) {
  result = "D";
} else {
  result = "강해져서 돌아와라";
}

// 삼항 연산자
const result2 =
  grade >= 90
    ? "A"
    : grade >= 80
    ? "B"
    : grade >= 70
    ? "C"
    : grade >= 60
    ? "D"
    : "강해져서 돌아와라";
console.log(result2);
