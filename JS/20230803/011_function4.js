function test(a, b, c) {
  console.log(a, b, c);
  return a + b + c;
}

test(10, 20); // NaN , 인수를 더 적게 전달하면 전달되지 않은 파라미터는 undefined
test(10, 20, 30, 40); // 60, 파라미터의 갯수를 초과하면 초과된 아규먼트는 무시됨

// defalut값을 정해줄 경우 아무것도 전달하지 않으면 defalut값 전달
function test(a = 30, b = 10, c = 30) {
  console.log(a, b, c);
  return a + b + c;
}

test(100, 200); // 330
test(); // 70

test((a = 100), (b = 200)); // 330
test((b = 100), (c = 200)); // 330 ..why?
// js는 값을 순서대로 넣음.
// 이를 해결하기 위해 RORO 기법 등장

// RORO: 객체로 받고 객체로 반환한다(Receive an object, return an object)

function mob(scene, x, y, texture, animKey, initHp, dropRate) {
  return;
}

mob(...아규먼트에뭐가들어갈지알려줌);

// 객체 사용
function player({ scene, x, y, texture, animKey, initHp, dropRate }) {
  console.log(scene, x, y, texture, animKey, initHp, dropRate);
  return;
}

// 순서를 다르게 작성해도 문제 없음
player({
  scene: "플레이신",
  y: 200,
  x: 100,
  texture: "슬라임",
  animKey: "슬라임_애니",
  initHp: 100,
  dropRate: 0.1,
}); // 플레이신 100 200 슬라임 슬라임_애니 100 0.1

// 인수에 더 적게 전달해도 문제 없음 => 전달하지 않은 파라미터는 undefined
player({
  scene: "플레이신",
  y: 200,
  initHp: 100,
}); // 플레이신 undefined 200 undefined undefined 100 undefined

// 객체 기본값 설정
function player({
  scene = "플레이신",
  x = 0,
  y = 0,
  texture,
  animKey,
  initHp,
  dropRate = 0.1,
}) {
  console.log(scene, x, y, initHp);
}

player({
  initHp: 100,
}); // 플레이신 0 0 100
