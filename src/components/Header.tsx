import { AppBar, Box, Toolbar, Typography, Avatar } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#f9fafe', color: '#000', px: 3, py: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Task Manager</Typography>
        <Avatar alt="User" src="/avatar.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
