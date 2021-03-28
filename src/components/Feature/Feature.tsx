import React from 'react';
import mergeClassNames from '../../utils/merge-class-names';
import './Feature.css';

interface Props {
  title: string;
  animation?: JSX.Element;
  adjustAnimationMobileMargin?: boolean;
  flipped?: boolean;
  titleFontSize?: string;
}

const Feature: React.FC<Props> = ({
  title,
  animation,
  adjustAnimationMobileMargin = false,
  flipped = false,
  titleFontSize,
  children,
}) => {
  let classNames: string[] = [];

  if (animation !== null) classNames.push('Feature--hasAnimation');
  if (flipped) classNames.push('Feature--flipped');

  return (
    <div className={mergeClassNames('Feature', ...classNames)}>
      <div className="Feature__info">
        <h1
          className="Feature__title"
          style={
            titleFontSize !== null ? { fontSize: titleFontSize } : undefined
          }
        >
          {title}
        </h1>
        <p className="Feature__desc">{children}</p>
      </div>
      {animation && (
        <div
          className={mergeClassNames('Feature__animation', {
            'Feature__animation--mobileMoveUp': adjustAnimationMobileMargin,
          })}
        >
          {animation}
        </div>
      )}
    </div>
  );
};

export default Feature;
