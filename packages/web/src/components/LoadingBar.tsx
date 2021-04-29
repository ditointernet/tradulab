import { Fade, LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loadingPlaceholder: { height: theme.spacing(0.5) },
}));

type LoadingBarProps = {
  isLoading: boolean;
};

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => {
  const styles = useStyles();

  return isLoading ? (
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
  );
};

export default LoadingBar;
