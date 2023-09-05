/**
 *
 * Movies Service
 *
 */

import { Request, Response } from "express";
import {
  getMovies,
  searchMovies,
  getMovieDetails,
} from "../controller/movies.controller";

/**
 * Get all movies Service
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<*>}
 */
export const getAllMoviesService = async (req: Request, res: Response) => {
  try {
    console.log("getAllMovies", { ...req.query });
    const { type } = req.query;
    const movies = await getMovies(type as string | undefined);
    return res.status(200).json({ movies });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * Search movies Service
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<*>}
 */
export const searchMoviesService = async (req: Request, res: Response) => {
  try {
    console.log("searchMovies", { ...req.query });
    const { query } = req.query;
    const movies = await searchMovies(query as string);
    return res.status(200).json({ movies });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * Get movie details Service
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<*>}
 */
export const getMovieDetailsService = async (req: Request, res: Response) => {
  try {
    console.log("getMovieDetails", { ...req.params });
    const { movieId } = req.params;
    const movie = await getMovieDetails(movieId as string);
    console.log("movie", movie);
    return res.status(200).json({ movie });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
