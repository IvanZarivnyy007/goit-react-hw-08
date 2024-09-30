import Navigation from '../Navigation/Navigation';
import UserMenu from './../UserMenu/UserNavigation';
import AuthNav from './../AuthNav/AuthNavigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selector';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Navigation />
      <nav className="nav">{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>
    </div>
  );
};

export default AppBar;
