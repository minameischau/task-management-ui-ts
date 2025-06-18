import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const TaskSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string(),
});

export const TaskForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      validationSchema={TaskSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          addTask({
            id: uuidv4(),
            title: values.title,
            description: values.description,
            completed: false,
          })
        );
        resetForm();
      }}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              error={!!errors.title && touched.title}
              helperText={touched.title && errors.title}
            />
            <TextField
              label="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              multiline
              rows={3}
            />
            <Button variant="contained" type="submit">
              Add Task
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};