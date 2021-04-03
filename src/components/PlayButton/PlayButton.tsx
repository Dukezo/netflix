import React from 'react';
import { GrPlayFill } from 'react-icons/gr';
import { Button } from '..';
import './PlayButton.css';

interface Props {}

const PlayButton: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ ...props }) => {
  return (
    <Button className="PlayButton" {...props}>
      <GrPlayFill /> Play
    </Button>
  );
};

export default PlayButton;
