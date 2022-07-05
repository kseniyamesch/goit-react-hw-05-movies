import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFound from './NotFound';
import Cast from "components/Cast";
import Reviews from './Reviews';

export const App = () => {
  return (
    <div className="Container">
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
