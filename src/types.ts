import { Genre } from './enums';

export interface AccordionData {
  title: string;
  description: string;
}

export interface MenuLink {
  title: string;
  href: string;
}

export interface TmdbEntity {
  poster_path: string;
  overview: string;
  id: number;
  popularity: number;
  backdrop_path: string;
  genre_ids: number[];
  vote_average: number;
  orignal_language: string;
  vote_count: number;
  media_type: TmdbMediaType;
  genres: Genre[];
}

export interface TmdbMovie extends TmdbEntity {
  release_date: string;
  original_title: string;
  title: string;
  video: boolean;
}

export interface TmdbTvShow extends TmdbEntity {
  first_air_date: string;
  origin_country: string[];
  name: string;
  originalName: string;
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
}

export interface Movie extends Medium {}
export interface TVShow extends Medium {}
