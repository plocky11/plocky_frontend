import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserProvider } from '@/api/context/userContext';

export default function GeneralLayout({ children, withAuth }) {
  const navigate = useNavigate();

  // 인증이 필요한 페이지에서 로그인하지 않은 user는 로그인 페이지로 이동
  if (withAuth && !localStorage.getItem('access_token')) {
    navigate('/login');
    return <>403: 권한 없음</>;
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

  width: 390px;
  margin: 0 auto;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
