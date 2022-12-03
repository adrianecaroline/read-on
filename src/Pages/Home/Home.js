import Menu from "../../components/Menu/Menu";
import { Frame } from "./HomeStyle";
import Card from "../../components/Card/Card";
import { useState } from "react";
import { ModalDetails } from "../../components/Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer/Footer";

export function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Menu />
      <ModalDetails show={show} setShow={setShow} />
      <Frame>
        <button>More info</button>
      </Frame>

      <Card />

      <Footer/>
    </>
  );
}
