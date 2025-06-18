import { Container, Typography } from '@mui/material';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './features/tasks/TaskList';
import { Box } from '@mui/material';
import Sidebar from './components/SideBar';
import Header from './components/Header';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f9fafe' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ p: 3 }}>
          <TaskForm />
          <TaskList />
        </Box>
      </Box>
    </Box>
  );
}

export default App;