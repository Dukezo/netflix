import React, { HTMLAttributes } from 'react';
import './LanguagePicker.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { IoGlobeOutline } from 'react-icons/io5';
import mergeClassNames from '../../utils/merge-class-names';

const LanguagePicker: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  ...props
}) => {
  return (
    <label
      {...props}
      className={mergeClassNames('LanguagePicker', props.className)}
    >
      <select>
        <option>English</option>
      </select>
      <IconContext.Provider value={{ className: 'LanguagePicker__arrow' }}>
        <IoMdArrowDropdown />
      </IconContext.Provider>
    </label>
  );
};

export default LanguagePicker;
