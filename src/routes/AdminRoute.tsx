import { Navigate, Outlet } from 'react-router-dom';

interface StoredUser {
  funcao: string;
}

export function AdminRoute() {
  const token = localStorage.getItem('authToken');
  const userString = localStorage.getItem('user');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (userString) {
    const user: StoredUser = JSON.parse(userString);
    if (user.funcao === 'ADMIN') {
      return <Outlet />; 
    }
  }

  return <Navigate to="/dashboard" replace />;
}