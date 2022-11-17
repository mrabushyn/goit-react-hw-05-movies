import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CastReviewsLinks } from '../../components/Links/Links';

import axios from 'axios';
import {
  Img,
  Box,
  Div,
  MainContainer,
  Title,
  Inform,
  TitleH2,
  Li,
  StyledLink,
} from './MovieDetails.styled';

import defImg from '../../image/defImg.jpg';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f09951289a6b6bcb457d17314bf86aca';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
console.log(location);

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


  let {
    original_title,
    overview,
    poster_path,
    genres,
    vote_average,
    release_date,
  } = movie;

  const date = new Date(release_date);
  const year = date.getFullYear();
  const vote = vote_average * 10;

// console.log('це він',location.state?.arr);

  return (
    <>
      {
        <StyledLink
          to={location.state?.from ?? '/'}
          // state={{ a: location.state?.arr ?? [] }}
        >
          Go back
        </StyledLink>
      }
      {movie && (
        <MainContainer>
          <Box>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original${poster_path}`
                  : defImg
              }
              alt={`${original_title}`}
              width="300"
            />
          </Box>
          <Div>
            <Title>
              {original_title} ({year})
            </Title>
            <TitleH2>Vote</TitleH2>
            <Inform>{vote}%</Inform>
            <TitleH2>Overview</TitleH2>
            <Inform>{overview}</Inform>
            <TitleH2>Genres</TitleH2>
            <Inform>
              {genres && genres.map(({ id, name }) => <Li key={id}>{name}</Li>)}
            </Inform>
          </Div>
        </MainContainer>
      )}
      <CastReviewsLinks />
    </>
  );
};


export default MovieDetails