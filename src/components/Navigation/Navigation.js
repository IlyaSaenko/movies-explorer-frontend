import React from 'react';
import { Link, NavLink  } from 'react-router-dom';
import  accountLogo from '../../images/logo-slime.svg';

function Navigation({ onMenuPopup }) {
  return (
    <nav className="navigation">
      <div className="navigation__links-movies">
        <>
          <NavLink  className="navigation__link navigation__link-movies" to="/movies">Фильмы</NavLink>
          <NavLink  className="navigation__link" to="/saved-movies">Сохранённые фильмы</NavLink>
        </>
      </div>
      <div className="navigation__links-account">
        <Link className="navigation__account-button navigation__link" to="/profile">Аккаунт
            <img className="navigation__account-logo" src={accountLogo} alt="Лого аккаунта" />
        </Link>
        <button className="navigation__account-burger" onClick={onMenuPopup}/>
      </div>
    </nav>
  );
}

export default Navigation;