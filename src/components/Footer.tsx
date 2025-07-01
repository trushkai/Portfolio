// src/components/Footer.tsx
import { Box, Typography } from '@mui/material';
import logo from '../assets/logo.svg';
import logoWhite from '../assets/logo-white.svg';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const logoSrc = isDark ? logoWhite : logo;

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        minHeight: 54,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, md: 6 },
        borderTop: `1px solid ${isDark ? '#222' : '#eaeaea'}`,
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontSize: 16,
        position: 'relative',
        zIndex: 1,
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoSrc} alt="Logo" style={{ height: 22, marginRight: 12 }} />
        <span style={{ fontWeight: 600, color: theme.palette.text.primary }}>Trush</span>
      </Box>
      <Typography sx={{
        fontSize: 15,
        fontWeight: 400,
        opacity: .85,
        color: theme.palette.text.primary
      }}>
        © 2025 Portfolio
      </Typography>
    </Box>
  );
}
