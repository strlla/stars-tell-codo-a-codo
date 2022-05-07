import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <span>Stars</span>Tell
      </h1>
      <p>Astrology Horoscope</p>
      {[...Array(50)].map(() => <div className="circleContainer">
        <div className="circle"></div>
      </div>)} 

      <img src="/images/zodiac-wheel.png" alt="" />
    </div>
  );
};

export default Header;