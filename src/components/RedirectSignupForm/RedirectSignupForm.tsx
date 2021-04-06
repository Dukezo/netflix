import React, { FormEvent, useRef } from 'react';
import './RedirectSignupForm.css';
import { BsChevronRight } from 'react-icons/bs';
import { Button, Input } from '../';
import { ROUTE_SIGNUP } from '../../constants/routes';
import { useHistory } from 'react-router';

const RedirectSignupForm = () => {
  const emailRef = useRef<HTMLInputElement>(null!);
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    history.push({
      pathname: ROUTE_SIGNUP,
      search: `?email=${emailRef.current.value}`,
    });
  };

  return (
    <div className="RedirectSignupForm">
      <p className="RedirectSignupForm__title">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="RedirectSignupForm__inputWrapper">
          <Input
            type="email"
            name="email"
            label="Email address"
            ref={emailRef}
          />
        </div>
        <Button className="RedirectSignupForm__button">
          Get Started <BsChevronRight />
        </Button>
      </form>
    </div>
  );
};

export default RedirectSignupForm;
