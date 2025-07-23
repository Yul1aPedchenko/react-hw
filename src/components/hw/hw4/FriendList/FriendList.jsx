import s from "./FriendList.module.scss";

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend__list}>
      {friends.map((friend) => (
        <li className={s.friend__item} key={friend.id}>
          <span
            className={`${s.friend__status} ${
              friend.isOnline
                ? s["friend__status--online"]
                : s["friend__status--offline"]
            }`}
          ></span>
          <img
            className={s.friend__avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.friend__name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
