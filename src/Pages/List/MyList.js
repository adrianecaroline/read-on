import { Menu } from "../../components/Menu/Menu";
import { Main, Card } from "./MyListStyle";
import CardList from "../../components/List/CardList";
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function MyList({ image, title, id, year }) {
  const [info, setInfo] = useState([{ title: title, image: image, _id: id, year: year}]);

  const [refresh, setRefresh] = useState(false)

  const refreshPage = () => {
    setRefresh(!refresh) //refresh is false, so the !refresh return true
}

  useEffect(() => {
    api.get("/list").then((res) => {
      setInfo(res.data);
      refreshPage()
    });
  });

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
            info.map((card, i) => {
              //console.log(card._id)
              return (
                <CardList
                  key={`${card.id}-${i}`}
                  info={info}
                  setInfo={setInfo}
                  id={card?._id}
                  title={card.title}
                  image={card.image}
                  year={card.year}
                />
              );
            })
          ) : (
            <p>You haven't added anything to your list yet.</p>
          )}
        </Card>
      </Main>
    </>
  );
}
