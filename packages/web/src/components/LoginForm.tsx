import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BLACK_800, BLUE_700, GREEN_400 } from '../utils/colors';

interface ILoginForm {
  email: {
    value: string;
    error: string;
  };
  password: {
    value: string;
    error: string;
  };
  handleEmail: (value: string) => void;
  handlePassword: (value: string) => void;
  handleLogin: (options?: {
    variables: { email: string; password: string };
  }) => void;
  handleRegister: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    height: '60%',
    justifyContent: 'space-around',
    border: `5px solid ${BLACK_800}`,
    padding: theme.spacing(1, 15),
    backgroundColor: 'white',
    borderRadius: theme.spacing(10),
    '@media (max-width: 800px)': {
      padding: theme.spacing(1, 10),
    },
    '@media (max-width: 500px)': {
      padding: theme.spacing(1, 5),
    },
  },

  button: {
    height: '15%',
    color: BLACK_800,
    fontWeight: 600,
    width: '40%',
    '@media (max-width: 800px)': {
      width: '50%',
    },
    '@media (max-width: 500px)': {
      width: '70%',
    },
  },

  input: {
    height: '20%',
    width: '80%',

    '@media (max-width: 800px)': {
      width: '90%',
    },

    '& label': {
      fontSize: '30%',
      '@media (max-width: 800px)': {
        fontSize: '50%',
      },
    },
    '& input:invalid:hover + fieldset': {
      borderColor: BLUE_700,

      borderWidth: 2,
    },
    '& input + fieldset, label': {
      borderColor: BLACK_800,
      color: BLACK_800,
      borderWidth: 2,
    },
    '& input:hover + fieldset, label': {
      borderColor: GREEN_400,
      color: BLACK_800,
      borderWidth: 2,
    },

    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
}));

const LoginForm: React.FC<ILoginForm> = ({
  email,
  password,
  handleEmail,
  handlePassword,
  handleLogin,
  handleRegister,
}) => {
  const classes = useStyles();

  const emailError = Boolean(email.error);

  const passwordError = Boolean(password.error);

  const emailFilled = Boolean(email.value);

  const passwordFilled = Boolean(password.value);

  return (
    <FormControl component="form" className={classes.root}>
      <TextField
        className={classes.input}
        error={emailError}
        helperText={email.error}
        id="validation-outlined-input"
        label="Email"
        onChange={(e) => handleEmail(e.target.value)}
        variant="outlined"
        size="small"
        required
        margin="normal"
        color="primary"
      />
      <TextField
        className={classes.input}
        margin="normal"
        size="small"
        error={passwordError}
        helperText={password.error}
        id="validation-outlined-input"
        label="Senha"
        onChange={(e) => handlePassword(e.target.value)}
        type="password"
        variant="outlined"
        required
      />
      <Button
        color="primary"
        className={classes.button}
        disabled={
          emailError || passwordError || !emailFilled || !passwordFilled
        }
        onClick={() =>
          handleLogin({
            variables: { email: email.value, password: password.value },
          })
        }
        variant="contained"
      >
        Login
      </Button>
      <Button
        color="secondary"
        className={classes.button}
        onClick={handleRegister}
        variant="contained"
      >
        Novo Usuário
      </Button>
    </FormControl>
  );
};

export default LoginForm;
