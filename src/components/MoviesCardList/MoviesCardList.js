import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isLoading, onClick, limit, isSavedMovies, onSave, onDelete, savedMovies }) {
  // console.log("MoviesCardList => isLoading=" + isLoading)
  return (
    <>
      <ul className="movies__section" aria-label="Секция с карточками">
        {
          // isLoading ? <Preloader /> :
            movies?.map((movie, index, array) => {
              return (
                index < limit &&
                <MoviesCard
                  isSavedMovies={isSavedMovies}
                  onSave={onSave}
                  onDelete={onDelete}
                  movie={movie}
                  savedMovies={savedMovies}
                  key={movie.movieId}
                />
              )
            }
            )}
      </ul>
      {
        (movies.length > limit) &&
        (
          <section className="movies__section-more" aria-label="Секция с кнопкой Ёще">
            <button
              className="movies__more-button"
              type="button"
              onClick={onClick}
            >Ещё
            </button>
          </section>
        )
      }
    </>
  );
}

export default MoviesCardList;