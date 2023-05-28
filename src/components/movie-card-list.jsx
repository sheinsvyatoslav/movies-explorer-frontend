import { MovieCard } from "./movie-card";
import { findShortMovie } from "../utils/find-short-movie";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import {
  BigScreenCardNumber,
  MediumScreenCardNumber,
  SmallScreenCardNumber,
  BigScreenExtraCards,
  SmallScreenExtraCards,
} from "../utils/constants";
import { MoreButton } from "./more-button";

import styles from "./movie-card-list.module.scss";

export const MovieCardList = (props) => {
  const location = useLocation();
  const isBigScreen = useMediaQuery({ query: "(min-width: 1137px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 634px)" });
  const [count, setCount] = useState(
    isBigScreen
      ? BigScreenCardNumber
      : isMediumScreen
      ? MediumScreenCardNumber
      : SmallScreenCardNumber
  );
  const locationMovie = location.pathname === "/movies";
  const renderedMovies = locationMovie ? props.movies : props.savedMovies;

  function handleCount() {
    setCount(
      count + (isBigScreen ? BigScreenExtraCards : SmallScreenExtraCards)
    );
  }

  return (
    <>
      <section className={styles.main}>
        {((locationMovie ? props.shortOn : props.shortOnSaved)
          ? findShortMovie(renderedMovies)
          : renderedMovies
        ).map(
          (movie, i) =>
            i < (locationMovie ? count : props.savedMovies.length) && (
              <MovieCard
                movie={movie}
                key={locationMovie ? movie.id : movie.movieId}
                saveMovie={props.saveMovie}
                deleteMovie={props.deleteMovie}
                savedMovies={props.savedMovies}
                setSavedMovies={props.setSavedMovies}
              />
            )
        )}
      </section>
      {locationMovie &&
      count <
        (props.shortOn
          ? findShortMovie(renderedMovies)
          : renderedMovies.length) ? (
        <MoreButton handleClick={handleCount} />
      ) : (
        ""
      )}
    </>
  );
};
