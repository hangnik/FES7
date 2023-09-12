function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  // 이렇게 key값으로 인덱스를 사용할 경우 나중에 배열을 변경할 때 인덱스 값이 바뀌기 때문에 비교X
  // 보통 서버에서 데이터를 불러올때는 id가 존재함
  const numComponentsArray = num.map((i, index) => (
    <h1 key={index}>
      안녕, {name} {i}호
    </h1>
  ));

  // forEach로 리스트 렌더링하기
  /* const numComponentsArray = [];
    num.forEach((i, indx) => {
      numComponentsArray.push(
        <h1 key={index}>
          안녕, {name} {i}호
        </h1>
      );
    }); */

  return <div>{numComponentsArray}</div>;
}

export default Hello;
