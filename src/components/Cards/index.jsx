import Card from "./Card";
import "./styles.scss";

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card key={card.name_short} card={card} isReversed={Math.round(Math.random())} />
      ))}
    </div>
  );
};

export default Cards;