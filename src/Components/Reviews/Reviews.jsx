import { useEffect, useState } from "react";
import { fetchReviews } from "../../movies-api";
import { useParams } from "react-router-dom";
import css from "../Reviews/Reviews.module.css";

export default function Reviews() {
  const [reviews, setReviews] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getReviews = async () => {
      const response = await fetchReviews(id);
      setReviews(response.data.results);
    };
    getReviews();
  }, []);

  if (!reviews) return;

  return (
    <>
      {reviews.length === 0 && (
        <p className={css.noReviewsText}>There are no reviews for this film </p>
      )}
      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li className={css.reviewItem} key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
