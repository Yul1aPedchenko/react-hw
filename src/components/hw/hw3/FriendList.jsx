import { List, Item, Status, Avatar, Name } from "./Style/FriendList";

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend) => (
        <Item key={friend.id}>
          <Status isOnline={friend.isOnline} />
          <Avatar src={friend.avatar} alt="User avatar" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
};
