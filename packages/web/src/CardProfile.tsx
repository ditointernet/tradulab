import React from 'react';
import { Paper, Avatar, makeStyles, createStyles, Theme, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2, 2, 15, 2),
      width: theme.spacing(35),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    avatar: {
      alignSelf: "center",
      marginBottom: theme.spacing(2),
    },
    box: {
      marginTop: theme.spacing(1),
      justifyContent: "center",
      display: "flex",
    },
    city: {
      marginRight: theme.spacing(1),
    },
  }),
);

interface ICardProfileProps {
  username: string;
  city: string;
  age: string;
  imageSrc: string;
}


const CardProfile: React.FC<ICardProfileProps> = ({
  username,
  city,
  age,
  imageSrc,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Avatar
        className={`${classes.large} ${classes.avatar}`}
        alt="teste"
        src={imageSrc}
      />
      <Typography align="center" variant="h6">
        {username}
      </Typography>
      <Box
        className={classes.box}
      >
        <Typography className={classes.city} variant="body1">
          {`${city},`}
        </Typography>
        <Typography variant="body1">
          {age}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CardProfile;
