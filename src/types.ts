import { Genre, MediaType } from './enums';

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
}

export interface TmdbMovie extends TmdbEntity {
  release_date: string;
  original_title: string;
  title: string;
  video: boolean;
  adult: boolean;
}

export interface TmdbTvShow extends TmdbEntity {
  first_air_date: string;
  origin_country: string[];
  name: string;
  originalName: string;
}

export interface TmdbDetails extends TmdbEntity {
  tagline: string;
  genres: TmdbGenre[];
}

export interface TmdbMovieDetails extends TmdbMovie, TmdbDetails {
  runtime: number;
  budget: number;
  revenue: number;
}

export interface TmdbTvShowDetails extends TmdbTvShow, TmdbDetails {
  episode_run_time: number;
  number_of_episodes: number;
  seasons: TmdbSeason[];
  in_production: boolean;
  first_air_date: string;
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
  details: MediumDetails;
}

export interface Movie extends Medium {}
export interface TVShow extends Medium {}

export interface MediumDetails extends Medium {
  tagline: string;
}

export interface MovieDetails extends Movie, MediumDetails {
  budget: number;
  revenue: number;
  runtime: number;
}

export interface TVShowDetails extends TVShow, MediumDetails {
  totalEpisodes: number;
  totalSeasons: number;
  inProduction: boolean;
  firstAirDate: string;
}

export interface TVShowEpisode {
  id: number;
  title: string;
  description: string;
  image: string;
}
