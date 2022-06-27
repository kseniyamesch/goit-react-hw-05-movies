import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'c1c6ade8161edfcf83637816aa4d7c5f';

export async function getPopularMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return response;
}
