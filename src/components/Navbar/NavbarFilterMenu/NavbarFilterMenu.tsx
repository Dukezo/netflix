import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { ROUTE_BROWSE } from '../../../constants/routes';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import './NavbarFilterMenu.css';

const navLinks = [
  { name: 'Home', to: ROUTE_BROWSE },
  { name: 'TV Shows', to: `${ROUTE_BROWSE}/tv` },
  { name: 'Movies', to: `${ROUTE_BROWSE}/movies` },
];

const renderNavLinks = () => {
  return navLinks.map(({ name, to }, idx) => (
    <NavLink key={idx} to={to} exact>
      {name}
    </NavLink>
  ));
};

const NavbarFilterMenu = () => {
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
