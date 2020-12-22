import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// import styled from "styled-components";

export interface LoginFormProps {
  email: {
    value: String;
    error: Boolean;
  };
  password: {
    value: String;
    error: Boolean;
  };
  setEmail: React.Dispatch<
    React.SetStateAction<{
      value: string;
      error: boolean;
    }>
  >;
  setPassword: React.Dispatch<
    React.SetStateAction<{
      value: string;
      error: boolean;
    }>
  >;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
}) => (
  <FormControl>
    <InputLabel>Email</InputLabel>
  </FormControl>
);

export default LoginForm;
