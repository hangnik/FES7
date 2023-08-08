// forEach(콜백함수)
// undefined를 반환하기 때문에 메서드 체인의 중간에 사용할 수 없음
let arr = [10, 20, 30, 40, 50];
arr.forEach((value, index, array) => {
  console.log(value, index, array);
});

// 문제1. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.
let arr2 = [10, 20, 30, 40, 50];
let sum2 = 0;
arr2.forEach((v) => {
  sum2 += v;
});
console.log(sum);

// 문제2. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.
let arr3 = [10, "20", 30, "40", 50];
let sum3 = 0;
arr3.forEach((v) => {
  sum3 += parseInt(v);
});
console.log(sum3);

// 문제3. forEach를 사용해서 짝수 인덱스의 값을 모두 더하세요.
// 풀이1
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum4 = 0;
arr4.forEach((v, i) => {
  if (i % 2 === 0) {
    sum4 += v;
  }
});
console.log(sum4);

// 풀이2
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum5 = 0;
arr.forEach((v, i) => {
  i % 2 === 0 ? (sum5 += v) : null;
});
console.log(sum5);

// Array(100).fill(0)와 같은 코드 대신 뒤에서 배울 map을 더 많이 사용합니다.
// 문제3. 1부터 100까지의 숫자를 다 더해주세요.
let sum6 = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    sum6 += i + 1;
  });
sum6; // 5050, 수학 수식으로 계산되는 코드는 이렇게 순회를 돌면서 풀지 않으셔도 됩니다.

// let n = 100
// n * (n + 1) / 2

// 문제 4
// 난이도가 너무 어려웠습니다. 이 문제는 머릿속에서 당분간 잊어주셔도 좋습니다.
// https://school.programmers.co.kr/learn/courses/30/lessons/120835
let userInput = [3, 76, 24];
let sortValue = [...userInput].sort((a, b) => b - a); // 내림차순 정렬
userInput.forEach((v, i) => {
  userInput[i] = sortValue.indexOf(v) + 1;
});

// 한글 풀이
// userInput = [3, 76, 24]라면 정렬된 후의 값은 [76, 24, 3]이 됩니다. 그렇다면 정렬된 후의 값에 3이 위치한 인덱스는 2가 됩니다. 76이 위치한 인덱스는 0이 됩니다. 24가 위치한 인덱스는 1이 됩니다.
// 그렇다면 userInput에 이 인덱스를 하나씩 지정합니다. 그러면 userInput은 [2, 0, 1]이 됩니다.
// 결과값을 보니 0번째는 없습니다. 따라서 여기에 1씩 더해줍니다. [3, 1, 2]가 됩니다.
// step1 = [3, 76, 24]
// step2 = [76, 24, 3] // 정렬된 값
// step3 = [2, 0, 1]
// step4 = [3, 1, 2] // 정답

[10, 20, 30, 40].indexOf(30); // 2

// 문제5. 1부터 100까지의 숫자 중 3의 배수만 더해주세요.
let sum = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    if (i % 3 === 0) {
      sum += i;
    }
  });
sum;

// 문제6. 아래와 같이 출력되게 해주세요.
// input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
// output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']
let input = ["hojun", "dongjun", "dongwook", "donggeun"];
let output = [];
input.forEach((v) => {
  output.push(`${v} is good`);
});

// 문제7. 010-5044-2903번호가 있었을 때 아래와 같이 출력되게 해주세요. 뒤에 2자리를 x로 바꿔주세요.
// input = '010-5044-2903'
// output = '0xx-50xx-29xx'
"010-5044-2903".split("-").forEach((v, i) => {
  console.log(v);
});

"010-5044-2903".split("-").forEach((v, i) => {
  console.log(v.replace(v.slice(-2), "xx"));
}); // 0xx 50xx 29xx

"010-4444-2903".split("-").forEach((v, i) => {
  console.log(v.replace(v.slice(-2), "xx"));
}); // 0xx xx44 29xx  -> 동일한 숫자가 4개 올 경우 앞에 두자리가 replace 됨

"010-4444-2903".split("-").forEach((v, i) => {
  if (v.length === 4) {
    console.log(v[0] + v[1] + "xx");
  } else {
    console.log("0xx");
  }
});
// 위와 동일
"010-4444-2903".split("-").forEach((v, i) => {
  v.length === 4 ? console.log(v[0] + v[1] + "xx") : console.log("0xx");
});

"010-4444-2903".split("-").forEach((v, i) => {
  v.length === 4 ? console.log(v.slice(0, 2) + "xx") : console.log("0xx");
});

// 주의사항
// 1. forEach는 return을 사용할 수 없음
[1, 2, 3]
  .forEach((v) => {
    console.log(v);
    return; // 리턴했는데 멈추지 않음
  })

  [(1, 2, 3)].forEach((v) => {
    return; // 리턴 뒤에 코드를 무시하는 코드로는 사용할 수 있음
    console.log(v);
  });

// 2. forEach는 break, continue를 사용할 수 없음
[(1, 2, 3)].forEach((v) => {
  console.log(v);
  //break // break는 error
});

[(1, 2, 3)].forEach((v) => {
  console.log(v);
  //continue // continue는 error
});

// ElemetnNodeList는 forEach를 사용할 수 없습니다.
// 004.html 참고
// forEach라고 다 같은 forEach가 아니다!
document.querySelector("div").forEach((v) => console.log(v));
