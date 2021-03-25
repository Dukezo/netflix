import React from 'react';
import './Feature.css';

interface Props {
  title: string;
  animation?: JSX.Element;
}

const Feature: React.FC<Props> = ({ title, animation, children }) => {
  return (
    <div className={`Feature${animation !== null && ' Feature--hasAnimation'}`}>
      <div className="Feature__info">
        <h1 className="Feature__title">{title}</h1>
        <p className="Feature__desc">{children}</p>
      </div>
      {animation && <div className="Feature__animation">{animation}</div>}
    </div>
  );
};

export default Feature;
