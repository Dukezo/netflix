import React from 'react';
import { Footer, Navbar, PreviewHero, Slider } from '../../components';
import './Browse.css';
import { Genre, MediaType } from '../../enums';
import footerLinks from '../../data/browse-footer-links.json';

const Browse = () => {
  return (
    <div className="Browse">
      <Navbar />
      <PreviewHero />
      <div className="Browse__sliders">
        <Slider title="Trending Now" />
        <Slider
          title="Action & Adventure"
          mediaType={MediaType.TvShow}
          genre={Genre.ActionAdventure}
        />
        <Slider
          title="Comedies"
          mediaType={MediaType.TvShow}
          genre={Genre.Comedy}
        />
        <Slider
          title="Scary Movies"
          mediaType={MediaType.Movie}
          genre={Genre.Horror}
        />
        <Slider
          title="Dramas"
          mediaType={MediaType.TvShow}
          genre={Genre.Drama}
        />
        <Slider
          title="Thriller Movies"
          mediaType={MediaType.Movie}
          genre={Genre.Thriller}
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
