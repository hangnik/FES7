// 스코프 : 변수의 생존 범위
const func1 = function () {
  var a = 1;
  var b = 2;

  console.log(a + b);
};

var a = 20;

func1(); // 3
