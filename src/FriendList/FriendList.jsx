import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
        </li>
      ))}
    </ul>
  );
};
