import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import './NavbarProfile.css';
import avatar from '../../../assets/images/avatar-1.png';

const NavbarProfile = () => {
  return (
    <div className="NavbarProfile">
      <NavbarDropdown
        trigger={
          <div className="NavbarProfile__avatar">
            <img src={avatar} alt="Avatar" />
            <IoMdArrowDropdown />
          </div>
        }
        caretOffset={28}
      >
        <ul className="NavbarProfile__dropdown">
          <li>Sign out of Netflix </li>
        </ul>
      </NavbarDropdown>
    </div>
  );
};

export default NavbarProfile;
