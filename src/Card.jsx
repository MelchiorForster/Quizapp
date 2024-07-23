import { useState } from "react";
import PropTypes from "prop-types";
import gepard from "./assets/gepard.jpg";
import weltmeister from "./assets/weltmeister.jpg";
import aggregat from "./assets/aggregat.png";

// Schritt 1: Bilder-Objekt definieren
const bilderNachKategorie = {
  Tierreich: gepard,
  Sport: weltmeister,
  Technik: aggregat,
};

const Card = ({ kategorie, frage, richtigeAntwort }) => {
  const [antwortText, setAntwortText] = useState("");

  // Schritt 2: Bild basierend auf Kategorie auswählen
  const bild = bilderNachKategorie[kategorie] || aggregat; // Standardbild, falls keine Kategorie übereinstimmt

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

  // Schritt 3: Bild rendern
  return (
    <div className="Profilkarte">
      <img src={bild} alt={kategorie}></img>
      <h2>Quizkarte</h2>
      <p>Kategorie: {kategorie}</p>
      <p>Frage: {frage}</p>
      <form onSubmit={handleSubmit}>
        {/* Formularinhalte */}
        <input id="antwort" name="antwort" maxLength="20" />
        <button type="submit">Absenden</button>
      </form>
      {antwortText && <p>{antwortText}</p>}
    </div>
  );
};

Card.propTypes = {
  kategorie: PropTypes.string.isRequired,
  frage: PropTypes.string.isRequired,
  richtigeAntwort: PropTypes.string.isRequired,
};

export default Card;
