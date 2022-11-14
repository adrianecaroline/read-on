import { Main } from "./Style";
import { api } from "../../api";
import { useState } from "react";

export default function List({image, title, id, year}){

  const [book, setBook] = useState({
    _id: id,
  });

  const handleRemov = () => {
    console.log(id)
      api.delete(`/booklist/${book._id}`)
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
              <span className="title" data-toggle="tooltip" data-placement="top" title={title}>Title: {title}</span>
              {/* <span>Id: {id}</span> */}
              {/* <span>Year: {year}</span> */}
              <span>Reading</span>
              <button onClick={() => {handleRemov()}}>Delete</button>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
