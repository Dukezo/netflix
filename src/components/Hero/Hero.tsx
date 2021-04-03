import React from 'react';
import mergeClassNames from '../../utils/merge-class-names';
import './Hero.css';

interface Props {
  image?: string;
  className?: string;
}

const Hero: React.FC<Props> = ({ image, className, children }) => {
  return (
    <div
      className={mergeClassNames('Hero', className)}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <div className="Hero__content">{children}</div>
    </div>
  );
};

export default Hero;
