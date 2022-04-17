import cardImage from '../images/pic__COLOR_pic.png';

export default function MoviesCard() {

  return (
    <article className="card">
      <img className="card__image" src={cardImage} alt='Кадр из фильма'/>
      <div className="card__caption">
        <h2 className="card__name">33 слова о дизайне</h2>
        <button className='card__like-button' type="button" aria-label="Мне нравится"></button>
      </div>
      <p className="card__duration">1ч 47м</p>
    </article>
  );
}