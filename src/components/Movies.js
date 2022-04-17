import SearchForm from './SearchForm'
import Preloader from './Preloader'
import MoviesCardList from './MoviesCardList'
import MoreButton  from './MoreButton'

export default function Movies() {

  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
    </main>
  );
}