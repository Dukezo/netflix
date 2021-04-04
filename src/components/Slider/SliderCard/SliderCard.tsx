import React, { useState } from 'react';
import { AiFillStar, AiOutlineInfoCircle } from 'react-icons/ai';
import { Medium } from '../../../types';
import mergeClassNames from '../../../utils/merge-class-names';
import './SliderCard.css';

interface Props {
  medium: Medium;
  showModal(medium: Medium): void;
}

const SliderCard = ({ medium, showModal }: Props) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <div
      className={mergeClassNames('SliderCard', {
        'SliderCard--highlight': highlight,
      })}
      onMouseLeave={() => setHighlight(false)}
    >
      <img
        className="SliderCard__thumbnail"
        src={medium.image}
        alt={medium.title}
        onMouseEnter={() => setHighlight(true)}
        onClick={() => showModal(medium)}
      />
      <div
        className="SliderCard__body"
        onClick={() => {
          if (highlight) showModal(medium);
        }}
      >
        <div className="SliderCard__heading">
          <h4 className="SliderCard__title">{medium.title}</h4>
          <AiOutlineInfoCircle
            className="SliderCard__btnDetails"
            title="Details"
          />
        </div>
        <div className="SliderCard__rating">
          <AiFillStar /> <span>{medium.rating.toFixed(1)}</span>
        </div>
        <ul className="SliderCard__genres">
          {medium.genres.slice(0, 3).map((genre, idx) => (
            <li key={idx}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SliderCard;
