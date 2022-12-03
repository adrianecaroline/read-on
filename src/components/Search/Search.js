import { Frame, Card } from "./SearchStyle.js";
import Menu from "../Menu/Menu.js";
import { useState, useEffect } from "react";
import { api } from "../../api.js";

export function Search() {
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log(search);
    
    if (search) {
      api.post("/book/title/", { title: search })
        .then((res) => {
          console.log(res);
          setItem(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } 
  }, [search]);

  return (
    <>
      <Menu value={search} onChange={(search) => setSearch(search)} />

      <Frame>
        {item.data && (
          <ul>
            {item.data.map((book, i) => {
              return (
                <Card key={`${book.id}-${i}`}>
                  <li>
                    <img src={book.image} alt="poster" />
                  </li>
                </Card>
              );
            })}
          </ul>
        )}
      </Frame>
    </>
  );
}
