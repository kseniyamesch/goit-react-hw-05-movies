import { useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import s from './Movies.module.css';
import { getMoviesOnQuery } from 'services/api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() =>
    searchParams.get('query') ? searchParams.get('query') : ''
  );
  const [data, setData] = useState('');

  const { pathname, search } = useLocation();

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    const normalizedQuery = query.trim().toLowerCase();
    evt.preventDefault();
    if (!query) {
      return;
    }
    getMoviesOnQuery(query).then(response => {
      setData(response.data.results);
    });
    setSearchParams(`query=${normalizedQuery}`);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className={s.form}>
        <input type="input" onChange={handleChange} autoFocus value={query} />
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
                  <Link
                    to={
                      pathname.includes('movies')
                        ? `${movieId}`
                        : `movies/${movieId}`
                    }
                    state={{ from: pathname, search: search }}
                  >
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
