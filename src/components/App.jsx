import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { SearchBox } from 'pages/Movie/Movie';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { MovieCast } from './Cast/Cast';
import { MovieReviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div
    // style={{
    // height: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // fontSize: 40,
    // color: '#010101',
    // }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<SearchBox />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
          <Route index element={<MovieCast />} />
        </Route>
      </Routes>
    </div>
  );
};
