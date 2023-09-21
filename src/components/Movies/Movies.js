// import React from 'react';
// import Header from '../Header/Header';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import SearchForm from '../SearchForm/SearchForm';
// import Footer from '../Footer/Footer';

// const movies = [
//   {
//     id: '1',
//     name: '33 слова о дизайне',
//     image: 'images/film-pic.svg',
//     duration: '1ч 47м',
//     saved: false
//   },
//   {
//     id: '2',
//     name: '33 слова о дизайне',
//     image: 'images/film-pic2.svg',
//     duration: '1ч 53м',
//     saved: true
//   },
//   {
//     id: '3',
//     name: '33 слова о дизайне',
//     image: 'images/film-pic3.svg',
//     duration: '1ч 44м',
//     saved: false
//   },
//   {
//     id: '4',
//     name: '33 слова о дизайне',
//     image: 'images/film-pic3.svg',
//     duration: '1ч 44м',
//     saved: false
//   },
//   {
//     id: '5',
//     name: '33 слова о дизайне',
//     image: 'images/film-pic3.svg',
//     duration: '1ч 44м',
//     saved: false
//   },
// ];

// const Movies = ({ loggedIn }) => {
//   return (
//     <section>
//       <Header loggedIn={loggedIn} />
//       <SearchForm />
//       <MoviesCardList isSavedMoviesPage={false} movies={movies} />
//       <Footer />
//     </section>
//   )
// };

// export default Movies;




// import React from 'react';
// import SearchForm from '../SearchForm/SearchForm';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';

// function Movies({ movies, isOwner }) {
//   return (
//     <div className="movies__container">
//       <SearchForm />
//       <MoviesCardList
//         movies={movies}
//         isOwner={isOwner}
//       />
//     </div>
//   );
// }

// export default Movies;


import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Movies({ movies, isOwner }) {
  return (
    <div className="movies__container">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
    </div>
  );
}

export default Movies;