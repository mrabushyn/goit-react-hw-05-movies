import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import  Header  from './Header/Header';
// import { Home } from 'pages/Home/Home';
// import { SearchBox } from 'pages/Movie/Movie';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { MovieCast } from './Cast/Cast';
// import { MovieReviews } from './Reviews/Reviews';

// import { NotFound } from '../pages/NotFound/NotFound';




const Header = lazy(() => import('./Header/Header'));
const Home = lazy(() => import('../pages/Home/Home'));
const SearchBox = lazy(() => import('../pages/Movie/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./Cast/Cast'));
const MovieReviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));



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
