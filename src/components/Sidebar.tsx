import { Box, IconButton, Stack } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 80,
        bgcolor: '#fff',
        borderRight: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        gap: 2,
      }}
    >
      <Box sx={{ mb: 3 }}>
        <img src="/vite.svg" alt="Logo" width={36} />
      </Box>

      <Stack spacing={2}>
        <IconButton><GridViewRoundedIcon /></IconButton>
        <IconButton><AssignmentIcon /></IconButton>
        <IconButton><SettingsIcon /></IconButton>
      </Stack>
    </Box>
  );
};

export default Sidebar;
