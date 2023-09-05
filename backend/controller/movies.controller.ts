/**
 *
 * Movies Controller
 *
 */

import { IMovieDetails, IMovieResponse } from "../interfaces/movie.interface";
import {
  MovieDetails,
  MoviesResponse,
} from "../interfaces/themoviedb.interfaces";
import {
  getMovieDetailsFromTMDB,
  getMoviesFromTMDB,
  searchMoviesFromTMDB,
} from "../repository/tmdb.repository";
/**
 * Get Movies List
 * @returns {Promise<IMovieResponse>}
 */
export const getMovies = async (type = "popular"): Promise<IMovieResponse> => {
  try {
    const moviesResponse = await getMoviesFromTMDB(type);

    const movies: IMovieResponse = transformMoviesResponse(moviesResponse);

    return movies;
  } catch (error) {
    console.error("Something wen't wrong", error);
    throw new Error("Something wen't wrong");
  }
};

/**
 * Search Movies
 * @param {string} query
 * @returns {Promise<IMovieResponse>}
 */
export const searchMovies = async (query: string): Promise<IMovieResponse> => {
  try {
    const moviesResponse = await searchMoviesFromTMDB(query);
    console.log({ moviesResponse });
    const movies = transformMoviesResponse(moviesResponse);
    return movies;
  } catch (error) {
    console.error("Something wen't wrong", error);
    throw new Error("Something wen't wrong");
  }
};

/**
 * Get Movie Details
 * @param {string} id
 * @returns {Promise<IMovieDetails>}
 */
export const getMovieDetails = async (id: string): Promise<IMovieDetails> => {
  try {
    const movieDetailsResponse = await getMovieDetailsFromTMDB(id);

    const movieDetails = transformMovieDetailsResponse(movieDetailsResponse);
    return movieDetails;
  } catch (error) {
    console.error("Something wen't wrong", error);
    throw new Error("Something wen't wrong");
  }
};

/**
 * Transform Movies Response
 * @param {MoviesResponse} moviesResponse
 * @returns {IMovieResponse}
 */
const transformMoviesResponse = (
  moviesResponse: MoviesResponse
): IMovieResponse => {
  return {
    page: moviesResponse.page,
    total_pages: moviesResponse.total_pages,
    total_movies: moviesResponse.total_results,
    movies: moviesResponse.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
      backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      releaseDate: movie.release_date,
      language: movie.original_language,
      rating: movie.vote_average,
      genre: movie.genre_ids.map((genre) => genre.toString()),
    })),
  };
};

/**
 * Transform Movie Details Response
 * @param {MovieDetails} movieDetailsResponse
 * @returns {IMovieDetails}
 */
const transformMovieDetailsResponse = (
  movieDetailsResponse: MovieDetails
): IMovieDetails => {
  return {
    title: movieDetailsResponse.title,
    description: movieDetailsResponse.overview,
    poster: `https://image.tmdb.org/t/p/original${movieDetailsResponse.poster_path}`,
    backdrop_path: `https://image.tmdb.org/t/p/original${movieDetailsResponse.backdrop_path}`,
    releaseDate: movieDetailsResponse.release_date,
    language: movieDetailsResponse.original_language,
    rating: movieDetailsResponse.vote_average,
    genre: movieDetailsResponse.genres.map((genre) => genre.name),
    budget: movieDetailsResponse.budget,
    revenue: movieDetailsResponse.revenue,
    runtime: movieDetailsResponse.runtime,
    status: movieDetailsResponse.status,
    tagline: movieDetailsResponse.tagline,
    id: movieDetailsResponse.id,
    imdb_id: movieDetailsResponse.imdb_id,
  };
};
