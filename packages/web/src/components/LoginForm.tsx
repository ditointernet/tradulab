import React from "react";
import FormControl from "@material-ui/core/FormControl";

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
}) => <FormControl>{email.value}</FormControl>;

export default LoginForm;
