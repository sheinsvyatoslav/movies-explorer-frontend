import { useState } from "react";
import headerLogo from "../images/header_logo.svg";
import { NavTab } from "./navtab";
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import unwrapIcon from "../images/unwrap_icon.svg";
import unwrapIconWhite from "../images/unwrap_icon_white.svg";
import closeIcon from "../images/close_icon.svg";
import styles from "./header.module.scss";

export const Header = (props) => {
  const location = useLocation();
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const [navBarOpen, setNavBarOpen] = useState(false);

  function handleNavBarOpen() {
    setNavBarOpen(!navBarOpen);
  }

  return (
    <>
      {!isBigScreen && navBarOpen && (
        <>
          <div className={styles.overlay}></div>
          <NavTab loggedIn={props.loggedIn} navBarOpen={navBarOpen} />
        </>
      )}
      <header
        className={styles.main}
        style={{
          backgroundColor: location.pathname === "/" ? "#073042" : "white",
        }}
      >
        <div className={styles.container}>
          <Link to="/">
            <img
              className={styles.logo}
              src={headerLogo}
              alt="Логотип проекта"
            />
          </Link>
          {isBigScreen ? (
            <NavTab loggedIn={props.loggedIn} />
          ) : (
            <button
              onClick={handleNavBarOpen}
              className={styles.wrapButton}
              type="button"
              style={{
                backgroundImage: `url(${
                  navBarOpen
                    ? closeIcon
                    : location.pathname === "/"
                    ? unwrapIconWhite
                    : unwrapIcon
                })`,
              }}
            />
          )}
        </div>
      </header>
    </>
  );
};
