import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SavedMovies({movies, isOwner}) {
  return (
    <main className="movies saved-movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
      {
        (
          <section className="movies__line-area" aria-label="Область, разделяющая фильмы и футер" />
        )
      }
    </main>
  );
}

export default SavedMovies;