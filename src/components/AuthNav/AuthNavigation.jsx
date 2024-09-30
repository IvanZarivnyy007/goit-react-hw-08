import { NavLink } from 'react-router-dom';

const AuthNav = ({}) => {
  return (
    <div className="auth-container">
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

export default AuthNav;
