import React from 'react';
import mypageImage from '@/assets/sample/mypage.png';
import Navbar from '../../components/navigationBar';

export default function MyPage() {
  return (
    <div style={{ marginBottom: '62px' }}>
      <img src={mypageImage} alt="mypage" width="100%" />
      <Navbar />
    </div>
  );
}
