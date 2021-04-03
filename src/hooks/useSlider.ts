import React, { useCallback, useEffect, useState } from 'react';

const useSlider = (elementRef: React.MutableRefObject<HTMLElement>) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reversed, setReversed] = useState(false);

  const getMaxSlides = useCallback(() => {
    return Math.round(
      elementRef.current.scrollWidth / elementRef.current.clientWidth
    );
  }, [elementRef]);

  useEffect(() => {
    const scrollPos = reversed
      ? elementRef.current.scrollWidth -
        elementRef.current.clientWidth * (getMaxSlides() - currentSlide + 1)
      : elementRef.current.clientWidth * currentSlide;
    elementRef.current.scrollLeft = scrollPos;
  }, [currentSlide, reversed, elementRef, getMaxSlides]);

  const slideRight = () => {
    if (currentSlide + 1 > getMaxSlides()) {
      setReversed(false);
      setCurrentSlide(0);
    } else setCurrentSlide((prev) => prev + 1);
  };

  const slideLeft = () => {
    if (currentSlide - 1 < 0) {
      setReversed(true);
      setCurrentSlide(getMaxSlides());
    } else setCurrentSlide((prev) => prev - 1);
  };

  return { slideLeft, slideRight };
};

export default useSlider;
