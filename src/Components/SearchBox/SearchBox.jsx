import { BsSearch } from "react-icons/bs";
import css from "../SearchBox/SearchBox.module.css";

export const SearchBox = ({ onSubmit }) => {
  return (
    <form className={css.form} onSubmit={(e) => onSubmit(e)}>
      <input
        placeholder="Search movies"
        className={css.input}
        type="text"
        name="movie"
      />
      <button className={css.button} type="submit">
        <BsSearch />
      </button>
    </form>
  );
};
