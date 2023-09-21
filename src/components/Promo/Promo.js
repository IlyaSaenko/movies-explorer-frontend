// import React from "react";
// import Header from '../Header/Header';
// import './Promo.css'
// import promoPic from "../../images/landing-logo-sphera.svg";
// import NavTab from "../NavTab/NavTab";

// const Promo = ({ loggedIn }) => {
//     return (
//         <div className="promo">
//             <Header loggedIn={loggedIn} />
//             <div className="promo__info">
//                 <h1 className="promo__title">Учебный проект студента факультета Веб-разработки</h1>
//                 <span className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя</span>
//                 <NavTab />
//             </div>
//             <img src={promoPic} alt="Logo" className="promo__pic" />
//         </div>
//         )
// }

// export default Promo;

import React from 'react';
import promologo from '../../../src/images/landing-logo-sphera.svg';


function Promo() {
  return (
    <section className="promo" aria-label="Заголовок О проекте">
      <div className="promo__text-block">
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <img className="promo__logo" src={promologo} alt="Логотип-Промо"/>
    </section>
  );
}

export default Promo;
