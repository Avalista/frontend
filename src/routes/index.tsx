import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
    </Routes>
  );
}

export default AppRoutes;