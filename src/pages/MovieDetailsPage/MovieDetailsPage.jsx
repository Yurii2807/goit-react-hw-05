import { useEffect, useState, useRef, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { getDetails } from "../../movies-api";
import css from "./MovieDetailsPage.module.css";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function openDetails() {
      try {
        setIsLoader(true);
        const data = await getDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    openDetails();
  }, [movieId]);
  return (
    <div>
      <p>
        <Link className={css.text} to={backLink.current}>
          Go back
        </Link>
      </p>
      {isLoader && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      <div className={css.container}>
        <h2 className={css.title}>Additional information</h2>
        <ul>
          <li>
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
