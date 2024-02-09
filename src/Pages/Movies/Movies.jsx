import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../../movies-api";
import { MovieList } from "../../Components/MovieList/MovieList";
import { SearchBox } from "../../Components/SearchBox/SearchBox";
import { Loader } from "../../Components/Loader/Loader";
import css from "../Movies/Movies.module.css";

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const movieValue = searchParams.get("query") ?? "";

  useEffect(() => {
    const getMovies = async () => {
      if (movieValue === "") return;
      setIsLoading(true);
      try {
        const newMovies = await fetchMoviesByQuery(movieValue);
        setIsLoading(false);
        setMovies(newMovies.data.results);
        setError(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
    getMovies();
  }, [movieValue]);

  const updateQueryString = async (e) => {
    e.preventDefault();
    const movieValue = e.target.elements.movie.value;
    const nextParams = movieValue !== "" ? { query: movieValue } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBox onSubmit={updateQueryString} />
      {movies.length === 0 && movieValue && !isLoading && (
        <p className={css.moviesText}>
          {`Unfortunately we didn't find the movies "${movieValue}"
        `}
        </p>
      )}
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && <p>❌ Something went wrong!Prease try to reload the page</p>}
    </>
  );
}
