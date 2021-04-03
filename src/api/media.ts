import { Genre } from '../enums';
import {
  Medium,
  Movie,
  TmdbEntity,
  TmdbMovie,
  TmdbTvShow,
  TVShow,
} from '../types';
import {
  discoverMovies,
  discoverTvShows,
  getImageUrl,
  isMovie,
  isTvShow,
  trendingMovies,
  trendingTvShows,
} from './tmdb';

export const getTrending = async () => {
  const tmdbEntities = await trendingMovies();

  return tmdbEntities.map((tmdbEntity) => {
    let title = '';

    if (isMovie(tmdbEntity)) title = (tmdbEntity as TmdbMovie).title;
    else if (isTvShow(tmdbEntity)) title = (tmdbEntity as TmdbTvShow).name;

    return {
      title,
      ...getMediumProps(tmdbEntity),
    } as Medium;
  });
};

export const getMovies = async (genre?: Genre) => {
  const tmdbMovies =
    genre !== undefined ? await discoverMovies(genre) : await trendingMovies();

  return tmdbMovies.map((tmdbMovie) => {
    return {
      title: tmdbMovie.title,
      ...getMediumProps(tmdbMovie),
    } as Movie;
  });
};

export const getTvShows = async (genre?: Genre) => {
  const tmdbTvShows =
    genre !== undefined
      ? await discoverTvShows(genre)
      : await trendingTvShows();

  return tmdbTvShows.map((tmdbTvShow) => {
    return {
      title: tmdbTvShow.name,
      ...getMediumProps(tmdbTvShow),
    } as TVShow;
  });
};

const getMediumProps = (tmdbEntity: TmdbEntity) => {
  return {
    id: tmdbEntity.id,
    image: getImageUrl(tmdbEntity.backdrop_path),
    largeImage: getImageUrl(tmdbEntity.backdrop_path, true),
    genres: tmdbEntity.genres,
    description: tmdbEntity.overview,
    rating: tmdbEntity.vote_average,
  };
};
