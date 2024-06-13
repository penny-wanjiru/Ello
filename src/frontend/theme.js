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
      '@media (min-width:1280px) and (max-width:1920px)': {
        fontSize: '2.9rem',
      },
      '@media (min-width:1920px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
        fontWeight: '600',
      },
      '@media (min-width:960px)': {
        fontSize: '1.25rem',
        fontWeight: '600',
      },
      '@media (min-width:1280px) and (max-width:1920px)': {
        fontSize: '1rem',
        fontWeight: '600',
      },

      '@media (min-width:1920px)': {
        fontSize: '1.2rem',
        fontWeight: '600',
      },
    },
    h5: {
      fontSize: '1.375rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
        fontWeight: '600',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
        fontWeight: '600',
      },
      '@media (min-width:1280px) and (max-width:1920px)': {
        fontSize: '1rem',
        fontWeight: '600',
      },

      '@media (min-width:1920px)': {
        fontSize: '1.4rem',
        fontWeight: '600',
      },
    },

    subtitle1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.6rem',
      },
      '@media (min-width:960px)': {
        fontSize: '0.6rem',
      },
      '@media (min-width:1280px) and (max-width:1920px)': {
        fontSize: '0.9rem',
      },
      '@media (min-width:1920px)': {
        fontSize: '1rem',
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
