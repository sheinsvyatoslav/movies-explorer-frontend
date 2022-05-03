import React, { useState } from "react";
import headerLogo from '../images/header_logo.svg';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setIsValid(e.target.closest('form').checkValidity());
    setErrors({...errors, [name]: target.validationMessage });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(values.email, values.password)
  }

  return (
    <section className="login">
      <form className="form" name="login" onSubmit={handleSubmit}>
        <Link to="/" ><img className="form__image" src={headerLogo} alt='Логотип проекта' /></Link>
        <h2 className="form__title">Рады видеть!</h2>
        <fieldset className="form__set">
          <label className="form__field">E-mail
            <input className="form__input" type="email" value={values.email || ''} onChange={handleChange} pattern="\w+[@][a-zA-Z]+\.[a-zA-Z]+" id="email-input" name="email" required minLength="2" maxLength="30"/>
            <p className="form__input-error">{errors.email}</p>
          </label>
          <label className="form__field">Пароль
            <input className="form__input" type="password" value={values.password || ''} onChange={handleChange} id="password-input" name="password" required minLength="8"/>
            <p className="form__input-error">{errors.password}</p>
          </label>
          <button className={`form__button form__button_type_login ${!isValid && 'form__button_inactive'}`} type="submit" disabled={!isValid}>Войти</button>
        </fieldset>
        <p className="form__tip">Ещё не зарегистрированы?
          <Link to="signup" className="form__link"> Регистрация</Link>
        </p>
      </form>
    </section>
  )
}