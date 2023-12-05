// src/App.jsx
import React, { useReducer, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import Pagination from './components/Pagination';

const apiKey = 'f7d22120d190311f2a36d44357d2b13b';
const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const initialState = {
  movies: [],
  filter: 'all',
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`${popularMoviesURL}&page=${state.currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_MOVIES', payload: data.results });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: data.total_pages });
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, [state.currentPage]);

  const handlePageChange = (newPage) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#333', padding: '1em', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '30px', margin: 0 }}>  <img className="work-img" src="./public/tata.gif" alt="Description de l'image" style={{ width: '70px' }} />  Movie web film 5  </h1> 
        <nav>
          <Filter dispatch={dispatch} />
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MovieList movies={state.movies} filter={state.filter} />
              <Pagination
                currentPage={state.currentPage}
                totalPages={state.totalPages}
                onPageChange={handlePageChange}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
