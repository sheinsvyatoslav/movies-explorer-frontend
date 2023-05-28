import { ShortMovieDuration } from "./constants";

export const findShortMovie = (movies) => {
  return movies.filter((movie) => movie.duration <= ShortMovieDuration);
};
