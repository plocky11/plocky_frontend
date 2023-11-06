// import { useCallback, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function GeneralLayout({ children, withAuth }) {
  // const [userProfile, setUserProfile] = useRecoilState(UserAtom);
  // const navigate = useNavigate();

  // const fetchUserProfile = useCallback(async () => {
  //   const userProfileResponse = await getCurrentUserInfo();

  //   if (!userProfileResponse) {
  //     navigate('/login');
  //     return;
  //   }

  //   setUserProfile(userProfileResponse);
  // }, []);

  // useEffect(() => {
  //   fetchUserProfile();
  // }, [children]);

  // // 인증이 필요한 페이지에서 로그인하지 않은 user는 로그인 페이지로 이동
  // if (withAuth && userProfile?.userInfo.roles.length === 0) {
  //   navigate('/login');
  //   return <></>;
  // }

  return <GeneralLayoutWrapper>{children}</GeneralLayoutWrapper>;
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
