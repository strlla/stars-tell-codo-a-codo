import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "../../components/UserForm";
import ZodiacData from "../../components/ZodiacData";
import Greeting from "../../components/Greeting";
import CardsContainer from "../CardsContainer";
import DownloadResults from "../../containers/DownloadResults";
import Loader from "../../components/Loader";
import "./styles.scss";

const ZodiacContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    age: "",
    birthDate: { day: "", month: "", year: "" },
    email: ""
  });
  const [sign, setSign] = useState("");
  const [zodiacSigns, setZodiacSigns] = useState();
  const [zodiacDescriptions, setZodiacDescriptions] = useState();
  const [zodiacData, setZodiacData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchDailyZodiacData = async (sign, day) => {
    return axios.post(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`
    );
  };

  useEffect(() => {
    const getSignsData = async () => {
      try {
        const response = await fetchSignsData();
        setZodiacSigns(response.data.signs);
        setZodiacDescriptions(response.data.descriptions);
        console.log(response);
      } catch (e) {
        console(e);
      }
    };

    getSignsData();
  }, []);

  useEffect(() => {
    if (sign) {
      setLoading(true);
      const getZodiacInfo = async () => {
        try {
          const [zodiacToday, zodiacTomorrow] = await Promise.all([
            fetchDailyZodiacData(sign, "today"),
            fetchDailyZodiacData(sign, "tomorrow"),
          ]);
          if (zodiacToday && zodiacTomorrow) {
            setZodiacData({
              today: zodiacToday.data,
              tomorrow: zodiacTomorrow.data,
            });
            setTimeout(()=>{
              setLoading(false);
            }, 1000)
          }
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      };
      getZodiacInfo();
    }
  }, [sign]);

  const fetchSignsData = () => {
    return axios.get("https://api.jsonbin.io/b/6276c11825069545a32ede0c");
  };

  const searchSign = () => {
    const sign = zodiacSigns.find((sign) => {
      const day = formData.birthDate.day;
      const month = formData.birthDate.month;
      if (
        (day >= sign.start.date && month === sign.start.monthNumber) ||
        (day <= sign.end.date && month === sign.end.monthNumber)
      ) {
        return sign;
      }
    });
    setSign(sign.zodiacName);
  };

  const handleSubmit = () => {
    setSign("");
    searchSign();
  };

  return (
    <div className="zodiacContainer">
      <h3 className="zodiacTitle">Get to know your horoscope by the stars!</h3>
      <UserForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      {loading && <Loader />}
      {!loading && zodiacData && (
        <DownloadResults>
        <div id="results">
          <Greeting formData={formData} sign={sign} />
          <ZodiacData
            name={formData.name}
            data={{
              ...zodiacData,
              description: zodiacDescriptions.find(
                (el) => el.zodiacName === sign
              ),
            }}
          />
          <CardsContainer />
        </div>
        </DownloadResults>
      )}
    </div>
  );
};

export default ZodiacContainer;
