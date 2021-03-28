import React from 'react';
import mergeClassNames from '../../utils/merge-class-names';
import './Input.css';

interface Props {
  label: string;
}

const Input = ({
  label,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="Input">
      <input
        {...props}
        className={mergeClassNames('Input__inputField', props.className)}
        placeholder=" "
      />
      <label className="Input__label">{label}</label>
    </div>
  );
};

export default Input;
