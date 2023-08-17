// this
function sayName() {
  console.log(this.name);
}

var name = "Hero";
let name2 = "hero";
const name3 = "hero";
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있음
// 때문에 window.name === "Hero" 가 성립

let peter = {
  name: "Peter Parker",
  sayName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  sayName: function () {
    console.log(this.name);
  },
};

sayName(); // Hero
peter.sayName(); // Peter Parker
bruce.sayName(); // Bruce wayne

// this 사용 예시
let 호텔 = [
  {
    이름: "하나호텔",
    위치: "제주도 제주시 001",
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "둘호텔",
    위치: "제주도 제주시 002",
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "셋호텔",
    위치: "제주도 제주시 003",
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수()); // 25
console.log(호텔[1].남은방의개수()); // 70
console.log(호텔[2].남은방의개수()); // 40
