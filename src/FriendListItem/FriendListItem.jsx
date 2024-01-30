import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";

export const FriendListItem = ({ name, isOnline, avatar }) => {
  console.log(css);
  return (
    <div className={css.item}>
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
