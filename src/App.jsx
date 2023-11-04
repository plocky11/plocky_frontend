import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
