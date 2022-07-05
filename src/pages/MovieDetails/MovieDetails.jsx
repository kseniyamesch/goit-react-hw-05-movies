import { useEffect, useState } from "react";
import {Link, Outlet, useParams, useLocation  } from "react-router-dom";
import { getMovieInformation } from 'services/api';

import s from './MovieDetails.module.css'

export default function MovieDetails () {
const [data, setData] = useState(null);
const [path, setPath] = useState('/');
const { movieId } = useParams();



useEffect(() => {
    getMovieInformation(movieId)
    .then (response => {
        setData(response.data)
        })
}, [movieId]);
console.log(data);

const location = useLocation();

useEffect(() => {
    setPath(location?.state?.from + location?.state?.search);
  }, [location]);

    return (
        <div className={s.wrap}>
        {/* <button type='click'>Go back</button> */}
        <Link to={path}>Go back</Link>

{data && (
    <>
    <div className={s.thomb}>
    <img 
    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} 
    alt={data.title}
    className={s.img} />
    <div className={s.descr}>
    <h1>{data.title}({data.release_date ? data.release_date.slice(0, 4) : 'Unknown data of release'})</h1>
    <p>User score: {Math.round(data.vote_average * 10)}%</p>
    <h2>Overview</h2>
    <p className={s.text}>{data.overview}</p>
    <h2>Genres:</h2>
    {data.genres.map(genre => 

        {return (<span key={genre.id}>{genre.name}</span>)}
        )}
    <p></p>
    </div>

    </div>
    <p>Additional information</p>
    <ul>
        <li>
<Link
to='cast'>Cast</Link>
        </li>
        <li>
        <Link
        to='reviews'
        >Review</Link>
        </li>
    </ul>
    </>
)}
    
        <Outlet/>
        </div>
    )
}

