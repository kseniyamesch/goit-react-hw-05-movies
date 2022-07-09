import { useEffect, useState, Suspense} from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation
} from 'react-router-dom';
import { getMovieInformation } from 'services/api';

import s from './MovieDetails.module.css';

export default function MovieDetails() {
  const [data, setData] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieInformation(movieId).then(response => {
      setData(response.data);
    });
  }, [movieId]);

  const location = useLocation();

  return (
    <div className={s.wrap}>

      <Link to={location?.state?.from ?? '/'}>
        <button>Go back</button>
        
        </Link>

      {data && (
        <>
          <div className={s.thomb}>
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              className={s.img}
            />
            <div className={s.descr}>
              <h1>
                {data.title}(
                {data.release_date
                  ? data.release_date.slice(0, 4)
                  : 'Unknown data of release'}
                )
              </h1>
              <p>User score: {Math.round(data.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p className={s.text}>{data.overview}</p>
              <h2>Genres:</h2>
              {data.genres.map(genre => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
              <p></p>
            </div>
          </div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Review</Link>
            </li>
          </ul>
        </>
      )}
<Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>

    </div>
  );
}
