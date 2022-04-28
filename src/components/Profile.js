import React, { useState, useContext } from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

export default function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setIsValid(e.target.closest('form').checkValidity());
    setErrors({...errors, [name]: target.validationMessage });
  }

  function handleChangeEditMode() {
    setEditMode(!editMode);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({email: values.email, name: values.name});
  }

  return (
    <section className="profile">
      <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <fieldset className="profile__fieldset">
          <label className="profile__field">Имя
            <input className="profile__input" type="text" value={values.name || (!editMode && currentUser.name) || ''} onChange={handleChange} disabled={!editMode} id="name-input" name="name" required minLength="2" maxLength="30"/>
            <p className="profile__input-error">{errors.name}</p>
          </label>
          <label className="profile__field">E-mail
            <input className="profile__input" type="email" value={values.email || (!editMode && currentUser.email) || ''} onChange={handleChange} disabled={!editMode} id="email-input" name="email" required/>
            <p className="profile__input-error">{errors.email}</p>
          </label>
        </fieldset>
        <button className={`profile__edit-button ${!isValid && editMode && 'profile__edit-button_inactive'}`} type={editMode ? 'button' : 'submit'} onClick={handleChangeEditMode}>{editMode ? 'Сохранить' : 'Редактировать'}</button>
        <button className="profile__exit-button" type='button' onClick={props.signOut}>Выйти из аккаунта</button>
      </form>
    </section>
  );
}