import React, {useState, useEffect} from "react";
import { getPopularMovies } from "services/api";
// import { Link } from 'react-router-dom';

export default function Home () {
    const [data, setData] = useState(null);
    const [error, setError] = useState ('');

    useEffect(() => {
        getPopularMovies()
        .then ( response => {
            if (response.data.length !== 0) {
                setData(response.data.results)
            }
            else {
                setError('No results')
            }
    })
    .catch (error => {setError(error)})
}, []
)

    return (
        <div>
            {data && (
                <ul>
                    {data.map(movie => {
                        return (
                            <li key={movie.id}>
{movie.title}
                            </li>
                        )
                    })}
                </ul>
            )}
            {error ?? <p>{error}</p>}
        </div>
    )
}