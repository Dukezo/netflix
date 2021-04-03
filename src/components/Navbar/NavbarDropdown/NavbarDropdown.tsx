import React, { useRef, useState } from 'react';
import './NavbarDropdown.css';
import { IoMdArrowDropup } from 'react-icons/io';
import mergeClassNames from '../../../utils/merge-class-names';

interface Props {
  trigger: JSX.Element;
  caretOffset?: number;
  isFilter?: boolean;
}

const NavbarDropdown: React.FC<Props> = ({
  trigger,
  caretOffset,
  isFilter = false,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimerRef = useRef<NodeJS.Timeout>();

  const showDropdown = () => {
    setIsVisible(true);
  };

  const hideDropdown = () => {
    if (!isVisible) return;

    stopTimer();
    hideTimerRef.current = setTimeout(() => setIsVisible(false), 250);
  };

  const stopTimer = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  return (
    <div
      className="NavbarDropdown"
      onMouseLeave={hideDropdown}
      onMouseEnter={stopTimer}
    >
      <div className="NavbarDropdown__trigger" onMouseEnter={showDropdown}>
        {trigger}
      </div>
      <div
        className={mergeClassNames('NavbarDropdown__dropdown', {
          'NavbarDropdown__dropdown--visible': isVisible,
          'NavbarDropdown__dropdown--filter': isFilter,
        })}
      >
        <IoMdArrowDropup
          className="NavbarDropdown__caret"
          style={{ right: caretOffset }}
        />
        {children}
      </div>
    </div>
  );
};

export default NavbarDropdown;
