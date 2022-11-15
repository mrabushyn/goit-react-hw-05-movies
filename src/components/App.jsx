import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { SearchBox } from 'pages/Movie/Movie';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { MovieCast } from './Cast/Cast';
import { MovieReviews } from './Reviews/Reviews';
import { Header } from './Header/Header';
import { NotFound } from '../pages/NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchBox />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
            <Route index element={<MovieReviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
