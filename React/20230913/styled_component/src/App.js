//import reset from "styled-reset";
import StyledComponents from "./Components/StyledComponents";
import ConditionalStyle from "./Components/ConditionalStyle";
import StyleExtension from "./Components/StyleExtension";
import CssExtention from "./Components/CssExtention";
import Button from "./Components/Button";
//import Global from "./Components/Global";

function App() {
  return (
    <>
      {/* <Global /> */}
      <StyledComponents />
      <hr />
      <ConditionalStyle />
      <hr />
      <StyleExtension />
      <hr />
      <CssExtention />
      <hr />
      <Button />
    </>
  );
}

export default App;
