import React, { FormEvent, useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { SignForm, SignPageLayout } from '../../components';
import { ROUTE_BROWSE, ROUTE_LOGIN } from '../../constants/routes';
import { useAuth } from '../../contexts/auth';
import { validateEmail, validatePassword } from '../../utils/validation';
import './SignUp.css';

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const passwordConfirmRef = useRef<HTMLInputElement>(null!);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const queryEmail = new URLSearchParams(location.search).get('email');
  const formFields = [
    {
      label: 'Email',
      ref: emailRef,
      type: 'text',
      error: emailError,
      defaultValue: queryEmail || undefined,
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

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    let isFormValid = true;

    if (!emailValidation.valid) {
      setEmailError(emailValidation.errors[0]);
      isFormValid = false;
    } else setEmailError('');

    if (!passwordValidation.valid) {
      setPasswordError(passwordValidation.errors[0]);
      isFormValid = false;
    } else {
      setPasswordError('');
      if (password !== passwordConfirm) {
        setPasswordConfirmError("The passwords don't match.");
        isFormValid = false;
      } else setPasswordConfirmError('');
    }

    if (isFormValid) {
      setIsLoading(true);
      signup(email, password)
        .then(() => {
          history.push(ROUTE_BROWSE);
        })
        .catch((err) => {
          if (err.code === 'auth/email-already-in-use')
            setEmailError('The email address is already in use.');
          else {
            console.error(err);
            alert(err.message);
          }
          setIsLoading(false);
        });
    }
  };

  return (
    <SignPageLayout title="Sign Up">
      <SignForm
        fields={formFields}
        buttonText="Sign In"
        onSubmit={handleSubmit}
        buttonDisabled={isLoading}
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
