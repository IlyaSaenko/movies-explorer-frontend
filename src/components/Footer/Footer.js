// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className='footer'>
//       <span className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
//       <div className='footer__bottom-block'>
//         <span className='footer__copyright'>© 2023</span>
//         <div className='footer__socials'>
//           <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
//           <a className='footer__link' href='https://github.com/IlyaSaenko' target='_blank' rel="noreferrer">Github</a>
//         </div>
//       </div>

//     </footer>
//   )
// };

// export default Footer;

import React from 'react';

function Footer() {
  return (
    <div className="footer__container">
      <h2 className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__infoblock">
        <p className="footer__copyright">&#169; 2023</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link-text" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a className="footer__link-text" href="https://github.com/IlyaSaenko" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
