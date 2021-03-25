import React, { useState } from 'react';
import { AccordionData } from '../../../types';
import './AccordionItem.css';
import { GrClose, GrAdd } from 'react-icons/gr';

interface Props extends AccordionData {}

const AccordionItem = ({ title, description }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="AccordionItem">
      <div className="AccordionItem__heading" onClick={handleClick}>
        <div className="AccordionItem__title">{title}</div>
        <div className="AccordionItem__iconWrapper">
          {isCollapsed ? <GrClose /> : <GrAdd />}
        </div>
      </div>
      <div
        className={`AccordionItem__descriptionWrapper${
          isCollapsed ? ' AccordionItem__descriptionWrapper--collapsed' : ''
        }`}
      >
        <div
          className={`AccordionItem__description`}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

export default AccordionItem;
