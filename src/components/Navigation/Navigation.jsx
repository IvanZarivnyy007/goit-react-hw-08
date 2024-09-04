import { selectIsLoggedIn } from '../../redux/auth/selector';
import { useSelector } from 'react-redux';
import UserNavigation from '../UserNavigation/UserNavigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className="nav">
      {isLoggedIn ? <UserNavigation /> : <AuthNavigation />}
    </nav>
  );
};

export default Navigation;
