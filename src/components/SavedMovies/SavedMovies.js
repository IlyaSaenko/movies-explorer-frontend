// import React from 'react';
// import Header from '../Header/Header';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import SearchForm from '../SearchForm/SearchForm';
// import Footer from '../Footer/Footer';

// const savedMovies = [
//   {
//     id: '1',
//     name: '33 слова о дизайне',
//     image: 'images/first-movie.png',
//     duration: '1ч 17м',
//     saved: true
//   },
//   {
//     id: '2',
//     name: 'Киноальманах «100 лет дизайна»',
//     image: 'images/second-movie.png',
//     duration: '1ч 17м',
//     saved: true
//   },
//   {
//     id: '3',
//     name: 'В погоне за Бенкси',
//     image: 'images/third-movie.png',
//     duration: '1ч 17м',
//     saved: true
//   },
// ];

// const SavedMovies = ({ loggedIn }) => {
//   return (
//     <section>
//       <Header loggedIn={loggedIn} />
//       <SearchForm />
//       <MoviesCardList isSavedMoviesPage={true} movies={savedMovies} />
//       <Footer />
//     </section>
//   )
// };

// export default SavedMovies;

import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SavedMovies({movies, isOwner}) {
  return (
    <div className="movies__container">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
      {
        (
          <section className="movies__saveddevider" aria-label="Секция отделяющая карточки от Footer" />
        )
      }
    </div>
  );
}

export default SavedMovies;
