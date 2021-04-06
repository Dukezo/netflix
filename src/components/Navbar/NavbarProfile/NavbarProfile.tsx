import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import './NavbarProfile.css';
import avatar from '../../../assets/images/avatar-1.png';
import { useAuth } from '../../../contexts/auth';
import { useHistory } from 'react-router';
import { ROUTE_HOME } from '../../../constants/routes';

const NavbarProfile = () => {
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout()
      .then(() => history.push(ROUTE_HOME))
      .catch((err) => console.error(err));
  };

  return (
    <div className="NavbarProfile">
      <NavbarDropdown
        trigger={
          <div className="NavbarProfile__avatar">
            <img src={avatar} alt="Avatar" />
            <IoMdArrowDropdown />
          </div>
        }
        caretOffset={48}
      >
        <div className="NavbarProfile__email">{user?.email}</div>
        <ul className="NavbarProfile__dropdown">
          <li onClick={handleLogout}>Sign out of Netflix </li>
        </ul>
      </NavbarDropdown>
    </div>
  );
};

export default NavbarProfile;
