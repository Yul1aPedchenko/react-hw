import data from "../../../dataBase/hw3/data.json";
import { Statistics } from "./Statistics/Statistics";

import friends from "../../../dataBase/hw3/friends.json";
import { FriendList } from "./FriendList/FriendList";

export const Hw4 = () => {
  return (
    <>
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
