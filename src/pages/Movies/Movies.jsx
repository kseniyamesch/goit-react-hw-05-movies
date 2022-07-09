import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import s from './Movies.module.css';
import { getMoviesOnQuery } from 'services/api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(() =>
    searchParams.get('query') ? searchParams.get('query') : ''
  );
  const [data, setData] = useState('');

  useEffect(() => {
    if (searchParams.get('query')) {
      getMoviesOnQuery(query).then(response => setData(response.data.results));
    }
  }, [query, searchParams]);

  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams(`query=${evt.currentTarget.elements.query.value}`);
    const normalizedQuery = evt.currentTarget.elements.query.value
      .trim()
      .toLowerCase();
    setQuery(normalizedQuery);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className={s.form}>
        <input type="text" autoFocus name="query"/>
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      {data?.length !== 0 && (
        <div>
          <ul>
            {data.map(film => {
              const movieId = film.id;
              return (
                <li key={film.id}>
                  <Link to={`/movies/${movieId}`} state={{ from: location }}>
                    {film.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
