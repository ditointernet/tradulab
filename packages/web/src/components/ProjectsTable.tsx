import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

export type Row = {
  project: string;
  role: string;
};

export interface IProjectsTable {
  rows: Row[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    container: {
      maxHeight: theme.spacing(33.5),
    },
    projectColumn: {
      width: theme.spacing(50),
    },
  })
);

const ProjectsTable: React.FC<IProjectsTable> = ({ rows }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.projectColumn}>
                <Typography variant="body1">Projeto</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body1">Cargo</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover tabIndex={-1}>
                <TableCell align="left">{row.project}</TableCell>
                <TableCell align="left">{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ProjectsTable;
