import React, { useState } from "react";
import TimeCard from "./TimeCard";
import { connect } from "react-redux";
import Modal from "./Modal";
import NewCard from "./NewCard";
const TimeCardsContainer = ({
  trackerType,
  cards,
}: {
  trackerType: string;
  cards: [];
}) => {
  const [showNewCard, setShowNewCard] = useState(false);
  const handleAddCard = () => {
    setShowNewCard(!showNewCard);
  };
  return (
    <div className="time-cards-container">
      {cards.map((card: any, index: any) => (
        <TimeCard trackerType={trackerType} key={index} card={card} />
      ))}
      <button
        onClick={handleAddCard}
        className="card"
        type="submit"
        style={{
          backgroundColor: `hsl(264, 64%, 52%)`,
          fontSize: 50,
          color: "white",
        }}
      >
        +
      </button>
      {showNewCard && (
        <Modal close={() => setShowNewCard(false)} children={<NewCard />} />
      )}
    </div>
  );
};
function mapStateToProps(state: any) {
  return { cards: state.cards };
}
export default connect(mapStateToProps)(TimeCardsContainer);
