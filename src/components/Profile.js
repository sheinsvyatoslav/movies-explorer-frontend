import { Link } from 'react-router-dom';

export default function Profile() {

  return (
    <section className="profile">
      <h2 className="profile__greeting">Привет, Святослав!</h2>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <label className="profile__field">Имя
            <input className="profile__input" type="text" id="name-input" name="name" placeholder="Святослав" required minLength="2" maxLength="30"/>
          </label>
          <label className="profile__field">E-mail
            <input className="profile__input" type="email" id="email-input" name="email" placeholder="123@gmail.com" required/>
          </label>
        </fieldset>
        <button className="profile__edit-button" type='button'>Редактировать</button>
        <button className="profile__exit-button" type='button'>Выйти из аккаунта</button>
      </form>
    </section>
  );
}