// for문 문제
// 객체의 키와 벨류값을 모두 출력하는 for문을 만들어보세요.
const person = {
  name: "재현",
  age: 20,
  gender: "male",
};

const key = Object.keys(person);

for (let i = 0; i < key.length; i++) {
  const value = Object.values(person);
  //console.log(`${key[i]} : ${value[i]}`);
  console.log(`${key[i]} : ${person[key[i]]}`); // keys는 문자열로 반환하기 때문에 점연산자는 쓸 수 없음
}
