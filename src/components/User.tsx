import React, { useState } from "react";
import userImg from "../assets/image-jeremy.png";
import ButtonC from "./ButtonC";
const trackers = ["daily", "weekly", "monthly"];
const User = ({
  handleTracker,
  trackerType,
}: {
  handleTracker: any;
  trackerType: string;
}) => {
  const [active, setActive] = useState();
  const handleActive = (event: any, t: string) => {
    event.preventDefault();
    setActive(event.target.id);
    handleTracker(t);
  };
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
        {trackers.map((t, index) => (
          <ButtonC
            key={index}
            id={index}
            title={t.charAt(0).toUpperCase() + t.slice(1)}
            onClick={(e: any) => handleActive(e, t)}
            tracker={t}
            className={active === index.toString() ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default User;
