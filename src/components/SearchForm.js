import React, {useState} from 'react';
import searchIcon from '../images/search_icon.svg';
import shortActiveIcon from '../images/smalltumb.svg';
import shortInactiveIcon from '../images/smalltumb_off.svg';

export default function SearchForm() {
  const [shortOn, setShortOn] = useState(false);

  function handleShortOn() {
    setShortOn(!shortOn)
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <img className="search__icon" src={searchIcon} alt="Иконка поиска"/>
          <input className="search__input" type="search" placeholder="Фильм" required id="movie-input" name="movie"></input>
          <div className="search__button-container">
            <button className="search__button" type="button"></button>
          </div>
        </form>
        <div className="search__short">
          <button
            onClick={handleShortOn}
            className="search__short-button"
            type="button"
            style={{
              backgroundImage: `url(${shortOn ? shortActiveIcon : shortInactiveIcon})`
            }}>
          </button>
          <p className="search__short-text">Короткометражки</p>
        </div>
      </div>
    </section>
  );
}