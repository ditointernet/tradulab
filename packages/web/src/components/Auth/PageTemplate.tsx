import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Theme,
  Container,
  LinearProgress,
  Fade,
} from '@material-ui/core';

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

type AuthPageTemplateProps = { title: string; isLoading?: boolean };

const AuthPageTemplate: React.FC<AuthPageTemplateProps> = ({
  title,
  isLoading = false,
  children,
}) => {
  const styles = useStyles();

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
