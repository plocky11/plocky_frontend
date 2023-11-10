import { styled } from 'styled-components';

export default function RootLayout({ children }) {
  return <RootLayoutWrapper>{children}</RootLayoutWrapper>;
}

const RootLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-family: 'LINE Seed Sans KR', sans-serif;
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
