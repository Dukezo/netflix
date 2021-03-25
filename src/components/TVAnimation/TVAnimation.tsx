import React from 'react';
import './TVAnimation.css';
import tvImage from '../../assets/images/tv.png';
import tvVideo from '../../assets/videos/tv_video.m4v';

const TVAnimation = () => {
  return (
    <div className="TVAnimation">
      <img src={tvImage} alt="Watch on TV" className="TVAnimation__image" />
      <video autoPlay playsInline muted loop className="TVAnimation__video">
        <source src={tvVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default TVAnimation;
