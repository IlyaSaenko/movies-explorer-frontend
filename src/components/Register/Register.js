import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/log-c.svg';

function Register() {
  return (
    <main className="register">
      <div className="register__section" aria-label="Секция регистрации">
        <>
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={headerLogo} alt="Лого" />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
        </>
        <form className="register__form">
          <fieldset className="register__inputs-block">
            <label className="register__label">
              <p className="register__placeholder">Имя</p>
              <input className="register__input register__input-name"
                type="text"
                placeholder="Виталий"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="register__input-error"></span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">E-mail</p>
              <input className="register__input register__input-email"
                type="email"
                placeholder="email@yandex.ru"
                required
                minLength="6"
              />
              <span className="register__input-error"></span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">Пароль</p>
              <input className="register__input register__input-password" type="password" placeholder="" required minLength="8" />
              <span className="register__input-error">Что-то пошло не так...</span>
            </label>
          </fieldset>
          <div className="register__buttons-block">
            <button className="register__submit-button" type="button" name="submit-button">Зарегистрироваться</button>
            <div className="register__link-block">
              <p className="register__link register__link-text">Уже зарегистрированы?</p>
              <Link className="register__link" to="/signin">Войти</Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;