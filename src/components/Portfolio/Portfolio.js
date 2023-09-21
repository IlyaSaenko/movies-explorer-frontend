// import './Portfolio.css';

// const Portfolio = () => {
//   return (
//     <div className='portfolio'>
//       <h3 className='portfolio__title'>Портфолио</h3>
//       <ul className='portfolio__projects'>
//         <li>
//           <a className='portfolio__link' rel='noreferrer' href='https://github.com/IlyaSaenko/how-to-learn' target='_blank'>
//             Статичный сайт
//           </a>
//           <span>↗</span>
//         </li>
//         <li>
//           <a className='portfolio__link' rel='noreferrer' href='https://github.com/IlyaSaenko/russian-travel' target='_blank'>
//             Адаптивный сайт
//           </a>
//           <span>↗</span>
//         </li>
//         <li>
//           <a className='portfolio__link' rel='noreferrer' href='https://github.com/IlyaSaenko/react-mesto-api-full-gha' target='_blank'>
//             Одностраничное приложение
//           </a>
//           <span>↗</span>
//         </li>
//       </ul>
//     </div>
//   )
// };

// export default Portfolio;

import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio__container">
      <h3 className="portfolio__subtitle">Портфолио</h3>
      <ul className="portfolio__infoblock">
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://github.com/IlyaSaenko/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://github.com/IlyaSaenko/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://github.com/IlyaSaenko/react-mesto-api-full-gha" target="_blank" rel="noreferrer">Одностраничное приложение
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
