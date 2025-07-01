// portfolio\src\components\ThemeToggle.tsx
import { Fab } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function ThemeToggle({ onClick }: { onClick: () => void }) {
  return (
    <Fab
      color="primary"
      size="small"
      sx={{ position: 'fixed', bottom: 60, right: 16, zIndex: 1300 }}
      onClick={onClick}
    >
      <Brightness4Icon />
    </Fab>
  );
}

