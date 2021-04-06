import React, { useEffect, useState } from 'react';
import { Logo } from '..';
import './Navbar.css';
import mergeClassNames from '../../utils/merge-class-names';
import NavbarNotifications from './NavbarNotifications/NavbarNotifications';
import NavbarProfile from './NavbarProfile/NavbarProfile';
import NavbarFilterMenu from './NavbarFilterMenu/NavbarFilterMenu';

interface Props {}

const Navbar = (props: Props) => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(document.documentElement.scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={mergeClassNames('Navbar', {
        'Navbar--scrolled': showBackground,
      })}
    >
      <div className="Navbar__logo">
        <Logo />
      </div>
      <NavbarFilterMenu />
      <ul className="Navbar__iconMenu">
        {/* <li>
          <ImSearch />
        </li>
        <li>
          <AiOutlineGift />
        </li> */}
        <li>
          <NavbarNotifications />
        </li>
        <li className="Navbar__avatar">
          <NavbarProfile />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
