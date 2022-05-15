import "./styles.scss";

const Greeting = ({formData}) => {
        return <div className="greetingContainer">
                <h2 className="greetingTitle">Hello, {formData.name}</h2>
                <p className="zodiacText">{formData.birthDate.day}-{formData.birthDate.month}-{formData.birthDate.year} | {formData.sign}</p>
        </div>
}

export default Greeting;