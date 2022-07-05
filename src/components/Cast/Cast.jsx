import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/api';
import s from './Cast.module.css'

export default function Cast() {
  const [data, setData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(response => {
      console.log(response.data.cast);
      setData(response.data.cast);
      console.log(data);
    })
  }, [movieId]);

  return (
    <>
      {data && (
        <ul className={s.list}>
          {data.map(cast => {
            return (
              <li 
              key={cast.id}
              className={s.item}>
               <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} 
               alt={cast.name} 
               className={s.img}/>
               <div className={s.desc}>
               <p>{cast.name}</p>
               <p>Character: {cast.character}</p>
               </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
