import React from 'react';
import mergeClassNames from '../../utils/merge-class-names';
import './Input.css';

interface Props {
  name: string;
  label: string;
  type: string;
  [x: string]: any;
}

const Input = ({ name, label, type, ...props }: Props) => {
  return (
    <div {...props} className={mergeClassNames('Input', props.className)}>
      <input
        id={`input_${name}`}
        type={type}
        className="Input__inputField"
        placeholder=" "
      />
      <label htmlFor={`input_${name}`} className="Input__label">
        {label}
      </label>
    </div>
  );
};

export default Input;
