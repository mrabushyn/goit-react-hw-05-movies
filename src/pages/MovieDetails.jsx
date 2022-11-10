import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const MovieDetails = () => {
  const param = useParams();
  console.log('param', param);

  useEffect(() => {
    async function fatchData() {
      try {
        const response = await axios.get(
          `movie/${param}?api_key=${API_KEY}&language=en-US`
        );
        console.log(param);
      } catch (error) {
        console.log(error);
        console.log(param);
      }
    }
    fatchData();
  }, [param]);

  return <div>kuzxfiau {`${param}`}</div>;
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
