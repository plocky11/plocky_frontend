import { createBrowserRouter } from 'react-router-dom';
import Main from '@/routes/main';
import RedirectedKakao from '@/routes/auth/kakao';
import Auth from '@/routes/auth';
import GeneralLayout from '@/components/layout';
import Plogging from '@/routes/plogging/index';
import EndPlogging from './routes/endPlogging';

const routerData = [
  {
    path: '/',
    element: <Main />,
    withAuth: false,
  },
  {
    path: '/login',
    element: <Auth />,
    withAuth: false,
  },
  {
    path: '/login/kakao',
    element: <RedirectedKakao />,
    withAuth: false,
  },
  {
    path: '/plogging',
    element: <Plogging />,
    withAuth: false,
  },
  {
    path: '/endPlogging',
    element: <EndPlogging />,
    withAuth: false,
  },
];

export const routers = createBrowserRouter(routerData);
