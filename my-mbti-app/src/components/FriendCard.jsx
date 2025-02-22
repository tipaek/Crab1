import React from "react";
import "./FriendCard.css";


const FriendCard = ({ friend }) => {
  return (
    <div className="friend">
        <hline></hline>
      <h2 className="name">{friend.name} - {friend.mbti}</h2>
      <p><strong>Extraversion:</strong> {friend.percentages.extraverted}% | <strong>Introversion:</strong> {friend.percentages.introverted}%</p>
      <p><strong>Thinking:</strong> {friend.percentages.thinking}% | <strong>Feeling:</strong> {friend.percentages.feeling}%</p>
      <p><strong>Judging:</strong> {friend.percentages.judging}% | <strong>Prospecting:</strong> {friend.percentages.prospecting}%</p>
      {friend.alignment && (
        <p className="text-red-600"><strong>Alignment:</strong> {friend.alignment.type} ({friend.alignment.evil}% evil, {friend.alignment.chaotic}% chaotic)</p>
      )}
    </div>
  );
};

export default FriendCard;
