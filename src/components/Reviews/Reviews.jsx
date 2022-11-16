import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, TitleH2, Inform, Item } from './Reviews.styled';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

const MovieReviews = () => {
  const [reviewsList, setReviews] = useState([]);
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

  return (
    <Container>
      {reviewsList.length === 0
        ? <Inform> No reviews </Inform>
        : reviewsList.map(({ author, content, id }) => (
            <Item key={id}>
              <TitleH2>Author: {author}</TitleH2>
              <Inform>{content}</Inform>
            </Item>
          ))}
    </Container>
  );
};


export default MovieReviews