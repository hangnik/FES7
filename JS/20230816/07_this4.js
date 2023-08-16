const person = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
        console.log(this);
        console.log(this.name);
      };
      c();
    };
    b();
  },
};
person.a();

// const person = {
//     name: 'hojun',
//     age: 25,
//     a() {
//         console.log(this);
//         console.log(this.name);
//         function b() {
//             console.log(this);
//             console.log(this.name);
//             function c() {
//                 console.log(this);
//                 console.log(this.name);
//             }
//             c();
//         }
//         b();
//     }
// }

// person.a();

// const func = function a() {
//     console.log(this);
//     console.log(this.name);
//     function b() {
//         console.log(this);
//         console.log(this.name);
//         function c() {
//             console.log(this);
//             console.log(this.name);
//         }
//         c();
//     }
//     b();
// }
// func();
