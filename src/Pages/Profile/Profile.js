import { Menu } from "../../components/Menu/Menu"
import { Main, Container } from "./ProfileSyle"
import lotr from '../../Images/book_lotr.jpg'

export function Profile () {

  return (
    <>
    <Menu/>
    <Main>
      <h1>My list</h1>

      <Container>
        <img src={lotr} alt='imagem' />
        <div>
        Title: The Lord Of The Ring
        <br/>
        Author: J. R. R. Tolkien
        <br/>
        Pages: 400 
        </div>

        <div>
          Read
        </div>
      </Container>
    </Main>
    </>
  )
}