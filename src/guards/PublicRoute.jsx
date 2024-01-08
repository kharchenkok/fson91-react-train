import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../store/auth/authSelectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);

  const location = useLocation();

  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
