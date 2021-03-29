import React from 'react';
import './RedirectSignupForm.css';
import { BsChevronRight } from 'react-icons/bs';
import { Button, Input } from '../';
import { ROUTE_SIGNUP } from '../../constants/routes';

const RedirectSignupForm = () => {
  return (
    <div className="RedirectSignupForm">
      <p className="RedirectSignupForm__title">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form>
        <div className="RedirectSignupForm__inputWrapper">
          <Input type="text" name="email" label="Email address" />
        </div>
        <Button className="RedirectSignupForm__button" link={ROUTE_SIGNUP}>
          Get Started <BsChevronRight />
        </Button>
      </form>
    </div>
  );
};

export default RedirectSignupForm;
