import "./styles.scss";

const UserForm = ({ formData, setFormData, handleSubmit }) => {
  const updateFormValue = (e, key) => {
    if (key === "birthDate") {
      let year = parseInt(e.target.value.split("-")[0]);
      let month = parseInt(e.target.value.split("-")[1]);
      let day = parseInt(e.target.value.split("-")[2]);
      setFormData({ ...formData, birthDate: { day, month, year } });
    } else {
      setFormData({ ...formData, [key]: e.target.value });
    }

    console.log(formData);
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const formEmpty = () => {
    return !(
      Object.keys(formData).every((k) => formData[k] !== "") &&
      Object.keys(formData.birthDate).every((k) => formData.birthDate[k] !== "")
    );
  };

  console.log(Object.keys(formData).every(k => formData[k] !== ""));
  console.log(Object.keys(formData.birthDate).every((k) => formData.birthDate[k] !== ""));
  
  return (
    <form className="form" onSubmit={submitForm}>
      <div className="inputContainer">
        <input
          id="name"
          className="formInput"
          type="text"
          placeholder=" "
          onChange={(e) => updateFormValue(e, "name")}
        />
        <div className="cut"></div>
        <label htmlFor="name" className="placeholder">
          Name
        </label>
      </div>
      <div className="inputContainer">
        <input
          onChange={(e) => updateFormValue(e, "email")}
          type="email"
          className="formInput"
          id="email"
          placeholder=" "
        />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      <div className="inputContainer">
        <input
          onChange={(e) => updateFormValue(e, "age")}
          type="text"
          className="formInput"
          id="age"
          placeholder=" "
        />
        <div className="cut cut-short"></div>
        <label htmlFor="age" className="placeholder">
          Age
        </label>
      </div>
      <div className="inputContainer">
        <label htmlFor="genre" className="formLabel">
          Genre
        </label>
        <input
          onChange={(e) => updateFormValue(e, "genre")}
          className="listInput"
          list="genreList"
          id="genre"
        />
        <datalist id="genreList">
          <option value="Female" />
          <option value="Male" />
          <option value="Other" />
        </datalist>
      </div>

      <div className="inputContainer">
        <label htmlFor="birthdate" className="formLabel">
          Birth date
        </label>
        <input
          onChange={(e) => updateFormValue(e, "birthDate")}
          type="date"
          min="1910-01-01"
          max="2010-12-31"
          className="formDateInput"
          id="birthdate"
        />
      </div>

      <button
        type="submit"
        className="buttonPrimary"
        disabled={!(
          Object.keys(formData).every((k) => formData[k] !== "") &&
          Object.keys(formData.birthDate).every((k) => formData.birthDate[k] !== "")
        )}
      >
        I want to know my future
      </button>
    </form>
  );
};

export default UserForm;
