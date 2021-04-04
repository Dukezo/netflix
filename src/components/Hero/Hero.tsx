import React from 'react';
import { Spinner } from '..';
import mergeClassNames from '../../utils/merge-class-names';
import './Hero.css';

interface Props {
  image?: string;
  className?: string;
  spinnerVisible?: boolean;
}

const Hero: React.FC<Props> = ({
  image,
  className,
  spinnerVisible,
  children,
}) => {
  return (
    <div
      className={mergeClassNames('Hero', className)}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      {spinnerVisible && <Spinner />}
      <div className="Hero__content">{children}</div>
    </div>
  );
};

export default Hero;
