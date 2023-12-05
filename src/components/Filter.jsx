// src/components/Filter.jsx
import React from 'react';

const Filter = ({ dispatch }) => {
  const handleFilterChange = (e) => {
    dispatch({ type: 'SET_FILTER', payload: parseInt(e.target.value) });
  };

  return (
    <div>
      <label style={{ marginRight: '0.5em', color: '#fff' }}>Filter by Genre: </label>
      <select
        onChange={handleFilterChange}
        style={{
          padding: '0.5em',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1em',
          backgroundColor: '#333',
          color: '#fff',
        }}
      >
        <option value="all">All Genres</option>
        <option value="28">Action</option>
        <option value="18">Drama</option>
        <option value="35">Comedy</option>
        {/* Ajoutez d'autres genres au besoin */}
      </select>
    </div>
  );
};

export default Filter;
