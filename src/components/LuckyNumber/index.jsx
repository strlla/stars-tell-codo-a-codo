import { useEffect, useState } from "react";
import "./styles.scss";

const LuckyNumber = ({ name }) => {
  const [luckyNumber, setLuckyNumber] = useState(0);

  useEffect(() => {
    if (name) {
      const alpha = Array.from(Array(27)).map((e, i) => i + 64);
      const alphabet = alpha.map((x) => String.fromCharCode(x));    

      const calculateLuckyNumber = () => {
        const letters = name.split("");
        return letters.reduce(
          (acc, letter) => acc + alphabet.indexOf(letter.toUpperCase()),
          0
        );
      };

      setLuckyNumber(calculateLuckyNumber());
    }
  }, [name]);

  return (
    <div className="luckyNumber">
      <p>Lucky Number: {luckyNumber}</p>
    </div>
  );
};

export default LuckyNumber;
