// 클로저 : 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉
// 특정 변수나 함수를 외부에서 접근할 수 없도록 숨길 수 있기 때문에 private 변수와 메서드를 구현할 수 있음
const outer = function () {
  let a = 1;
  const inner = function () {
    let b = 5;
    let c = 6;
    a = a + b + c;

    console.log(a); // 12
  };
  // inner 함수에서 a 변수를 사용하고 있기 때문에 return을 만나고 outer 함수는 메모리에서 지워져도 a라는 변수는 지워지지 않음(사용한 값은 참조가 유지됨)
  return inner;
};

const newInner = outer();
newInner();

///
const person = function () {
  let age = 15;

  return {
    name: "jaehyun",
    getAge: function () {
      return age;
    },
    setAge: function (val) {
      age = val;
    },
  };
};
