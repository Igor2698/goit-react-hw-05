import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits } from "../../movies-api";
import css from "../Cast/Cast.module.css";

export default function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await fetchCredits(id);
      setCasts(response.data.cast);
    };
    getCredits();
  }, []);

  return (
    <ul className={css.castList}>
      {casts.map((cast) => (
        <li className={css.castItem} key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
          />
          <div className={css.containerDescription}>
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
