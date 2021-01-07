import React, { useState } from 'react';
import MyProjects from './MyProjects';

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

const MyProjectsContainer = () => {
  const [rows, setRows] = useState(rowsBackEnd);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    const filteredRows = rowsBackEnd.filter(({ project }) =>
      project.toUpperCase().includes(filter.toUpperCase())
    );
    setRows(filteredRows);
    console.log(filter, filteredRows)
  };

  return <MyProjects {...{ rows, onInputChange }} />;
};

export default MyProjectsContainer;
