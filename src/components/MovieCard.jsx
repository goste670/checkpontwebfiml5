// src/components/MovieCard.jsx
import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleWatchTrailer = () => {
    const trailerUrl = `https://www.youtube.com/watch?v=${movie.title}`;
    window.open(trailerUrl, '_blank');
  };

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        margin: '1em',
        backgroundColor: '#444',
        padding: '1em',
        textAlign: 'center',
        maxWidth: '200px',
        position: 'relative',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5em', borderRadius: '4px' }}
      />
      <h3 style={{color: 'red',fontSize : '35px', margin: '0.5em 0', fontSize: '1.2em' }}> <img className="work-img" src="./public/tata.gif" alt="Description de l'image" style={{ width: '20px' }} />  {movie.title}  </h3>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '1em',
            borderRadius: '8px',
            fontSize : '30px',
            zIndex: 1000,
          }}
        >
          <p>{movie.overview}</p>
          <button
            onClick={handleWatchTrailer}
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              padding: '0.5em 1em',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1em',
            }}
          >
            Watch Trailer
          </button>
        </div>
      )}

{/*       <button
        onClick={handleWatchTrailer}
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          padding: '0.5em 1em',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1em',
          marginTop: '0.5em',
        }}
      >
        Watch Trailer
      </button> */}
    </div>
  );
};

export default MovieCard;
