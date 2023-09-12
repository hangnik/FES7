import Counter from "./components/Counter";
import Delete from "./components/Delete";
import Hello from "./components/Hello";
import InfoRender from "./components/InfoRender";
import NavBar from "./components/NavBar";
import Pet from "./components/Pet";

function App() {
  return (
    <>
      <Hello name="licat" />
      <hr />
      <Delete />
      <hr />
      <InfoRender />
      <hr />
      <Counter />
      <hr />
      <Pet />
      <hr />
      {/* && : 첫번째 falsy값을 반환하거나, 마지막 truty값을 반환 */}
      {true && <NavBar />}
      {/* || : 첫번째 truty값을 반환하거나 마지막 falsy값을 반환 */}
      {false || 1 || <NavBar />}
    </>
  );
}

export default App;
