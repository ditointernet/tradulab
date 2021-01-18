import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { BLUE_700, BLACK_800 } from '../utils/colors';

const useStyles = makeStyles(() => ({
  title: {
    backgroundColor: BLACK_800,
    borderRadius: '100px',
    color: 'white',
    fontFamily: 'Open Sans',
    fontSize: '100%',
    fontWeight: 'bold',
    margin: '2% 0%',
    textAlign: 'center',
    '& span': {
      color: BLUE_700,
    },
  },
}));

const TradulabTitle: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.title}>
      Tradu<span>lab</span>
    </Typography>
  );
};

export default TradulabTitle;
