const ZodiacTable = ({ zodiacData, day }) => {
  return (
    <div className="zodiacTable">
      <h4 className="zodiacDay">{day}</h4>
      <div className="zodiacTableContent">
        <p>{zodiacData.description}</p>
        <p>Lucky color: {zodiacData.color}</p>
        <p>Lucky time: {zodiacData.lucky_time}</p>
        <p>Mood: {zodiacData.mood}</p>
      </div>
    </div>
  );
};

export default ZodiacTable;
