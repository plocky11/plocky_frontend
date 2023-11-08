import { createBrowserRouter } from 'react-router-dom';
import Main from '@/routes/main/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);
