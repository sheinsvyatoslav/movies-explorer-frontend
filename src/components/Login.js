import headerLogo from '../images/header_logo.svg';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <section className="login">
      <form className="form" name="login">
        <img className="form__image" src={headerLogo} alt='Логотип проекта' />
        <h2 className="form__title">Рады видеть!</h2>
        <fieldset className="form__set">
          <label className="form__field">E-mail
            <input className="form__input" type="email" id="email-input" name="email" required minLength="2" maxLength="30"/>
          </label>
          <label className="form__field">Пароль
            <input className="form__input" type="password" id="password-input" name="password" required minLength="8"/>
          </label>
          <button className="form__button form__button_type_login" type="submit">
            Войти
          </button>
        </fieldset>
        <p className="form__tip">Ещё не зарегистрированы?
          <Link to="signup" className="form__link"> Регистрация</Link>
        </p>
      </form>
    </section>
  )
}