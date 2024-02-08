import { useEffect, useState, useRef, Suspense } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { fetchOneMovie } from "../../movies-api";
import css from "../MovieDetails/MovieDetails.module.css";
import { Loader } from "../../Components/Loader/Loader";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetchOneMovie(id);
      setMovie(response.data);
    };
    getMovie();
  }, [id]);

  if (!movie) {
    return null;
  }

  const { title, release_date, vote_average, overview, genres, backdrop_path } =
    movie;

  return (
    <>
      <Link className={css.goBackLink} to={backLinkHref.current}>
        Go back
      </Link>
      <div className={css.detailsContainer}>
        <div>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          />
        </div>

        <div className={css.description}>
          <h3 className={css.MovieDetailsTitle}>
            {title} ({release_date.slice(0, 4)})
          </h3>
          <p className={css.score}>
            User score: {Math.ceil(vote_average * 10)}%
          </p>
          <h2 className={css.overviewTitle}>Overview</h2>
          <p className={css.overview}>{overview}</p>
          <h3 className={css.genreTitle}>Genres</h3>
          <p className={css.genres}>
            Genre: {genres.map((genre) => genre.name).join(", ")}
          </p>
          <ul className={css.additionalInfoList}>
            <Link className={css.adittionalInfoLink} to="cast">
              Cast
            </Link>
            <Link className={css.adittionalInfoLink} to="reviews">
              Reviews
            </Link>
          </ul>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
