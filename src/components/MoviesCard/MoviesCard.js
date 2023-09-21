// import './MoviesCard.css';

// const MoviesCard = ({ isSavedMoviesPage, movie }) => {
//   return (
//     <div className='card'>
//       <img
//         src={movie.image}
//         alt={`Обложка фильма: ${movie.name}`}
//         className='card__image'
//       />
//       <div className='card__description'>
//         <span className='card__name'>{movie.name}</span>
//         <span className='card__duration'>{movie.duration}</span>
//       </div>
//       {movie.saved && !isSavedMoviesPage && <button className='card__button_saved' />}
//       {isSavedMoviesPage ? (
//         <button className='card__button_delete' />
//       ) : (
//         <button className='card__button'>Сохранить</button>
//       )}
//     </div>
//   )
// };

// export default MoviesCard;

import React from 'react';
import likeButton from '../../../src/images/save-visible.svg';

function MoviesCard({movie}) {
  return (
    <article className="movies__card">
      <img className="movie__image" src={movie.image} alt={movie.nameRU} />
      <div className="movie__info">
        <figcaption className="movie__figcaption">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <h3 className="movie__duration">{movie.duration}</h3>
        </figcaption>
        <button className="movie__like-button" name="movie__like-button" type="button">
          <img className="movie__like-image" src={likeButton} alt="Кнопка лайка"></img>
        </button>
      </div>
    </article>
  );
}

export default MoviesCard;
