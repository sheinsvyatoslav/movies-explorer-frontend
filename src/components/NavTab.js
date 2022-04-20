import { useLocation, Switch, Route, Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import profileIcon from '../images/user_icon.svg';

export default function NavTab(props) {
  const location = useLocation();
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })

  function renderNavBar() {
    return (
      <Switch>
        <Route exact path="/">
          <Link className="navtab__link navtab__link_type_bold" to="/signup" style={{color: 'white'}}>Регистрация</Link>
          <Link className="navtab__link" to="/signin">
            <button className="navtab__button">Войти</button>
          </Link>
        </Route>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <div className="navtab__container">
            <div className="navtab__movies">
              {!isBigScreen && <h3 className="navtab__title">Главная</h3>}
              <NavLink className="navtab__link navtab__link_type_movies" activeClassName="navtab__link_active" to="/movies">Фильмы</NavLink>
              <NavLink className="navtab__link navtab__link_type_movies" activeClassName="navtab__link_active" to="/saved-movies">Сохранённые фильмы</NavLink>
            </div>
            <div className="navtab__profile">
              <Link className="navtab__link" to="/profile">Аккаунт</Link>
              <img className="navtab__profile-icon" src={profileIcon} alt="Иконка профиля"/>
            </div>
          </div>
        </Route>
      </Switch>
    )
  }

  return (
    <nav className="navtab navtab_opened" style={{justifyContent: location.pathname === '/' ? 'flex-end' : 'space-between'}}>
      {renderNavBar()}
    </nav>
  )
}