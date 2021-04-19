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

type PageTemplateProps = {
  title: string;
  isLoading?: boolean;
  apolloError?: ApolloError;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
};

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  isLoading = false,
  apolloError,
  maxWidth = 'sm',
  children,
}) => {
  const styles = useStyles();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  useEffect(() => {
    setErrorMessage(apolloError?.message);
  }, [apolloError?.message]);

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
      <Container maxWidth={maxWidth}>
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

export default PageTemplate;
