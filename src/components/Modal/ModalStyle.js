import styled from "styled-components";

export const ModalCard = styled.div`
  /* From https://css.glass */
 
    background-color: #1c2024 !important;
    border-radius: 8px !important;
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%) !important;
    -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;
    -webkit-backdrop-filter: blur(5px) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
  
  

  .modal-body {
    //background-color: #ffffff24;

    display: flex;
    justify-content: space-around;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 19px;
    width: 57%;
  }

  .poster {
    img {
      width: 9rem;
    }
  }
`;
