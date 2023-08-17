// Map : 키-값 쌍을 가지는 객체 자료형
// 기존 객체에 비해 키로 쓸 수 있는 타입이 다양함 (boolean, 함수 등등 다 사용 가능)
// 데이터 관리에 특화돼있음 (Object보다 성능이 좋음)
// json 형태의 데이터를 바로 Map으로 바꾸지는 못함
const myMap = new Map();

myMap.set("하나", 1); // map 생성
myMap.get("하나"); // 1
myMap.has("하나"); // true
myMap.size; // 1
myMap.clear(); // 데이터 모두 비우기

// Map의 순환
for (const item of myMap) {
  console.log(item); // ['하나', 1]
}
// destructuring 사용
for (const [key, value] of myMap) {
  console.log(`${key} : ${value}`); // 하나 : 1
}

// Map의 값 접근
myMap.keys();
myMap.values();

// 인덱스를 가지는 자료형으로 Map 초기화
let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);

console.log(temp); // Map(4) {1 => 10, 2 => 20, 3 => 30, 4 => 40}

// 객체를 순환 가능한 Map을 변환
let temp2 = new Map(Object.entries({ one: 1, two: 2 }));

// 위와 반대로 Map을 객체로 변환
const temp3 = Object.fromEntries(temp2);
