import headerLogo from '../images/header_logo.svg';
import NavTab from './NavTab'
import { useLocation } from "react-router";
import { useMediaQuery } from 'react-responsive'

export default function Header() {
  const location = useLocation();
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <header className="header" style={{
      backgroundColor: location.pathname === '/' ? '#073042' : 'white'
      }}>
      <div className="header__container">
        <img className="header__image" src={headerLogo} alt='Логотип проекта' />
        {isBigScreen
        ? <NavTab />
        : <button
        className="header__wrap-button"
        type="button"
      />
        }
      </div>
    </header>
  )
}