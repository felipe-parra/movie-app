import axios from "axios";
import { config } from "../config";

export const tmdbApi = axios.create({
  baseURL: config.tmdb.baseUrl,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${config.tmdb.apiKey}`,
  },
  params: {
    api_key: config.tmdb.apiKey,
  },
});
