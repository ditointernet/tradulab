import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';

const FormikTextField: React.FC<TextFieldProps> = (props) => {
  const [field, meta] = useField(props as never);

  return (
    <TextField
      {...field}
      {...props}
      error={!!meta.error && meta.touched}
      helperText={meta.error}
    />
  );
};

export default FormikTextField;
