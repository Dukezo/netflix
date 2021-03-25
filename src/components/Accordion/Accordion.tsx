import React from 'react';
import { AccordionData } from '../../types';
import './Accordion.css';
import AccordionItem from './AccordionItem/AccordionItem';

interface Props {
  title: string;
  items: AccordionData[];
}

const Accordion = ({ title, items }: Props) => {
  return (
    <div className="Accordion">
      <h1 className="Accordion__title">{title}</h1>
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
