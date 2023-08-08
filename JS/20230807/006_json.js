let obj = {
  name: "hayoung",
  id: "ongha",
  pw: "1234",
};

console.log(obj["name"]);

// 면접에서 자주 묻는 map 질문
// 아래와 같은 데이터의 형태를 json이라고 함
// 이런 형태의 데이터를 뽑을 때 자주 사용
let data = [
  {
    _id: "64d072367a17c0be080da71b",
    index: 0,
    guid: "29a059c2-a8f9-4912-af3c-8a26da9f9d8b",
    age: 40,
    name: "Gabriela Farrell",
    gender: "female",
  },
  {
    _id: "64d072366a8282802f94cce0",
    index: 1,
    guid: "3ae0c4cb-94b2-4bb3-993b-84ca4809ce15",
    age: 29,
    name: "Molina Webster",
    gender: "male",
  },
  {
    _id: "64d0723688c5598adb0de72d",
    index: 2,
    guid: "dff6a126-450a-4707-9203-33b764b11c65",
    age: 29,
    name: "Ruiz Henderson",
    gender: "male",
  },
  {
    _id: "64d072361ebc88a17a314aee",
    index: 3,
    guid: "30e4c4cc-0541-490d-9fbd-895d54bf904f",
    age: 31,
    name: "Bender Sampson",
    gender: "male",
  },
];

data[0];
data[0]["name"]; // 'Gabriela Farrell'
data[0]["age"]; // 40
// 평균 나이 구하기
(data[0]["age"] + data[1]["age"] + data[2]["age"] + data[3]["age"]) / 4;
// 위를 map 사용해서 구하기
data.map((v) => v["age"]); // 여기서 v는 한개의 object

// 실무에서 map이 사용되는 형태 (007.html 참고)
let s = "";
fetch("https://test.api.weniv.co.kr/mall")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((v) => {
      s += `<section>
        <img src="${v[thumbnailImg]}">    
        <h2>${v[productName]}</h2>
        <p>${v[price]}</p>
        </section>`;
    });
  })
  .then(() => {
    console.log(s);
    document.getElementById("app").innerHTML = s;
  });
