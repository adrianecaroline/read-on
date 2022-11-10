import { Section, Main } from "./CardStyle";
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
  }, [card]);

  return (
    <>
      <Section> 
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