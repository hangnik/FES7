// switch문
//new Date().getDay() -> 표현식
// 표현식과 case문의 값을 비교하여 같은 값일 경우 코드 실행
switch (new Date().getDay()) {
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다.");
    break;
  case 4:
    console.log("목요일입니다.");
    break;
  case 5:
    console.log("금요일입니다.");
    break;
  // default : else와 같은 역할. 필수는 아님
  default:
    console.log("금금요일입니다. 주말이 뭐죠?");
    break;
}

let price = 0;
let menu = "카페라떼";

// break가 없으면 switch문을 탈출하지 않고 끝까지 모두 실행
switch (menu) {
  case "아메리카노":
    price = 4000;
  case "카페라떼":
    price = 5000;
  case "바닐라라떼":
    price = 6000;
  case "콜드브루":
    price = 5500;
  case "딸기라떼":
    price = 7000;
  case "레몬에이드":
    price = 6500;
  case "에스프레소":
    price = 3500;
  case "루이보스":
    price = 4500;
  default:
    console.log("메뉴를 정확히 입력하세요.");
}
price; // 4500

// 문제
// 사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요. 성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.
const score = parseInt(prompt("성적을 입력해주세요"));
let result = "";
switch (true) {
  case score >= 90:
    result = "A";
    break;
  case score >= 80:
    result = "B";
    break;
  case score >= 70:
    result = "C";
    break;
  case score >= 60:
    result = "D";
    break;
  default:
    result = "강해져서 돌아와라";
}
// case 코드가 값을 비교하는 것이므로 boolean 반환 -> 표현식은 true!
