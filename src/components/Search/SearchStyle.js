import styled from "styled-components";

export const Frame = styled.div`
  margin-top: 8%;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  ul {
    list-style-type: none;
    display: grid;
    gap: 2em 0.8em;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    margin: 2rem 10rem;
  }
`;

export const Card = styled.div`
  box-sizing: border-box;

  li {
    display: flex;
    gap: 0.8em;
    justify-content: space-around;
    box-shadow: 0px 8px 10px -3px #000000b8;
  }

  img {
    width: 10rem;
    border: 1px solid #424040;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.5s;

    :hover {
      transform: scale(1.2);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
  }

`;
