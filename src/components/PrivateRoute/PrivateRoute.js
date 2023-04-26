import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';

export const PrivateRoute = () => {
  const isToken = useSelector(selectToken);
  return isToken ? <Outlet /> : <Navigate to="/login" />;
};
