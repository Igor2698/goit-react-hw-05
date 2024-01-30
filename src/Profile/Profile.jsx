import css from "../Profile/Profile.module.css";

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { views, followers, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt={tag} className={css.avatar} />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className="label">Followers</span>
          <span className="value">{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className="label">Views</span>
          <span className="value">{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className="label">Likes</span>
          <span className="value">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
