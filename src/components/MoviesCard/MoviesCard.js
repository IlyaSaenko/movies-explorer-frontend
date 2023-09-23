import React from 'react';
import likeButton from '../../../src/images/save-visible.svg';

function MoviesCard({movie}) {
  return (
    <li className="movie">
      <img className="movie__image" src={movie.image} alt={movie.nameRU} />
      <div className="movie__info">
        <figcaption className="movie__figcaption">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <h3 className="movie__duration">{movie.duration}</h3>
        </figcaption>
        <button className="movie__like-button" name="movie__like-button" type="button">
          <img className="movie__like-image" src={likeButton} alt="Лого лайка"></img>
        </button>
      </div>
    </li>
  );
}

export default MoviesCard;