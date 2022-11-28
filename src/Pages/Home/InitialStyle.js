import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  //color: #4E4E4E;
  overflow: hidden;

  .content {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 5rem;
    width: 84%;
  }

  img {
    width: 13rem;
    border-radius: 50%;
  }

  .text-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h3 {
    font-size: calc(1.3rem + .6vw);
    color: #d5d5d5;
  }

  button {
    padding: 7px 50px;
    border: none;
    border-radius: 3px;
    background: #3442e7;
    color: white;
    font-size: 20px;
    box-sizing: border-box;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-content: center;

    :hover {
      transition-property: transform;
      transition-duration: 0.3s;
      transform: translateX(8px);
    }
  }


`;
