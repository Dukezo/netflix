import React from 'react';
import './Header.css';
import { Logo } from '../';

const Header: React.FC = ({ children }) => {
  return (
    <div className="Header">
      <Logo className="Header__logo" />
      <div className="Header__rightSide">{children}</div>
    </div>
  );
};

export default Header;
