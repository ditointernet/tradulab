import React from 'react';

import { Button, createStyles, Paper, Typography, TextField, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(20, 0, 0, 20),
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      height: theme.spacing(45),
      padding: theme.spacing(3, 3),
      width: theme.spacing(40),
    },
    fieldText: {
      marginTop: theme.spacing(5),
    },
    loginButton: {
      marginTop: theme.spacing(10),
    },
  }),
);

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5">
          Login
        </Typography>
        <TextField className={classes.fieldText} id="standard-basic" label="Username" />
        <TextField className={classes.fieldText} id="standard-basic" label="Password" />
        <Button className={classes.loginButton} variant="contained" color="primary">
          <Typography variant="body1">
            Entrar
          </Typography>
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
