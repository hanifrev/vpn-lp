import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      'Rubik',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },

  palette: {
    primary: {
      main: '#556cd6',
      red: '#F53838'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

theme.typography.h3 = {
  fontSize: '35px',
  '@media (min-width:960px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
  },
};

export default theme;