import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Theme,
  Container,
  LinearProgress,
  Fade,
  Snackbar,
} from '@material-ui/core';
import { ApolloError } from '@apollo/client';
import { FormikProps } from 'formik';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    margin: theme.spacing(1),
  },
  title: {
    fontWeight: 'bold',
  },
  loadingPlaceholder: {
    height: theme.spacing(0.5),
  },
}));

type AuthPageTemplateProps = {
  title: string;
  isLoading?: boolean;
  authError?: ApolloError;
};

export type AuthPageProps<T> = FormikProps<T> & {
  isLoading: boolean;
  passwordVisibility: boolean;
  togglePasswordVisibility: () => void;
  authError?: ApolloError;
};

const AuthPageTemplate: React.FC<AuthPageTemplateProps> = ({
  title,
  isLoading = false,
  authError,
  children,
}) => {
  const styles = useStyles();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  useEffect(() => {
    setErrorMessage(authError?.message);
  }, [authError?.message]);

  const onSnackbarClose = () => setErrorMessage(undefined);

  return (
    <>
      {isLoading ? (
        <Fade
          in={isLoading}
          style={{
            transitionDelay: isLoading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <LinearProgress />
        </Fade>
      ) : (
        <div className={styles.loadingPlaceholder} />
      )}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!errorMessage}
        message={errorMessage}
        autoHideDuration={6000}
        onClose={onSnackbarClose}
      />
      <Container maxWidth="sm">
        <Card variant="outlined" className={styles.card}>
          <CardHeader
            title={title}
            titleTypographyProps={{
              gutterBottom: true,
              variant: 'h3',
              component: 'h2',
              className: styles.title,
            }}
          />
          <CardContent>{children}</CardContent>
        </Card>
      </Container>
    </>
  );
};

export default AuthPageTemplate;
