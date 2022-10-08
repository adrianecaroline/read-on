import styled from "styled-components";

export const Section = styled.section`
  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  .pag {
    background: #ffffff00;
    border: 2px solid #9e0184;
    border-radius: 4px;
    padding: 8px;
    box-sizing: border-box;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Main = styled.main`

  //padding: 0px 1rem;
  margin: 0px auto;

  margin: 3rem 12rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  @media (max-width: 1310px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1034px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 980px) {
    margin: 3rem 6rem;
  }

`;

// export const Card = styled.div`
//   padding: 10px 0 0;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: hsl(0deg 0% 100%);
//   border-radius: 6px;
//   gap: 0.8rem;
//   box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 18%);
//   font-size: 16px;

//   .poster {
//     img {
//       width: 6.8rem;
//     }
//   }

//   button {
//     border: none;
//     padding: 10px;
//     color: white;
//     font-weight: 700;
//     font-size: 16px;
//   }
//   .genre {
//     border-radius: 6px;
//     background: #0a355a;
//   }

//   .text {
//   }

//   .author {
//   }

//   .details {
//     border-radius: 0 0 6px 6px;
//     background: #ed7a26;
//     width: 100%;
//   }
// `;
