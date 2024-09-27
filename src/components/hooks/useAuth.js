import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectisRefreshing,
} from '../../redux/auth/selector';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);
  const user = useSelector(selectUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

export default useAuth;
