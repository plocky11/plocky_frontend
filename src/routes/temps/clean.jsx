import React from 'react';
import clean from '@/assets/sample/clean.png';
import Navbar from '../../components/navigationBar';

export default function Clean() {
  return (
    <div style={{ marginBottom: '62px' }}>
      <img src={clean} alt="mypage" width="100%" />
      <Navbar />
    </div>
  );
}
