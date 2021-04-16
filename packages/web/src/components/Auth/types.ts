import { ApolloError } from '@apollo/client';
import { FormikProps } from 'formik';

export type AuthPageProps<T> = FormikProps<T> & {
  isLoading: boolean;
  passwordVisibility: boolean;
  togglePasswordVisibility: () => void;
  apolloError?: ApolloError;
};
