import styled from "styled-components";

export const Main = styled.main`

  .content {
    //background: white;
    width: 300px;
    height: 170px;

    border: 1px solid #424040;
    border-radius: 6px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 2rem;
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
      width: 130px;
      padding: 7px 11px;
      background: #ff1435;
      border-radius: 3px;
      color: white;
      font-weight: 700;
      cursor: pointer;
    }

    .title {
      width: 162px;
    height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
  }
`;
