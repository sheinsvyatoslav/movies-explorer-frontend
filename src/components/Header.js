import React, {useState} from 'react';
import headerLogo from '../images/header_logo.svg';
import NavTab from './NavTab'
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import unwrapIcon from '../images/unwrap_icon.svg'
import closeIcon from '../images/close_icon.svg'

export default function Header() {
  const location = useLocation();
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
  const [navBarOpen, setNavBarOpen] = useState(false);

  function handleNavBarOpen() {
    setNavBarOpen(!navBarOpen)
  }

  return (
    <>
      {!isBigScreen && navBarOpen &&
      <>
        <div className='header__overlay'></div>
        <NavTab/>
      </>
        }
      <header className="header" style={{
        backgroundColor: location.pathname === '/' ? '#073042' : 'white'
        }}>
        <div className="header__container">
          <Link to="/" ><img className="header__logo" src={headerLogo} alt='Логотип проекта' /></Link>
          {isBigScreen || location.pathname === '/'
          ? <NavTab />
          : <button
          onClick={handleNavBarOpen}
          className="header__wrap-button"
          type="button"
          style={{
            backgroundImage: `url(${navBarOpen ? closeIcon : unwrapIcon})`
          }}
        />
          }
        </div>
      </header>
    </>

  )
}