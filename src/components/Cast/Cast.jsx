import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Actor, CastList, Name } from './Cast.styled';

import incognito from '../../image/incognito.jpg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const MovieCast = () => {
  const [castList, setCastList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fatchData() {
      try {
        const response = await axios.get(
          `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
        );
        setCastList(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
  }, [movieId]);

  return (
    <CastList>
      {castList &&
        castList.map(({ cast_id, name, profile_path }) => (
          <Actor key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : incognito
              }
              alt={`${name}`}
              width="70"
            />
            <Name>{name}</Name>
          </Actor>
        ))}
    </CastList>
  );
};
