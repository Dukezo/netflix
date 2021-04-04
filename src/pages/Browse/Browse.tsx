import React, { useEffect, useState } from 'react';
import { Footer, Modal, Navbar, PreviewHero, Slider } from '../../components';
import './Browse.css';
import { Genre, MediaType } from '../../enums';
import footerLinks from '../../data/browse-footer-links.json';
import { Medium } from '../../types';

const Browse = () => {
  const [modalMedium, setModalMedium] = useState<Medium | null>(null);

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

  return (
    <div className="Browse">
      <Navbar />
      {modalMedium && <Modal medium={modalMedium} closeModal={closeModal} />}
      <PreviewHero showModal={showModal} />
      <div className="Browse__sliders">
        <Slider title="Trending Now" showModal={showModal} />
        <Slider
          title="Action & Adventure"
          mediaType={MediaType.TvShow}
          genre={Genre.ActionAdventure}
          showModal={showModal}
        />
        <Slider
          title="Comedies"
          mediaType={MediaType.TvShow}
          genre={Genre.Comedy}
          showModal={showModal}
        />
        <Slider
          title="Scary Movies"
          mediaType={MediaType.Movie}
          genre={Genre.Horror}
          showModal={showModal}
        />
        <Slider
          title="Dramas"
          mediaType={MediaType.TvShow}
          genre={Genre.Drama}
          showModal={showModal}
        />
        <Slider
          title="Thriller Movies"
          mediaType={MediaType.Movie}
          genre={Genre.Thriller}
          showModal={showModal}
        />
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
