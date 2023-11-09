import KakaoLogin from '@/components/kakao-login';
import logo from '@/assets/icons/logo.png';
import waveTop from '@/assets/icons/background/waveTop.png';
import waveBottom from '@/assets/icons/background/waveBottom.png';
import loginCaption from '@/assets/icons/background/loginCaption.png';
import logoCharacter from '@/assets/icons/characters/level5.png';
import { Top, Bottom, LogoImage, Caption, ContentWrapper } from './AuthStyle';

export default function Auth() {
  return (
    <>
      <Top>
        <img src={waveTop} width="100%" alt="waveTop" />
      </Top>
      <ContentWrapper>
        <LogoImage>
          <img src={logoCharacter} width="208px" alt="logoCharacter" />
          <img src={logo} width="160px" alt="logo" />
        </LogoImage>
        <Caption>
          <img src={loginCaption} width="61px" alt="loginCaption" />
        </Caption>
        <KakaoLogin width="193px" />
      </ContentWrapper>
      <Bottom>
        <img src={waveBottom} width="100%" alt="waveBottom" />
      </Bottom>
    </>
  );
}
