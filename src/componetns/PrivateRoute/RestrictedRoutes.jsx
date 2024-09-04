import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selector';
import { Navigate } from 'react-router';

const RestrictedRoutes = ({ component, redirect = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirect} /> : component;
};

export default RestrictedRoutes;
