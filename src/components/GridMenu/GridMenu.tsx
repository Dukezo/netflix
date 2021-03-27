import React from 'react';
import { MenuLink } from '../../types';
import './GridMenu.css';

interface Props {
  links: MenuLink[][];
}

const GridMenu = ({ links: items }: Props) => {
  return (
    <div className="GridMenu">
      {items.map((column, columnIdx) => {
        let elements: JSX.Element[] = column.map(
          ({ title, href }, elementIdx) => {
            return (
              <li key={elementIdx}>
                <a href={href}>{title}</a>
              </li>
            );
          }
        );
        return (
          <ul key={columnIdx} className="GridMenu__column">
            {elements}
          </ul>
        );
      })}
    </div>
  );
};

export default GridMenu;
