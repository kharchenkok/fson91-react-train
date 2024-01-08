import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../store/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);

  const location = useLocation();

  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
