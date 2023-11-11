import React from 'react';
import mypageImage from '@/assets/sample/mypage.png';
import Navbar from '../components/navigationBar';

export default function MyPage() {
  return (
    <>
      <img src={mypageImage} alt="mypage" />
      <Navbar />
    </>
  );
}
