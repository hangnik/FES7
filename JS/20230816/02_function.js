function 함수2([a, b], ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);

// function 함수2(a, b, ...c) {
//     console.log(c)
//     return Math.max(...c)
// }

// 함수2('hello', 'world', 10, 20, 30, 40, 50, 60, 70);

// function 함수4({
//     회원등급 = 'Gold',
//     글쓰기 = true,
//     글읽기 = true,
//     채널관리 = true,
//     백업 = '부분가능',
//     소셜로그인여부 = true
// }) {
//     console.log('함수기능')
//     console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
// }

// 함수4({
//     회원등급: 'Silver',
//     소셜로그인여부: true
// })
// function printMe({ name, age, email } = {}) {
//     console.log(`이름: ${name}, 나이: ${age}, 이메일: ${email}`);
// }

// const me = {
//     name: '재현',
//     age: 25,
//     email: 'jaehyun@something.com'
// };

// printMe(me);