import SomethingComponent from "./components/SomethingComponent";
import InputComponent from "./components/InputComponent";
import useMouseLocation from "./Hooks/useMouseLocation";
import useScroll from "./Hooks/useScroll";

function App() {
  const mouseLocation = useMouseLocation();
  const isBottom = useScroll();
  console.log(isBottom);

  return (
    <div style={{ height: "1000px" }}>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor:
            mouseLocation.x > 100 && mouseLocation.y > 100
              ? "royalblue"
              : "rosybrown",
        }}
      ></div>
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
