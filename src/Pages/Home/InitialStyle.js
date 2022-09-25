import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #4E4E4E;
  overflow: hidden;

  .test {
    background: #ffead2;
    height: 100vh;
    width: 50%;
  }

  .login-area{
    margin: auto;
    width: 465px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 9%), 0 4px 16px rgb(0 0 0 / 9%);
    border-radius: 8px;
    padding: 36px 25px;
    background-color: #f5f5f5;
    align-self: center;
    display: flex;
    flex-direction: column;
  }

  .image {
    //width: 50%;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }

  img {
    width: 40rem;
  }

  .login {
    /* padding: 2rem 1rem;
    box-sizing: border-box;
    background: #f1f1f161;
    border-radius: 19px; */
    width: 50%;
  }

  h1 {
    margin-top: 5rem;
    font-size: 3rem;
    text-align: center;
    margin-top: 0;
    font-family: 'K2D', sans-serif;
  }

  p {
    text-align: center;
  }

  span {
    font-weight: 700;
    cursor: pointer;
  }

  .text {
    text-align: right;
    margin: 0 4rem;
    font-weight: 600;
  }

  button {
    width: 360px;
    background: #ffff;
    box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 21%);
    padding: 10px;
    color: #4E4E4E;
    border: 0;
    border-radius: 3px;
    font-weight: bolder;
    
    cursor: pointer;
    font-size: 1rem;
    gap: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }

  #google {
    margin-top: 2rem;
  }

  input {
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    width: 360px;
    font-size: 1rem;
    box-sizing: border-box;
    color: #4E4E4E;
    //background: #F9F8FD;
    background: #ffffff;
    border: 0;
    padding: 14px;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 21%);
    
  }

  .btn {
    background-color: #ff705c;
    color: #ffff;
    font-weight: bolder;
    cursor: pointer;

    :hover {
      transition-property: transform;
      transition-duration: 0.3s;
      transform: translateX(8px);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
