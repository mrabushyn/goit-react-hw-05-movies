import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { SearchBox } from 'pages/Movie';
import { MovieDetails } from 'pages/MovieDetails'

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
          {/* <Route
            path="/movies/:movie idcast"
            element={<div>Movies ID Cast</div>}
          />
          <Route
            path="/movies/:movie idreviews"
            element={<div>Movies ID Reviews</div>}
          /> */}
        </Route>
      </Routes>
    </div>
  );
};
