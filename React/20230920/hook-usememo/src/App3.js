import { createContext } from "react";

// context는 대문자로 시작하는게 관례
const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  //return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
  // return <HelloLicat />;
  return (
    <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>{value.id}</h2>
            <strong>{value.name}</strong>
            <HelloLicatTwo />
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>Two : {value.id}</h2>
            <strong>Two : {value.name}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

export default App;
