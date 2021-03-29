import React, { useRef } from 'react';
import mergeClassNames from '../../utils/merge-class-names';
import './Input.css';

interface Props {
  label: string;
  containerClassName?: string;
  variant?: 'dark';
  error?: string;
}

// Used to generate unique IDs for each input element.
let idCounter = 0;

const Input = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>(({ label, containerClassName, variant, error, ...props }, ref) => {
  const id = useRef(`input_${idCounter++}`);

  return (
    <>
      <div
        className={mergeClassNames('Input', containerClassName, {
          'Input--dark': variant !== undefined,
        })}
      >
        <div className="Input__inputFieldWrapper">
          <input
            {...props}
            className={mergeClassNames('Input__inputField', props.className, {
              'Input__inputField--hasError':
                error !== undefined && error.length > 0,
            })}
            placeholder=" "
            id={id.current}
            ref={ref}
          />
          <label className="Input__label" htmlFor={id.current}>
            {label}
          </label>
        </div>
        {error && <div className="Input__error">{error}</div>}
      </div>
    </>
  );
});

export default Input;
