import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import home from '@/assets/icons/nav/home.png';
import mypage from '@/assets/icons/nav/mypage.png';
import neighborhood from '@/assets/icons/nav/neighborhood.png';
import plogging from '@/assets/icons/nav/plogging.png';
import shop from '@/assets/icons/nav/shop.png';
import homeFocused from '@/assets/icons/nav/homeFocused.png';
import mypageFocused from '@/assets/icons/nav/mypageFocused.png';
import neighborhoodFocused from '@/assets/icons/nav/neighborhoodFocused.png';
import ploggingFocused from '@/assets/icons/nav/ploggingFocused.png';
import shopFocused from '@/assets/icons/nav/shopFocused.png';

const BottomBar = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 62px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  z-index: 2;
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ focused }) =>
    focused
      ? 'var(--green-normal, #619D46)'
      : 'var(--green-deactivation, #c6d4bf)'};
`;

const Text = styled.div`
  font-size: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 100%;
`;

function Navbar() {
  const navigate = useNavigate();
  const [focusedIcon, setFocusedIcon] = useState('home');

  const handleIconClick = icon => {
    switch (icon) {
      case 'neighborhood':
        navigate('/neighborhood');
        setFocusedIcon('neighborhood');
        break;
      case 'shop':
        navigate('/item');
        setFocusedIcon('shop');
        break;
      case 'home': {
        navigate('/');
        console.log(icon);
        setFocusedIcon('home');
        console.log(icon);
        break;
      }
      case 'plogging': {
        navigate('/plogging');
        console.log(icon);
        setFocusedIcon('plogging');
        console.log(icon);
        break;
      }
      case 'mypage': {
        navigate('/MyPage');
        setFocusedIcon('mypage');
        break;
      }
      default:
        break;
    }
  };

  return (
    <BottomBar>
      <IconWrapper
        onClick={() => handleIconClick('neighborhood')}
        focused={focusedIcon === 'neighborhood' ? 'true' : 'false'}
      >
        <img
          src={
            focusedIcon === 'neighborhood' ? neighborhoodFocused : neighborhood
          }
          width="32px"
          alt="Neighborhood Icon"
        />
        <Text>우리동네</Text>
      </IconWrapper>
      <IconWrapper
        onClick={() => handleIconClick('shop')}
        focused={focusedIcon === 'shop' ? 'true' : 'false'}
      >
        <img
          src={focusedIcon === 'shop' ? shopFocused : shop}
          width="32px"
          alt="Shop Icon"
        />
        <Text>상점</Text>
      </IconWrapper>
      <IconWrapper
        onClick={() => handleIconClick('home')}
        focused={focusedIcon === 'home' ? 'true' : 'false'}
      >
        <img
          src={focusedIcon === 'home' ? homeFocused : home}
          width="32px"
          alt="Home Icon"
        />
        <Text>홈</Text>
      </IconWrapper>
      <IconWrapper
        onClick={() => handleIconClick('plogging')}
        focused={focusedIcon === 'plogging' ? 'true' : 'false'}
      >
        <img
          src={focusedIcon === 'plogging' ? ploggingFocused : plogging}
          width="40px"
          alt="Plogging Icon"
        />
        <Text>플로깅하기</Text>
      </IconWrapper>
      <IconWrapper
        onClick={() => handleIconClick('mypage')}
        focused={focusedIcon === 'mypage' ? 'true' : 'false'}
      >
        <img
          src={focusedIcon === 'mypage' ? mypageFocused : mypage}
          width="32px"
          alt="Mypage Icon"
        />
        <Text>마이페이지</Text>
      </IconWrapper>
    </BottomBar>
  );
}

export default Navbar;
