import { useLocation, Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import profileIcon from "../images/user_icon.svg";
import profileIconWhite from "../images/user_icon_white.svg";
import styles from "./navtab.module.scss";
import cn from "classnames";

export const NavTab = (props) => {
  const location = useLocation();
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const whiteColor = location.pathname === "/" && !props.navBarOpen && "white";

  return (
    <nav className={styles.main}>
      <>
        {props.loggedIn ? (
          <div className={styles.container}>
            <div className={styles.movies}>
              {!isBigScreen && <h3 className={styles.title}>Главная</h3>}
              <NavLink
                className={cn(styles.link, styles.linkMovies)}
                activeClassName={styles.linkActive}
                to="/movies"
                style={{ color: whiteColor }}
              >
                Фильмы
              </NavLink>
              <NavLink
                className={cn(styles.link, styles.linkMovies)}
                activeClassName={styles.linkActive}
                to="/saved-movies"
                style={{ color: whiteColor }}
              >
                Сохранённые фильмы
              </NavLink>
            </div>
            <div className={styles.profile}>
              <Link
                className={cn(styles.link, styles.linkBold)}
                to="/profile"
                style={{ color: whiteColor }}
              >
                Аккаунт
              </Link>
              <img
                className={styles.profileIcon}
                src={
                  location.pathname === "/" && !props.navBarOpen
                    ? profileIconWhite
                    : profileIcon
                }
                alt="Иконка профиля"
              />
            </div>
          </div>
        ) : (
          <>
            <Link
              className={cn(styles.link, styles.linkBold)}
              to="/signup"
              style={{ color: "white" }}
            >
              Регистрация
            </Link>
            <Link className={styles.link} to="/signin">
              <button className={styles.button}>Войти</button>
            </Link>
          </>
        )}
      </>
    </nav>
  );
};
