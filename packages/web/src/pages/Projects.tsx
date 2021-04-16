import React, { useState } from 'react';
import {
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Button,
  Input,
  InputAdornment,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import ProjectsTable from '../components/ProjectsTable';

const rowsBackEnd = [
  { project: 'Jornadas', role: 'Desenvolvedor' },
  { project: 'Tradulab', role: 'Contribuidor' },
  { project: 'Agenda', role: 'Dono' },
  { project: 'Jornadas', role: 'Desenvolvedor' },
  { project: 'Tradulab', role: 'Contribuidor' },
  { project: 'Agenda', role: 'Dono' },
  { project: 'Jornadas', role: 'Desenvolvedor' },
  { project: 'Tradulab', role: 'Contribuidor' },
  { project: 'Agenda', role: 'Dono' },
  { project: 'Jornadas', role: 'Desenvolvedor' },
  { project: 'Tradulab', role: 'Contribuidor' },
  { project: 'Agenda', role: 'Dono' },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(4),
      width: theme.spacing(100),
      height: theme.spacing(50),
    },
    input: {
      marginTop: theme.spacing(4),
      width: theme.spacing(30),
    },
  })
);

const Projects: React.FC = () => {
  const [rows, setRows] = useState(rowsBackEnd);
  const classes = useStyles();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    const filteredRows = rowsBackEnd.filter(({ project }) =>
      project.toUpperCase().includes(filter.toUpperCase())
    );

    setRows(filteredRows);

    // console.log(filter, filteredRows);
  };

  return (
    <Paper className={classes.paper}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">Meus projetos</Typography>
        <Button variant="contained" color="primary">
          Criar projeto
        </Button>
      </Box>
      <Input
        placeholder="Buscar"
        className={classes.input}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        onChange={onInputChange}
      />
      <ProjectsTable rows={rows} />
    </Paper>
  );
};

export default Projects;
