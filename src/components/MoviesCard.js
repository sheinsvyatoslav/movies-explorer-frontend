import React, {useState} from 'react';
import cardImage from '../images/pic__COLOR_pic.png';
import { useLocation } from "react-router-dom";
import inactiveLike from '../images/inactive_like.svg'
import activeLike from '../images/active_like.svg'
import deleteIcon from '../images/delete_icon.svg'

export default function MoviesCard() {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeCard() {
    setIsLiked(!isLiked)
  }

  return (
    <article className="card">
      <img className="card__image" src={cardImage} alt='Кадр из фильма'/>
      <div className="card__caption">
        <h2 className="card__name">33 слова о дизайне</h2>
        <button
          className="card__button"
          onClick={handleLikeCard}
          type="button"
          aria-label="Мне нравится"
          style={{
            backgroundImage: `url(${location.pathname === '/movies' ? `${isLiked ? activeLike : inactiveLike}` : deleteIcon})`
          }}
          >
        </button>
      </div>
      <p className="card__duration">1ч 47м</p>
    </article>
  );
}