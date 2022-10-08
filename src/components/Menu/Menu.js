import { Header, Content } from "./MenuStyle";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate(); 

  return (
    <Header>

<p>logo</p>
      <nav>
        <Content>
          <div className="search">
            <input type="text" />

            <button>Search</button>
          </div>

          <span  onClick={ () => {navigate("/mylist")}}>My list</span>
          <span>About us</span>
          <button className="out">Log out</button>
        </Content>
      </nav>
    </Header>
  );
}
