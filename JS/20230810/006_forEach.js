// forEach, map 문제
const studentList = [
  {
    id: 1,
    name: "원범",
    score: "great",
  },
  {
    id: 2,
    name: "김진",
    score: "so cute",
  },
  {
    id: 3,
    name: "혜원",
    score: "good good",
  },
  {
    id: 4,
    name: "재현",
    score: "too cool for school",
  },
];

// 다음 배열에서 name 의 값들을 forEach 문을 이용해 콘솔에 출력해보세요
studentList.forEach((v) => {
  console.log(v.name);
});

// 다음 배열에서 score 의 값들만 모아 새로운 배열로 반환해봅시다! 이때 score 값에 하트💖를 추가합니다.
studentList.map((v) => {
  return `${v.score}💖`;
});
