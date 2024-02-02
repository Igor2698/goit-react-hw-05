import css from "../LoadMoreButton/LoadMoreButton.module.css";

export const LoadMoreButton = ({ onLoadMoreClick }) => {
  return (
    <button className={css.button} onClick={onLoadMoreClick}>
      Load More
    </button>
  );
};
