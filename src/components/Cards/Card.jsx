import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ card, isReversed }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const romanizeNumber = (number) => {
    const romanValues = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let romanNumber = "";

    for (let i of Object.keys(romanValues)) {
      const q = Math.floor(number / romanValues[i]);
      number -= q * romanValues[i];
      romanNumber += i.repeat(q);
    }

    return romanNumber;
  };

  return (
    <div className="cardContainer">
      <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
        <div className="card back" onClick={() => setIsFlipped(!isFlipped)}>
          <p>?</p>
        </div>
        <div className="card front">
          <div className="card">
            <p className="cardNumber">{romanizeNumber(card.value_int)}</p>
            <p className="cardName">{card.name}</p>
            {isReversed ? <p className="cardReversed">{"reversed"}</p> : <></>}
          </div>
        </div>
      </ReactCardFlip>
      {isFlipped ? (
        <div className="cardFooter">
          <p className="zodiacText cardDescription">
            {isReversed ? card.meaning_rev : card.meaning_up}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
