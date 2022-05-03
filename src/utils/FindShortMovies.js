import { ShortMovieDuration } from "./constants";

export default function findShort(movies) {
  return movies.filter(movie => movie.duration <= ShortMovieDuration);
}