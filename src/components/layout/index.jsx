import styled from 'styled-components';
import { redirect } from 'react-router-dom';
import { UserProvider } from '@/api/context/userContext';

export default function GeneralLayout({ children, withAuth }) {
  // 인증이 필요한 페이지에서 로그인하지 않은 user는 로그인 페이지로 이동
  if (withAuth && !localStorage.getItem('access_token')) {
    redirect('/login');
  }

  return (
    <UserProvider>
      <GeneralLayoutWrapper>{children}</GeneralLayoutWrapper>
    </UserProvider>
  );
}

const GeneralLayoutWrapper = styled.div`
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
