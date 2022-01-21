import React, { useState } from "react";
import TimeCardsContainer from "../components/TimeCardsContainer";
import User from "./../components/User";

const Home = () => {
  const [timeTracker, setTimeTracker] = useState("daily");

  return (
    <div className="dashborad">
      <User handleTracker={setTimeTracker} trackerType={timeTracker} />
      <TimeCardsContainer trackerType={timeTracker} />
    </div>
  );
};

export default Home;
