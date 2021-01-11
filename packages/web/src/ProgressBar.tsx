import React from 'react';

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: theme.spacing(1),
      backgroundColor: "gray",
    },
    approval: {
      backgroundColor: "red",
    },
    translate: {
      backgroundColor: "blue",
    }
  }),
);

interface IProgressBarProps {
  approvalPercentage: number,
  translatePercentage: number,
  width?: string;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  approvalPercentage,
  translatePercentage,
  width,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} width={width || "100%"}>
      <Box className={classes.approval} width={`${approvalPercentage}%`} />
      <Box className={classes.translate} width={`${translatePercentage - approvalPercentage}%`} />
    </Box>
  );
};

export default ProgressBar;
