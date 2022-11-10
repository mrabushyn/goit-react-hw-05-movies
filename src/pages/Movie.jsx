import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import css from './Home.module.css';
import { Header } from '../components/Header';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    async function fatchData() {
      try {
        const response = await axios.get(
          `search/movie?api_key=${API_KEY}&query=${searchText}&language=en-US&page=1&include_adult=false`
        );
        const searchMoviesResponse = response.data.results;
        setSearchMovies(searchMoviesResponse);
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
  }, [searchText]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputSearch = evt.target.elements.text.value;
    setSearchText(inputSearch);
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="text"
          placeholder="Search movie"
        />
        <button className={css.button} type="submit">
          <BsSearch />
        </button>
      </form>
      <main>
        {/* <div>{searchMovies.length === 0 && 'Вибачте, такого фільму немає'}</div> */}
        {searchMovies.length > 0 && (
          <ul>
            {searchMovies.map(movie => (
              <NavLink to={`${movie.id}`} className={css.navLink} key={movie.id}>
                {movie.original_title ? movie.original_title : movie.name}{' '}
              </NavLink>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};
