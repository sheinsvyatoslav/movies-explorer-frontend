import React, { useState } from "react";
import headerLogo from "../images/header_logo.svg";
import { Link } from "react-router-dom";
import styles from "./form.module.scss";

export const Register = (props) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setIsValid(e.target.closest("form").checkValidity());
    setErrors({ ...errors, [name]: target.validationMessage });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(values.email, values.password, values.name);
  }

  return (
    <section className={styles.main}>
      <form className={styles.form} name="register" onSubmit={handleSubmit}>
        <Link to="/">
          <img
            className={styles.image}
            src={headerLogo}
            alt="Логотип проекта"
          />
        </Link>
        <h2 className={styles.title}>Добро пожаловать!</h2>
        <fieldset className={styles.fieldset}>
          <label className={styles.field}>
            Имя
            <input
              className={styles.input}
              type="text"
              value={values.name || ""}
              onChange={handleChange}
              id="name-input"
              name="name"
              required
              minLength="2"
              maxLength="30"
            />
            <p className={styles.error}>{errors.name}</p>
          </label>
          <label className={styles.field}>
            E-mail
            <input
              className={styles.input}
              type="email"
              value={values.email || ""}
              onChange={handleChange}
              pattern="\w+[@][a-zA-Z]+\.[a-zA-Z]+"
              id="email-input"
              name="email"
              required
              minLength="2"
              maxLength="30"
            />
            <p className={styles.error}>{errors.email}</p>
          </label>
          <label className={styles.field}>
            Пароль
            <input
              className={styles.input}
              type="password"
              value={values.password || ""}
              onChange={handleChange}
              id="password-input"
              name="password"
              required
              minLength="8"
            />
            <p className={styles.error}>{errors.password}</p>
          </label>
          <button className={styles.button} type="submit" disabled={!isValid}>
            Зарегистрироваться
          </button>
        </fieldset>
        <p className={styles.tip}>
          Уже зарегистрированы?
          <Link to="signin" className={styles.link}>
            {" "}
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
};
