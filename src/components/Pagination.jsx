// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          padding: '0.5em 1em',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1em',
          marginRight: '0.5em',
        }}
      >
        Previous Page
      </button>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          padding: '0.5em 1em',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1em',
          marginLeft: '0.5em',
        }}
      >
        Next Page
      </button>

      <button
        onClick={() => {}}
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          padding: '0.5em 1em',
          borderRadius: '4px',
          cursor: 'default',
          fontSize: '1em',
          margin: '0 0.5em',
        }}
      >
        {currentPage}
      </button>
    </div>
  );
};

export default Pagination;
