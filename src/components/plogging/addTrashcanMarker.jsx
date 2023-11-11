import React from 'react';
import styled from 'styled-components';

const MarkerWrapper = styled.div`
  width: 95%;
  height: 3rem;
  flex-shrink: 0;
  color: #fdfff5;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 1rem;
  background: ${({ theme }) => theme.palette.green.light};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
`;
function AddTrashcanMarker() {
  return <MarkerWrapper>마커를 추가할 위치를 클릭해주세요</MarkerWrapper>;
}

export default AddTrashcanMarker;
