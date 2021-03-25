import React from 'react';
import './Feature.css';

interface Props {
  title: string;
  image?: string;
}

const Feature: React.FC<Props> = ({ title, image, children }) => {
  return (
    <div className="Feature">
      <h1 className="Feature__title">{title}</h1>
      <p className="Feature__desc">{children}</p>
    </div>
  );
};

export default Feature;
