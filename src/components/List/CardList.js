import Photo from "../../Images/book_lotr.jpg";
import { Main } from "./Style";
import { useState } from "react";

export default function List({image, title}) {
 
  // const [info, setInfo] = useState({
  //   title: title,
  //   image: image
  // })
  
  return (
    <>
      <Main>
        <h2>My list</h2>
        <div className="card-grid">
          <div className="content">
            <div className="img">
              {/* <img src={Photo} alt="book" /> */}
              <img src={image} alt="poster" />
            </div>

            <div className="info">
              <span>Titulo: {title}</span>
              <span>Reading</span>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
