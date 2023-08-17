// Set : 중복을 허용하지 않는 객체 자료형
// 중복되는 데이터를 추가해도 무시함
// 배열에서 중복되는 데이터를 제거하고 싶을 때 좋음

let s = new Set("abcdeeeeeeeee");
console.log(s); // {'a', 'b', 'c', 'd', 'e'}
s.size; // 5
s.add("f"); // 값 추가
s.delete("b"); // 값 제거
s.has("a"); // true, 값 확인

///
let a = new Set("abc");
let b = new Set("cde");
// 교집합
let cro = [...a].filter((value) => b.has(value)); // ['c']
// 합집합
let union = new Set([...a].concat([...b])); // {'a', 'b', 'c', 'd', 'e'}
// 차집합
let dif = [...a].filter((value) => !b.has(value)); // ['a', 'b']

///
// 로또 생성기 set으로 만들기
function lotto() {
  const arr = new Set();
  while (arr.size < 6) {
    const num = parseInt(Math.random() * 45 + 1);

    arr.add(num);
  }
  // set에는 정렬할 수 있는 메서드가 없기 때문에 정렬하고 싶으면 배열로 바꾼 후 정렬해야댐
  return [...arr].sort((a, b) => a - b);
}
