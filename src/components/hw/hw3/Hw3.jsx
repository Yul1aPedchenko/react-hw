import user from "../../../dataBase/hw3/user.json";
import avatar from '../../../dataBase/hw3/my_photo.jpeg';
import { Profile } from "./Profile";

import data from '../../../dataBase/hw3/data.json';
import { Statistics } from "./Statistics";

import friends from "../../../dataBase/hw3/friends.json";
import { FriendList } from "./FriendList";

import transactions from '../../../dataBase/hw3/transactions.json';
import { TransactionHistory } from "./TransactionHistory";

export const Hw3 = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
};
