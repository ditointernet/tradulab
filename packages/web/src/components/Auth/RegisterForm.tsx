import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextFieldProps,
} from '@material-ui/core';
import {
  Assignment,
  AssignmentInd,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { FormikProps } from 'formik';
import { ApolloError } from '@apollo/client';

import AuthPageTemplate from './PageTemplate';
import FormikTextField from '../FormikTextField';
import { RegisterVariables } from '../../pages/Register';

type RegisterFormProps = FormikProps<RegisterVariables> & {
  isLoading: boolean;
  passwordVisibility: boolean;
  togglePasswordVisibility: () => void;
  registerError?: ApolloError;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  handleSubmit,
  togglePasswordVisibility,
  passwordVisibility,
  isSubmitting,
  isLoading,
  registerError,
}) => {
  const passwordCommonProps: TextFieldProps = {
    type: passwordVisibility ? 'text' : 'password',
    variant: 'outlined',
    margin: 'normal',
    required: true,
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={togglePasswordVisibility}
            onMouseDown={(e) => e.preventDefault()}
          >
            {passwordVisibility ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    },
  };

  return (
    <AuthPageTemplate title="Register" isLoading={isLoading}>
      <FormControl fullWidth component="form" onSubmit={handleSubmit}>
        <FormikTextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Define your account's email address.."
          variant="outlined"
          required
        />
        <FormikTextField
          label="Password"
          name="password"
          autoComplete="new-password"
          placeholder="Define your account's password.."
          {...passwordCommonProps}
        />
        <FormikTextField
          label="Confirm your password"
          name="passwordConfirmation"
          autoComplete="new-password"
          placeholder="Confirm your account's password.."
          {...passwordCommonProps}
        />
        <FormikTextField
          label="Username"
          name="username"
          autoComplete="nickname"
          placeholder="Define your account's unique username.."
          variant="outlined"
          margin="normal"
          required
        />
        <FormikTextField
          label="Display Name"
          name="displayName"
          autoComplete="given-name"
          placeholder="Define your account's display name.."
          variant="outlined"
          margin="normal"
          required
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          startIcon={<Assignment />}
        >
          Register
        </Button>
        &nbsp;
        <Button
          component={Link}
          to="../login"
          color="secondary"
          size="large"
          startIcon={<AssignmentInd />}
        >
          Login
        </Button>
        {!!registerError && registerError.message}
      </FormControl>
    </AuthPageTemplate>
  );
};

export default RegisterForm;
