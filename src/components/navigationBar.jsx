import React, { useState } from 'react';
import styled from 'styled-components';
import {
  home,
  mypage,
  neighborhood,
  plogging,
  shop,
  homeFocused,
  mypageFocused,
  neighborhoodFocused,
  ploggingFocused,
  shopFocused,
} from '@/assets/icons/nav/index';

const BottomBar = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 62px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
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

const Navbar = () => {
  const [focusedIcon, setFocusedIcon] = useState('home');

  const handleIconClick = icon => {
    setFocusedIcon(icon);
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
};

export default Navbar;
