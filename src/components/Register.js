import headerLogo from '../images/header_logo.svg';
import { Link } from 'react-router-dom';

export default function Register() {

  return (
    <section className="register">
      <form className="form" name="register">
        <img className="form__image" src={headerLogo} alt='Логотип проекта' />
        <h2 className="form__title">Добро пожаловать!</h2>
        <fieldset className="form__set">
        <label className="form__field">Имя
            <input className="form__input" type="email" id="email-input" name="email" required minLength="2" maxLength="30"/>
          </label>
          <label className="form__field">E-mail
            <input className="form__input" type="email" id="email-input" name="email" required minLength="2" maxLength="30"/>
          </label>
          <label className="form__field">Пароль
            <input className="form__input" type="password" id="password-input" name="password" required minLength="8"/>
          </label>
          <button className="form__button form__button_type_register" type="submit">Зарегистрироваться</button>
        </fieldset>
        <p className="form__tip">Уже зарегистрированы?
          <Link to="signin" className="form__link"> Войти</Link>
        </p>
      </form>
    </section>
  )
}