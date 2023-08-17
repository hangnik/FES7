const person = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this); // {name: 'hojun', age: 25, a: ƒ}
    console.log(this.name); // hojun
    function b() {
      console.log(this); // Window
      console.log(this.name); // Window name(빈 문자열)
      function c() {
        console.log(this); // Window
        console.log(this.name); // Window name(빈 문자열)
      }
      c();
    }
    b();
  },
};
person.a();

const func = function a() {
  console.log(this); // Window
  console.log(this.name); // Window name(빈 문자열)
  function b() {
    console.log(this); // Window
    console.log(this.name); // Window name(빈 문자열)
    function c() {
      console.log(this); // Window
      console.log(this.name); // Window name(빈 문자열)
    }
    c();
  }
  b();
};

func();

// 화살표 함수 => this는 최상위 스코프를 가리킴 (렉시컬스코핑, 정의된 코드를 보고 알 수 있는 스코프)
const person2 = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this); // {name: 'hojun', age: 25, a: ƒ}
    console.log(this.name); // hojun
    let b = () => {
      console.log(this); // {name: 'hojun', age: 25, a: ƒ}
      console.log(this.name); // hojun
      let c = () => {
        console.log(this); // {name: 'hojun', age: 25, a: ƒ}
        console.log(this.name); // hojun
      };
      c();
    };
    b();
  },
};
person2.a();
