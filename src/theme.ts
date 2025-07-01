// portfolio\src\theme.ts
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#111' },
          background: { default: '#fff', paper: '#fff' },
          appBar: { main: '#fff' },
        }
      : {
          primary: { main: '#fff' },
          background: { default: '#121212', paper: '#181818' },
          appBar: { main: '#181818' },
        }),
    text: {
      primary: mode === 'light' ? '#111' : '#fff',
      secondary: mode === 'light' ? '#888' : '#ccc',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
});

