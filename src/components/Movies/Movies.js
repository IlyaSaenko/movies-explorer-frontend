import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Movies({ movies, isOwner }) {
  return (
    <main className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
    </main>
  );
}

export default Movies;