import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { StyledLink, Input, Button } from './Movie.styled';


// import css from './Home.module.css';
import { Header } from '../../components/Header/Header';

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
        <Header />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="text"
          placeholder="Search movie"
        />
        <Button
          type="submit"
        >
          <BsSearch />
        </Button>
      </form>
      <main>
        {/* <div>{searchMovies.length === 0 && 'Вибачте, такого фільму немає'}</div> */}
        {searchMovies.length > 0 && (
          <ul>
            {searchMovies.map(({ id, original_title, name }) => (
              <StyledLink to={`${id}`} key={id}>
                {original_title ? original_title : name}
              </StyledLink>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};
