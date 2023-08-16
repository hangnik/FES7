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

peter.sayName();
bruce.sayName();

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */

// var peter = {
//     name: 'Peter Parker',
//     sayName: function (is, is2, is3, is4) {
//         console.log(this.name + ' is ' + is + ' or ' + is2);
//     }
// }

// var bruce = {
//     name: 'Bruce Wayne',
// }

// peter.sayName.apply(bruce, ['batman', 'richman']);

/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고
apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */

// const peter = {
//     name: 'Peter Parker',
//     sayName: function (느낌표) {
//         console.log(this.name + 느낌표);
//     }
// }

// const bruce = {
//     name: 'Bruce Wayne',
// }

// peter.sayName.call(bruce, '!', 10, [1,2,3]);
