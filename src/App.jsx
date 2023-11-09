import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routers } from '@/router';
import theme from '@/styles/theme';
import RootLayout from './styles/RootLayout';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootLayout>
        <RouterProvider router={routers} />
      </RootLayout>
    </ThemeProvider>
  );
}
