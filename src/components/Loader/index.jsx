import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <ReactLoading type="balls" color="#caaf68" height={"10"} width={"10"} />
    </div>
  );
};

export default Loader;
