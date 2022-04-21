import MoviesCardList from './MoviesCardList'
import SearchForm from './SearchForm'

export default function SavedMovies() {

  return (
    <main className="saved">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}