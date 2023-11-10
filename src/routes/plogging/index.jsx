import logo from '@/assets/icons/logo.png';
import startButton from '@/assets/icons/buttons/startButton.png';
import Navbar from '../../components/navigationBar';
import Trash from '@/components/plogging/trash';

import { ContentWrapper, GoPlogging } from './PloggingStyle';

export default function Plogging() {
  return (
    <>
      <ContentWrapper>
        <div>
          <img src={logo} alt="Logo" width="120px" height="64px" />
        </div>
        <GoPlogging>
          <img src={startButton} width="312px" alt="start" />
        </GoPlogging>
        <Trash />
      </ContentWrapper>
      <Navbar />
    </>
  );
}
