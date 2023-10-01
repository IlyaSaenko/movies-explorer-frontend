import React, { useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { durationFilm } from '../../utils/utils';
import { mainApi } from '../../utils/MainApi';

export default function MoviesCard({ movie, savesMovies, setSavesMovies, onDeleteMovie }) {
  const location = useLocation();
  const deleteBg = location.pathname === '/saved-movies';

  const [isSaved, setIsSaved] = useState(movie.saveMovie);
  const imageUrl = movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image;

  function handleButtonClick() {
    const jwt = localStorage.getItem('jwt');
    if (!deleteBg) {
      if (isSaved) {
        handleDeleteMovie(movie, jwt);
      } else {
        handleSaveMovie(movie, jwt);
      }
    } else {
      onDeleteMovie(movie._id, jwt);
    }
  }

  function handleSaveMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    setIsSaved(false);
    return mainApi
      .saveMovie(
        {
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          trailerLink: movie.trailerLink,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        },
        jwt
      )
      .then((res) => {
        setIsSaved(true);
        setSavesMovies([res, ...savesMovies]);
        localStorage.setItem('savesMovies', JSON.stringify([res, ...savesMovies]));
      })
      .catch((err) => {
        setIsSaved(false);
        console.error(err);
      });
  }

  function handleDeleteMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    setIsSaved(true);
    const findMovie = savesMovies.find((i) => i.movieId === movie.id);
    const movieId = findMovie._id;

    mainApi
      .deleteMovie(movieId, jwt)
      .then((res) => {
        setIsSaved(false);
        setSavesMovies((state) => state.filter((c) => c._id !== movieId));
        localStorage.setItem('savesMovies', JSON.stringify(savesMovies.filter((item) => item._id !== movieId)));
      })
      .catch((err) => {
        setIsSaved(true);
        console.log(err);
      });
  }

  return (
    <li className='movie'>
      <a href={movie.trailerLink} rel='noreferrer' className='movies-card__link' target='_blank'><img className='movies-card__photo' src={imageUrl} alt={movie.nameRU} /></a>
      <div className='movie__container'>
        <h2 className='movie__name'>{movie.nameRU}</h2>
        <button
          className={`movie__button-save-like ${isSaved ? 'movie__button-save-like_active' : ''} ${deleteBg ? 'movie__button-save-close' : ''}`}
          type='button'
          onClick={handleButtonClick}
        ></button>
      </div>
      <p className='movie__duration'>{durationFilm(movie.duration)}</p>
    </li>
  );
}