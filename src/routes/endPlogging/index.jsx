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

export default function EndPlogging() {
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
          <div>56분 23초</div>
        </TimeWrapper>
        <LocationWrapper>
          <Km>
            <div>걸은 km</div>
            <div>1.1km</div>
          </Km>
          <div>
            <Location>
              시작위치<div>경기도 의정부시 용현로 72</div>
            </Location>
            <Location>
              종료위치<div>서울특별시 광진구 아차산로 196-22</div>
            </Location>
          </div>
        </LocationWrapper>
        <CountWrapper>
          <AllCount>
            <div>주운 쓰레기 수</div>
            <img src={trashcanwhite} width="26px" alt="trashcan" />
            <div>102개</div>
          </AllCount>
          <ItemWrapper>
            <Item>
              <img src={cigarette} width="16px" alt="cigarette" />
              <Name>담배꽁초</Name>
              <Num>52개</Num>
            </Item>
            <Item>
              <img src={plastic} width="16px" alt="plastic" />
              <Name>플라스틱</Name>
              <Num>52개</Num>
            </Item>
            <Item>
              <img src={can} width="16px" alt="can" />
              <Name>캔</Name>
              <Num>52개</Num>
            </Item>
            <Item>
              <img src={paper} width="16px" alt="paper" />
              <Name>종이</Name>
              <Num>52개</Num>
            </Item>
            <Item>
              <img src={glass} width="16px" alt="glass" />
              <Name>유리</Name>
              <Num>52개</Num>
            </Item>
            <Item>
              <img src={vinyl} width="16px" alt="vinyl" />
              <Name>비닐</Name>
              <Num>52개</Num>
            </Item>
            <Item>
              <img src={others} width="16px" alt="others" />
              <Name>기타</Name>
              <Num>52개</Num>
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
