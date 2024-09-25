import { NavLink } from 'react-router-dom';

const AuthNavigation = ({}) => {
  return (
    <div className="auth-container">
      <NavLink to="/" className="nav-link nav-link-start">
        Home
      </NavLink>
      <div className="nav-links-end">
        <NavLink to="/register" className="nav-link">
          Registration
        </NavLink>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNavigation;
