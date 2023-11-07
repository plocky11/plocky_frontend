import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from '@/router';
import theme from '@/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
