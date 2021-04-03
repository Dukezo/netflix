import React from 'react';
import { Footer, Header } from '..';
import './SignPageLayout.css';
import backgroundImg from '../../assets/images/home-hero-bg.jpg';
import footerLinks from '../../data/sign-footer-links.json';

interface Props {
  title: string;
}

const SignPageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <div
      className="SignPageLayout"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="SignPageLayout__inner">
        <div className="SignPageLayout__header">
          <Header />
        </div>

        <div className="SignPageLayout__content">
          <h1 className="SignPageLayout__title">{title}</h1>
          {children}
        </div>
      </div>
      <div className="SignPageLayout__footerContainer">
        <Footer
          menuLinks={footerLinks}
          languagePickerClassName="SignPageLayout__footerLanguagePicker"
          showHotlineNumber
          showLanguagePicker
        />
      </div>
    </div>
  );
};

export default SignPageLayout;
