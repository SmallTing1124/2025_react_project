import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const isAuth = useSelector((state) => state?.auth?.isAuth);
  const userRole = useSelector((state) => state?.auth?.user?.role || 'guest');

  if (!isAuth && allowedRoles.includes('guest')) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
}