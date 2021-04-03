import React, { useEffect, useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Button, Hero } from '..';
import { getTrending } from '../../api/media';
import { Medium } from '../../types';
import truncateText from '../../utils/truncate-text';
import PlayButton from '../PlayButton/PlayButton';
import './PreviewHero.css';

const PreviewHero = () => {
  const [medium, setMedium] = useState<Medium>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trending = await getTrending();
        setMedium(trending[Math.floor(Math.random() * trending.length)]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Hero image={medium?.largeImage} className="PreviewHero">
      {medium && (
        <div className="PreviewHero__info">
          <h1 className="PreviewHero__title">{medium.title}</h1>
          <div className="PreviewHero__description">
            {truncateText(medium.description, 220)}
          </div>
          <div className="PreviewHero__buttons">
            <PlayButton />
            <Button className="PreviewHero__moreInfo">
              <AiOutlineInfoCircle /> More Info
            </Button>
          </div>
        </div>
      )}
    </Hero>
  );
};

export default PreviewHero;
