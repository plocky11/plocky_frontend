import { createBrowserRouter } from 'react-router-dom';
import Main from '@/routes/main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);
