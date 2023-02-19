import React, { useState } from "react";
import searchIcon from "../images/search_icon.svg";
import shortActiveIcon from "../images/smalltumb.svg";
import shortInactiveIcon from "../images/smalltumb_off.svg";
import { useLocation } from "react-router-dom";
import findMovie from "../utils/FindMovie";

export default function SearchForm(props) {
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
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <img className="search__icon" src={searchIcon} alt="Иконка поиска" />
          <input
            className="search__input"
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
          <div className="search__button-container">
            <button className="search__button" type="submit"></button>
          </div>
        </form>
        <div className="search__short">
          <button
            onClick={handleShortOn}
            className="search__short-button"
            type="button"
            style={{
              backgroundImage: `url(${
                (locationMovies ? props.shortOn : props.shortOnSaved)
                  ? shortActiveIcon
                  : shortInactiveIcon
              })`,
            }}
          ></button>
          <p className="search__short-text">Короткометражки</p>
        </div>
      </div>
    </section>
  );
}
