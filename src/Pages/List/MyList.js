import { Menu } from "../../components/Menu/Menu";
// import { Main } from "./MyListStyle";
// import Photo from "../../Images/book_lotr.jpg";
import CardList from '../../components/List/CardList'
import { useEffect, useState } from "react";

export default function MyList({image, title}) {

  const [info, setInfo] = useState([ {title: title,
    image: image}])

    useEffect(() => {
      handleSave()
    }, [info])

  function handleSave () {
    let newList = [...info]

    setInfo(newList)
  }

  return (
    <>
    <Menu/>
    {info.toString() !== "" ? (
            info.map((cards, i) => {
              return ( 
                <CardList 
                  key={`${cards.id}-${i}`}
                  info={info}
                  setInfo={handleSave}
                  title={cards.title}
                  image={cards.image}
                />
              );
            })
          ) : (
            <p>we have a problem!</p>
          )}
    </>
  );
}
