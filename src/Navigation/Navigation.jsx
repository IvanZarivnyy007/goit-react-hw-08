import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
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
        <NavLink to="/contacts" className="nav-link">
          Contacts
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
