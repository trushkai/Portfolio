import { Grid, Typography, Box, useMediaQuery, Fade } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import myphoto from '../assets/myphoto.svg';
import myphotoCircle from '../assets/myphoto-circle.svg';
import myphoto2 from '../assets/myphoto2.svg';
import myphoto2Circle from '../assets/myphoto2-circle.svg';

import tgIcon from '../assets/tg.svg';
import tgIconWhite from '../assets/tg-white.svg';
import ghIcon from '../assets/gh.svg';
import ghIconWhite from '../assets/gh-white.svg';
import googleIcon from '../assets/google.svg';
import googleIconWhite from '../assets/google-white.svg';
import vkIcon from '../assets/vk.svg';
import vkIconWhite from '../assets/vk-white.svg';

export default function Home() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const isMobile = useMediaQuery('(max-width:900px)');

    // Фото: true - основное, false - второе
    const [mainPhoto, setMainPhoto] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setMainPhoto(p => !p), 10000);
        return () => clearInterval(interval);
    }, []);

    // Показывать круглое или обычное фото и какую версию
    const photo = isMobile
        ? (mainPhoto ? myphotoCircle : myphoto2Circle)
        : (mainPhoto ? myphoto : myphoto2);

    // Соцсети
    const tg = isDark ? tgIconWhite : tgIcon;
    const gh = isDark ? ghIconWhite : ghIcon;
    const google = isDark ? googleIconWhite : googleIcon;
    const vk = isDark ? vkIconWhite : vkIcon;

    const textMain = theme.palette.text.primary;
    const textSecondary = theme.palette.text.secondary;

    const quotes = [
        "Планы на спринт: выжить.",
        "Frontend с любовью к деталям.",
        "React спасёт мир!",
        "Котики одобряют этот проект 🐾",
        "Ctrl+Z — лучший друг.",
        "Я не ленивый, я автоматизирую.",
        "Если бы не айти, я бы была котиком.",
        "Пиксель в пиксель — состояние души.",
        "Вдохновляюсь мемами и кофе.",
        "Не баг — фича, не фича — дизайн.",
        "Нет ошибок — нет веселья.",
        "Здесь могла быть ваша верстка.",
        "CSS — единственная магия, в которую я верю.",
        "UI должен быть как кот: хочется трогать.",
        "Деплой без паники и кофе невозможен.",
        "if (life) { coffee(); }"
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: { xs: 'auto', md: '75vh' },
                flexDirection: { xs: 'column-reverse', md: 'row' }
            }}
        >
            {/* Левая колонка: текст */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    px: { xs: 2, md: 6 },
                    pt: { xs: 2, md: 0 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' }
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ width: '100%' }}
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            fontFamily: 'Montserrat, Arial, sans-serif',
                            fontSize: { xs: 30, md: 42 },
                            mb: 2,
                            color: textMain,
                        }}
                    >
                        Привет, я <span style={{
                            fontWeight: 800,
                            letterSpacing: 1,
                            color: textMain,
                            fontFamily: 'Montserrat, Arial, sans-serif',
                        }}>Илона Труш.</span>
                    </Typography>
                    <Box
                        sx={{
                            height: 3,
                            maxWidth: 1000,
                            width: '100%',
                            mb: 3,
                            mt: -1,
                            borderRadius: 4,
                            background: 'linear-gradient(90deg, #3cd7ff, #2a8aff, #64ffe0, #ff87cf, #3cd7ff 80%)',
                            backgroundSize: '400% 100%',
                            animation: 'shimmerMove 2.8s linear infinite',
                        }}
                        className="animated-bar"
                    />
                    <style>
                        {`
                        .animated-bar {
                            background: linear-gradient(90deg, #3cd7ff, #2a8aff, #64ffe0, #ff87cf, #3cd7ff 80%);
                            background-size: 400% 100%;
                            animation: shimmerMove 2.8s linear infinite;
                            border-radius: 4px;
                        }
                        @keyframes shimmerMove {
                            0% { background-position: 0% 50%; }
                            100% { background-position: 100% 50%; }
                        }
                        `}
                    </style>
                    <Typography
                        sx={{
                            fontSize: { xs: 22, md: 42 },
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            color: textMain,
                            fontFamily: 'Montserrat, Arial, sans-serif',
                        }}
                    >
                        Frontend Developer &<br />Web Designer
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: textSecondary,
                        mb: 3,
                        maxWidth: 500,
                        fontFamily: 'Montserrat, Arial, sans-serif',
                        fontWeight: 400
                    }}>
                        Создаю сайты и интерфейсы, которые работают, радуют глаз и не заставляют пользователей страдать.<br />
                        Люблю совмещать эстетику и технологичность: верстаю адаптивно, пишу чистый код, а в душе живёт дизайнер, который знает, что такое баланс между красотой и удобством.<br />
                        В арсенале — React, TypeScript, JavaScript, немного C# и SQL для Fullstack-задач.<br />
                        Я здесь, чтобы ваши идеи не остались просто идеями.
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        mb: 4,
                        justifyContent: { xs: 'center', md: 'flex-start' }
                    }}>
                        {[
                            { icon: tg, alt: "Telegram", link: "https://t.me/ttrushnaya", color: "#2db2ff" },
                            { icon: vk, alt: "VK", link: "https://vk.com/ttrushnaya", color: "#507299" },
                            { icon: gh, alt: "GitHub", link: "https://github.com/Trushkai", color: "#c9c9c9" },
                            { icon: google, alt: "Почта", link: "mailto:itrush244@gmail.com", color: "#ffa822" },
                        ].map((s, i) => (
                            <a href={s.link} key={i + (isDark ? "_dark" : "_light")} target="_blank" rel="noopener noreferrer">
                                <Box
                                    component={motion.div}
                                    whileHover={{
                                        scale: 1.11,
                                        boxShadow: `0 4px 16px 0 ${s.color}40`,
                                        borderColor: s.color,
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    sx={{
                                        border: "2px solid",
                                        borderColor: isDark ? "#fff" : "#111",
                                        borderRadius: 2,
                                        width: 56,
                                        height: 56,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'border-color 0.22s, box-shadow 0.22s, transform 0.14s',
                                        bgcolor: "transparent",
                                        cursor: "pointer",
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <img src={s.icon} alt={s.alt} width={22} />
                                </Box>
                            </a>
                        ))}
                    </Box>

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.7 }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            mt: 1,
                            mb: 1,
                        }}
                    >
                        {/* Звёздочка SVG */}
                        <motion.svg
                            width="28"
                            height="28"
                            viewBox="0 0 20 20"
                            fill="#3cd7ff"
                            style={{ marginRight: 12 }}
                            animate={{
                                rotate: [0, 16, -12, 0],
                                scale: [1, 1.2, 1, 1.15, 1]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            }}
                        >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" />
                        </motion.svg>
                        {/* Сам бейдж */}
                        <Box
                            sx={{
                                bgcolor: theme.palette.mode === 'dark' ? '#223851' : '#f1fbff',
                                color: theme.palette.mode === 'dark' ? '#fff' : '#116199',
                                px: 2.5,
                                py: 1.3,
                                borderRadius: 3,
                                boxShadow: '0 3px 18px 0 rgba(60,215,255,0.12)',
                                fontWeight: 600,
                                fontSize: 18,
                                display: 'inline-block',
                                letterSpacing: 0.1,
                                position: 'relative',
                                border: `1.5px solid #3cd7ff`,
                                fontFamily: 'Montserrat, Arial, sans-serif',
                                transition: 'background 0.5s, color 0.5s',
                                minWidth: 140,
                                textAlign: 'center',
                                textShadow: '0 2px 8px rgba(44,175,200,0.08)',
                            }}
                        >
                            {quote}
                        </Box>
                    </Box>
                </motion.div>
            </Grid>
            {/* Правая колонка: фото */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pb: { xs: 3, md: 0 },
                    pt: { xs: 4, md: 0 }
                }}
            >
                <Fade in={true} key={photo} timeout={1000}>
                    <div
                        style={{
                            borderRadius: isMobile ? '50%' : '18px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 32px 0 rgba(40,40,40,0.10)',
                            transition: 'border-radius 0.5s'
                        }}
                    >
                        <img
                            src={photo}
                            alt="Илона Труш"
                            style={{
                                maxWidth: isMobile ? 220 : 340,
                                width: '100%',
                                height: 'auto',
                                borderRadius: isMobile ? '50%' : '18px',
                                display: 'block',
                                transition: 'border-radius 0.5s, max-width 0.5s'
                            }}
                        />
                    </div>
                </Fade>
            </Grid>
        </Grid>
    );
}
