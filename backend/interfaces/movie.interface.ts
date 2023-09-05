export interface IMovie {
  id: number | string;
  title: string;
  description: string | null;
  poster: string;
  releaseDate: string;
  language: string;
  rating: number;
  genre: string[];
  backdrop_path: string;
}

export interface IMovieResponse {
  page: number;
  movies: IMovie[];
  total_pages: number;
  total_movies: number;
}

export interface IMovieDetails extends IMovie {
  adult?: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget?: number;
  genres?: { id: number; name: string }[];
  homepage?: string | null;
  id: number;
  imdb_id: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: {
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline?: string | null;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
