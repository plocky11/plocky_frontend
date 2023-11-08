import logo from '@/assets/icons/logo.png';
import characterTemp from '@/assets/icons/characters/characterTemp.png';
import defaultBox from '@/assets/icons/background/defaultBox.png';
import circle from '@/assets/icons/background/circle.png';
import dot from '@/assets/icons/background/dot.png';
import lineBox from '@/assets/icons/background/lineBox.png';
import leaf from '@/assets/icons/background/leaf.png';
import goButton from '@/assets/icons/buttons/goButton.png';
import ProgressBar from '../../components/mainpage/progressBar';
import Navbar from '../../components/navigationBar';
import {
  Container,
  ContentWrapper,
  RankWrapper,
  RankBox,
  PetName,
  ExpBar,
  Caption,
  Rank,
  Username,
  UserKm,
  LogoImage,
  PetImage,
  RankImage,
  GoPlogging,
} from './MainStyle';

export default function Main() {
  const defaultBoxes = Array(3).fill(defaultBox);
  return (
    <Container>
      <ContentWrapper>
        <LogoImage>
          <img src={logo} alt="Logo" width="120px" height="64px" />
        </LogoImage>
        <PetImage>
          <img src={characterTemp} alt="pet" width="160px" height="120px" />
        </PetImage>
        <PetName>아하방구</PetName>
        <ExpBar>
          <ProgressBar bgcolor="#b3d12c" completed="50" />
          <Caption>
            <span>4km / 10km</span>
          </Caption>
        </ExpBar>
        <RankWrapper>
          {defaultBoxes.map((box, index) => (
            <RankBox key={index}>
              <img src={box} alt={`defaultBox-${index}`} />
              <Rank>{`${index + 1}`}</Rank>
              <RankImage>
                <img src={circle} width="36px" height="36px" />
                {/* 백엔드에서 펫 이미지 가져오기 */}
              </RankImage>
              <Username>어쩌구</Username>
              <UserKm>10km</UserKm>
            </RankBox>
          ))}
          <img src={dot} alt="dot" width="30px" />
          <RankBox>
            <img src={lineBox} width="100%" />
            <img
              src={leaf}
              id="leaf"
              style={{
                position: 'absolute',
                top: '-16px',
                left: '-17px',
                width: '24px',
              }}
            />
            <Rank>0</Rank>
            <RankImage>
              <img src={circle} width="36px" height="36px" />
              {/* 백엔드에서 펫 이미지 가져오기 */}
            </RankImage>
            <Username>어쩌구</Username>
            <UserKm>10km</UserKm>
          </RankBox>
        </RankWrapper>
        <GoPlogging>
          <img src={goButton} width="312px" />
        </GoPlogging>
      </ContentWrapper>
      <Navbar></Navbar>
    </Container>
  );
}
