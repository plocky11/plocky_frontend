import React, { useState } from 'react';
import styled from 'styled-components';
import itemStore from '@/assets/sample/itemStore.png';
import myItem from '@/assets/sample/myItem.png';
import Navbar from '../../components/navigationBar';

const Clickable = styled.div`
  margin-bottom: 62px;
`;

export default function Item() {
  const [showItemStore, setShowItemStore] = useState(true);

  const handleClick = () => {
    setShowItemStore(prev => !prev);
  };
  return (
    <>
      <Clickable onClick={handleClick}>
        <img
          src={showItemStore ? itemStore : myItem}
          alt={showItemStore ? 'itemStore' : 'myItem'}
          width="100%"
        />
      </Clickable>
      <Navbar />
    </>
  );
}
