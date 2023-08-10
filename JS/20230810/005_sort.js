const avengers = ["spiderman", "ironman", "hulk", "thor"];

// 비교 함수를 사용하여 문자열 정렬 -> 배열이 객체로 구성되어있을 때 사용될 수 있음
avengers.sort(function (a, b) {
  // return a - b
  console.log(a, b);
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  } else {
    return 0;
  }
});

const student = [
  {
    id: 1,
    product: "연필",
    stock: 10,
  },
  {
    id: 2,
    product: "지우개",
    stock: 33,
  },
  {
    id: 3,
    product: "체육복",
    stock: 2,
  },
  {
    id: 4,
    product: "만연필",
    stock: 5,
  },
  {
    id: 5,
    product: "책받침",
    stock: 100,
  },
];

student.sort(function (a, b) {
  if (a.product < b.product) {
    return -1;
  } else if (b.product < a.product) {
    return 1;
  } else {
    return 0;
  }
});
