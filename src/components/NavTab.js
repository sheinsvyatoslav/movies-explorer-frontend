import { useLocation, Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import profileIcon from '../images/user_icon.svg';
import profileIconWhite from '../images/user_icon_white.svg';

export default function NavTab(props) {
  const location = useLocation();
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
  const whiteColor = location.pathname === '/' && !props.navBarOpen && 'white';

  function renderNavBar() {
    return (
      <>
        {props.loggedIn
          ?
          <div className="navtab__container">
            <div className="navtab__movies">
              {!isBigScreen && <h3 className="navtab__title">Главная</h3>}
              <NavLink className="navtab__link navtab__link_type_movies" activeClassName="navtab__link_active" to="/movies" style={{color: whiteColor}}>Фильмы</NavLink>
              <NavLink className="navtab__link navtab__link_type_movies" activeClassName="navtab__link_active" to="/saved-movies" style={{color: whiteColor}}>Сохранённые фильмы</NavLink>
            </div>
            <div className="navtab__profile">
              <Link className="navtab__link navtab__link_type_bold" to="/profile" style={{color: whiteColor}}>Аккаунт</Link>
              <img className="navtab__profile-icon" src={(location.pathname === '/' && !props.navBarOpen) ? profileIconWhite : profileIcon} alt="Иконка профиля"/>
            </div>
          </div>
          :
          <>
            <Link className="navtab__link navtab__link_type_bold" to="/signup" style={{color: 'white'}}>Регистрация</Link>
            <Link className="navtab__link" to="/signin">
              <button className="navtab__button">Войти</button>
            </Link>
          </>
        }
      </>

    )
  }

  return (
    <nav className="navtab navtab_opened" style={{justifyContent: props.loggedIn ? 'space-between' : 'flex-end'}}>
      {renderNavBar()}
    </nav>
  )
}