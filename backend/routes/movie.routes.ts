/**
 *
 * Movies Routes
 *
 */
import { Router } from "express";
import {
  getAllMoviesService,
  searchMoviesService,
  getMovieDetailsService,
} from "../services/movies.service";

const router = Router();

// Get Movies List
router.get("/", getAllMoviesService);

// Search Movies
router.get("/search", searchMoviesService);

// Get Movie Details
router.get("/:movieId", getMovieDetailsService);

export default router;
