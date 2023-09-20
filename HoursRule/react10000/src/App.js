import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div id="app">
      <Header />
      <Main setModalShow={setModalShow} />
      <Footer />
      {modalShow && <Modal setModalShow={setModalShow} />}
    </div>
  );
}
export default App;
