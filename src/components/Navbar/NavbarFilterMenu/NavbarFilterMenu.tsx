import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import './NavbarFilterMenu.css';

interface Props {}

const navLinks = [
  { name: 'Home', to: '/browse' },
  { name: 'TV Shows', to: '/browse/tv' },
  { name: 'Movies', to: '/browse/movies' },
];

const renderNavLinks = () => {
  return navLinks.map(({ name, to }) => (
    <NavLink to={to} exact>
      {name}
    </NavLink>
  ));
};

const NavbarFilterMenu = (props: Props) => {
  return (
    <div className="NavbarFilterMenu">
      <div className="NavbarFilterMenu__menu">{renderNavLinks()}</div>
      <div className="NavbarFilterMenu__mobileMenu">
        <NavbarDropdown
          trigger={
            <div className="NavbarFilterMenu__mobileMenuTrigger">
              <span>Browse</span>
              <IoMdArrowDropdown />
            </div>
          }
          isFilter
        >
          <div className="NavbarFilterMenu__mobileMenuDropdown">
            {renderNavLinks()}
          </div>
        </NavbarDropdown>
      </div>
    </div>
  );
};

export default NavbarFilterMenu;
