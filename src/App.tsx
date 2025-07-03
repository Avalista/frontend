import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ErrorPage } from './pages/ErrorPage';
import { ProfilePage } from './pages/ProfilePage';
import { DashboardPage } from './pages/DashboardPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProtectedRoute } from './routes/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
          {
            path: 'projects/:projectId',
            element: <ProjectDetailPage />,
          },
        ],
      },
    ],
  },
]);