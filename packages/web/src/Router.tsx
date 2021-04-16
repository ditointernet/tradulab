import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import { LinearProgress } from '@material-ui/core';

import { TradulabTitle } from './components';
import UnauthenticatedRoute from './containers/middlewares/UnauthenticatedRoute';
import AuthenticatedRoute from './containers/middlewares/AuthenticatedRoute';
import MinimumRoleRoute, {
  ROLES,
} from './containers/middlewares/MinimumRoleRoute';

const LoginPage = lazy(() => import('./pages/Auth/Login'));
const RegisterPage = lazy(() => import('./pages/Auth/Register'));
const YourProjectsPage = lazy(() => import('./pages/Projects/YourProjects'));
const ProjectDetailsPage = lazy(() => import('./pages/Projects/Details'));
const ProjectRolesPage = lazy(() => import('./pages/Projects/Roles'));
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
            <Route path="/projects">
              <Route path="/" element={<YourProjectsPage />} />
              <Route path="create" element={<h1>create</h1>} />
              <Route path=":projectId">
                <Route path="/" element={<ProjectDetailsPage />} />
                <MinimumRoleRoute
                  path="roles"
                  minimumRole={ROLES.MANAGER}
                  element={<ProjectRolesPage />}
                />
                <Route path="files/:fileId">
                  <Route path="/" element={<h1>file phrases</h1>} />
                  <Route path="phrases/:phraseId" element={<h1>phrase</h1>} />
                </Route>
              </Route>
            </Route>
            <Navigate to="/auth/login" replace={true} />
            <Route path="*" element={<h1>404</h1>} />
          </AuthenticatedRoute>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </>
);

export default Router;
