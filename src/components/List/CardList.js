import { Main } from "./Style";
import { api } from "../../api";
import { useState } from "react";

export default function List({image, title}, props) {

  const [book, setBook] = useState({
    id: props._id,
  });

  const handleRemov = () => {
      api.delete(`/booklist/${book.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <>
      <Main>
        <div className="card-grid">
          <div className="content">
            <div className="img">
              <img src={image} alt="poster" />
            </div>

            <div className="info">
              <span>Title: {title}</span>
              <span>Reading</span>
              <button onClick={() => {handleRemov()}}>Delete</button>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
