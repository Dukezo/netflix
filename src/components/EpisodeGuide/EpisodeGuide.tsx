import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { getEpisodes } from '../../api/media';
import { TVShowDetails, TVShowEpisode } from '../../types';
import Spinner from '../Spinner/Spinner';
import './EpisodeGuide.css';

interface Props {
  tvShowDetails: TVShowDetails;
}

const EpisodeGuide = ({ tvShowDetails }: Props) => {
  const [season, setSeason] = useState(1);
  const [episodes, setEpisodes] = useState<TVShowEpisode[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setEpisodes(await getEpisodes(tvShowDetails.id, season));
      } catch (err) {
        console.error(err);
        setEpisodes([]);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchEpisodes();
  }, [season, tvShowDetails]);

  const renderSeasons = () => {
    let options = [];

    for (let i = 1; i <= tvShowDetails.totalSeasons; i++) {
      options.push(
        <option key={i} value={i}>
          Season {i}
        </option>
      );
    }

    return options;
  };

  return (
    <div className="EpisodeGuide">
      <div className="EpisodeGuide__heading">
        <h2>Episodes</h2>
        <label className="EpisodeGuide__seasonPicker">
          <select onChange={(e) => setSeason(parseInt(e.currentTarget.value))}>
            {renderSeasons()}
          </select>
          <IoMdArrowDropdown />
        </label>
      </div>
      <div className="EpisodeGuide__episodes">
        {isLoading ? (
          <Spinner />
        ) : episodes.length === 0 ? (
          <div className="EpisodeGuide__error">No episodes found</div>
        ) : (
          episodes.map((episode, idx) => (
            <div key={episode.id} className="EpisodeGuide__episode">
              <div className="EpisodeGuide__number">{idx + 1}</div>
              <img
                className="EpisodeGuide__image"
                src={episode.image}
                alt={episode.title}
              />
              <div className="EpisodeGuide__info">
                <h4 className="EpisodeGuide__infoTitle">{episode.title}</h4>
                <div className="EpisodeGuide__infoDescription">
                  {episode.description}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EpisodeGuide;
