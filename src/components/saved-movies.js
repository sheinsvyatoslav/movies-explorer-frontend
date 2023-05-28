import { useState } from "react";
import { MovieCardList } from "./movie-card-list";
import Preloader from "./preloader";
import { SearchForm } from "./search-form";
import styles from "./movies.module.scss";

export const SavedMovies = (props) => {
  const [shortOnSaved, setShortOnSaved] = useState(false);

  return (
    <main className={styles.main}>
      <SearchForm
        shortOnSaved={shortOnSaved}
        setShortOnSaved={setShortOnSaved}
        setSavedMovies={props.setSavedMovies}
        savedMovies={props.savedMovies}
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
      />
      {props.isPreloaderOpen && <Preloader />}
      {props.savedMovies.length === 0 && (
        <p className={styles.error}>Не найдено сохранённых фильмов.</p>
      )}
      <MovieCardList
        savedMovies={props.savedMovies}
        deleteMovie={props.deleteMovie}
        shortOnSaved={shortOnSaved}
        setSavedMovies={props.setSavedMovies}
      />
    </main>
  );
};
