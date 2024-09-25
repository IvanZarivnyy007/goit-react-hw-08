import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchUserLogout } from '../../redux/auth/operation';
import { selectUser } from '../../redux/auth/selector';

const UserNavigation = ({}) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const onLogoutClick = () => {
    dispatch(fetchUserLogout());
  };
  return (
    <div className="nav-div">
      <div className="nav-home-contact">
        <NavLink to="/" className="nav-link nav-link-start">
          Home
        </NavLink>
        <NavLink to="/contacts" className="nav-link">
          Contacts
        </NavLink>
      </div>

      <div className="nav-userInfo-btnLogout">
        <div> Welcome {userInfo.email}</div>
        <button className="button-contact" onClick={onLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserNavigation;
