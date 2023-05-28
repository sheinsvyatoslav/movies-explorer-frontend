import React, { useState } from "react";
import searchIcon from "../images/search_icon.svg";
import shortActiveIcon from "../images/smalltumb.svg";
import shortInactiveIcon from "../images/smalltumb_off.svg";
import { useLocation } from "react-router-dom";
import findMovie from "../utils/find-movie";
import styles from "./search-form.module.scss";

export const SearchForm = (props) => {
  const locationMovies = useLocation().pathname === "/movies";
  const [searchInputSaved, setSearchInputSaved] = useState("");

  function handleChangeName(e) {
    locationMovies
      ? props.setSearchInput(e.target.value)
      : setSearchInputSaved(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    locationMovies
      ? props.onGetMovies(props.searchInput)
      : props.setSavedMovies(
          findMovie(
            JSON.parse(localStorage.getItem("savedMovies")),
            searchInputSaved
          )
        );
  }

  function handleShortOn() {
    if (locationMovies) {
      props.setShortOn(!props.shortOn);
      localStorage.setItem("short", !props.shortOn);
    } else {
      props.setShortOnSaved(!props.shortOnSaved);
    }
  }

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <img className={styles.icon} src={searchIcon} alt="Иконка поиска" />
          <input
            className={styles.input}
            type="search"
            value={
              (locationMovies ? props.searchInput : searchInputSaved) || ""
            }
            onChange={handleChangeName}
            placeholder="Фильм"
            required
            id="movie-input"
            name="movie"
          ></input>
          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit"></button>
          </div>
        </form>
        <div className={styles.short}>
          <button
            onClick={handleShortOn}
            className={styles.shortButton}
            type="button"
            style={{
              backgroundImage: `url(${
                (locationMovies ? props.shortOn : props.shortOnSaved)
                  ? shortActiveIcon
                  : shortInactiveIcon
              })`,
            }}
          ></button>
          <p className={styles.shortText}>Короткометражки</p>
        </div>
      </div>
    </section>
  );
};
