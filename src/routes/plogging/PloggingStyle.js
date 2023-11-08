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

export const ContentWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 62px;
`;
export const LogoImage = styled.div``;

export const GoPlogging = styled.div`
  drop-shadow(0px 4px 8px 0px rgba(42, 0, 0, 0.1));
`;
