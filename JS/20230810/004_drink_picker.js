// 문제
// 사용자가 입력한 메뉴 번호에 따라 해당하는 메뉴 이름과 가격을 출력합니다. 만약 종료 번호를 누르면 ‘종료합니다’ 를 콘솔에 출력합니다.
const menu = [
  { name: "아메리카노", price: 2000 },
  { name: "카페라떼", price: 2500 },
  { name: "카페모카", price: 2800 },
  { name: "핫초코", price: 3000 },
  { name: "과일주스", price: 3500 },
];

let num = parseInt(
  prompt("음료 번호를 입력해주세요 (종료 하시려면 6을 입력해주세요)")
);

for (let i = 0; i < menu.length; i++) {
  if (num === i) {
    console.log(`메뉴 : ${menu[i]["name"]}, 가격 : ${menu[i]["price"]}`);
    break;
  } else if (num === 6) {
    console.log("종료합니다.");
    break;
  }
}

// 강사님 풀이
let input = 0;
while (input !== -1) {
  input = parseInt(
    prompt(
      "메뉴를 선택해주세요: 아메리카노(1) / 카페라떼(2) / 카페모카(3) / 핫초코(4) / 과일주스(5) 종료(-1)"
    )
  );
  switch (input) {
    case 1:
      console.log(`${menu[0].name} : ${menu[0].price}`);
      break;
    case 2:
      console.log(`${menu[1].name} : ${menu[1].price}`);
      break;
    case 3:
      console.log(`${menu[2].name} : ${menu[2].price}`);
      break;
    case 4:
      console.log(`${menu[3].name} : ${menu[3].price}`);
      break;
    case 5:
      console.log(`${menu[4].name} : ${menu[4].price}`);
      break;
    case -1:
      console.log("종료합니다");
      break;
    default:
      console.log("잘못된 입력입니다");
  }
}
