import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #090d12;
  box-shadow: 0px 1px 3px 0px rgb(104 104 104 / 25%);

  display: flex;
  align-content: center;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  font-size: 1.2rem;

  span {
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.3em;

    p {
      margin: 0;
    }
  }

  .logo {
    border-radius: 50%;
    width: 3rem;
  }

  /* p {
    margin-left: 12rem;

    @media (max-width: 1300px) {
      margin-left: 6rem;
    }
  } */

  nav {
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  /*span {
    color: #9e0184;
  }*/

  .dev {
    position: relative;
    display: inline-block;
    padding: 20px 0px;
    cursor: pointer;
  }

  .drop {
    top: 4rem;
    display: none;
    position: absolute;
    background-color: #090d12;
    min-width: 154px;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    z-index: 1;
    border-radius: 3px;

    a {
      text-decoration: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #e3e3e4;
    }
  }

  .drop a {
    padding: 5px 12px;
  }

  .dev:hover .drop {
    display: block;
  }

  .drop a:hover {
    background-color: #0f121e;
  }

  .search {
    display: flex;
    gap: 1rem;

    > button {
      padding: 8px;
      border: none;
      background: orange;
      border-radius: 2px;
      color: white;
      cursor: pointer;
    }

    > input {
      width: 22rem;
      padding: 0 22px;
      background: #f5f5f5;
      border: none;
      border-radius: 2px;

      :focus {
        outline: none;
        border: 2px solid #aba5a5;
      }
    }

    @media (max-width: 1300px) {
      input {
        width: 12rem;
      }
    }
  }

  button {
    /* width: 7rem; */
    padding: 8px;
    background: #9e0184;
    border: none;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    font-family: "Roboto", serif;
  }
  .out {
    margin-right: 12rem;
  }

  @media (max-width: 1300px) {
    .out {
      margin-right: 6rem;
    }
  }
`;
