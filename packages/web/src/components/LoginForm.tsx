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
}

const LoginForm: React.FC<LoginFormProps> = () => (
  <FormControl>Login Component</FormControl>
);

export default LoginForm;
