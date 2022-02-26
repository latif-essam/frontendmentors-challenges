import React, { useState } from "react";
import TimeCard from "./TimeCard";
import data from "../data.json";
import { AlertDialog, Popover } from "@chakra-ui/react";
import { connect, useStore } from "react-redux";

const TimeCardsContainer = ({
  trackerType,
  cards,
}: {
  trackerType: string;
  cards: [];
}) => {
  const [showNewCard, setShowNewCard] = useState(false);
  const handleAddCard = () => {};
  return (
    <div className="time-cards-container">
      {cards.map((card: any, index: any) => (
        <TimeCard trackerType={trackerType} key={index} card={card} />
      ))}
      <button
        onClick={() => setShowNewCard(!showNewCard)}
        className="card"
        style={{
          backgroundColor: `hsl(264, 64%, 52%)`,
          fontSize: 50,
          color: "white",
        }}
      >
        +
      </button>
      {showNewCard && <>Form</>}
    </div>
  );
};
function mapStateToProps(state: any) {
  return { cards: state.cards };
}
export default connect(mapStateToProps)(TimeCardsContainer);
