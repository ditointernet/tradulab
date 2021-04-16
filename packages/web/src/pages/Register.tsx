import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { gql, useMutation } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';

import RegisterForm from '../components/Auth/RegisterForm';

const REGISTER_QUERY = gql`
  mutation web_register(
    $email: String!
    $password: String!
    $username: String!
    $displayName: String!
  ) {
    createUser(
      email: $email
      password: $password
      username: $username
      displayName: $displayName
    ) {
      token
    }
  }
`;

type RegisterResult = { createUser: { token: string } };
export type RegisterVariables = Record<
  'email' | 'password' | 'username' | 'displayName' | 'passwordConfirmation',
  string
>;

const Register: React.FC = () => {
  const [passwordVisibility, setPasswordVisiblity] = useState<boolean>(false);
  const [handleRegister, { loading, data, error }] = useMutation<
    RegisterResult,
    Omit<RegisterVariables, 'passwordConfirmation'>
  >(REGISTER_QUERY, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => localStorage.setItem('token', data.createUser.token),
  });

  return (
    <>
      {!error && data && data.createUser.token && (
        <Navigate to="/projects" replace={true} />
      )}
      <Formik
        {...{
          onSubmit: ({ passwordConfirmation, ...variables }) =>
            handleRegister({ variables }),
          initialValues: {
            email: '',
            password: '',
            username: '',
            displayName: '',
            passwordConfirmation: '',
          },
          validationSchema: Yup.object({
            email: Yup.string()
              .min(
                6,
                'Your email address must consist of at least 6 characters.'
              )
              .max(
                256,
                'Your email address must consist of at most 256 characters.'
              )
              .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please provide a valid email address.'
              )
              .required('Required.'),
            password: Yup.string()
              .min(6, 'Your password requires at least 6 characters.')
              .required('Required.'),
            username: Yup.string()
              .min(3, 'Your username must consist of at least 3 characters.')
              .max(32, 'Your username must consist of at most 32 characters.')
              .matches(
                /^[a-z0-9_\-.]+$/,
                'You may only use alphanumeric characters or a few special characters (-, _, .)'
              )
              .required('Required.'),
            displayName: Yup.string()
              .min(
                3,
                'Your display name must consist of at least 3 characters.'
              )
              .max(
                64,
                'Your display name must consist of at most 64 characters.'
              )
              .required('Required.'),
            passwordConfirmation: Yup.string().test(
              'same-password',
              'Your passwords do not match.',
              (value, context) => context.parent.password === value
            ),
          }),
        }}
      >
        {(formikProps) => (
          <RegisterForm
            {...formikProps}
            {...{
              isLoading: loading,
              registerError: error,
              passwordVisibility,
              togglePasswordVisibility: () =>
                setPasswordVisiblity((state) => !state),
            }}
          />
        )}
      </Formik>
    </>
  );
};

export default Register;
