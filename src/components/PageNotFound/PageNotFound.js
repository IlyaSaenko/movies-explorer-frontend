import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className="notfound">
      <div className="notfound__text-block">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <Link className="notfound__link" to="/">Назад</Link>
    </main>
  );
}

export default PageNotFound;