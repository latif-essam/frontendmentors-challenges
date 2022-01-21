import React, { useEffect, useState } from "react";

import ellipsis from "./../assets/icon-ellipsis.svg";

interface cardH {
  title: string;
  icon: string;
  color: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

const TimeCard = ({
  card,
  trackerType,
}: {
  card: cardH;
  trackerType: string;
}) => {
  const [tracker, setTracker] = useState("daily");
  useEffect(() => {
    if (trackerType === "daily") setTracker("Day");
    else if (trackerType === "weekly") setTracker("Week");
    else setTracker("Month");
  }, [trackerType]);

  console.log(tracker);
  return (
    <div className="card" style={{ backgroundColor: card.color }}>
      <div style={{ textAlign: "right", overflow: "hidden", height: 30 }}>
        <img
          src={require(`./../assets/${card.icon}`)}
          alt={card.title}
          width={40}
          style={{ marginRight: 5 }}
        />
      </div>
      <div className="card_info">
        <div className="card_info_type">
          <p>{card.title}</p>
          <img
            style={{ cursor: "pointer" }}
            src={ellipsis}
            alt={card.title}
            width={15}
          />
        </div>
        <div className="card_info_status">
          <div className="card_info_now">
            {trackerType === "daily" && (
              <p> {card.timeframes.daily.current}hrs </p>
            )}
            {trackerType === "weekly" && (
              <p> {card.timeframes.weekly.current}hrs </p>
            )}
            {trackerType === "monthly" && (
              <p> {card.timeframes.monthly.current}hrs</p>
            )}
          </div>
          <div className="card_info_pre">
            {trackerType === "daily" && (
              <p>
                Last {tracker} - {card.timeframes["daily"].previous}hrs
              </p>
            )}
            {trackerType === "weekly" && (
              <p>
                Last {tracker} - {card.timeframes["weekly"].previous}hrs
              </p>
            )}
            {trackerType === "monthly" && (
              <p>
                Last {tracker} - {card.timeframes["monthly"].previous}hrs
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
