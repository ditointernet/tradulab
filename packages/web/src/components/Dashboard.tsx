import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TradulabBackground from '../images/tradulab-background.png';

interface IDashboard {
  children: React.ReactChild | React.ReactChild[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${TradulabBackground})`,
    display: 'flex',
    flexFlow: 'column wrap',
    height: '100%',
    padding: '2% 30% 2% 10%',
    '@media (max-width: 800px)': {
      padding: '2% 20% 2% 10%',
    },
    '@media (max-width: 500px)': {
      padding: '2%',
    },
  },
}));

const Dashboard: React.FC<IDashboard> = (props) => {
  const classes = useStyles();

  return <Grid className={classes.root}>{props.children}</Grid>;
};

export default Dashboard;
