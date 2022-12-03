import readpic from '../../Images/reading-book.png'
import { Main } from './InitialStyle'
// import { FcGoogle } from "react-icons/fc";
// import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function Initial () {

  const navigate = useNavigate(); 
  
  return (
    <>
    <Main> 
      <section className='content'>
        <div className='logo'>
          <img src={readpic} alt="logo"/>
        </div>

        <div className='text-content'>
          <h3>
          Find the best books to read and make an amazing adventure through your imagination!
          </h3>
          <button onClick={() => {navigate("/home")}}>Start</button>
        </div>
      </section>
    </Main>
    </>
  )
}