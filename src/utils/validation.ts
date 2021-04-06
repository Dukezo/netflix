interface Validation {
  valid: boolean;
  errors: string[];
}

export const validatePassword = (password: string): Validation => {
  let errors: string[] = [];

  if (password.length === 0) errors.push('Please enter a password.');
  if (password.length < 6)
    errors.push('The password must be at least 6 characters long.');
  if (password.length > 30)
    errors.push("The password can't be longer than 30 characters");

  return { valid: errors.length === 0, errors };
};

export const validateEmail = (email: string): Validation => {
  const errors: string[] = [];
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.length === 0) errors.push('Please enter an email address.');
  if (!regex.test(email)) errors.push('Invalid email address.');

  return { valid: errors.length === 0, errors };
};
