import { Box, Typography, useTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Импорт всех svg
import reactSvg from '../assets/skills/react.svg';
import reactSvgWhite from '../assets/skills/react-white.svg';
import tsSvg from '../assets/skills/typescript.svg';
import tsSvgWhite from '../assets/skills/typescript-white.svg';
import jsSvg from '../assets/skills/javascript.svg';
import jsSvgWhite from '../assets/skills/javascript-white.svg';
import htmlSvg from '../assets/skills/html5.svg';
import htmlSvgWhite from '../assets/skills/html5-white.svg';
import cssSvg from '../assets/skills/css3.svg';
import cssSvgWhite from '../assets/skills/css3-white.svg';
import muiSvg from '../assets/skills/mui.svg';
import muiSvgWhite from '../assets/skills/mui-white.svg';
import figmaSvg from '../assets/skills/figma.svg';
import figmaSvgWhite from '../assets/skills/figma-white.svg';
import gitSvg from '../assets/skills/git.svg';
import gitSvgWhite from '../assets/skills/git-white.svg';
import sqlSvg from '../assets/skills/sql.svg';
import sqlSvgWhite from '../assets/skills/sql-white.svg';
import csharpSvg from '../assets/skills/csharp.svg';
import csharpSvgWhite from '../assets/skills/csharp-white.svg';

const skills = [
  { title: "React",        icon: reactSvg,   iconWhite: reactSvgWhite },
  { title: "TypeScript",   icon: tsSvg,      iconWhite: tsSvgWhite },
  { title: "JavaScript",   icon: jsSvg,      iconWhite: jsSvgWhite },
  { title: "HTML5",        icon: htmlSvg,    iconWhite: htmlSvgWhite },
  { title: "CSS3",         icon: cssSvg,     iconWhite: cssSvgWhite },
  { title: "MUI",          icon: muiSvg,     iconWhite: muiSvgWhite },
  { title: "Figma",        icon: figmaSvg,   iconWhite: figmaSvgWhite },
  { title: "Git",          icon: gitSvg,     iconWhite: gitSvgWhite },
  { title: "SQL",          icon: sqlSvg,     iconWhite: sqlSvgWhite },
  { title: "C#",           icon: csharpSvg,  iconWhite: csharpSvgWhite },
];

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ maxWidth: 1140, mx: 'auto', my: 8, px: 2 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 7,
          fontFamily: 'Montserrat, Arial, sans-serif',
          color: theme.palette.text.primary,
          letterSpacing: 0.5,
          fontSize: { xs: 28, md: 38 }
        }}
      >
        Мои <span style={{ fontWeight: 900 }}>Навыки</span>
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        {skills.map((item, idx) => (
          <Grid
            item
            key={item.title + (isDark ? "_d" : "_l")}
            xs={12} sm={6} md={4} lg={3} xl={2.4}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <SkillCard
              icon={item.icon}
              iconWhite={item.iconWhite}
              title={item.title}
              isDark={isDark}
              idx={idx}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// Компонент карточки навыка
function SkillCard({ icon, iconWhite, title, isDark, idx }: any) {
  const [hovered, setHovered] = useState(false);

  const border = isDark ? '#fff' : '#111';
  const bg = isDark
    ? (hovered ? '#fff' : '#181818')
    : (hovered ? '#111' : '#fff');
  const iconToShow = isDark
    ? (hovered ? icon : iconWhite)
    : (hovered ? iconWhite : icon);
  const textColor = isDark
    ? (hovered ? '#181818' : '#fff')
    : (hovered ? '#fff' : '#111');

  const glowColors: Record<string, string> = {
    "React": "#61dafb",
    "TypeScript": "#2979ff",
    "JavaScript": "#ffe23c",
    "HTML5": "#ef6b23",
    "CSS3": "#0ea5e9",
    "MUI": "#3c7afe",
    "Figma": "#9e62f8",
    "Git": "#fa7241",
    "SQL": "#009688",
    "C#": "#9158ea"
  };

  const glowColor = glowColors[title] || "#3cd7ff";

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 0 12px 0 ${glowColor}99, 0 8px 28px 0 ${glowColor}1a`
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.58,
        delay: idx * 0.09,
        type: "spring"
      }}
      style={{
        width: 150,
        height: 150,
        border: `2.3px solid ${border}`,
        borderRadius: 13,
        background: bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'border .19s, background .17s, box-shadow .2s'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 54,
          width: 54,
          mb: 1.3,
          filter: hovered ? `drop-shadow(0 0 18px ${glowColor}66)` : "none",
          transition: 'filter .22s'
        }}
      >
        <img
          src={iconToShow}
          alt={title}
          style={{
            width: 44,
            height: 44,
            objectFit: 'contain'
          }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontWeight: 700,
          fontSize: 18,
          color: textColor,
          textAlign: 'center',
          letterSpacing: 0.01,
          transition: 'color .17s',
        }}
      >
        {title}
      </Typography>
    </motion.div>
  );
}
