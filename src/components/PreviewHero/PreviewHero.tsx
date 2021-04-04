import React, { useEffect, useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Button, Hero, PlayButton, Spinner } from '..';
import { getTrending } from '../../api/media';
import { Medium } from '../../types';
import mergeClassNames from '../../utils/merge-class-names';
import truncateText from '../../utils/truncate-text';
import './PreviewHero.css';

interface Props {
  medium?: Medium;
  modal?: boolean;
  showModal?(medium: Medium): void;
}

const PreviewHero = ({
  medium: initMedium,
  showModal,
  modal = false,
}: Props) => {
  const [medium, setMedium] = useState<Medium | undefined>(initMedium);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (medium) return;

    const fetchData = async () => {
      try {
        const trending = await getTrending();
        setMedium(trending[Math.floor(Math.random() * trending.length)]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchData();
  }, [medium]);

  return (
    <Hero
      spinnerVisible={isLoading}
      image={medium?.largeImage}
      className={mergeClassNames('PreviewHero', {
        'PreviewHero--modal': modal,
      })}
    >
      {medium && (
        <div className="PreviewHero__info">
          <h1 className="PreviewHero__title">{medium?.title}</h1>
          {!modal && (
            <div className="PreviewHero__description">
              {truncateText(medium.description, 220)}
            </div>
          )}

          <div className="PreviewHero__buttons">
            <PlayButton size={modal ? 'sm' : undefined} />
            {!modal && (
              <Button
                className="PreviewHero__moreInfo"
                onClick={() => {
                  if (showModal) showModal(medium);
                }}
              >
                <AiOutlineInfoCircle /> More Info
              </Button>
            )}
          </div>
        </div>
      )}
    </Hero>
  );
};

export default PreviewHero;
