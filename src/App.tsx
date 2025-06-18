import { Container, Typography } from '@mui/material';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './features/tasks/TaskList';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" my={4}>Task Manager</Typography>
      <TaskForm />
      <TaskList />
    </Container>
  );
}

export default App;