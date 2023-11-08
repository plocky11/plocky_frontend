import { createBrowserRouter } from 'react-router-dom';
import Main from '@/routes/main';
import RedirectedKakao from '@/routes/auth/kakao';
import Auth from '@/routes/auth';
import GeneralLayout from './components/layout';

const routerData = [
  {
    path: '/',
    element: <Main />,
    withAuth: true,
  },
  {
    path: '/auth',
    element: <Auth />,
    withAuth: false,
  },
  {
    path: '/auth/kakao',
    element: <RedirectedKakao />,
    withAuth: false,
  },
  {
    path: '/plogging',
    element: <div>추가 예정</div>,
    withAuth: true,
  },
];

export const routers = createBrowserRouter(
  routerData.map(router => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: (
          <GeneralLayout withAuth={router.withAuth}>
            {router.element}
          </GeneralLayout>
        ),
      };
    }

    return {
      path: router.path,
      element: router.element,
    };
  }),
);
