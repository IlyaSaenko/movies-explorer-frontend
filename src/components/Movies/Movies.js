import React, { useState, useEffect } from 'react';
import MoviesCardList from '..//MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreButton from '../MoreButton/MoreButton';
import { moviesApi } from '../../utils/MoviesApi';
import { searchAndFilterMovies } from '../../utils/utils';
import { mainApi } from '../../utils/MainApi';
import useVisibleMovies from '../../hooks/useVisibleMovies';

const Movies = () => {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('beatMovies')) || []);
  const [filtredMovies, setFiltredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')) || []);
  const [savesMovies, setSavesMovies] = useState(JSON.parse(localStorage.getItem('savesMovies')) || []);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('query') || '');
  const [shortFilm, setShortFilm] = useState(JSON.parse(localStorage.getItem('isShort')) || false);
  const [searchError, setSearchError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visibleMoviesCount, setVisibleMoviesCount] = useVisibleMovies();

  const likedMovies = filtredMovies.map((item) => ({
    ...item,
    saveMovie: savesMovies.find((saveMovie) => saveMovie.movieId === item.id) || null
  }));

  function handleSearch() {
    setSearchError('');
    const store = localStorage.getItem('beatMovies');
    if (store) {
      setFiltredMovies(JSON.parse(store));
      const filterMoviesArray = searchAndFilterMovies(JSON.parse(store), searchQuery, shortFilm);
      setFiltredMovies(filterMoviesArray);
      localStorage.setItem('filteredMovies', JSON.stringify(filterMoviesArray));
      localStorage.setItem('query', searchQuery);

      if (filterMoviesArray.length === 0) {
        setSearchError('Ничего не найдено');
        return;
      }
    } else {
      setIsLoading(true);
      setSearchError('');
      moviesApi
        .getBeatMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem('beatMovies', JSON.stringify(res));
          localStorage.setItem('isShort', shortFilm);
          localStorage.setItem('query', searchQuery);
          const filterMoviesArray = searchAndFilterMovies(res, searchQuery, shortFilm);
          setFiltredMovies(filterMoviesArray);
          localStorage.setItem('filteredMovies', JSON.stringify(filterMoviesArray));

          if (filterMoviesArray.length === 0) {
            setSearchError('Ничего не найдено');
            return;
          }
        })
        .catch((err) => {
          console.log(err);
          setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.');
          setFiltredMovies([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
      const jwt = localStorage.getItem('jwt');
      mainApi
        .getMovies(jwt)
        .then((res) => {
          setSavesMovies(res);
          localStorage.setItem('savesMovies', JSON.stringify(res));
        })
        .catch((res) => {
          console.log(res);
        });
    }
  }

  function handleCheckBox(evt) {
    const value = evt.target.checked;
    setShortFilm(value);
    localStorage.setItem('isShort', value);

    const store = localStorage.getItem('filteredMovies');
    if (store) {
      const filterMoviesArray = searchAndFilterMovies(movies, searchQuery, value);
      setFiltredMovies(filterMoviesArray);
      localStorage.setItem('filteredMovies', JSON.stringify(filterMoviesArray));
    }
  }

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1100) {
        setVisibleMoviesCount(16);
      } else if (screenWidth >= 821) {
        setVisibleMoviesCount(12);
      } else if (screenWidth >= 501) {
        setVisibleMoviesCount(8);
      } else if (screenWidth <= 500) {
        setVisibleMoviesCount(5);
      }
      const resizeTimeoutDelay = 500;
      let resizeTimeout;

      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, resizeTimeoutDelay);
      });

      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [searchQuery, setVisibleMoviesCount]);

  return (
    <section className='movies'>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        shortFilm={shortFilm}
        handleCheckBox={handleCheckBox}
      />
      <MoviesCardList
        movies={likedMovies.slice(0, visibleMoviesCount)}
        savesMovies={savesMovies}
        setSavesMovies={setSavesMovies}
        isLoading={isLoading}
        searchError={searchError}
      />
      {visibleMoviesCount < filtredMovies.length && (
        <MoreButton setVisibleMoviesCount={setVisibleMoviesCount} visibleMoviesCount={visibleMoviesCount} />
      )}
    </section>
  );
};

export default Movies;