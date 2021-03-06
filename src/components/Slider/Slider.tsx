import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Spinner } from '..';
import { Genre, MediaType } from '../../enums';
import useMedia from '../../hooks/useMedia';
import useSlider from '../../hooks/useSlider';
import { Medium } from '../../types';
import './Slider.css';
import SliderCard from './SliderCard/SliderCard';

interface Props {
  title: string;
  genre?: Genre;
  mediaType?: MediaType;
  showModal(medium: Medium): void;
}

const Slider = ({ title, genre, mediaType, showModal }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { slideLeft, slideRight } = useSlider(containerRef);
  const { media, isLoading } = useMedia(mediaType, genre);

  return (
    <div className="Slider">
      {isLoading && <Spinner />}
      <h2 className="Slider__title">{title}</h2>
      <div className="Slider__slidesWrapper">
        <div className="Slider__cards" ref={containerRef}>
          {media.map((medium, idx) => (
            <SliderCard key={idx} medium={medium} showModal={showModal} />
          ))}
        </div>
        <div className="Slider__slideLeft" onClick={slideLeft}>
          <IoIosArrowBack />
        </div>
        <div className="Slider__slideRight" onClick={slideRight}>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Slider;
