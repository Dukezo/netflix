import React, { FormEvent, useRef, useState } from 'react';
import { SignForm, SignPageLayout } from '../../components';
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
    </SignPageLayout>
  );
};

export default SignUp;
