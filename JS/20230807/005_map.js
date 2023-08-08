// map
[1, 2, 3].map((value, index, arr) => {
  console.log(value, index, arr);
  return value;
});

[1, 2, 3].map((v) => {
  return v ** 2;
});

[1, 2, 3, 4].map((v) => {
  return v * 3;
});

// forEach와 차이점
// 1) return 사용이 가능하다
// 2) map은 원본을 수정하여 새로운 배열을 반환하고, forEach는 원본을 수정하지 않음

// EX) 1부터 100까지 더하는 코드
// forEach 사용
let sum = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    sum += i + 1;
  });

// map 사용
Array(100)
  .fill(0)
  .map((v, i) => i + 1);

[1, 2, 3, 4].map((v) => "hello world"); // ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v) => "hello" + v); // ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => "hello" + (i + 1)); // ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => "hello" + i); // ['hello0', 'hello1', 'hello2', 'hello3']

// 같은 코드 1
[1, 2, 3, 4].map((v) => "hello" + v);

// 같은 코드 2
function 함수(v) {
  return "hello" + v;
}
[1, 2, 3, 4].map(함수);

// 같은 코드 3 (익명함수)
[1, 2, 3, 4].map(function (v) {
  return "hello" + v;
});

// 같은 코드 4
[1, 2, 3, 4].map((v) => {
  return "hello" + v;
});
