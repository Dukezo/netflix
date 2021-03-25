import React from 'react';
import mergeClassNames from '../../utils/merge-class-names';
import './Button.css';

interface Props {
  [x: string]: any;
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props} className={mergeClassNames('Button', props.className)}>
      {children}
    </button>
  );
};

export default Button;
