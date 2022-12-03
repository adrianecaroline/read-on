import { Header, Content } from "./MenuStyle";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/reading-book.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineSearch,
  AiFillHome,
  AiFillHeart,
} from "react-icons/ai";
import { FaCat } from "react-icons/fa";

export default function Menu({ value, onChange, handleClick }) {
  
  function handleSearch(e) {
    let str = e.target.value;
    let capitalize = str.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    onChange(capitalize);
    
  }
 
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <span>
          <img src={logo} alt="logo" className="logo" onClick={() => { navigate("/")}}/>
          <p>ReadOn</p>
        </span>

        <nav>
          <Content>
            <div className="search">
              <input
                type="text"
                name="search"
                placeholder="Search for title"
                value={value}
                onChange={handleSearch}
                onDoubleClick={() => {
                  navigate("/search");
                }}
              />

              <span onClick={handleClick} className="lupa">
                <AiOutlineSearch size={25} />
              </span>
            </div>

            <span onClick={() => { navigate("/home")}}>
              <AiFillHome /> Home
            </span>

            <span onClick={() => { navigate("/mylist") }}>
              <AiFillHeart />
              My list
            </span>
            <div className="dev">
              <span> <FaCat />
                About me
              </span>
              <span className="drop">
                <a href="https://github.com/adrianecaroline" target="_blank">
                  GitHub <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/adriane-c-oliveira/"
                  target="_blank"
                >
                  Linkedin <AiFillLinkedin />
                </a>
              </span>
            </div>
          </Content>
        </nav>
      </Header>

    </>
  );
}
