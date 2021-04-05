import { type } from 'node:os';
import { Genre, MediaType } from '../enums';
import {
  Medium,
  Movie,
  MovieDetails,
  TmdbEntity,
  TmdbMovie,
  TmdbTvShow,
  TVShow,
  TVShowDetails,
  TVShowEpisode,
} from '../types';
import {
  convertGenreIds,
  convertGenresArray,
  detailsMovie,
  detailsTvShow,
  discoverMovies,
  discoverTvShows,
  getImageUrl,
  isMovie,
  isTvShow,
  trendingMovies,
  trendingTvShows,
  season,
  trending,
} from './tmdb';

export const getTrending = async (type?: MediaType) => {
  let tmdbEntities: TmdbEntity[];

  if (type === MediaType.Movie) tmdbEntities = await trendingMovies();
  else if (type === MediaType.TvShow) tmdbEntities = await trendingTvShows();
  else tmdbEntities = await trending();

  return tmdbEntities.map((tmdbEntity) => {
    let props = null;

    if (isMovie(tmdbEntity)) props = getMovieProps(tmdbEntity as TmdbMovie);
    else if (isTvShow(tmdbEntity))
      props = getTvShowProps(tmdbEntity as TmdbTvShow);

    return {
      ...props,
      ...getMediumProps(tmdbEntity),
    } as Medium;
  });
};

export const getMovies = async (genre?: Genre) => {
  const tmdbMovies =
    genre !== undefined ? await discoverMovies(genre) : await trendingMovies();

  return tmdbMovies.map((tmdbMovie) => {
    return {
      ...getMediumProps(tmdbMovie),
      ...getMovieProps(tmdbMovie),
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
      ...getMediumProps(tmdbTvShow),
      ...getTvShowProps(tmdbTvShow),
    } as TVShow;
  });
};

export const getMovieDetails = async (id: number) => {
  const tmdbMovieDetails = await detailsMovie(id);
  return {
    ...getMediumProps(tmdbMovieDetails),
    ...getMovieProps(tmdbMovieDetails),
    genres: convertGenresArray(tmdbMovieDetails.genres),
    runtime: tmdbMovieDetails.runtime,
    budget: tmdbMovieDetails.budget,
    revenue: tmdbMovieDetails.revenue,
    tagline: tmdbMovieDetails.tagline,
  } as MovieDetails;
};

export const getTvShowDetails = async (id: number) => {
  const tmdbTvShowDetails = await detailsTvShow(id);
  return {
    ...getMediumProps(tmdbTvShowDetails),
    ...getTvShowProps(tmdbTvShowDetails),
    title: tmdbTvShowDetails.name,
    genres: convertGenresArray(tmdbTvShowDetails.genres),
    totalEpisodes: tmdbTvShowDetails.number_of_episodes,
    totalSeasons: tmdbTvShowDetails.seasons.length,
    inProduction: tmdbTvShowDetails.in_production,
    firstAirDate: tmdbTvShowDetails.first_air_date,
    tagline: tmdbTvShowDetails.tagline,
  } as TVShowDetails;
};

export const getEpisodes = async (tvShowId: number, seasonNum: number) => {
  const tmdbSeason = await season(tvShowId, seasonNum);
  const tmdbEpisodes = tmdbSeason.episodes;
  return tmdbEpisodes.map((tmdbEpisode) => {
    return {
      id: tmdbEpisode.id,
      title: tmdbEpisode.name,
      description: tmdbEpisode.overview,
      image: tmdbEpisode.still_path
        ? getImageUrl(tmdbEpisode.still_path)
        : 'https://via.placeholder.com/150x83',
    } as TVShowEpisode;
  });
};

const getMovieProps = (tmdbMovie: TmdbMovie) => {
  return {
    title: tmdbMovie.title,
    type: MediaType.Movie,
  };
};

const getTvShowProps = (tmdbTvShow: TmdbTvShow) => {
  return {
    title: tmdbTvShow.name,
    type: MediaType.TvShow,
  };
};

const getMediumProps = (tmdbEntity: TmdbEntity) => {
  return {
    id: tmdbEntity.id,
    image: getImageUrl(tmdbEntity.backdrop_path),
    largeImage: getImageUrl(tmdbEntity.backdrop_path, true),
    genres: tmdbEntity.genre_ids ? convertGenreIds(tmdbEntity.genre_ids) : [],
    description: tmdbEntity.overview,
    rating: tmdbEntity.vote_average,
  };
};
