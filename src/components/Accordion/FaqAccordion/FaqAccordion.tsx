import React from 'react';
import faqData from '../../../data/faq.json';
import Accordion from '../Accordion';

const FaqAccordion = () => {
  return <Accordion title="Frequently Asked Questions" items={faqData} />;
};

export default FaqAccordion;
