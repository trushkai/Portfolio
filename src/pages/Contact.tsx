import { Box, Button, Grid, TextField, Typography, Snackbar, useTheme } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

import tg from '../assets/tg.svg';
import tgWhite from '../assets/tg-white.svg';
import vk from '../assets/vk.svg';
import vkWhite from '../assets/vk-white.svg';
import gh from '../assets/gh.svg';
import ghWhite from '../assets/gh-white.svg';
import google from '../assets/google.svg';
import googleWhite from '../assets/google-white.svg';

export default function Contact() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSnackbarOpen(true);
        e.target.reset();
    };

    const socials = [
        { icon: isDark ? tgWhite : tg, link: "https://t.me/ttrushnaya", alt: "Telegram", color: "#2db2ff" },
        { icon: isDark ? vkWhite : vk, link: "https://vk.com/ttrushnaya", alt: "VK", color: "#507299" },
        { icon: isDark ? ghWhite : gh, link: "https://github.com/Trushkai", alt: "GitHub", color: "#c9c9c9" },
        { icon: isDark ? googleWhite : google, link: "mailto:itrush244@gmail.com", alt: "Почта", color: "#ffa822" },
    ];

    return (
        <Box sx={{
            maxWidth: 1160, mx: "auto", my: 8, px: { xs: 2, md: 2 },
            fontFamily: 'Montserrat, Arial, sans-serif',
            width: "100%",
        }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Box
                        component={motion.form}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex", flexDirection: "column", gap: 2.2, maxWidth: 410, mx: { xs: "auto", md: 0 }, width: "100%",
                        }}
                    >
                        <TextField
                            required
                            label="Ваше имя"
                            name="name"
                            autoComplete="off"
                            variant="outlined"
                            sx={{
                                bgcolor: isDark ? "#222" : "#fff",
                                borderRadius: 2,
                            }}
                            InputLabelProps={{
                                style: { fontFamily: "Montserrat, Arial, sans-serif", color: isDark ? "#bbb" : "#444" }
                            }}
                            InputProps={{
                                style: { fontFamily: "Montserrat, Arial, sans-serif", color: isDark ? "#fff" : "#111" }
                            }}
                        />
                        <TextField
                            required
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="off"
                            variant="outlined"
                            sx={{
                                bgcolor: isDark ? "#222" : "#fff",
                                borderRadius: 2,
                            }}
                            InputLabelProps={{
                                style: { fontFamily: "Montserrat, Arial, sans-serif", color: isDark ? "#bbb" : "#444" }
                            }}
                            InputProps={{
                                style: { fontFamily: "Montserrat, Arial, sans-serif", color: isDark ? "#fff" : "#111" }
                            }}
                        />
                        <TextField
                            label="Ваш сайт (если есть)"
                            name="website"
                            autoComplete="off"
                            variant="outlined"
                            sx={{
                                bgcolor: isDark ? "#222" : "#fff",
                                borderRadius: 2,
                            }}
                            InputLabelProps={{
                                style: { fontFamily: "Montserrat, Arial, sans-serif", color: isDark ? "#bbb" : "#444" }
                            }}
                            InputProps={{
                                style: { fontFamily: "Montserrat, Arial, sans-serif", color: isDark ? "#fff" : "#111" }
                            }}
                        />
                        <TextField
                            required
                            label="Как я могу помочь?"
                            name="message"
                            multiline
                            minRows={4}
                            variant="outlined"
                            sx={{
                                bgcolor: isDark ? "#222" : "#fff",
                                borderRadius: 2,
                            }}
                            InputLabelProps={{
                                style: { fontFamily: "Montserrat, Arial, sans-serif", color: isDark ? "#bbb" : "#444" }
                            }}
                            InputProps={{
                                style: { fontFamily: "Montserrat, Arial, sans-serif", color: isDark ? "#fff" : "#111" }
                            }}
                        />

                        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    bgcolor: isDark ? "#fff" : "#111",
                                    color: isDark ? "#111" : "#fff",
                                    fontWeight: 700,
                                    fontSize: 18,
                                    px: 4,
                                    py: 1.2,
                                    borderRadius: 2,
                                    width: 150,
                                    textTransform: "none",
                                    fontFamily: "Montserrat",
                                    "&:hover": {
                                        bgcolor: isDark ? "#f1f1f1" : "#222",
                                        color: isDark ? "#111" : "#fff",
                                    },
                                    transition: ".13s",
                                    boxShadow: "none",
                                }}
                                component={motion.button}
                                whileTap={{ scale: 0.96 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                Связаться
                            </Button>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                {socials.map((s, i) => (
                                    <a
                                        href={s.link}
                                        key={i + (isDark ? "_dark" : "_light")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Box
                                            component={motion.div}
                                            whileHover={{
                                                scale: 1.11,
                                                boxShadow: `0 4px 18px 0 ${s.color}40`,
                                                borderColor: s.color,
                                            }}
                                            sx={{
                                                border: `2px solid ${isDark ? "#fff" : "#111"}`,
                                                borderRadius: 2,
                                                width: 46,
                                                height: 46,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "border 0.22s, box-shadow 0.22s",
                                                bgcolor: "transparent",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <img src={s.icon} alt={s.alt} width={21} />
                                        </Box>
                                    </a>
                                ))}
                            </Box>
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            ml: { xs: 0, md: 3 },
                            mt: { xs: 6, md: 0 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                            gap: 2,
                            maxWidth: 460,
                            width: "100%",
                            mx: { xs: "auto", md: 0 },
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: 26, md: 36 },
                                fontFamily: 'Montserrat, Arial, sans-serif',
                                lineHeight: 1.1,
                                mb: 2,
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            Давайте{" "}
                            <Box component="span"
                                sx={{
                                    display: "inline-block",
                                    px: 1.2,
                                    bgcolor: isDark ? "#fff" : "#111",
                                    color: isDark ? "#111" : "#fff",
                                    fontWeight: 900,
                                    borderRadius: 2,
                                    fontSize: { xs: 28, md: 36 }
                                }}>
                                пообщаемся
                            </Box>{" "}
                            <span style={{
                                fontWeight: 400,
                                fontSize: "92%",
                                marginLeft: 5,
                                opacity: .66,
                                verticalAlign: "middle"
                            }}></span>
                            <br />
                            вдруг получится <span style={{ fontWeight: 900 }}>классный проект!</span>
                        </Typography>
                        <Typography sx={{
                            color: "#8A8A8A",
                            fontSize: 16.2,
                            fontFamily: 'Montserrat, Arial, sans-serif',
                            fontWeight: 400,
                            maxWidth: 410,
                            mb: 1.5,
                            textAlign: { xs: "center", md: "left" },
                        }}>
                            Открыта к новым предложениям, задачам и интересным идеям. Если хотите обсудить проект — просто напишите, я всегда отвечаю быстро!
                        </Typography>
                        <Typography sx={{
                            fontWeight: 700,
                            fontSize: 20,
                            fontFamily: 'Montserrat, Arial, sans-serif',
                            textAlign: { xs: "center", md: "left" },
                            mt: 1.2
                        }}>
                            itrush244@gmail.com
                        </Typography>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: 18,
                            fontFamily: 'Montserrat, Arial, sans-serif',
                            textAlign: { xs: "center", md: "left" }
                        }}>
                            +7 (908) 052-44-94
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2400}
                onClose={() => setSnackbarOpen(false)}
                message="Спасибо! Ваше сообщение отправлено!"
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            />
        </Box>
    );
}
