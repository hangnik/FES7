function HelloProps(props) {
  return (
    <>
      <p>
        my name is {props.name} and age is {props.age}
      </p>
      <strong>you are {props.someFun()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </>
  );
}

export default HelloProps;
