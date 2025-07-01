// portfolio/src/pages/Experience.tsx
import { Box, Typography, Link, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import logoSinodeep from '../assets/logoSinodeep.svg';
import bol from '../assets/bol.png';
import log from '../assets/log.png';

const jobs = [
  {
    logo: logoSinodeep,
    title: "Frontend-разработка сайта экспортной компании",
    period: "Фев 2025 – Апр 2025",
    items: [
      "Разработала современный корпоративный сайт с интеграцией WordPress и динамическим API.",
      "Создала удобную обратную связь и онлайн-заявки для клиентов.",
      "Оптимизировала интерфейс под мобильные устройства.",
    ],
    link: "https://trushkai.github.io/Sinodeep/ru/",
    linkText: "Смотреть проект",
    accent: "#3cd7ff",
  },
  {
    logo: bol,
    title: 'VK Mini App "Болельщик"',
    period: "Нояб 2024 – Дек 2024",
    items: [
      "Полностью реализовала фронтенд на React + JavaScript для мини-приложения VK.",
      "Самостоятельно настроила и подключила базу данных Supabase, заполнила её актуальными спортивными данными.",
      "Написала серверный парсер на Python для автоматического вывода информации о голах игроков.",
      "Продумала архитектуру обмена данными между клиентом и сервером.",
    ],
    link: "https://vk.com/app52653513",
    linkText: "Смотреть проект",
    accent: "#2ddb7b",
  },
  {
    logo: log,
    title: 'VK Mini App "Лагуна приключений"',
    period: "Апр 2024 – Май 2025",
    items: [
      "Выполнила полный фронтенд и бэкенд для Drag & Drop игры во ВКонтакте.",
      "Спроектировала механику, логику уровней, анимации и прогресс игроков.",
      "Разработала серверную часть для хранения данных и сохранения достижений.",
      "Интегрировала VK API для авторизации и синхронизации профиля.",
    ],
    link: "https://vk.com/app53154855",
    linkText: "Смотреть проект",
    accent: "#ffcd62",
  },
];

export default function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const borderColor = isDark ? "#fff" : "#111";

  return (
    <Box sx={{
      maxWidth: 940,
      mx: "auto",
      my: { xs: 3, md: 7 },
      px: { xs: 1.5, md: 0 },
    }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 7,
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontSize: { xs: 28, md: 38 },
        }}
      >
        Мой <span style={{ fontWeight: 900 }}>Опыт</span>
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{
              scale: 1.02,
            }}
            style={{}}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                border: `2px solid ${borderColor}`,
                borderRadius: "10px",
                background: isDark ? "#181A1B" : "#fff",
                px: 4,
                py: 3,
                overflow: "visible",
                minHeight: 122,
                transition: "border-color .14s cubic-bezier(.65,.04,.35,1), box-shadow .14s, background .18s",
                // color-bordera через стили ниже (а не framer-motion)
                "&:hover": {
                  borderColor: job.accent,
                  boxShadow: `0 0 0 2px ${job.accent}55`,
                  background: isDark
                    ? `${job.accent}11`
                    : `${job.accent}05`,
                }
              }}
            >
              {/* Декоративная линия слева */}
              <Box sx={{
                position: "absolute",
                left: -14,
                top: "50%",
                transform: "translateY(-50%)",
                width: 5,
                height: 68,
                borderRadius: 4,
                bgcolor: job.accent,
                opacity: 0.85,
              }} />
              {/* Лого с акцентом */}
              <Box sx={{
                width: 56, height: 56, minWidth: 56,
                mr: 3.2,
                borderRadius: 2.3,
                bgcolor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2.5px solid ${job.accent}`,
              }}>
                <img
                  src={job.logo}
                  alt="logo"
                  style={{ width: 38, height: 38, objectFit: "contain" }}
                />
              </Box>
              {/* Контент */}
              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 20,
                    color: isDark ? "#fff" : "#111",
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    mb: 0.3,
                  }}>
                  {job.title}
                </Typography>
                <Box sx={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: 16,
                  color: isDark ? "#EDEDED" : "#232323",
                  lineHeight: 1.52,
                  mb: 0.7,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.3,
                }}>
                  {job.items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </Box>
                <Link
                  href={job.link}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    fontSize: 15.4,
                    fontWeight: 600,
                    color: job.accent,
                    textDecoration: "underline",
                    "&:hover": { color: "#2a8aff" }
                  }}
                >
                  {job.linkText}
                </Link>
              </Box>
              {/* Дата */}
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#878787",
                  fontWeight: 500,
                  minWidth: 170,
                  textAlign: "right",
                  ml: 2.5,
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  whiteSpace: "wrap"
                }}>
                {job.period}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
