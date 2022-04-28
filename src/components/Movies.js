import SearchForm from './SearchForm'
import Preloader from './Preloader'
import MoviesCardList from './MoviesCardList'

export default function Movies(props) {

  return (
    <main className="content">
      <SearchForm
        onGetMovies={props.onGetMovies}
        shortOn={props.shortOn} setShortOn={props.setShortOn}
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
      />
      {props.isPreloaderOpen && <Preloader />}
      {props.isErrorOpen && <p className='content__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>}
      {props.notFound && <p className='content__error'>Ничего не найдено.</p>}
      <MoviesCardList
        movies={props.movies}
        saveMovie={props.saveMovie}
        deleteMovie={props.deleteMovie}
        shortOn={props.shortOn}
        savedMovies={props.savedMovies}
      />
    </main>
  );
}