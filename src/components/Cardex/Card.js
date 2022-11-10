import { Card } from "./CardStyle";
import { useState } from "react";
import { ModalDetails } from "../Modal/Modal"; 

export default function CardTest(props) {

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
      year={props.year}
      />

      <Card>
        <div className="poster">
          <img src={props.image} alt="poster" />
        </div>

        <div>{buttonColor(props.genre)} </div>

        <div className="text">
          <span>Title: {props.title} </span>
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
