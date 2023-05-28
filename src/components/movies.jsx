import { SearchForm } from "./search-form";
import Preloader from "./preloader";
import { MovieCardList } from "./movie-card-list";
import styles from "./movies.module.scss";

export const Movies = (props) => {
  return (
    <main className={styles.main}>
      <SearchForm
        onGetMovies={props.onGetMovies}
        shortOn={props.shortOn}
        setShortOn={props.setShortOn}
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
      />
      {props.isPreloaderOpen && <Preloader />}
      {props.isErrorOpen && (
        <p className={styles.error}>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      {props.notFound && <p className={styles.error}>Ничего не найдено.</p>}
      <MovieCardList
        movies={props.movies}
        saveMovie={props.saveMovie}
        deleteMovie={props.deleteMovie}
        shortOn={props.shortOn}
        savedMovies={props.savedMovies}
      />
    </main>
  );
};
