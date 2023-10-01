import React from 'react';
import headerLogo from '../../images/log-c.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({ loggedIn, headerClass, onMenuPopup }) {
  return (
    <header className={headerClass}>
      <Link className="header__logo-link" to="/">
        <img className="header__logo" src={headerLogo} alt="Лого"/>
      </Link>
      {loggedIn ? (
        <div className="header__navigation">
          <Navigation
            onMenuPopup={onMenuPopup}
          />
        </div>
      ) : (
        <nav className="header__button-block">
          <>
            <Link className="header__link" to="/signup">Регистрация</Link>
            <Link className="header__button" to="/signin">Войти</Link>
          </>
        </nav>
      )}
    </header>
  );
}

export default Header;



// import React, { useState, useEffect } from 'react';
// import headerLogo from '../../images/log-c.svg';
// import Navigation from '../Navigation/Navigation';
// import { Link, Route, Routes, useLocation } from 'react-router-dom';
// import { routesGreyHeader, SCREEN_MD } from "../../constants/constants"
// import BurgerMenu from "../BurgerMenu/BurgerMenu";;


// function Header({ loggedIn, headerClass, onMenuPopup }) {
//   const { pathname } = useLocation();
//   const headRoutes = routesGreyHeader.find((item) => {
//     return item === pathname;
//   });

//   let resize;

//   const useResize = () => {
//     const [width, setWidth] = useState(window.innerWidth);

//     useEffect(() => {
//       const handleResize = (event) => {
//         setWidth(event.target.innerWidth);
//       };
//       window.addEventListener("resize", handleResize);
//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }, []);

//     return width <= SCREEN_MD;
//   };

//   resize = useResize();

//   return (
//     <header className={`header ${pathname === "/" ? "header_main" : ""} ${headRoutes ? "header__all" : ""
//       }`}>
//       <Link className="header__logo-link" to="/">
//         <img className="header__logo" src={headerLogo} alt="Лого" />
//       </Link>
//       {
//         loggedIn ? (
//           <nav className="header__button-block">
//             <>
//               <Link className="header__link" to="/signup">Регистрация</Link>
//               <Link className="header__button" to="/signin">Войти</Link>
//             </>
//           </nav >
//         ) : (
//           resize ? <BurgerMenu /> : <Navigation />
//         )
//       }
//     </header >
//   );
// }

// export default Header;



