import React, { FormEvent, RefObject } from 'react';
import './SignForm.css';
import { Button, Input } from '..';

interface InputField {
  label: string;
  ref?: RefObject<HTMLInputElement>;
  error?: string;
  defaultValue?: string;
}

interface Props {
  fields: (InputField & React.InputHTMLAttributes<HTMLInputElement>)[];
  buttonText: string;
  buttonDisabled?: boolean;
  onSubmit?(e: FormEvent<HTMLFormElement>): void;
}

const SignForm = ({
  fields,
  buttonText,
  buttonDisabled = false,
  onSubmit,
}: Props) => {
  return (
    <form onSubmit={onSubmit}>
      {fields.map(({ label, ref, defaultValue, error, ...props }, idx) => (
        <Input
          key={idx}
          label={label}
          ref={ref}
          defaultValue={defaultValue}
          containerClassName="SignForm__inputContainer"
          className="SignForm__input"
          variant="dark"
          error={error}
          {...props}
        />
      ))}
      <Button
        className="SignForm__submit"
        type="submit"
        disabled={buttonDisabled}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default SignForm;
