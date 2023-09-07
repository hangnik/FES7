import "./App.css";

function App() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return (
    <div>
      <h1 className="h1">안녕 라이캣!</h1>
      <h1 className="newClass">안녕 라이캣!</h1>
      <input
        type="text"
        maxLength={10}
        disabled={false}
        style={{ backgroundColor: "red", color: "white" }}
      />

      <div style={{ backgroundColor: "black", color: "white" }}>
        <h2 style={{ color: "red" }}>년: {year}</h2>
        <h2>
          월/일: {month}/{day}
        </h2>
        <h2>
          시간: {hour}시 {minutes}분 {seconds}초
        </h2>
      </div>
    </div>
  );
}

export default App;
