import React, { useState } from "react";
import MoviesCardList from "./movies-card-list";
import Preloader from "./preloader";
import SearchForm from "./search-form";

export default function SavedMovies(props) {
  const [shortOnSaved, setShortOnSaved] = useState(false);

  return (
    <main className="saved">
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
        <p className="content__error">Не найдено сохранённых фильмов.</p>
      )}
      <MoviesCardList
        savedMovies={props.savedMovies}
        deleteMovie={props.deleteMovie}
        shortOnSaved={shortOnSaved}
        setSavedMovies={props.setSavedMovies}
      />
    </main>
  );
}
