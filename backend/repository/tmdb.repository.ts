/**
 *
 * Movies Repository - The Movie Database API
 *
 */

import {
  MoviesResponse,
  MovieSearchResponse,
  MovieDetails,
} from "../interfaces/themoviedb.interfaces";
import { tmdbApi } from "../utils/axios";

/**
 * Get Movies List
 * @returns {Promise<MoviesResponse>}
 */
export const getMoviesFromTMDB = async (
  type = "popular"
): Promise<MoviesResponse> => {
  const response = await tmdbApi.get(`/movie/${type}`);
  return response.data;
};

/**
 * Search Movies
 * @param {string} query
 * @returns {Promise<TMD>}
 */
export const searchMoviesFromTMDB = async (
  query: string
): Promise<MovieSearchResponse> => {
  const response = await tmdbApi.get("/search/movie", {
    params: {
      query,
    },
  });
  return response.data;
};

/**
 * Get Movie Details
 * @param {string} id
 * @returns {Promise<MovieDetails>}
 */
export const getMovieDetailsFromTMDB = async (
  id: string
): Promise<MovieDetails> => {
  const response = await tmdbApi.get(`/movie/${id}`);
  return response.data;
};
