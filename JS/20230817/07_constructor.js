// 생성자 함수 : 사용자 정의 객체를 생성할 때 사용되는 함수
// 첫 글자는 대문자로 생성
// new 연산자를 붙여서 실행. new 연산자는 생성자 함수의 this가 인스턴스를 바라보도록 만들어주는 역할

function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
  this.read = function () {
    console.log("reading....");
  };
}

// 인스턴스 : 생성자를 통해 생성한 객체
let book1 = new Book("클로져", 1000, "하영", "20230817");
