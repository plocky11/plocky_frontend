import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  /* 미디어 쿼리 적용 */
  /* pc화면에서 너비를 390로 고정합니다*/
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Top = styled.div``;
export const Bottom = styled.div``;
export const ContentWrapper = styled.div`
  margin: 0 auto;
`;
export const LogoImage = styled.div`
  width: 195px;
`;
export const Caption = styled.div`
  margin-top: 9px;
  text-align: left;
  margin-left: 10px;
`;
