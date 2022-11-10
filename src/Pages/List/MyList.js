import { Menu } from "../../components/Menu/Menu";
import { Main, Card } from "./MyListStyle";
import CardList from "../../components/List/CardList";
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function MyList({ image, title }) {
  const [info, setInfo] = useState([{ title: title, image: image }]);

  useEffect(() => {
    api.get("/list").then((res) => {
      setInfo(res.data);
    });
  }, [info]);

  // function handleSave () {
  //   let newList = [...info]
  //   setInfo(newList)
  // }

  return (
    <>
      <Menu />
      <Main>
        <h2>My list</h2>
        <Card>
          {info.toString() !== "" ? (
            info.map((cards, i) => {
              return (
                <CardList
                  key={`${cards.id}-${i}`}
                  info={info}
                  setInfo={setInfo}
                  title={cards.title}
                  image={cards.image}
                />
              );
            })
          ) : (
            <p>Você não adicionou nada na sua lista ainda.</p>
          )}
        </Card>
      </Main>
    </>
  );
}
