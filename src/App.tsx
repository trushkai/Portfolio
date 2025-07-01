// portfolio/src/App.tsx
import { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getTheme } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{
          minHeight: '100vh', // обязательно!
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default'
        }}>
          <Header />
          <Box sx={{
            flex: 1,
            width: '100%',
            maxWidth: 1140,
            mx: 'auto',
            mt: 6,
            px: { xs: 2, md: 0 }
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
          <ThemeToggle
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          />
        </Box>
      </Router>
    </ThemeProvider>
  );
}
