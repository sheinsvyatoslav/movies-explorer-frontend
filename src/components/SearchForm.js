import searchIcon from '../images/search_icon.svg';

export default function SearchForm() {

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <img className="search__icon" src={searchIcon} alt="Иконка поиска"/>
          <input className="search__input" type="search" placeholder="Фильм"></input>
          <div className="search__button-container">
            <button className="search__button" type="button"></button>
          </div>
        </form>
        <div className="search__short">
          <button className="search__short-button" type="button"></button>
          <p className="search__short-text">Короткометражки</p>
        </div>
      </div>
    </section>
  );
}