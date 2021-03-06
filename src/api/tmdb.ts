import { Genre } from '../enums';
import {
  TmdbEntity,
  TmdbMediaType,
  TmdbMovie,
  TmdbDetails,
  TmdbTimeWindow,
  TmdbTvShow,
  TmdbMovieDetails,
  TmdbTvShowDetails,
  TmdbSeason,
  TmdbGenre,
} from '../types';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY as string;
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';
const GENRE_IDS = {
  [Genre.Action]: 28,
  [Genre.Adventure]: 12,
  [Genre.Animation]: 16,
  [Genre.Comedy]: 35,
  [Genre.Crime]: 80,
  [Genre.Documentary]: 99,
  [Genre.Drama]: 18,
  [Genre.Family]: 10751,
  [Genre.Fantasy]: 14,
  [Genre.History]: 36,
  [Genre.Horror]: 27,
  [Genre.Music]: 10402,
  [Genre.Mystery]: 9648,
  [Genre.Romance]: 10749,
  [Genre.ScienceFiction]: 878,
  [Genre.TVMovie]: 10770,
  [Genre.Thriller]: 53,
  [Genre.War]: 10752,
  [Genre.Western]: 37,
  [Genre.ActionAdventure]: 10759,
};

export const discoverMovies = async (genre?: Genre) => {
  return (await discover('movie', genre)) as TmdbMovie[];
};

export const discoverTvShows = async (genre?: Genre) => {
  return (await discover('tv', genre)) as TmdbTvShow[];
};

const discover = async (type: TmdbMediaType, genre?: Genre) => {
  const response = await fetch(
    `${BASE_URL}/discover/${type}?` +
      new URLSearchParams({
        api_key: API_KEY,
        ...(genre !== undefined && { with_genres: '' + GENRE_IDS[genre] }),
      })
  );
  const json = await response.json();
  return json.results as TmdbEntity[];
};

export const trendingMovies = async (timeWindow: TmdbTimeWindow = 'week') => {
  return (await trending('movie', timeWindow)) as TmdbMovie[];
};

export const trendingTvShows = async (timeWindow: TmdbTimeWindow = 'week') => {
  return (await trending('tv', timeWindow)) as TmdbTvShow[];
};

export const trending = async (
  type: TmdbMediaType | 'all' = 'all',
  timeWindow: TmdbTimeWindow = 'week'
) => {
  const response = await fetch(
    `${BASE_URL}/trending/${type}/${timeWindow}?` +
      new URLSearchParams({
        api_key: API_KEY,
      })
  );
  const json = await response.json();
  let results = json.results as TmdbEntity[];
  // Filter out person media type
  return results.filter((result) => isMovie(result) || isTvShow(result));
};

export const details = async (type: TmdbMediaType, id: number) => {
  const response = await fetch(
    `${BASE_URL}/${type}/${id}?` +
      new URLSearchParams({
        api_key: API_KEY,
      })
  );
  const json = await response.json();
  return json as TmdbDetails;
};

export const detailsMovie = async (id: number) => {
  return (await details('movie', id)) as TmdbMovieDetails;
};

export const detailsTvShow = async (id: number) => {
  return (await details('tv', id)) as TmdbTvShowDetails;
};

export const season = async (tvShowId: number, season: number) => {
  const response = await fetch(
    `${BASE_URL}/tv/${tvShowId}/season/${season}?` +
      new URLSearchParams({
        api_key: API_KEY,
      })
  );
  return (await response.json()) as TmdbSeason;
};

// Util functions
export const convertGenreIds = (genreIds: number[]) => {
  return (Object.keys(GENRE_IDS) as unknown as Genre[]).filter((genre) =>
    genreIds.includes(GENRE_IDS[genre])
  );
};

export const convertGenreObjects = (genres: TmdbGenre[]) => {
  return genres.reduce<Genre[]>((convertedGenres, { id }) => {
    const key = Object.keys(GENRE_IDS).find(
      (key) => GENRE_IDS[key as Genre] === id
    );

    if (key !== undefined) convertedGenres.push(key as Genre);
    return convertedGenres;
  }, []);
};

export const getImageUrl = (backdropPath: string, large = false) => {
  return `${BASE_IMAGE_URL}/${large ? 'w1280' : 'w500'}${backdropPath}`;
};

// Type guards
export const isMovie = (entity: TmdbEntity): entity is TmdbMovie => {
  const movie = entity as TmdbMovie;
  return (
    movie.title !== undefined &&
    (movie.media_type !== undefined ? movie.media_type === 'movie' : true)
  );
};

export const isTvShow = (entity: TmdbEntity): entity is TmdbTvShow => {
  const tvShow = entity as TmdbTvShow;
  return (
    tvShow.name !== undefined &&
    (tvShow.media_type !== undefined ? tvShow.media_type === 'tv' : true)
  );
};

export const isDetailsEntity = (
  entity: TmdbEntity | TmdbDetails
): entity is TmdbDetails => {
  return (entity as TmdbDetails).genres !== undefined;
};
