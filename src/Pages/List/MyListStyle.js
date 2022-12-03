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