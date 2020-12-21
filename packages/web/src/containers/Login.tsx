import React, { useState } from "react";

import { LoginForm } from "../components";

const Login: React.FC = () => {
  const [email, setEmail] = useState({ value: "", error: true });

  const [password, setPassword] = useState({ value: "", error: true });

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default Login;
