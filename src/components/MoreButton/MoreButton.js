import React, { useCallback } from 'react';
import './MoreButton.css';

function MoreButton({ setVisibleMoviesCount, visibleMoviesCount }) {
  const handleLoadMoreMovies = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1280 && screenWidth > 1100) {
      setVisibleMoviesCount(visibleMoviesCount + 4);
    } else if (screenWidth <= 1100 && screenWidth >= 821) {
      setVisibleMoviesCount(visibleMoviesCount + 3);
    } else if (screenWidth <= 820) {
      setVisibleMoviesCount(visibleMoviesCount + 2);
    } else {
      setVisibleMoviesCount(visibleMoviesCount + 4);
    }
  }, [visibleMoviesCount, setVisibleMoviesCount]);

  return (
    <section className='more'>
      <button className='more__button' type='button' onClick={handleLoadMoreMovies}>
        Ещё
      </button>
    </section>
  );
}

export default MoreButton;