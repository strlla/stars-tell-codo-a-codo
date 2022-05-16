const ZodiacDescription = ({ data }) => {
  return (
    <div className="zodiacDataHeader">
      <div className="headerTitle">
        <h3 className="zodiacName">
          {data.description.zodiacName}
        </h3>
        <p className="zodiacText">{data?.today?.date_range} | Element: {data.description.element} | Symbol: {data.description.symbol}</p>
      </div>

      <p className="zodiacText">{data.description?.description}</p>
    </div>
  );
};

export default ZodiacDescription;
