import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selector';
import { Navigate } from 'react-router';

const PrivateRoute = ({ component, redirect = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirect} />;
};

export default PrivateRoute;
