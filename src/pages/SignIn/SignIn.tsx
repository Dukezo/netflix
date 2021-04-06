import React, { FormEvent, useRef, useState } from 'react';
import './SignIn.css';
import facebookIcon from '../../assets/images/facebook.png';
import { ROUTE_BROWSE, ROUTE_SIGNUP } from '../../constants/routes';
import { Link, useHistory } from 'react-router-dom';
import { SignForm, SignPageLayout } from '../../components';
import { validateEmail, validatePassword } from '../../utils/validation';
import { useAuth } from '../../contexts/auth';

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

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

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
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
    } else setPasswordError('');

    if (isFormValid) {
      setIsLoading(true);
      login(email, password)
        .then(() => {
          history.push(ROUTE_BROWSE);
        })
        .catch((err) => {
          if (err.code === 'auth/wrong-password')
            setPasswordError('Wrong password.');
          else if (err.code === 'auth/user-not-found')
            setEmailError(
              'No account associated with this email address found.'
            );
          setIsLoading(false);
        });
    }
  };

  return (
    <SignPageLayout title="Sign In">
      <SignForm
        fields={formFields}
        buttonText="Sign In"
        buttonDisabled={isLoading}
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
