import PropTypes from "prop-types";

function Card(property) {
  return (
    <div className="Profilkarte">
      <img src="https://via.placeholder.com/150" alt="Picture"></img>
      <h2>Quizkarte</h2>
      <p>Kategorie: {property.kategorie}</p>
      <p>Frage: {property.frage}</p>
      <input name="Antwort"></input>
    </div>
  );
}
Card.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  istForster: PropTypes.bool,
};

Card.defaultProps = {
  name: "Gast",
  age: 0,
  istForster: false,
};
export default Card;
