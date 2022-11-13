import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

export const MovieReviews = () => {
  const [reviewsList, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fatchData() {
      try {
        const response = await axios.get(
          `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
        );
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
  }, [movieId]);

  console.log(reviewsList);


  return (
    <ul>
      {reviewsList ?
        reviewsList.map(({ author, content, id }) => (
          <li key={id}>
            Author: {author}
            {content}
          </li>
        )) : 'No reviews'}
    </ul>
  );
};


