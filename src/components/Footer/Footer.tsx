import React from 'react';
import { GridMenu } from '..';
import { MenuLink } from '../../types';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import './Footer.css';

interface Props {
  menuLinks: MenuLink[][];
}

const Footer = ({ menuLinks }: Props) => {
  return (
    <div className="Footer">
      <h3 className="Footer__hotline">Questions? Call 0800-000-9677</h3>
      <div className="Footer__menu">
        <GridMenu links={menuLinks} />
      </div>
      <div className="Footer__languagePicker">
        <LanguagePicker />
      </div>
      <div className="Footer__company">Netflix Clone</div>
    </div>
  );
};

export default Footer;
