import { useEffect, useState } from "react";
import { fetchMovies } from "../../movies-api";
import { MovieList } from "../../Components/MovieList/MovieList";
import css from "../Home/Home.module.css";
import { Loader } from "../../Components/Loader/Loader";

export default function Home() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchAllMovies() {
      setIsLoading(true);
      try {
        const response = await fetchMovies();
        setMovies(response.data.results);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    fetchAllMovies();
  }, []);

  if (!movies) return;

  return (
    <>
      <p className={css.homeTitle}>
        {error
          ? "❌ Something went wrong!Prease try to reload the page"
          : "In trend today"}
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <MovieList movies={movies} />
        </main>
      )}
    </>
  );
}
