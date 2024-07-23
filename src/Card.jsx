import { useState } from "react";
import PropTypes from "prop-types";
import gepard from "./assets/gepard.jpg";

const Card = ({ kategorie, frage, richtigeAntwort }) => {
  const [antwortText, setAntwortText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const antwort = event.target.antwort.value.trim().toLowerCase();
    const istRichtig = antwort === richtigeAntwort.trim().toLowerCase();
    console.log(istRichtig);

    setAntwortText(
      istRichtig
        ? `${event.target.antwort.value} ist Richtig!`
        : `${event.target.antwort.value} ist Falsch!`
    );
  };

  return (
    <div className="Profilkarte">
      <img src={gepard} alt="Gepard"></img>
      <h2>Quizkarte</h2>
      <p>Kategorie: {kategorie}</p>
      <p>Frage: {frage}</p>
      <form onSubmit={handleSubmit}>
        <input id="antwort" name="antwort" maxLength="20" />
        <button type="submit">Absenden</button>
      </form>
      {antwortText && <p>{antwortText}</p>}
    </div>
  );
};

Card.propTypes = {
  kategorie: PropTypes.string,
  frage: PropTypes.string,
  richtigeAntwort: PropTypes.string,
};

export default Card;
