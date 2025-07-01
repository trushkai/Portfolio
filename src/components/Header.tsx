// src/components/Header.tsx
import { AppBar, Toolbar, Button, Box, Stack, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import resumeIcon from '../assets/resume-icon.svg';
import logo from '../assets/logo.svg';
import logoWhite from '../assets/logo-white.svg';
import { useTheme } from '@mui/material/styles';
import resumeIconBlack from '../assets/resume-icon-black.svg';
import { useState } from 'react';

const nav = [
    { title: 'Обо Мне', path: '/' },
    { title: 'Навыки', path: '/skills' },
    { title: 'Проекты', path: '/projects' },
    { title: 'Контактная Форма', path: '/contact' },
];

export default function Header() {
    const location = useLocation();
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const logoSrc = theme.palette.mode === 'light' ? logo : logoWhite;
    const resumeIconSrc = theme.palette.mode === 'light' ? resumeIcon : resumeIconBlack;

    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{
                boxShadow: 'none',
                background: theme.palette.background.paper,
                borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#eaeaea' : '#222'}`,
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'center',
                    background: theme.palette.background.paper,
                    minHeight: 72,
                    px: 0,
                }}
            >
                <Box sx={{
                    maxWidth: 1140,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: { xs: 2, md: 0 }
                }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logoSrc} alt="logo" style={{ height: 32, marginRight: 12 }} />
                        <span style={{
                            fontWeight: 700,
                            letterSpacing: '1px',
                            fontSize: 20,
                            color: theme.palette.text.primary
                        }}>Trush</span>
                    </Box>
                    {/* Десктопное меню */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 2
                        }}>
                        <Stack direction="row" spacing={2}>
                            {nav.map(link => (
                                <Button
                                    key={link.title}
                                    component={Link}
                                    to={link.path}
                                    sx={{
                                        color: location.pathname === link.path
                                            ? theme.palette.text.primary
                                            : theme.palette.text.secondary,
                                        fontWeight: 500,
                                        fontSize: 16,
                                        background: 'none',
                                        boxShadow: 'none',
                                        textTransform: 'none',
                                        minWidth: 0,
                                        px: 2,
                                    }}
                                    disableRipple
                                >
                                    {link.title}
                                </Button>
                            ))}
                        </Stack>
                        <Button
                            variant="contained"
                            href="/assets/Trush_Ilona_Resume.pdf"
                            target="_blank"
                            sx={{
                                background: theme.palette.text.primary,
                                color: theme.palette.background.paper,
                                borderRadius: 2,
                                fontWeight: 600,
                                px: 3,
                                textTransform: 'none',
                                fontSize: 16,
                                boxShadow: 'none',
                                ml: 3,
                                '&:hover': {
                                    background: theme.palette.mode === 'light' ? '#333' : '#fff',
                                    color: theme.palette.mode === 'light' ? '#fff' : '#111',
                                },
                            }}
                            startIcon={<img src={resumeIconSrc} alt="resume" style={{ width: 18, marginRight: 6 }} />}
                        >
                            Резюме
                        </Button>
                    </Box>
                    {/* Мобильное меню */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}
                            sx={{ ml: 1 }}
                        >
                            <MenuIcon sx={{ fontSize: 32, color: theme.palette.text.primary }} />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                            PaperProps={{
                                sx: {
                                    width: 260,
                                    background: theme.palette.background.paper,
                                    color: theme.palette.text.primary
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    px: 2,
                                    py: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1
                                }}
                            >
                                {nav.map(link => (
                                    <ListItem key={link.title} disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to={link.path}
                                            selected={location.pathname === link.path}
                                            onClick={() => setDrawerOpen(false)}
                                        >
                                            <ListItemText
                                                primary={link.title}
                                                primaryTypographyProps={{
                                                    fontWeight: 600,
                                                    fontSize: 17
                                                }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        href="/assets/Trush_Ilona_Resume.pdf"
                                        target="_blank"
                                        sx={{
                                            background: theme.palette.text.primary,
                                            color: theme.palette.background.paper,
                                            borderRadius: 2,
                                            fontWeight: 700,
                                            fontSize: 16,
                                            textTransform: 'none',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                background: theme.palette.mode === 'light' ? '#333' : '#fff',
                                                color: theme.palette.mode === 'light' ? '#fff' : '#111',
                                            },
                                        }}
                                        startIcon={<img src={resumeIconSrc} alt="resume" style={{ width: 19, marginRight: 6 }} />}
                                    >
                                        Резюме
                                    </Button>
                                </Box>
                            </Box>
                        </Drawer>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
