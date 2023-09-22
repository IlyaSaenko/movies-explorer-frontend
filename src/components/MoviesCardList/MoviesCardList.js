import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, isOwner}) {

  return (
    <>
      <section className="movies__section" aria-label="Секция с карточками">
        {
          movies?.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
              />
            )
          }
        )}
      </section>
      {
        (!isOwner &&
          <section className="movies__section-more" aria-label="Кнопка Ещё">
             <button className="movies__more-button">Ещё</button>
          </section>
        )
      }
    </>
  );
}

export default MoviesCardList;