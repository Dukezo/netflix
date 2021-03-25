import React from 'react';
import './Hero.css';

interface Props {
  image: string;
}

const Hero: React.FC<Props> = ({ image, children }) => {
  return (
    <div className="Hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="Hero__content">{children}</div>
    </div>
  );
};

export default Hero;
