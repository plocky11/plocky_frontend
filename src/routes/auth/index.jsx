import KakaoLogin from '@/components/kakao-login';
import logo from '@/assets/icons/logo.png';
import waveTop from '@/assets/icons/background.waveTop.png';
import waveBottom from '@/assets/icons/background.waveBottom.png';
import loginCaption from '@/assets/icons/background.loginCaption.png';
import logoCharacter from '@/assets/icons/characters/logoCharacter.png';
import {
  Container,
  Top,
  Bottom,
  LogoImage,
  Caption,
  ContentWrapper,
} from './AuthStyle';

export default function Auth() {
  return (
    <Container>
      <Top>
        <img src={waveTop} width={'100%'}></img>
      </Top>
      <ContentWrapper>
        <LogoImage>
          <img src={logoCharacter} width={'208px'}></img>
          <img src={logo} width={'160px'}></img>
        </LogoImage>
        <Caption>
          <img src={loginCaption} width={'61px'}></img>
        </Caption>
        <KakaoLogin width={'193px'} />
      </ContentWrapper>
      <Bottom>
        <img src={waveBottom} width={'100%'}></img>
      </Bottom>
    </Container>
  );
}
