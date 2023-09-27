import React from 'react';
import likeButton from '../../../src/images/like-button.svg';
import dislikeButton from '../../../src/images/unlike-button.svg';
import deleteMovieButton from '../../../src/images/delete-movie.svg';
import movieDuration from './src/../../../utils/DurationChange';

function MoviesCard({isSavedMovies, onSave, onDelete, movie, savedMovies}) {
  const {nameRU, image, duration, trailerLink} = movie;
  const convertedDuration = movieDuration(duration);

  let isLiked = false;
  let likedId;
  isLiked = savedMovies.some((item) => {
    if (item.movieId === movie.movieId) {
      likedId = item._id;
      return true;
    }
    return false;
  })

  const buttonImage = (isSavedMovies ? deleteMovieButton : isLiked ? likeButton : dislikeButton);
  return (
    <li className="movie">
      <a className="movie__trailer-link" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="movie__image" src={image} alt={nameRU} />
      </a>
      <div className="movie__info">
        <figcaption className="movie__figcaption">
          <h2 className="movie__title">{nameRU}</h2>
          <h3 className="movie__duration">{convertedDuration}</h3>
        </figcaption>
        <button
          className="movie__like-button"
          name="movie__like-button"
          type="button"
          onClick={() => {
            isLiked || isSavedMovies ? onDelete(movie._id ? movie._id : likedId) : onSave(movie);
          }}
        >
          <img className="movie__like-image" src={buttonImage} alt="Кнопка лайка"></img>
        </button>
      </div>
    </li>
  );
}

export default MoviesCard;