import React, { FormEvent, useRef, useState } from 'react';
import './SignIn.css';
import facebookIcon from '../../assets/images/facebook.png';
import { ROUTE_SIGNUP } from '../../constants/routes';
import { Link } from 'react-router-dom';
import { SignForm, SignPageLayout } from '../../components';

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const formFields = [
    {
      label: 'Email',
      type: 'text',
      ref: emailRef,
      error: emailError,
    },
    {
      label: 'Password',
      type: 'password',
      ref: passwordRef,
      error: passwordError,
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SignPageLayout title="Sign In">
      <SignForm
        fields={formFields}
        buttonText="Sign In"
        onSubmit={handleSubmit}
      />

      <div className="SignIn__rememberMeContainer">
        <div className="SignIn_rememberMeCheckbox">
          <input type="checkbox" id="remember_me" />
          <label className="SignIn__rememberMeLabel">Remember me?</label>
        </div>

        <span className="SignIn__help">Need help?</span>
      </div>
      <div className="SignIn__other">
        <div className="SignIn__facebook">
          <img
            src={facebookIcon}
            className="SignIn__facebookIcon"
            alt="Facebook"
          />
          Login with Facebook
        </div>
        <div className="SignIn__newToNetflix">
          <span>New to Netflix?</span>
          <Link to={ROUTE_SIGNUP} className="SignIn__signupLink">
            Sign up now
          </Link>
        </div>
      </div>
    </SignPageLayout>
  );
};

export default SignIn;
