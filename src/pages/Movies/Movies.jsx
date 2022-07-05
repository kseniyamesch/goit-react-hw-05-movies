import { useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import s from './Movies.module.css';
import { getMoviesOnQuery } from 'services/api';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');

  let [, setSearchParams] = useSearchParams();
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
        <label>
          <input type="input" onChange={handleChange} />
        </label>
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
