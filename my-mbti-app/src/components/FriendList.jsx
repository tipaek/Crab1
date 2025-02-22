import React from "react";
import FriendCard from "./FriendCard";
import friends from "../data/friends";

const FriendList = () => {
  return (
    <div className="friend-list-container">
      {friends.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
