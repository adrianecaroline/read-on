import { Header, Content } from "./MenuStyle";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/reading-book.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Menu() {
  const navigate = useNavigate();

  return (
    <Header>
      <span>
        <img src={logo} alt="logo" className="logo" />
        <p>ReadOn</p>
      </span>

      <nav>
        <Content>
          <div className="search">
            <input type="text" />

            <button>Search</button>
          </div>

          <span
            onClick={() => {
              navigate("/mylist");
            }}
          >
            My list
          </span>
          <div className="dev">
            <span >About me</span>
            <span className="drop">
              <a href="https://github.com/adrianecaroline" target="_blank">GitHub <AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/adriane-c-oliveira/" target="_blank">Linkedin <AiFillLinkedin /></a>
            </span>
          </div>

          {/* <button className="out">light mode</button> */}
        </Content>
      </nav>
    </Header>
  );
}
