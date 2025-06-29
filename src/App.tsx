// src/App.tsx

import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ErrorPage } from './pages/ErrorPage';
import { ProtectedRoute } from './routes/ProtectedRoute'; 
import { ProfilePage } from './pages/ProfilePage'; 

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },

      
      {
        element: <ProtectedRoute />, 
        children: [
          {
            path: 'profile', 
            element: <ProfilePage />,
          },
          // { path: 'dashboard', element: <DashboardPage /> }
        ],
      },
    ],
  },
]);