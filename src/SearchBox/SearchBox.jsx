import css from "../SearchBox/SearchBox.module.css";

export const SearchBox = ({ handleInputChange, value }) => {
  return (
    <div className={css.searchBoxContainer}>
      <input
        value={value}
        type="text"
        id="contact"
        name="contact"
        placeholder=""
        className={css.searchBoxInput}
        onChange={handleInputChange}
      />
      <label htmlFor="contact" className={css.searchBoxText}>
        Find contacts by name
      </label>
    </div>
  );
};
