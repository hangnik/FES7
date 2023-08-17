// call() : 인수에 this로 사용할 값을 전달
var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce); // Bruce Wayne

// 아래와 같이 아규먼트를 전달해줄 수 있다
const peter = {
  name: "Peter Parker",
  sayName: function (느낌표) {
    console.log(this.name + 느낌표);
  },
};

const bruce = {
  name: "Bruce Wayne",
};

peter.sayName.call(bruce, "!", 10, [1, 2, 3]); // Bruce Wayne!

// apply() : call과 달리 아규먼트를 단일한 배열로 전달 (call과 기능은 동일)
var peter = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]); // Bruce Wayne is batman or richman

// bind() : this가 고정된 새로운 함수를 반환
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: "bruce",
  sayName: sayName,
};

var peter = {
  name: "peter",
  sayName: sayName.bind(bruce),
};

peter.sayName(); // bruce
bruce.sayName(); // bruce
