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
            height="90%"
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                : "https://yt3.googleusercontent.com/NOVbYO_ecQ-UGLX-oxP37cgJKH7qQEKORYAT2BuESru7zJom3eSCH7pO0r4yBUzaaLY1o1TO=s900-c-k-c0x00ffffff-no-rj"
            }
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
