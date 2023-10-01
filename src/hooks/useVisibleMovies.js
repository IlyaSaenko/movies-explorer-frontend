import { useState } from 'react';

function useVisibleMovies() {
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(16);

  return [visibleMoviesCount, setVisibleMoviesCount];
}

export default useVisibleMovies;