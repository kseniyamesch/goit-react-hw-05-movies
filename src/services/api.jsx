import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'c1c6ade8161edfcf83637816aa4d7c5f';

export async function getPopularMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return response;
}

export async function getMoviesOnQuery (query) {
const response = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
return response;
}

export async function getMovieInformation (movieId) {
const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US&language=en-US`);
return response;
}

export async function getCast (movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`);
  return response;
}

export async function getReviews (movieId) {
  return await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`) 
}
