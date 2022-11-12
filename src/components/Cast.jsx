import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import defImg from '../image/defImg.jpg';

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
        // console.log(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
  }, [movieId]);

  console.log(castList);
  // const { cast_id, name, profile_path } = castList;


return (
  <div>
    {castList &&
      castList.map(({ cast_id, name, profile_path }) => (
        <div key={cast_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : defImg
            }
            alt={`${name}`}
            width="110"
          />
          {name}
        </div>
      ))}
  </div>
);
}




// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US