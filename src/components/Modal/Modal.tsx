import React, { useEffect, useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { EpisodeGuide, Spinner } from '..';
import { MediaType } from '../../enums';
import useDetails from '../../hooks/useDetails';
import { Medium, MovieDetails, TVShowDetails } from '../../types';
import PreviewHero from '../PreviewHero/PreviewHero';
import './Modal.css';

interface Props {
  medium: Medium;
  closeModal(): void;
}

const Modal = ({ medium, closeModal }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mediumDetails, isLoading } = useDetails(medium.id, medium.type);

  useEffect(() => {
    const handleMouseClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleMouseClick, false);
    return () => {
      document.removeEventListener('mousedown', handleMouseClick, false);
    };
  }, [closeModal]);

  return (
    <div className="Modal">
      <div className="Modal__inner" ref={containerRef}>
        {isLoading && <Spinner />}
        {mediumDetails && (
          <>
            <div className="Modal__header">
              <div className="Modal__btnClose" onClick={closeModal}>
                <IoMdClose />
              </div>
              <PreviewHero medium={mediumDetails} modal />
              <div className="Modal__gradient" />
            </div>
            <div className="Modal__body">
              <div className="Modal__info">
                <div className="Modal__infoLeft">
                  <ul className="Modal__metaTags">
                    <li className="Modal__rating">
                      <AiFillStar />{' '}
                      <span>{mediumDetails?.rating.toFixed(1)}</span>
                    </li>
                    <li>{new Date(mediumDetails.releaseDate).getFullYear()}</li>
                    {mediumDetails.type === MediaType.TvShow ? (
                      <li>
                        {(mediumDetails as TVShowDetails).totalSeasons}{' '}
                        {(mediumDetails as TVShowDetails).totalSeasons > 1
                          ? 'Seasons'
                          : 'Season'}
                      </li>
                    ) : (
                      <li>Movie</li>
                    )}
                  </ul>
                  <div className="Modal__description">
                    {mediumDetails?.description}
                  </div>
                </div>
                <div className="Modal__infoRight">
                  <div className="Modal__metaRow">
                    <span className="Modal__metaTitle">Genres: </span>
                    {mediumDetails?.genres.slice(0, 3).map((genre, idx) => (
                      <span key={idx}>
                        {genre}
                        {idx !== mediumDetails.genres.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  {mediumDetails.type === MediaType.Movie && (
                    <div className="Modal__metaRow">
                      <span className="Modal__metaTitle">Runtime: </span>
                      <span>
                        {(mediumDetails as MovieDetails).runtime} minutes
                      </span>
                    </div>
                  )}
                  {mediumDetails.type === MediaType.TvShow && (
                    <div className="Modal__metaRow">
                      <span className="Modal__metaTitle">Total episodes: </span>
                      <span>
                        {(mediumDetails as TVShowDetails).totalEpisodes}
                      </span>
                    </div>
                  )}
                  {mediumDetails.tagline && (
                    <div className="Modal__metaRow">
                      <span className="Modal__metaTitle">Tagline: </span>
                      <span>{mediumDetails.tagline}</span>
                    </div>
                  )}
                </div>
              </div>
              {mediumDetails.type === MediaType.TvShow && (
                <EpisodeGuide tvShowDetails={mediumDetails as TVShowDetails} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
