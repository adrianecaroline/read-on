import readpic from '../../Images/pastel.jpg'
import { Main } from './InitialStyle'
import { FcGoogle } from "react-icons/fc";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function Initial () {

  const navigate = useNavigate(); 
  
  return (
    <>
    <Main>
      <section className='test'>
        <div className='image'>
          <img  src={readpic} alt='read'/>
        </div>
      </section>

      <section className='login'>
        <div className='login-area'>
        <h1> ReadingAt</h1>
        <p className='text'>Find the best books to read and make an amazing adventure through your imagination!</p>

        <form>
          <button type="button" id='google' name='google'>Log in with Google <FcGoogle size={26}/></button>
          
          <input type="email" id='email' name='email' placeholder="E-mail"/>
          
          <input type="password" name='password' placeholder="Password"/>

          <button className='btn' onClick={ () => {navigate("/profile")}} >Log in <BiRightArrowAlt size={26} color="white" className='svg'/></button>
          
          <p>Don't you have an account yet? <span>Sing Up</span></p>

        </form>
        </div>
      </section>
    </Main>
    </>
  )
}