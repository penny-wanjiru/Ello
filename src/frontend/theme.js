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
    h1: {
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '1.4rem',
      },
    },
    h5: {
      fontSize: '1.375rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    // body1: {
    //   fontSize: '1rem',
    //   '@media (min-width:600px)': {
    //     fontSize: '1.25rem',
    //   },
    //   '@media (min-width:960px)': {
    //     fontSize: '1.5rem',
    //   },
    //   '@media (min-width:1280px)': {
    //     fontSize: '1.75rem',
    //   },
    // },
  },
  
});

export default theme;
