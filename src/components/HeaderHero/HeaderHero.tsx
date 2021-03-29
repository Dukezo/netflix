import React from 'react';
import './HeaderHero.css';
import bgImage from '../../assets/images/home-hero-bg.jpg';
import {
  Hero,
  Header,
  Button,
  LanguagePicker,
  Menu,
  RedirectSignupForm,
  Feature,
} from '../../components';
import { ROUTE_LOGIN } from '../../constants/routes';

const FeatureHero = () => {
  return (
    <Hero image={bgImage}>
      <Header>
        <Menu
          items={[
            <LanguagePicker />,
            <Button link={ROUTE_LOGIN}>Sign In</Button>,
          ]}
        />
      </Header>
      <div className="HeaderHero__content">
        <Feature
          title="Unlimited movies, TV shows, and more."
          titleFontSize="4rem"
        >
          Watch anywhere. Cancel anytime.
        </Feature>
        <RedirectSignupForm />
      </div>
    </Hero>
  );
};

export default FeatureHero;
