import React from 'react';
import KaKaoMap from '@/components/kakao-map';
import logo from '@/assets/icons/logo.png';
import TempImg from '@/assets/icons/characters/level5.png';
import trashcanwhite from '@/assets/icons/buttons/trashcanwhite.png';
import can from '@/assets/icons/plogging/can.png';
import cigarette from '@/assets/icons/plogging/cigarette.png';
import glass from '@/assets/icons/plogging/glass.png';
import others from '@/assets/icons/plogging/others.png';
import paper from '@/assets/icons/plogging/paper.png';
import plastic from '@/assets/icons/plogging/plastic.png';
import vinyl from '@/assets/icons/plogging/vinyl.png';
import waveBottom from '@/assets/icons/background/waveBottom.png';
import Navbar from '../../components/navigationBar';
import { Bottom } from '@/routes/auth/AuthStyle';
import { ContentWrapper, LogoImage } from '@/routes/plogging/PloggingStyle';
import {
  Capture,
  TimeWrapper,
  LocationWrapper,
  Km,
  Location,
  CountWrapper,
  AllCount,
  ItemWrapper,
  Item,
  Name,
  Num,
} from './endPloggingStyle';
import { useState } from 'react';
import { useEffect } from 'react';
import instance from '@/api/instance';

export default function EndPlogging() {
  const [plogging, setPlogging] = useState({});
  const [totalTrash, setTotalTrash] = useState(0);
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await instance.get('/members/ploggings/4');
        setPlogging(response.data);
      } catch (error) {
        console.error('Error fetching plogging data: ', error);
      }
    };
    //setTotalTrash(plogging.trash.paperQuantity + plogging.trash.plaQuantity + plogging.trash.glassQuantity + plogging.trash.canQuantity + plogging.trash.foamQuantity + plogging.trash.etcQuantity + plogging.trash.cigarQuantity);
    fetchData();
  }, []);

  useEffect(() => {
    setTotalTrash(plogging.trash?.paperQuantity +
      plogging.trash?.plaQuantity +
      plogging.trash?.glassQuantity +
      plogging.trash?.canQuantity +
      plogging.trash?.foamQuantity +
      plogging.trash?.etcQuantity +
      plogging.trash?.cigarQuantity);
  }, [plogging]);

  return (
    <>
      <ContentWrapper>
        <LogoImage>
          <img src={logo} width="160px" alt="logo" />
        </LogoImage>
        <Capture>
          <img src={TempImg} width="176px" height="176px" alt="TempImg" />
        </Capture>
        <TimeWrapper>
          <div>Clear!</div>
          <div>{plogging.totalHour}시간 {plogging.totalMinute}분 {plogging.totalSecond}초</div>
        </TimeWrapper>
        <LocationWrapper>
          <Km>
            <div>걸은 km</div>
            <div>{plogging.distance}km</div>
          </Km>
          <div>
            <Location>
              시작위치<div>{plogging.startedWhere}</div>
            </Location>
            <Location>
              종료위치<div>{plogging.endedWhere}</div>
            </Location>
          </div>
        </LocationWrapper>
        <CountWrapper>
          <AllCount>
            <div>주운 쓰레기 수</div>
            <img src={trashcanwhite} width="26px" alt="trashcan" />
            <div>{totalTrash}개</div>
          </AllCount>
          <ItemWrapper>
            <Item>
              <img src={cigarette} width="16px" alt="cigarette" />
              <Name>담배꽁초</Name>
              <Num>{plogging.trash?.cigarQuantity}개</Num>
            </Item>
            <Item>
              <img src={plastic} width="16px" alt="plastic" />
              <Name>플라스틱</Name>
              <Num>{plogging.trash?.plaQuantity}개</Num>
            </Item>
            <Item>
              <img src={can} width="16px" alt="can" />
              <Name>캔</Name>
              <Num>{plogging.trash?.canQuantity}개</Num>
            </Item>
            <Item>
              <img src={paper} width="16px" alt="paper" />
              <Name>종이</Name>
              <Num>{plogging.trash?.paperQuantity}개</Num>
            </Item>
            <Item>
              <img src={glass} width="16px" alt="glass" />
              <Name>유리</Name>
              <Num>{plogging.trash?.glassQuantity}개</Num>
            </Item>
            <Item>
              <img src={vinyl} width="16px" alt="vinyl" />
              <Name>비닐</Name>
              <Num>{plogging.trash?.foamQuantity}개</Num>
            </Item>
            <Item>
              <img src={others} width="16px" alt="others" />
              <Name>기타</Name>
              <Num>{plogging.trash?.etcQuantity}개</Num>
            </Item>
          </ItemWrapper>
        </CountWrapper>
        <Bottom>
          <img src={waveBottom} width="100%" alt="waveBottom" />
        </Bottom>
      </ContentWrapper>
      <Navbar />
    </>
  );
}
