import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">
        <span>Stars</span>Tell
      </h1>
      <p className="subtitle">Astrology Horoscope</p>
      {[...Array(50)].map(() => <div className="circleContainer">
        <div className="circle"></div>
      </div>)} 

      <img src="/images/zodiac-wheel.png" alt="" />
    </div>
  );
};

export default Header;