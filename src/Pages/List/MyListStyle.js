import styled from "styled-components";

export const Main = styled.main`
  margin: 2rem 12rem;
  padding-top: 5%;

  h2 {
    color: violet;
    font-size: 2rem;
    margin: 1rem 0;
  }

  .material-symbols-outlined{
    cursor: pointer;
    font-size: 33px;
    color: #818181;
  }
`;

export const Card = styled.div`
  margin: 0px auto;

  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem 2rem;
`;

//   h2 {
//     color: violet;
//     font-size: 2rem;
//   }

//   .content {
//     background: white;
//     width: 300px;
//     height: 150px;

//     box-sizing: border-box;
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     gap: 3rem;
//     box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 18%);

//     img {
//       width: 5rem;
//     }
//   }

//   .info {
//     display: flex;
//     flex-direction: column;
//     gap: 1.4rem;
//     justify-content: center;

//     button {
//       border: none;
//       outline: none;
//       padding: 3px 11px;
//       background: #ff1435;
//       border-radius: 3px;
//       color: white;
//       font-weight: 700;
//     }
//   }
// `;
