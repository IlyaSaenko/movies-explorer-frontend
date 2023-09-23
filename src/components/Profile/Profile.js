import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <fieldset className="profile__inputs-block">
        <label className="profile__label">
          <p className="profile__placeholder">Имя</p>
          <input className="profile__input profile__input-name" type="text" placeholder="Имя" value="Виталий" required minLength="2"/>
        </label>
        <label className="profile__label">
          <p className="profile__placeholder">E-mail</p>
          <input className="profile__input profile__input-email" type="email" placeholder="e-mail" value="email@yandex.ru" required minLength="6"/>
        </label>
      </fieldset>
      <div className="profile__buttons-block">
        <button className="profile__edit-button" type="button">Редактировать</button>
        <Link to="/">
          <button className="profile__signout-button" type="button">Выйти из аккаунта</button>
        </Link>
      </div>
    </main>
  );
}

export default Profile;