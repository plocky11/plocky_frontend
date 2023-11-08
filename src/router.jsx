import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '@/routes/main/index';
import Auth from '@/routes/auth/index';
import Plogging from './routes/plogging';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/plogging',
    element: <Plogging />,
  },
]);
