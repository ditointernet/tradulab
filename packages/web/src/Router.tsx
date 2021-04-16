import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import { LinearProgress } from '@material-ui/core';

import { TradulabTitle } from './components';
import { Home, Developer } from './containers/routes';
import UnauthenticatedRoute from './containers/middlewares/UnauthenticatedRoute';
import AuthenticatedRoute from './containers/middlewares/AuthenticatedRoute';

const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const ErrorPage = lazy(() => import('./pages/Error'));

const Router: React.FC = () => (
  <>
    <TradulabTitle />
    <Suspense fallback={<LinearProgress />}>
      <BrowserRouter>
        <Routes>
          <UnauthenticatedRoute path="/auth">
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Navigate to="./login" replace={true} />
          </UnauthenticatedRoute>
          <AuthenticatedRoute>
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/dev" element={<Developer path="/login" />} />
            <Route path="/projects">
              <Route path="/" element={<ProjectsPage />} />
              <Route path="create" element={<h1>create</h1>} />
              <Route path=":slug" element={<h1>details</h1>} />
            </Route>
            <Route path="/home" element={<Home path="/login" />} />
            <Navigate to="/auth/login" replace={true} />
            <Route path="*" element={<h1>404</h1>} />
          </AuthenticatedRoute>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </>
);

export default Router;
