import React, { useRef } from 'react';
import mergeClassNames from '../../utils/merge-class-names';
import './Input.css';

interface Props {
  label: string;
  containerClassName?: string;
}

let idCounter = 0;

const Input = ({
  label,
  containerClassName,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  const id = useRef(`input_${idCounter++}`);

  return (
    <div className={mergeClassNames('Input', containerClassName)}>
      <input
        {...props}
        className={mergeClassNames('Input__inputField', props.className)}
        placeholder=" "
        id={id.current}
        onChange={() => {
          console.log(idCounter);
        }}
      />
      <label className="Input__label" htmlFor={id.current}>
        {label}
      </label>
    </div>
  );
};

export default Input;
