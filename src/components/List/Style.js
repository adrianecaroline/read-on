import styled from "styled-components";

export const Main = styled.main`

  .content {
    background: white;
    width: 300px;
    //height: 150px;

    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 3rem;
    box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 18%);

    img {
      width: 5rem;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    justify-content: center;

    button {
      border: none;
      outline: none;
      padding: 3px 11px;
      background: #ff1435;
      border-radius: 3px;
      color: white;
      font-weight: 700;
    }
  }
`;
