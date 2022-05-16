import { useState } from "react";
import axios from "axios";
import Cards from "../../components/Cards";
import Loader from "../../components/Loader";
import "./styles.scss";

const CardsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [randomCards, setRandomCards] = useState([]);

  const getRandomCards = () => {
    setRandomCards([]);
    setLoading(true);
    /**
     * Se traen 3 cartas random y se guardan en un estado "randomCards"
     */
    const fetchRandomCards = async () => {
      const response = await axios.get(
        "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3"
      );

      if (response.data.cards.length > 0) {
        setTimeout(() => {
          setRandomCards(response.data.cards);
          setLoading(true);
        }, 1000);
      }
      return response;
    };
    try {
      fetchRandomCards();
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="cardsContainer">
      <h2 className="title">
        <span>Cards</span>Tell
      </h2>
      <p className="subtitle">Your personal divination</p>
      <h3 className="cardsTitle">Learn from your past, present and future</h3>
      {randomCards.length > 0 ? (
        <Cards cards={randomCards} />
      ) : loading ? (
        <Loader />
      ) : (
        <button className="buttonPrimary" onClick={getRandomCards}>
          Show me my cards
        </button>
      )}
    </div>
  );
};

export default CardsContainer;
