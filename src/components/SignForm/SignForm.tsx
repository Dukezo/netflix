import React, { FormEvent, RefObject } from 'react';
import './SignForm.css';
import { Button, Input } from '..';

interface InputField {
  label: string;
  ref?: RefObject<HTMLInputElement>;
  error?: string;
}

interface Props {
  fields: (InputField & React.InputHTMLAttributes<HTMLInputElement>)[];
  buttonText: string;
  onSubmit?(e: FormEvent<HTMLFormElement>): void;
}

const SignForm = ({ fields, buttonText, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      {fields.map(({ label, ref, error, ...props }, idx) => (
        <Input
          key={idx}
          label={label}
          ref={ref}
          containerClassName="SignForm__inputContainer"
          className="SignForm__input"
          variant="dark"
          error={error}
          {...props}
        />
      ))}
      <Button className="SignForm__submit">{buttonText}</Button>
    </form>
  );
};

export default SignForm;
