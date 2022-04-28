export default function findShort(movies) {
  return movies.filter(movie => movie.duration <= 40);
}