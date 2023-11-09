import logo from '@/assets/icons/logo.png';
import startButton from '@/assets/icons/buttons/startButton.png';
import Navbar from '../../components/navigationBar';
import Trash from '@/components/plogging/trash';
import Timer from '@/components/plogging/timer';

import {
  Container,
  ContentWrapper,
  LogoImage,
  GoPlogging,
} from './PloggingStyle';

export default function Plogging() {
  return (
    <Container>
      <ContentWrapper>
        <LogoImage>
          <img src={logo} alt="Logo" width="120px" height="64px" />
        </LogoImage>
        <GoPlogging>
          <img src={startButton} width="312px" alt="start" />
        </GoPlogging>
        <Trash />
        <Timer />
      </ContentWrapper>
      <Navbar />
    </Container>
  );
}
