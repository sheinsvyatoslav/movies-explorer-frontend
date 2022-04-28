import MoviesCard from './MoviesCard'
import findShort from '../utils/FindShortMovies'
import React, { useState, } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

export default function MoviesCardList(props) {
  const location = useLocation();
  const isBigScreen = useMediaQuery({ query: '(min-width: 1137px)' })
  const isMediumScreen = useMediaQuery({ query: '(min-width: 634px)' })
  const [count, setCount] = useState(isBigScreen ? 12 : (isMediumScreen ? 8 : 5));
  const locationMovie = location.pathname === '/movies';
  const renderedMovies = locationMovie ? props.movies : props.savedMovies

  function handleCount() {
    setCount(count + (isBigScreen ? 3 : 2))
  }

  return (
    <>
      <section className="cards">
        {((locationMovie ? props.shortOn : props.shortOnSaved) ? findShort(renderedMovies) : renderedMovies).map((movie, i) => (
          i < (locationMovie ? count : props.savedMovies.length) &&
          <MoviesCard
            movie={movie}
            key={locationMovie ? movie.id : movie.movieId}
            saveMovie={props.saveMovie}
            deleteMovie={props.deleteMovie}
            savedMovies={props.savedMovies}
            setSavedMovies={props.setSavedMovies}
          />
        ))
        }
      </section>
      {locationMovie && (count < (props.shortOn ? findShort(renderedMovies) : renderedMovies.length))
      ? <div className="more">
          <button className="more__button" type='button' aria-label='Ещё' onClick={handleCount}>Ещё</button>
        </div>
      : ''}
    </>
  );
}