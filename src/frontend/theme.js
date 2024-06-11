import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#335C6E',
      turquoise: '#5ACCCC',
      white: '#FFFFFF',
      steelBlue: '#335C6E',
      yellow: '#FABD33',
    },
    secondary: {
      main: '#F76434',
      orangeRed: '#F76434',
      teal: '#4AA088',
      yellowDark: '#FAAD00',
      turquoiseLight: '#CFFAFA',
      turquoiseDarkOne: '#53C2C2',
      turquoiseDarkTwo: '#28B8B8',
      pastel: '#FFE6DC',
      offwhite: '#eaebeb',
    },
  },
  typography: {
    fontFamily: 'Mulish, Arial',
  },
});

export default theme;
