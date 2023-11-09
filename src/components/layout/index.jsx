import { redirect } from 'react-router-dom';
import { UserProvider } from '@/api/context/userContext';

export default function GeneralLayout({ children, withAuth }) {
  // 인증이 필요한 페이지에서 로그인하지 않은 user는 로그인 페이지로 이동
  console.log(withAuth);
  if (withAuth && !localStorage.getItem('access_token')) {
    console.log('권한이 없습니다. 로그인 페이지로 이동합니다.');
    redirect('/login');
  }

  return <UserProvider>{children}</UserProvider>;
}
