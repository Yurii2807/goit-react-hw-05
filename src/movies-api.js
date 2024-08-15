import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWRlNmRmNmQyYTk3NTZlMmJjMTA1NWM0NWM2N2Y3YiIsIm5iZiI6MTcyMzQ4MDUyOS4wNzkwMTksInN1YiI6IjY2YmEyYmVmNGFiNDQyMDJmMGI3NjNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xa-0vZNrT8ilIqpRomuKFhXEUOuEV-OXmJLomRlxIwE",
  },
};

export const getMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWRlNmRmNmQyYTk3NTZlMmJjMTA1NWM0NWM2N2Y3YiIsIm5iZiI6MTcyMzQ4MDUyOS4wNzkwMTksInN1YiI6IjY2YmEyYmVmNGFiNDQyMDJmMGI3NjNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xa-0vZNrT8ilIqpRomuKFhXEUOuEV-OXmJLomRlxIwE",
    },
  });
  return response.data.results;
};
export const getDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const getCastMovie = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const getReviewsMovie = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
};
