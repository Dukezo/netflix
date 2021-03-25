import React from 'react';
import './PhoneAnimation.css';
import phoneImage from '../../assets/images/phone.jpg';
import posterImage from '../../assets/images/poster.png';
import downloadIcon from '../../assets/images/download-icon.gif';

const PhoneAnimation = () => {
  return (
    <div className="PhoneAnimation">
      <img
        src={phoneImage}
        alt="Download and watch offline"
        className="PhoneAnimation__image"
      />
      <div className="PhoneAnimation__downloadContainer">
        <img
          src={posterImage}
          alt="Stranger Things"
          className="PhoneAnimation__downloadPoster"
        />
        <div className="PhoneAnimation__downloadInfo">
          <div className="PhoneAnimation__downloadTitle">Stranger Things</div>
          <div className="PhoneAnimation__downloadStatus">Downloading...</div>
        </div>
        <img
          src={downloadIcon}
          alt="Download"
          className="PhoneAnimation__downloadIcon"
        />
      </div>
    </div>
  );
};

export default PhoneAnimation;
