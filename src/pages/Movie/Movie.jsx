import { useState, useEffect } from 'react';


import { Loader } from '../../components/Loader/Loader';
// import { InputBox } from 'components/SearchBox/SearchBox';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { StyledLink, Input, Button } from './Movie.styled';
import { useSearchParams } from 'react-router-dom';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const SearchBox = () => {
  // значення query, після сабміту форми
  const [searchText, setSearchText] = useState('');
  // масив обєктів - результат фетча(респонс)
  const [searchMovies, setSearchMovies] = useState(null);
  // лоадер
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('query') ?? '';
  console.log(filterParam);

  useEffect(() => {
    async function fatchData() {
      try {
        const response = await axios.get(
          `search/movie?api_key=${API_KEY}&query=${searchText}&language=en-US&page=1&include_adult=false`
        );
        const searchMoviesResponse = response.data.results;
        setSearchMovies(searchMoviesResponse);
        setLoading(false);
      } catch (error) {
        error.message = 'how to turn off first render?';
        // console.log(error.message);
      }
    }
    fatchData();
  }, [searchText, searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setLoading(true);
    const inputSearch = evt.target.elements.text.value;
    setSearchText(inputSearch);
  };

  const handleChange = evt => {
    const inputChange = evt.target.value;
    setSearchParams(inputChange !== '' ? { query: inputChange } : {});
  };

  return (
    <div>
      
      {/* <InputBox onChange={changeFilter} /> */}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="text"
          value={filterParam}
          placeholder="Search movie"
          onChange={handleChange}
        />
        {filterParam !== '' && (
          <Button type="submit">
            <BsSearch />
          </Button>
        )}
      </form>
      
      <main>
        {loading && <Loader />}
        <div>
          {searchMovies &&
            searchMovies.length === 0 &&
            'Здається такого фільму немає'}
        </div>
        {searchMovies && (
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
