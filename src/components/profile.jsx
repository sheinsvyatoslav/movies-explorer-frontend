import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/current-user-context";
import styles from "./profile.module.scss";

export const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setIsValid(e.target.closest("form").checkValidity());
    setErrors({ ...errors, [name]: target.validationMessage });
  }

  function handleChangeEditMode() {
    !editMode &&
      setValues({ name: currentUser.name, email: currentUser.email });
    setEditMode(!editMode);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({ email: values.email, name: values.name });
  }

  return (
    <section className={styles.main}>
      <h2 className={styles.greeting}>Привет, {currentUser.name}!</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <label className={styles.field}>
            Имя
            <input
              className={styles.input}
              type="text"
              value={values.name || (!editMode && currentUser.name) || ""}
              onChange={handleChange}
              disabled={!editMode}
              id="name-input"
              name="name"
              required
              minLength="2"
              maxLength="30"
            />
            <p className={styles.inputError}>{errors.name}</p>
          </label>
          <label className={styles.field}>
            E-mail
            <input
              className={styles.input}
              type="email"
              value={values.email || (!editMode && currentUser.email) || ""}
              onChange={handleChange}
              disabled={!editMode}
              id="email-input"
              name="email"
              required
            />
            <p className={styles.inputError}>{errors.email}</p>
          </label>
        </fieldset>
        <button
          className={styles.editButton}
          type={editMode ? "button" : "submit"}
          onClick={handleChangeEditMode}
        >
          {editMode ? "Сохранить" : "Редактировать"}
        </button>
        <button
          className={styles.exitButton}
          type="button"
          onClick={props.signOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};
