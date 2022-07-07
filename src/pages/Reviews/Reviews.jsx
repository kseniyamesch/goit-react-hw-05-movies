import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/api';
import s from './Reviews.module.css';

export default function Reviews() {
  const [data, setData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(response => {
      setData(response.data.results);
    });
  }, [movieId]);

  return (
    <>
      {data && data.length === 0 && (
        <p>We don`t have any reviews for this movie</p>
      )}
      {data && data.length !== 0 && (
        <ul className={s.list}>
          {data.map(review => {
            return (
              <li key={review.id}>
                <p className={s.author}>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
