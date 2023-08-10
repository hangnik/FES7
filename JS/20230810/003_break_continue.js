// break문
// break를 만나면 반복문이 종료되고 다음 코드가 차례로 진행
let num = 0;
while (num < 11) {
  num++;
  console.log(num);
  if (num > 5) {
    // num이 6이되면 종료
    break;
  }
}

let i = 0;
while (i < 100) {
  i++;
  if (i === 14) {
    console.log(i + "살 부터 중학생이 됩니다.");
    // i가 14가 되면 종료
    break;
  }
}
console.log("중학교 입학을 축하합니다");

// continue문
// continue를 만나면 다음 코드를 실행하지 않고 다음 반복으로 넘어감
for (let i = 0; i < 20; i++) {
  // 0~12살 까지는 코드를 실행하지 않고 건너뜀.
  if (i < 13) continue;
  console.log(i + "살은 청소년입니다.");
}

// label 사용 (자주 쓰지는 않음)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      // i + j가 3이되면 for문 전체가 종료
      break outer;
    }
    console.log(i, j);
  }
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      // i + j가 3이 되는 경우만 건너뜀
      continue outer;
    }
    console.log(i, j);
  }
}
