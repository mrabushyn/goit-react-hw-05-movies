import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from '../components/Header'; 

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
        console.log(rating);
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
    <header>
<Header/>
    </header>
    <main> Trending today
      {rating.length > 0 && (
        <ul>
          {rating.map(movie => (
            <li key={movie.id}>
              {' '}
              {movie.original_title ? movie.original_title : movie.name}{' '}
            </li>
          ))}
        </ul>
      )}
    </main>
  </>);
};
