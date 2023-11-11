import React, { useState, useEffect } from 'react';
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
  z-index: 2;
`;
function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // 타이머 시작
    const timerInterval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // 타이머 멈춤
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    // 페이지가 navigate되면 타이머 멈춤
    const handleBeforeUnload = () => {
      clearInterval();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // 초를 분:초 형식으로 변환
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return <TimerWrapper>{formatTime(time)}</TimerWrapper>;
}

export default Timer;
