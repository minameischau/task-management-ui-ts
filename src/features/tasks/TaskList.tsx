import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { toggleComplete } from './taskSlice';
import { Checkbox, List, ListItem, ListItemText } from '@mui/material';

export const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.list);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}
          />
          <ListItemText
            primary={task.title}
            secondary={task.description}
            sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          />
        </ListItem>
      ))}
    </List>
  );
};