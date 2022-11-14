import { Menu } from "../../components/Menu/Menu";
import {  Frame, Filter } from "./ProfileSyle";
import Card  from "../../components/Card/Card";
import { useState} from "react";
import { ModalDetails } from "../../components/Modal/Modal";
//import { api } from "../../api";

export function Profile() {

  // const [info, setInfo] = useState([]);

  const [show, setShow] = useState(false);

  // const handleClick = (genre) => {
  //   api.post("/book/genre/", {genre: genre})
  //   .then((res) => {
  //     setInfo(res.data)
  //   })
  // }


  return (
    <>
      <Menu />
      <ModalDetails show={show} setShow={setShow} />
      <Frame>
        <button>buy now</button>
      </Frame>
      {/* <Filter>
        <div className="filter-genrer">
          <h3>Popular Genres</h3>
          <p>Fantasy</p>
          <p>Science</p>
          <p onClick={() => handleClick('Solicitação')}>Romance</p>
          <p>Business</p>
        </div> */}
        <Card/>
      {/* </Filter> */}
      <div>
        
      </div>
      oi
    </>
  );
}
