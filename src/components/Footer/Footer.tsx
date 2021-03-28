import React from 'react';
import { GridMenu } from '..';
import { MenuLink } from '../../types';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import './Footer.css';

interface Props {
  menuLinks: MenuLink[][];
}

const Footer: React.FC<Props> = ({ menuLinks, children }) => {
  return (
    <footer className="Footer">
      <h3 className="Footer__hotline">Questions? Call 0800-000-9677</h3>
      <div className="Footer__menu">
        <GridMenu links={menuLinks} />
      </div>
      <LanguagePicker className="Footer__languagePicker" />
      {children}
    </footer>
  );
};

export default Footer;
