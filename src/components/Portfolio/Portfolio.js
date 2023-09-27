import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__subtitle">Портфолио</h3>
      <ul className="portfolio__info">
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