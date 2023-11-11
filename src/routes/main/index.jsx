import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/icons/logo.png';
import defaultBox from '@/assets/icons/background/defaultBox.png';
import circle from '@/assets/icons/background/circle.png';
import dot from '@/assets/icons/background/dot.png';
import lineBox from '@/assets/icons/background/lineBox.png';
import leaf from '@/assets/icons/background/leaf.png';
import goButton from '@/assets/icons/buttons/goButton.png';
import ProgressBar from '../../components/mainpage/progressBar';
import Navbar from '../../components/navigationBar';
import PetLevel from '@/api/petLevel';
import {
  ContentWrapper,
  RankWrapper,
  RankBox,
  PetName,
  ExpBar,
  Caption,
  Rank,
  Username,
  UserKm,
  RankImage,
  GoPlogging,
  Level,
  PetImg,
} from './MainStyle';
import instance from '@/api/instance';

export default function Main() {
  const navigate = useNavigate();

  function goPlogging() {
    navigate('/plogging');
  }

  const [myData, setMyData] = useState({
    memberId: '',
    petLevel: '',
    nickname: '',
    totalDistance: '',
    ranking: '',
  });
  const [userData, setUserData] = useState([
    { memberId: '', petLevel: '', nickname: '', totalDistance: '' },
    { memberId: '', petLevel: '', nickname: '', totalDistance: '' },
    { memberId: '', petLevel: '', nickname: '', totalDistance: '' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rankingResult = await instance.get('/members/ranking', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        const myRankingResult = await instance.get('/members/ranking/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        console.log('General Ranking:', rankingResult.data);
        // console.log('My Ranking:', myRankingResult.data);
        setMyData(myRankingResult.data);
        setUserData(rankingResult.data);
        console.log(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ContentWrapper>
        <div>
          <img src={logo} alt="Logo" width="120px" height="64px" />
        </div>
        <PetImg>
          <PetLevel level={myData.petLevel} width="160px" height="120px" />
        </PetImg>
        <PetName>
          {myData.nickname}
          <Level>Lv.{myData.petLevel}</Level>
        </PetName>
        <ExpBar>
          <ProgressBar bgcolor="#b3d12c" completed="50" />
          <Caption>
            <span>{myData.totalDistance}km / 10km</span>
          </Caption>
        </ExpBar>
        <RankWrapper>
          <RankBox>
            <img src={defaultBox} alt="rank" />
            <Rank>1</Rank>
            <RankImage>
              <img src={circle} width="36px" height="36px" alt="circle" />
              <div>
                <PetLevel
                  level={userData[0].petLevel}
                  width="40px"
                  height="40px"
                />
              </div>
            </RankImage>
            <Username>{userData[0].nickname}</Username>
            <UserKm>{userData[0].totalDistance}km</UserKm>
          </RankBox>
          <RankBox>
            <img src={defaultBox} alt="rank" />
            <Rank>2</Rank>
            <RankImage>
              <img src={circle} width="36px" height="36px" alt="circle" />
              <div>
                <PetLevel
                  level={userData[1].petLevel}
                  width="40px"
                  height="40px"
                />
              </div>
            </RankImage>
            <Username>{userData[1].nickname}</Username>
            <UserKm>{userData[1].totalDistance}km</UserKm>
          </RankBox>
          <RankBox>
            <img src={defaultBox} alt="rank" />
            <Rank>3</Rank>
            <RankImage>
              <img src={circle} width="36px" height="36px" alt="circle" />
              <div>
                <PetLevel
                  level={userData[2].petLevel}
                  width="40px"
                  height="40px"
                />
              </div>
            </RankImage>
            <Username>{userData[2].nickname}</Username>
            <UserKm>{userData[2].totalDistance}km</UserKm>
          </RankBox>
          <img src={dot} alt="dot" width="30px" />
          <RankBox>
            <img src={lineBox} width="100%" alt="line" />
            <img
              src={leaf}
              id="leaf"
              alt="leaf"
              style={{
                position: 'absolute',
                top: '-16px',
                left: '-17px',
                width: '24px',
              }}
            />
            <Rank>{myData.ranking}</Rank>
            <RankImage>
              <img src={circle} width="36px" height="36px" alt="circle" />
              <div>
                <PetLevel level={myData.petLevel} width="40px" height="40px" />
              </div>
            </RankImage>
            <Username> {myData.nickname}</Username>
            <UserKm>{myData.totalDistance}km</UserKm>
          </RankBox>
        </RankWrapper>
        <GoPlogging onClick={() => goPlogging()}>
          <img src={goButton} width="312px" alt="goButton" />
        </GoPlogging>
      </ContentWrapper>
      <Navbar />
    </>
  );
}
