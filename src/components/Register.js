import React, { useState } from "react";
import headerLogo from '../images/header_logo.svg';
import { Link } from 'react-router-dom';

export default function Register(props) {
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
    props.handleRegister(values.email, values.password, values.name);
  }

  return (
    <section className="register">
      <form className="form" name="register" onSubmit={handleSubmit}>
        <Link to="/" ><img className="form__image" src={headerLogo} alt='Логотип проекта' /></Link>
        <h2 className="form__title">Добро пожаловать!</h2>
        <fieldset className="form__set">
          <label className="form__field">Имя
            <input className="form__input" type="text" value={values.name || ''} onChange={handleChange} id="name-input" name="name" required minLength="2" maxLength="30"/>
            <p className="form__input-error">{errors.name}</p>
          </label>
          <label className="form__field">E-mail
            <input className="form__input" type="email" value={values.email || ''} onChange={handleChange} pattern="\w+[@][a-zA-Z]+\.[a-zA-Z]+" id="email-input" name="email" required minLength="2" maxLength="30"/>
            <p className="form__input-error">{errors.email}</p>
          </label>
          <label className="form__field">Пароль
            <input className="form__input" type="password" value={values.password || ''} onChange={handleChange} id="password-input" name="password" required minLength="8"/>
            <p className="form__input-error">{errors.password}</p>
          </label>
          <button className={`form__button form__button_type_register ${!isValid && 'form__button_inactive'}`} type="submit" disabled={!isValid}>Зарегистрироваться</button>
        </fieldset>
        <p className="form__tip">Уже зарегистрированы?
          <Link to="signin" className="form__link"> Войти</Link>
        </p>
      </form>
    </section>
  )
}