import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const ModalContent = styled.div`
  width: 19rem;
  height: 9.5rem;
  background: white;
  box-shadow: 0px 4px 4px 0px rgba(42, 109, 13, 0.16);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.brown.darker};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5rem;
  div: first-child {
    border-bottom: 1px solid black;
    width: 100%;
    padding: 1.5rem 0;
  }
`;

const Buttons = styled.div`
  border: none;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  button {
    border: none;
    background: transparent;
  }
`;

function EndPlogging({ onConfirm, onClose }) {
  const handleNoClick = () => {
    onClose();
  };

  const handleYesClick = () => {
    onConfirm();
  };
  return (
    <ModalWrapper>
      <ModalContent>
        <div>
          플로깅을 <br />
          종료하시겠습니까?
        </div>
        <Buttons>
          <button type="button" onClick={handleNoClick}>
            아니오
          </button>
          <button type="button" onClick={handleYesClick}>
            네
          </button>
        </Buttons>
      </ModalContent>
    </ModalWrapper>
  );
}

export default EndPlogging;
