import styled from "styled-components";

export const ModalCard = styled.div`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  .modal-body {
    background-color: #ffffff24;

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
