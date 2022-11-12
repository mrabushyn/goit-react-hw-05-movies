import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import css from './Home.module.css';

import { Header } from '../components/Header/Header';
import { CastReviewsLinks } from '../components/Links';

import defImg from '../image/defImg.jpg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fatchData() {
      try {
        const response = await axios.get(
          `movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
  }, [movieId]);

  let { original_title, overview, poster_path } = movie;

  return (
    <>
      <header 
      // className={css.header}
      >
        <Header />
      </header>
      {movie && (
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : defImg
            }
            alt={`${original_title}`}
            width="300"
          />
          {original_title}
          {overview}
        </div>
      )}
      <CastReviewsLinks />
    </>
  );
};
