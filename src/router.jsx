import { createBrowserRouter } from 'react-router-dom';
import Main from '@/routes/main';
import RedirectedKakao from '@/routes/auth/kakao';
import Auth from '@/routes/auth';
import GeneralLayout from '@/components/layout';
import Plogging from '@/routes/plogging/index';
import EndPlogging from './routes/endPlogging';
import MyPage from './routes/temps/mypage';
import Item from './routes/temps/item';
import Clean from './routes/temps/clean';

import { PloggingProvider } from './api/context/ploggingContext';

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
    withPlogging: true,
  },
  {
    path: '/endPlogging',
    element: <EndPlogging />,
    withAuth: false,
  },
  {
    path: '/mypage',
    element: <MyPage />,
    withAuth: false,
  },
  {
    path: '/item',
    element: <Item />,
    withAuth: false,
  },
  {
    path: '/neighborhood',
    element: <Clean />,
    withAuth: false,
  },
];

export const routers = createBrowserRouter(
  routerData.map(router => {
    if (router.withPlogging) {
      return {
        path: router.path,
        element: <PloggingProvider>{router.element}</PloggingProvider>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  }),
);
