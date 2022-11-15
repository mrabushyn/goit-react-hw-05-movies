import { useState, useEffect } from 'react';
import { StyledLink, TitleH2 } from './Home.styled';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const Home = () => {
  const [rating, setRating] = useState([]);

  useEffect(() => {
    async function fatchData() {
      try {
        const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
        const movies = response.data.results;
        setRating(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main>
        <TitleH2>Trending today</TitleH2>
        {rating.length > 0 && (
          <ul>
            {rating.map(({ id, original_title, name }) => (
              <StyledLink to={`/movies/${id}`} key={id}>
                {original_title ? original_title : name}
              </StyledLink>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};
