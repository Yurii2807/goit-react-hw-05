import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <div className={css.cart}>
              <img
                className={css.img}
                src={
                  (!movie.poster_path && "../../../images/user.jpg") ||
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}
  `
                }
                alt={`poster ${movie.title}`}
              />
              <p className={css.title}>{movie.original_title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
