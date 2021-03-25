import React from 'react';
import './Menu.css';

interface Props {
  items: JSX.Element[];
}

const Menu = ({ items }: Props) => {
  return (
    <ul className="Menu">
      {items.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default Menu;
