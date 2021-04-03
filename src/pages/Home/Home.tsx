import React from 'react';
import './Home.css';
import footerLinks from '../../data/home-footer-links.json';
import {
  FaqAccordion,
  Feature,
  Footer,
  HeaderHero,
  MacAnimation,
  PhoneAnimation,
  RedirectSignupForm,
  TVAnimation,
} from '../../components';

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="Home">
      <HeaderHero />
      <div className="Home__row">
        <div className="Home__feature">
          <Feature
            title="Enjoy on your TV."
            animation={<TVAnimation />}
            adjustAnimationMobileMargin
          >
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Feature>
        </div>
      </div>
      <div className="Home__row">
        <div className="Home__feature">
          <Feature
            title="Download your shows to watch offline."
            animation={<PhoneAnimation />}
            flipped
          >
            Save your favorites easily and always have something to watch.
          </Feature>
        </div>
      </div>
      <div className="Home__row">
        <div className="Home__feature">
          <Feature title="Watch everywhere." animation={<MacAnimation />}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </Feature>
        </div>
      </div>
      <div className="Home__row">
        <div className="Home__faq">
          <FaqAccordion />
          <div className="Home__faqForm">
            <RedirectSignupForm />
          </div>
        </div>
      </div>
      <div className="Home__row">
        <Footer
          className="Home__footer"
          menuLinks={footerLinks}
          showHotlineNumber
          showLanguagePicker
        >
          <div className="Home__footerSiteName">Netflix Clone</div>
        </Footer>
      </div>
    </div>
  );
};

export default Home;
