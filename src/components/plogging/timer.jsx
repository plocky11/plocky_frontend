import React from 'react';
import styled from 'styled-components';
const TimerWrapper = styled.div`
  width: 104px;
  height: 40px;
  border-radius: 16px;
  border: 2px solid #2a6d0d;
  background: var(--green-background, #fdfff5);
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.palette.green.darker};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 33vh;
`;
function Timer() {
  return (
    <>
      <TimerWrapper>00:00</TimerWrapper>
    </>
  );
}

export default Timer;
