import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Home, Login, Error, Developer, Projects } from './routes';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />
      <Route path="/dev" element={<Developer path="/login" />} />
      <Route path="/projects" element={<Projects path="/login" />} />
      <Route path="/home" element={<Home path="/login" />} />
      <Navigate to="/login" replace={true} />
    </Routes>
  </BrowserRouter>
);

export default Router;
