import { useLocation, Switch, Route, Link, NavLink } from 'react-router-dom';
import profileIcon from '../images/user_icon.svg';

export default function NavTab(props) {
  const location = useLocation();

  function renderNavBar() {
    return (
      <Switch>
        <Route exact path="/">
          <Link className="navtab__link navtab__link_active" to="/signup" style={{color: 'white'}}>Регистрация</Link>
          <Link className="navtab__link" to="/signin">
            <button className="navtab__button">Войти</button>
          </Link>
        </Route>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <div className={`navtab__container ${props.isOpen ? "navtab__container_opened" : ''}`}>
            <div className="navtab__movies">
              <NavLink className="navtab__link" activeClassName="navtab__link_active" to="/movies">Фильмы</NavLink>
              <NavLink className="navtab__link" activeClassName="navtab__link_active" to="/saved-movies" style={{marginLeft: '16px'}}>Сохранённые фильмы</NavLink>
            </div>
            <div className="navtab__profile">
              <Link className="navtab__link navtab__link_active" to="/profile">Аккаунт</Link>
              <img className="navtab__profile-icon" src={profileIcon} alt="Иконка профиля"/>
            </div>
          </div>
        </Route>
      </Switch>
    )
  }

  return (
    <nav className="navtab" style={{justifyContent: location.pathname === '/' ? 'flex-end' : 'space-between'}}>
      {renderNavBar()}
    </nav>
  )
}