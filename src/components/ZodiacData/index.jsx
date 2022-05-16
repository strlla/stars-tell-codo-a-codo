import ZodiacDescription from "./ZodiacDescription";
import ZodiacTable from "./ZodiacTable";
import LuckyNumber from "../LuckyNumber";
import "./styles.scss";

const ZodiacData = ({ name, data }) => {
  return (
    <>
      <div className="zodiacDataContainer">
        <LuckyNumber name={name} />
        <div className="zodiacTableContainer">
          <ZodiacTable zodiacData={data.today} day={"Today"} />
          <ZodiacTable zodiacData={data.tomorrow} day={"Tomorrow"} />
        </div>
        <ZodiacDescription name={name} data={data} />
        <a href="/" className="link">
          Learn more about <span>{data.description.zodiacName}</span>
        </a>
      </div>
    </>
  );
};
export default ZodiacData;
