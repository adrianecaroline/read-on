import styled from "styled-components";

export const Frame = styled.section`
  background-image: url("https://cdn.europosters.eu/image/hp/66431.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-top: 30%;
  margin-top: 5%;
  width: 100%;

  button {
    position: relative;
    left: 15%;
    top: -4rem;
    /* position: absolute;
    left: 15%;
    bottom: 23%; */
    width: 13rem;
    padding: 12px;
    border: none;
    border-radius: 3px;
    outline: none;
    background: orange;
    font-size: 16px;
    color: white;
    font-weight: 700;
  }
`;

export const Filter = styled.section`
  .filter-genrer {
    display: flex;
    align-items: center;
    gap: 7rem;
    margin-top: 2% auto;
    margin: 2% auto;
    justify-content: center;
    background: hsl(0deg 0% 100%);
    width: 61rem;
    box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 18%);

    border-radius: 6px;

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0;
    }

    p {
      cursor: pointer;
      margin: 0;
      padding: 19px 0;
      box-sizing: border-box;
      font-size: 1.08rem;

      transform: perspective(1px) translateZ(0);
      position: relative;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;

      :hover:before{
        left: 0;
        right: 0;
      }
      
      ::before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: 0;
        background: #2098d1;
        height: 4px;

        transition-property: left, right;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
      }

      @media (max-width: 1100px) {
        width: 48rem;
        gap: 5.4rem;

        p {
          font-size: 15px;
        }

        h3 {
          font-size: 17px;
          margin: 0;
        }
      }
    }
  }
`;

export const Main = styled.main`
  padding-top: 5%;
  margin: 4% 14%;

  h1 {
    color: #504e4f;
  }
`;

export const Container = styled.section`
  width: 22rem;
  height: 12rem;
  background-color: #ffff;
  border-radius: 2px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 9px;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 30%);

  img {
    width: 35%;
  }

  div {
    font-size: 16px;
  }
`;
