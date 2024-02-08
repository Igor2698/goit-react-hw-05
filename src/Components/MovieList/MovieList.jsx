import { Link, useLocation } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movieGalery}>
      {movies.map(({ id, poster_path, title, release_date }) => (
        <li key={id} className={css.movieListItem}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <img
              height="80%"
              className={css.movieListImg}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342${poster_path}`
                  : "https://yt3.googleusercontent.com/NOVbYO_ecQ-UGLX-oxP37cgJKH7qQEKORYAT2BuESru7zJom3eSCH7pO0r4yBUzaaLY1o1TO=s900-c-k-c0x00ffffff-no-rj"
              }
              alt={title}
            />
            <div className={css.descriptionContainer}>
              <h2>{title}</h2>
              <p>{release_date}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
