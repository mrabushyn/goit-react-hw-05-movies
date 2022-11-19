import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { StyledLink, Input, Button } from './Movie.styled';
import { useLocation, useSearchParams } from 'react-router-dom';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchText, setSearchText] = useState(query !== '' ? query : '');
  const [searchMovies, setSearchMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `search/movie?api_key=${API_KEY}&query=${searchText}&language=en-US&page=1&include_adult=false`
        );
        const searchMoviesResponse = response.data.results;
        setSearchMovies(searchMoviesResponse);
        setLoading(false);
      } catch (error) {
        error.message = 'how to turn off first render?';
        console.log(error.message);
      }
    }

    if (query !== '') {
    fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const handleSubmit = evt => {
    evt.preventDefault();

    setLoading(true);
    const inputSearch = evt.target.elements.text.value;
    setSearchText(inputSearch);
    setSearchParams(inputSearch !== '' ? { query: inputSearch } : {});
    setLoading(false);
    if (inputSearch === '') {
      setLoading(false);
      alert('Введіть текст для пошуку');
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="text" placeholder="Search movie" />
        {
          <Button type="submit">
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
              <StyledLink to={`${id}`} key={id} state={{ from: location }}>
                {original_title ? original_title : name}
              </StyledLink>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default SearchBox;

// {/* {arrayOfMovies && !searchMovies && (
//   <ul>
//     {arrayOfMovies.map(({ id, original_title, name }) => (
//       <StyledLink
//         to={`${id}`}
//         key={id}
//         state={{
//           from: location,
//           arr: arrayOfMovies,
//         }}
//       >
//         {original_title ? original_title : name}
//       </StyledLink>
//     ))}
//   </ul>
// )} */}
