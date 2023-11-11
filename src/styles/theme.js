const windowSize = {
  small: 'screen and (max-width: "600px")',
  base: 'screen and (max-width: "768px")',
  large: 'screen and (max-width: "1024px")',
};

const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
};

const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const palette = {
  white: '#FFFFFF',
  black: '#000000',
  brown: {
    light: '#f4ede7',
    light_hover: '#efe4db',
    light_active: '#ddc8b4',
    normal: '#914d0d',
    normal_hover: '#83450c',
    normal_active: '#743e0a',
    dark: '#6d3a0a',
    dark_hover: '#572e08',
    dark_active: '#412306',
    darker: '#331b05',
  },
  green: {
    main: '#B3D124',
    light: '#42d400',
    dark: '#619d46',
    darker: '#2a6d0d',
  },
};

const theme = {
  windowSize,
  fontSize,
  fontWeight,
  palette,
};

export default theme;
