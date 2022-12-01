import styled from "styled-components";

export const Card = styled.div`
  background: rgb(124 124 124 / 17%);
  border-radius: 6px;
  box-shadow: 0 2px 3px rgb(195 195 195 / 34%);

  padding: 10px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //background: hsl(0deg 0% 100%);
  //border-radius: 6px;
  gap: 0.8rem;
  //box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 18%);
  font-size: 16px;

  .poster {
    img {
      width: 6.8rem;
      height: 10rem;
    }
  }

  button {
    border: none;
    padding: 10px;
    color: white;
    font-weight: 700;
    font-size: 16px;
  }
  /* .genre {
    border-radius: 6px;
    background: #0a355a;
  } */

  .text {
    text-align: center;
    display: flex;
    flex-direction: column;

    gap: 0.5em;

    #title {
      width: 189px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .author {
    text-align: center;
  }

  .details {
    border-radius: 0 0 6px 6px;
    //background: #ed7a26;
    background: #2635ed;
    width: 100%;

    position: relative;
    top: 0.3rem;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  border-radius: 6px;
`;

// export const FantasyBTN = styled(Button)`
//   background-color: palevioletred;
// `;
