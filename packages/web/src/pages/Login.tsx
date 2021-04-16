import { useState } from 'react';
import { Navigate } from 'react-router';
import { gql, useLazyQuery } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';

import LoginForm from '../components/Auth/LoginForm';

const LOGIN_QUERY = gql`
  query web_login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

type LoginResult = { login: { token: string } };
export type LoginVariables = { email: string; password: string };

const Login: React.FC = () => {
  const [passwordVisibility, setPasswordVisiblity] = useState<boolean>(false);
  const [handleLogin, { loading, data, error }] = useLazyQuery<
    LoginResult,
    LoginVariables
  >(LOGIN_QUERY, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => localStorage.setItem('token', data.login.token),
  });

  return (
    <>
      {!error && data && data.login.token && (
        <Navigate to="/projects" replace={true} />
      )}
      <Formik
        {...{
          onSubmit: (variables) => handleLogin({ variables }),
          initialValues: { email: '', password: '' },
          validationSchema: Yup.object({
            email: Yup.string()
              .email('Please provide a valid email address.')
              .required('Required.'),
            password: Yup.string()
              .min(6, 'Your password requires at least 6 characters.')
              .required('Required.'),
          }),
        }}
      >
        {(formikProps) => {
          if (!loading && !!(error || data) && formikProps.isSubmitting) {
            formikProps.setSubmitting(false);
          }

          return (
            <LoginForm
              {...formikProps}
              {...{
                isLoading: loading,
                authError: error,
                passwordVisibility,
                togglePasswordVisibility: () =>
                  setPasswordVisiblity((state) => !state),
              }}
            />
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
