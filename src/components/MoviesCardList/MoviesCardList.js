import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ movies, savesMovies, setSavesMovies, handleDeleteMovie, isLoading, searchError }) {
  return (
    <section className='movies-container'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ul className='movies-container__list'>
            {movies.map((movie) => (
              <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                savesMovies={savesMovies}
                setSavesMovies={setSavesMovies}
                onDeleteMovie={handleDeleteMovie}
              />
            ))}
          </ul>
          <span className='movies-container__error'>{searchError}</span>
        </>
      )}
    </section>
  );
}