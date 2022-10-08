import { Card } from "./CardStyle";
import { useState, useContext } from "react";
import { ModalDetails } from "../Modal/Modal"; 
import { Contexto } from "../../App";

export default function CardTest(props) {
   
  const [info, setInfo] = useContext(Contexto);
  const [value, setValue] = useState({
    title: info.title,
    image: info.image,
    pages: info.pages,
    author: info.author,
  });

  const romance = {
    borderRadius: "6px",
    background: "#db5050",
    color: "#ffffff",
    padding: "8",
    textTransform: "none",
  };

  const fantasy = {
    borderRadius: "6px",
    background: "#143178",
    color: "#ffffff",
    padding: "8",
    textTransform: "none",
  };

  let buttonColor = (props) => {
    if (props === "Fantasy") {
      return <button style={fantasy}>Fantasy</button>;
    } else if (props === "Romance") {
      return <button style={romance}>Romance</button>;
    }
  };

  //modal
  const [show, setShow] = useState(false);

  const handleClickBtn = () => {
    setShow(true);
  };

  return (
    <>
      <ModalDetails 
      show={show} 
      setShow={setShow} 
      image={props.image}
      genre={props.genre}
      pages={props.pages}
      title={props.title}
      author={props.author} 
      />

      <Card>
        <div className="poster">
          <img src={props.image} alt="poster" />
        </div>

        <div>{buttonColor(props.genre)} </div>

        <div className="text">
          <span>Title: {props.title} </span>
          {/* <span>Pages: {props.pages} </span> */}
        </div>

        <div className="author">
          <span>Author: {props.author}</span>
        </div>

        <button className="details" onClick={() => handleClickBtn()}>
          Details
        </button>
      </Card>
    </>
  );
}
