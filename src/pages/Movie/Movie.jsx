import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
// import { InputBox } from 'components/SearchBox/SearchBox';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { StyledLink, Input, Button } from './Movie.styled';
import { useLocation } from 'react-router-dom';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const SearchBox = () => {
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  const [searchMovies, setSearchMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const filterParam = searchParams.get('query') ?? '';


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
  }, [searchText]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setLoading(true);
    const inputSearch = evt.target.elements.text.value;
    setSearchText(inputSearch);
    // setSearchParams(inputSearch !== '' ? { query: inputSearch } : {});
    setLoading(false);

    if (inputSearch === '') {
      setLoading(false);
      alert('Введіть текст для пошуку');
    }
  };

  let arrayOfMovies = [];
    arrayOfMovies = location.state?.a;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="text" placeholder="Search movie" />
        {
          <Button type="onChange">
            <BsSearch />
          </Button>
        }
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
              <StyledLink
                to={`${id}`}
                key={id}
                state={{ from: location, arr: searchMovies }}
              >
                {original_title ? original_title : name}
              </StyledLink>
            ))}
          </ul>
        )}
        {arrayOfMovies &&
          !searchMovies && (
            <ul>
              {arrayOfMovies.map(({ id, original_title, name }) => (
                <StyledLink
                  to={`${id}`}
                  key={id}
                  state={{
                    from: location,
                    arr: arrayOfMovies,
                  }}
                >
                  {original_title ? original_title : name}
                </StyledLink>
              ))}
            </ul>
          )}
      </main>
    </div>
  );
};
