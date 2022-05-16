import "./styles.scss";

const Greeting = ({formData, sign}) => {
        return <div className="greetingContainer">
                <h2 className="greetingTitle">Hello, {formData.name}</h2>
                <p className="zodiacText">Genre: {formData.genre} | {formData.birthDate.day}-{formData.birthDate.month}-{formData.birthDate.year} | {sign}</p>
        </div>
}

export default Greeting;