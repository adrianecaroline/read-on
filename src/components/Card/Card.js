import { Section, Main, Filter } from "./CardStyle";
import { api } from "../../api";
import { useEffect, useState } from "react";
import Cardex from "../Cardex/Card";
//import { Contexto } from "../../App"; 

export default function CardBook() {
  
  const [card, setCard] = useState([]);

  useEffect(() => {
    api.get("/books").then((res) => {
      setCard(res.data);
    });
  }, []);
  //[card]

  const handleClick = (genre) => {
    api.post("/book/genre/", {genre: genre})
    .then((res) => {
      setCard(res.data)
    })
  }

  return (
    <>
      <Section> 
        <Filter>
          <div className="filter-genrer">
            <h3>Popular Genres</h3>
            <p onClick={() => handleClick('Fantasy')}>Fantasy</p>
            <p onClick={() => handleClick('Science')}>Science</p>
            <p onClick={() => handleClick('Romance')}>Romance</p>
            <p onClick={() => handleClick('Business')}>Business</p>
          </div>
        </Filter>
        <Main>
          {card.toString() !== "" ? (
            card.map((cards, i) => {
              return (
                <Cardex
                  key={`${cards.id}-${i}`}
                  card={card}
                  setCard={setCard}
                  image={cards.image}
                  genre={cards.genre}
                  title={cards.title}
                  pages={cards.pages}
                  author={cards.author}
                  year={cards.year}
                />
              );
            })
          ) : (
            <p>we have a problem!</p>
          )}
        </Main>
      </Section>
    </>
  );
}
