import React, { FormEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SignForm, SignPageLayout } from '../../components';
import { ROUTE_LOGIN } from '../../constants/routes';
import './SignUp.css';

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const formFields = [
    {
      label: 'Email',
      ref: emailRef,
      type: 'text',
      error: emailError,
    },
    {
      label: 'Password',
      ref: passwordRef,
      type: 'password',
      error: passwordError,
    },
    {
      label: 'Confirm password',
      ref: passwordConfirmRef,
      type: 'password',
      error: passwordConfirmError,
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SignPageLayout title="Sign Up">
      <SignForm
        fields={formFields}
        buttonText="Sign In"
        onSubmit={handleSubmit}
      />
      <div className="SignUp__other">
        <Link to={ROUTE_LOGIN} className="SignUp__login">
          Already registered?
        </Link>
        <span className="SignUp__help">Need help?</span>
      </div>
    </SignPageLayout>
  );
};

export default SignUp;
