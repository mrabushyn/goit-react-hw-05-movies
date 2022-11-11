import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../components/Header';
import css from './Home.module.css';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const MovieDetails = () => {
  const [res, setRes] = useState({});
  const { movieId } = useParams();


  useEffect(() => {
    async function fatchData() {
      try {
        const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
        setRes(response);
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
  }, []);

  if (!res) {
    return null;
  }

  // let { original_title, overview, poster_path } = res.data;

  // console.log(original_title);
  console.log(res);

  return (
    <>
      <header className={css.header}>
        <Header />
        mmmmmmmmm
      </header>
      {res && 
        <div>
          nnnnngffffffff
          {res.data.original_title}
          {res.data.overview}
        </div>
      }
    </>
  );
};
