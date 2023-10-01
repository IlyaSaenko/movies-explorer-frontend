export function durationFilm(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + 'ч ' + minutes + 'м';
}

export function searchAndFilterMovies(movies, query, shortFilm) {
  const filteredMoviesByWords = movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(query.toLowerCase()) || movie.nameEN.toLowerCase().includes(query.toLowerCase());
  });

  if (shortFilm) {
    return filteredMoviesByWords.filter((movie) => movie.duration <= 40);
  }

  return filteredMoviesByWords;
}