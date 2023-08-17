// 디스트럭쳐링 : 배열이나 객체와 같은 데이터 구조를 분해하여 변수에 할당하는 표현식(구조 분해 할당)

// 수동적 디스트럭쳐링
let food1, food2, food3;

const categories = { food1: "과일", food2: "채소", food3: "육류" };

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;

console.log(food1, food2, food3); // 과일 채소 육류

// 위를 구조분해할당 사용
// const { food1, food2, food3 } = { food1: "과일", food2: "채소", food3: "육류" };

const obj = { food4: "과일", food5: "채소", food6: "육류" };

function objReturn() {
  return obj;
}

console.log(objReturn());

// 반환값을 바로 디스트럭쳐링
const { food4, food5, food6 } = obj;

console.log(food4, food5, food6); // 과일 채소 육류

///
// let { one } = { one: 1 }; // 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴

console.log(one); // 1

// 디스트럭쳐링은 콜론을 통해 변수를 추가적으로 생성할 수 있다
let { one, two, three, four } = { one: 1 };
console.log(one); // 1
console.log(two); // undefined
console.log(three); // undefined
console.log(four); // undefined

// 배열의 디스트럭쳐링
const arr = [1, 2, 3];

const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 함수의 디스트럭쳐링
function myFunc([a, b]) {
  console.log(a);
  console.log(b);
}

const arr2 = [1, 2];

myFunc(arr2); // 각각  1, 2 출력
