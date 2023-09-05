import dotenv from "dotenv";

// Initialize dotenv
dotenv.config();

interface IConfig {
  port: number;
  tmdb: {
    baseUrl: string;
    apiKey: string;
  };
}

export const config: IConfig = {
  port: parseInt(process.env.PORT as string) || 3030,
  tmdb: {
    baseUrl: process.env.TMDB_BASE_URL as string,
    apiKey: process.env.TMDB_API_KEY as string,
  },
};
