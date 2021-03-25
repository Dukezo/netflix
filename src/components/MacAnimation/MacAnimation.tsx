import React from 'react';
import './MacAnimation.css';
import macImage from '../../assets/images/mac.png';
import macVideo from '../../assets/videos/mac_video.m4v';

const MacAnimation = () => {
  return (
    <div className="MacAnimation">
      <img src={macImage} alt="Watch on TV" className="MacAnimation__image" />
      <video autoPlay playsInline muted loop className="MacAnimation__video">
        <source src={macVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default MacAnimation;
