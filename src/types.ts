import { Genre, MediaType } from './enums';

export interface User {
  email: string;
}

export interface AccordionData {
  title: string;
  description: string;
}

export interface MenuLink {
  title: string;
  href: string;
}

export interface TmdbGenre {
  id: number;
  name: string;
}

interface TmdbEntityProps {
  poster_path: string;
  overview: string;
  id: number;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  orignal_language: string;
  vote_count: number;
  media_type: TmdbMediaType;
}

interface TmdbGenreIds {
  genre_ids: number[];
}

interface TmdbMovieProps {
  release_date: string;
  original_title: string;
  title: string;
  video: boolean;
  adult: boolean;
}

interface TmdbTvShowProps {
  first_air_date: string;
  origin_country: string[];
  name: string;
  originalName: string;
}

export type TmdbEntity = TmdbEntityProps & TmdbGenreIds;
export type TmdbMovie = TmdbMovieProps & TmdbEntityProps & TmdbGenreIds;
export type TmdbTvShow = TmdbTvShowProps & TmdbEntityProps & TmdbGenreIds;

export interface TmdbDetails extends TmdbEntityProps {
  tagline: string;
  genres: TmdbGenre[];
}

export interface TmdbMovieDetails extends TmdbMovieProps, TmdbDetails {
  runtime: number;
  budget: number;
  revenue: number;
  release_date: string;
  genre_ids: never;
}

export interface TmdbTvShowDetails extends TmdbTvShowProps, TmdbDetails {
  episode_run_time: number;
  number_of_episodes: number;
  seasons: TmdbSeason[];
  in_production: boolean;
  first_air_date: string;
  genre_ids: never;
}

export interface TmdbSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  episodes: TmdbEpisode[];
}

export interface TmdbEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: string;
}

export type TmdbMediaType = 'movie' | 'tv';
export type TmdbTimeWindow = 'day' | 'week';

export interface Medium {
  id: number;
  title: string;
  image: string;
  largeImage: string;
  description: string;
  rating: number;
  genres: Genre[];
  type: MediaType;
}

export interface MediumDetails extends Medium {
  tagline: string;
  releaseDate: string;
}

export interface MovieDetails extends MediumDetails {
  budget: number;
  revenue: number;
  runtime: number;
}

export interface TVShowDetails extends MediumDetails {
  totalEpisodes: number;
  totalSeasons: number;
  inProduction: boolean;
}

export interface TVShowEpisode {
  id: number;
  title: string;
  description: string;
  image: string;
}
