import React from 'react';
import { Link } from 'react-router-dom';
import mergeClassNames from '../../utils/merge-class-names';
import './Button.css';

interface Props {
  link?: string;
}

const Button: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ link, children, ...props }) => {
  const buttonElement = (
    <button {...props} className={mergeClassNames('Button', props.className)}>
      {children}
    </button>
  );

  if (link)
    return (
      <Link to={link} className="Button__link">
        {buttonElement}
      </Link>
    );

  return buttonElement;
};

export default Button;
