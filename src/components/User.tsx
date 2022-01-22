import React from "react";
import userImg from "../assets/image-jeremy.png";
const User = ({
  handleTracker,
  trackerType,
}: {
  handleTracker: any;
  trackerType: string;
}) => {
  return (
    <div className="user-container">
      <div className="user">
        <div className="user_img">
          <img src={userImg} alt="user profile" width={45} height={45} />
        </div>
        <div>
          <p className="user_report"> Report for</p>
          <h1 className="user_title">Jeremy Robson</h1>
        </div>
      </div>
      <div className="time-track">
        <button
          style={{
            color: trackerType === "daily" ? "white" : "hsl(235, 45%, 61%)",
          }}
          onClick={() => handleTracker("daily")}
        >
          Daily
        </button>
        <button
          style={{
            color: trackerType === "weekly" ? "white" : "hsl(235, 45%, 61%)",
          }}
          onClick={() => handleTracker("weekly")}
        >
          Weekly
        </button>
        <button
          style={{
            color: trackerType === "monthly" ? "white" : "hsl(235, 45%, 61%)",
          }}
          onClick={() => handleTracker("monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default User;
