import { selectIsLoggedIn } from '../../redux/auth/selector';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className="nav">
      {isLoggedIn ? (
        <div className="nav-home-contact">
          <NavLink to="/" className="nav-link nav-link-start">
            Home
          </NavLink>
          <NavLink to="/contacts" className="nav-link">
            Contacts
          </NavLink>
        </div>
      ) : (
        <NavLink to="/" className="nav-link nav-link-start">
          Home
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
