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
              className={css.movieListImg}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342${poster_path}`
                  : "https://lh3.googleusercontent.com/proxy/Ck-2_U_nesG5DLK_rnJrj0a6-PzzJM5PN8rloi-xAaJt7DjeuxBvQADgqtpxjCZT1UEk4Y5RSKhpWz179XUa8R_v8Llk_DkgcNL8IRE0SyHXla_e5sJTvdFmsgs"
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
