// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const token = localStorage.getItem('authToken');
  return token ? <Outlet /> : <Navigate to="/admin" replace />;
}

export default ProtectedRoute;
