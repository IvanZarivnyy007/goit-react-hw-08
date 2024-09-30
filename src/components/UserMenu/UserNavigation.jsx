import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLogout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selector';

const UserMenu = ({}) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const onLogoutClick = () => {
    dispatch(fetchUserLogout());
  };
  return (
    <div className="nav-div">
      <div className="nav-userInfo-btnLogout">
        <div> Welcome {userInfo.email}</div>
        <button className="button-contact" onClick={onLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
