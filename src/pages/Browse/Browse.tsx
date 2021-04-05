import React, { useEffect, useState } from 'react';
import { Footer, Modal, Navbar, PreviewHero, Slider } from '../../components';
import './Browse.css';
import { Genre, MediaType } from '../../enums';
import footerLinks from '../../data/browse-footer-links.json';
import { Medium } from '../../types';
import { useParams } from 'react-router-dom';

// prettier-ignore
const sliderConfig = {
  '': [
    {title: 'Trending Now'},
    {title: 'Action & Adventure', mediaType: MediaType.TvShow, genre: Genre.ActionAdventure},
    {title: 'Comedies', mediaType: MediaType.TvShow, genre: Genre.Comedy},
    {title: 'Scary Movies', mediaType: MediaType.Movie, genre: Genre.Horror},
    {title: 'Dramas', mediaType: MediaType.TvShow, genre: Genre.Drama},
    {title: 'Thriller Movies', mediaType: MediaType.Movie, genre: Genre.Thriller}
  ],
  'tv': [
    {title: 'Trending Now'},
    {title: 'Action & Adventure', genre: Genre.ActionAdventure},
    {title: 'Comedies', genre: Genre.Comedy},
    {title: 'Crime', genre: Genre.Crime},
    {title: 'Dramas', genre: Genre.Drama},
    {title: 'Animation', genre: Genre.Animation},
    {title: 'Documentary', genre: Genre.Documentary},
    {title: 'Sci-Fi', genre: Genre.ScienceFiction}
  ],
  'movies': [
    {title: 'Trending Now'},
    {title: 'Action & Adventure',  genre: Genre.Action},
    {title: 'Comedies', genre: Genre.Comedy},
    {title: 'Crime', genre: Genre.Crime},
    {title: 'Dramas', genre: Genre.Drama},
    {title: 'Animation', genre: Genre.Animation},
    {title: 'Documentary', genre: Genre.Documentary},
    {title: 'Sci-Fi', genre: Genre.ScienceFiction}
  ]
};

type SliderConfig = typeof sliderConfig;

const Browse = () => {
  const [modalMedium, setModalMedium] = useState<Medium | null>(null);
  const { filter } = useParams<{ filter: string }>();

  useEffect(() => {
    if (modalMedium) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [modalMedium]);

  const showModal = (medium: Medium) => {
    setModalMedium(medium);
  };

  const closeModal = () => {
    setModalMedium(null);
  };

  const getFilterMediaType = () => {
    if (filter === 'tv') return MediaType.TvShow;
    else if (filter === 'movies') return MediaType.Movie;
    return undefined;
  };

  return (
    <div className="Browse">
      <Navbar />
      {modalMedium && <Modal medium={modalMedium} closeModal={closeModal} />}
      <PreviewHero mediaType={getFilterMediaType()} showModal={showModal} />
      <div className="Browse__sliders">
        {Object.values(
          sliderConfig[
            sliderConfig.hasOwnProperty(filter)
              ? (filter as keyof SliderConfig)
              : ''
          ]
        ).map((props, idx) => (
          <Slider
            key={filter ? filter + idx : idx}
            {...(!props.hasOwnProperty('mediaType')
              ? { mediaType: getFilterMediaType(), ...props }
              : props)}
            showModal={showModal}
          />
        ))}
      </div>
      <Footer
        className="Browse__footer"
        menuLinks={footerLinks}
        showSocialMediaIcons
      />
    </div>
  );
};

export default Browse;
