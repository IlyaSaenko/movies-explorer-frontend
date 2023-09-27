import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <main className="notfound">
      <div className="notfound__text-block">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <button
        className="notfound__link"
        type="button"
        onClick={handleClick}
      >Назад
      </button>
    </main>
  );
}

export default PageNotFound;