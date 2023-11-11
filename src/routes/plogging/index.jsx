import React, { useState } from 'react';
import KaKaoMap from '@/components/kakao-map';
import logo from '@/assets/icons/logo.png';
import startButton from '@/assets/icons/buttons/startButton.png';
import Navbar from '../../components/navigationBar';
import Trash from '@/components/plogging/trash';
import Timer from '@/components/plogging/timer';

import { ContentWrapper, GoPlogging, LogoImage } from './PloggingStyle';

export default function Plogging() {
  const [isPlogging, setIsPlogging] = useState(false);
  const [addTrashcan, setAddTrashcan] = useState(false);

  const handleStartPlogging = () => {
    setIsPlogging(true);
  };


  const contentWrapperStyle = !isPlogging
    ? { height: 'calc(100vh - 62px)' }
    : { height: '100vh' };

  return (
    <>
      <ContentWrapper style={contentWrapperStyle}>
        <LogoImage>
          <img src={logo} alt="Logo" width="120px" height="64px" />
        </LogoImage>
        <KaKaoMap />

        {!isPlogging && (
          <GoPlogging onClick={handleStartPlogging}>
            <img src={startButton} width="312px" alt="start" />
          </GoPlogging>
        )}
        {isPlogging && (
          <>
            <Trash />
            <Timer />
          </>
        )}
      </ContentWrapper>
      {!isPlogging && <Navbar />}
    </>
  );
}
