import React from "react";
import TimeCard from "./TimeCard";
import data from "../data.json";
const TimeCardsContainer = ({ trackerType }: { trackerType: string }) => {
  return (
    <div className="time-cards-container">
      {data.map((card) => (
        <TimeCard trackerType={trackerType} key={card.title} card={card} />
      ))}
    </div>
  );
};

export default TimeCardsContainer;
