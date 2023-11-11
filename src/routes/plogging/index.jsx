import React, { useState } from 'react';
import KaKaoMap from '@/components/kakao-map';
import logo from '@/assets/icons/logo.png';
import startButton from '@/assets/icons/buttons/startButton.png';
import Navbar from '../../components/navigationBar';
import Trash from '@/components/plogging/trash';
import Timer from '@/components/plogging/timer';

import { ContentWrapper, GoPlogging, LogoImage } from './PloggingStyle';
import { usePloggingStart } from '@/api/context/ploggingContext';

export default function Plogging() {
  const [isPloggingStarted, setIsPloggingStarted] = usePloggingStart();

  const handleStartPlogging = () => {
    setIsPloggingStarted(true);
  };

  const contentWrapperStyle = !isPloggingStarted
    ? { height: 'calc(100vh - 62px)' }
    : { height: '100vh' };

  return (
    <>
      <ContentWrapper style={contentWrapperStyle}>
        <LogoImage>
          <img src={logo} alt="Logo" width="120px" height="64px" />
        </LogoImage>
        <KaKaoMap />

        {!isPloggingStarted && (
          <GoPlogging onClick={handleStartPlogging}>
            <img src={startButton} width="312px" alt="start" />
          </GoPlogging>
        )}
        {isPloggingStarted && (
          <>
            <Trash />
            <Timer />
          </>
        )}
      </ContentWrapper>
      {!isPloggingStarted && <Navbar />}
    </>
  );
}
