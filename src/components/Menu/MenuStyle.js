import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #ffff;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 30%);

  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;


  p {
    margin-left: 12rem;
  }

  nav {
    /* display: flex;
    align-items: center;
    align-content: flex-end;
    margin-left: 11rem;
    margin-right: 11rem;
    justify-content: space-around; */

    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 4rem;
  
  .search {
    display: flex;
    gap: 1rem;

    > button {
      padding: 10px;
      border: none;
      background: orange;
      border-radius: 2px;
      color: white;
      cursor: pointer;
      font-weight: 600;
    }

    > input {
      width: 22rem;
      padding: 7px;
      background: #f5f5f5;
      border: none;
      border-radius: 2px;

      :focus {
        outline: none;
        border: 2px solid #aba5a5;
      }
    }
  }

  button {
    width: 5rem;
    //background: #01619e;
    background: #9e0184;
    border: none;
    border-radius: 2px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
  .out {
    margin-right: 12rem;
  }
`;
