// src/components/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, filter }) => {
  const filteredMovies = filter === 'all' ? movies : movies.filter((movie) => movie.genre_ids.includes(filter));

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {filteredMovies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
