import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.dark,
    '& span': {
      color: theme.palette.primary.main,
    },
  },
}));

const TradulabTitle: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.title}>
      <span>Tradu</span>lab
    </Typography>
  );
};

export default TradulabTitle;
