import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const Navigation = lazy(() => import('../components/Navigation'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <div className="Container">
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>

            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
