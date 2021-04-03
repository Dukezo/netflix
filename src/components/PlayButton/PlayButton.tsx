import React from 'react';
import { GrPlayFill } from 'react-icons/gr';
import { Button } from '..';
import mergeClassNames from '../../utils/merge-class-names';
import './PlayButton.css';

interface Props {
  size?: 'sm';
}

const PlayButton: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ size, ...props }) => {
  return (
    <Button
      {...props}
      className={mergeClassNames('PlayButton', props.className, {
        'PlayButton--sm': size === 'sm',
      })}
    >
      <GrPlayFill /> Play
    </Button>
  );
};

export default PlayButton;
