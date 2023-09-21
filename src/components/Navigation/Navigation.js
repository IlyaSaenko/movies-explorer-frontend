// import React, { useState } from 'react';
// import { Link, useMatch } from 'react-router-dom';
// import './Navigation.css';
// import BurgerMenu from '../BurgerMenu/BurgerMenu';

// const Navigation = ({ loggedIn }) => {
//   const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
//   const routeMatch = useMatch();

//   const toggleBurgerMenu = () => {
//     setIsBurgerMenuOpen(!isBurgerMenuOpen);
//   }

//   return (
//     <nav className='navigation'>
//       {loggedIn ? (
//         <>
//           <div className={routeMatch.path === '/' ? 'navigation__movies navigation__movies_white' : 'navigation__movies'}>
//             <Link
//               to='/movies'
//               className={routeMatch.path === '/movies' ? 'navigation__movies-link_active' : 'navigation__movies-link'}>
//               Фильмы
//             </Link>
//             <Link
//               to='/saved-movies'
//               className={routeMatch.path === '/saved-movies' ? 'navigation__movies-link_active' : 'navigation__movies-link'}>
//               Сохранённые фильмы
//             </Link>
//           </div>
//           <div>
//             <Link to='/profile'>
//               <button className='navigation__button_account'>
//                 Аккаунт
//               </button>
//             </Link>
//           </div>
//         </>
//       ) : (
//         <div className='navigation__auth'>
//           <Link to='/signup' className='navigation__link'>Регистрация</Link>
//           <Link to='/signin'>
//             <button className='navigation__button'>
//               Войти
//             </button>
//           </Link>
//         </div>
//       )}
//       {!isBurgerMenuOpen && loggedIn ? (
//         <button
//           className={routeMatch.path === '/' ? 'burger__button burger__button_white' :'burger__button'}
//           onClick={toggleBurgerMenu}
//         />
//       ) : <BurgerMenu onClose={toggleBurgerMenu} />
//       }
//     </nav>
//   )
// };

// export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';
import  accountLogo from '../../images/logo-slime.svg';

function Navigation({ onMenuPopup }) {
  return (
    <nav className="navigation">
      <div className="navigation__links_movies">
        <>
          <Link className="navigation__link navigation__link-movies" to="/movies">Фильмы</Link>
          <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
        </>
      </div>
      <div className="navigation__links_account">
        <Link className="navigation__account-button navigation__link" to="/profile">Аккаунт
          <button className="navigation__account-logo">
            <img src={accountLogo} alt="Логотип аккаунта" />
          </button>
        </Link>
        <button className="navigation__account-burger" onClick={onMenuPopup}/>
      </div>
    </nav>

  );
}

export default Navigation;
