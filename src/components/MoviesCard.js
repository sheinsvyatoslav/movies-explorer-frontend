import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import inactiveLike from '../images/inactive_like.svg'
import activeLike from '../images/active_like.svg'
import deleteIcon from '../images/delete_icon.svg'

export default function MoviesCard(props) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const savedMoviesIds = props.savedMovies.map(saveMovie => saveMovie.movieId)


  useEffect(() => {
    savedMoviesIds.includes(props.movie.id) && setIsLiked(true)
  }, [props.savedMovies]);

  function handleLikeCard() {
    setIsLiked(!isLiked)
    !isLiked
    ? props.saveMovie(props.movie)
    : props.deleteMovie(props.savedMovies[savedMoviesIds.findIndex(saveMovieId => saveMovieId === props.movie.id)])

  }

  function handleDeleteCard() {
    props.deleteMovie(props.movie)
  }

  function calculateDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return (hours ? `${hours}ч ` : '') + (minutes ? `${minutes}м` : '')
  }

  return (
    <article className="card">
      <a href={props.movie.trailerLink} target="_blank">
        <img className="card__image" src={location.pathname === '/movies' ? `https://api.nomoreparties.co${props.movie.image.url}` : props.movie.image} alt='Кадр из фильма'/>
      </a>
      <div className="card__caption">
        <h2 className="card__name">{props.movie.nameRU}</h2>
        <button
          className="card__button"
          onClick={location.pathname === '/movies' ? handleLikeCard : handleDeleteCard}
          type="button"
          aria-label="Мне нравится"
          style={{
            backgroundImage: `url(${location.pathname === '/movies' ? `${isLiked ? activeLike : inactiveLike}` : deleteIcon})`
          }}
          >
        </button>
      </div>
      <p className="card__duration">{calculateDuration(props.movie.duration)}</p>
    </article>
  );
}