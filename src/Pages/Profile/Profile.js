import { Menu } from "../../components/Menu/Menu";
import {  Frame, Filter } from "./ProfileSyle";
//import lotr from "../../Images/book_lotr.jpg";
import Card  from "../../components/Card/Card";
import { api } from "../../api";
import { useState, useEffect, useContext } from "react";
import { ModalDetails } from "../../components/Modal/Modal";
import { Contexto } from "../../App";

export function Profile() {

  //const [card, setCard] = useState([]);

  const [info, setInfo] = useContext(Contexto);

  const [show, setShow] = useState(false);

  // useEffect(()=> {
  //   api.get("/books").then((res) => {
  //     setCard(res.data);
  //   });
  // }, [])

  // const handleClick = (genre) => {
  //   api.post("/book/genre/", {genre: genre})
  //   .then((res) => {
  //     setCard(res.data)
  //   })
  // }
  useEffect(()=> {
    api.get("/books").then((res) => {
      setInfo(res.data);
    });
  }, [])

  const handleClick = (genre) => {
    api.post("/book/genre/", {genre: genre})
    .then((res) => {
      setInfo(res.data)
    })
  }


  return (
    <>
      <Menu />
      <ModalDetails show={show} setShow={setShow} />
      <Frame>
        <button>buy now</button>
      </Frame>
      <Filter>
        <div className="filter-genrer">
          <h3>Popular Genres</h3>

          <p>Fantasy</p>
          <p>Science</p>
          <p onClick={() => handleClick('Romance')}>Romance</p>
          <p>Business</p>
        </div>
        {/* {card.toString() !== "" ? (
          card.map((cards, i) => {
            return (
              <Card
                key={`${cards.id}-${i}`}
                // card={card}
                // setCard={setCard}
                image={cards.image}
                genre={cards.genre}
                title={cards.title}
                author={cards.author}
              />
            );
          })
        ) : (
          <p>we have a problem!</p>
        )} */}
        <Card/>
      </Filter>
      <div>
        {/* {card.toString() !== "" ? (
          card.map((cards, i) => {
            return (
              <Card
                // next={() => {
                //   api.get("/books").then((res) => {
                //     setCard(res.data);
                //   });
                // }}
                key={`${cards.id}-${i}`}
                card={card}
                setCard={setCard}
                image={cards.image}
                genre={cards.genre}
                title={cards.title}
                author={cards.author}
              />
            );
          })
        ) : (
          <p>we have a problem!</p>
        )} */}
        {/* <Card/> */}
      </div>
      oi
    </>
  );
}
