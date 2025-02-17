import Button from "./Button";
import Card from "./Card";

function App() {
  return (
    <>
      <h1 id="header">Fragerunde:</h1>
      <Card
        classname="Karte Tierreich"
        kategorie="Tierreich"
        frage="Welches ist das schnellte Säugetier?"
        richtigeAntwort="Gepard"
      ></Card>

      <Card
        classname="Karte Sport"
        kategorie="Sport"
        frage="Wer wurde 1990 Weltmeister?"
        richtigeAntwort="Deutschland"
      ></Card>

      <Card
        classname="Karte Wissenschaft"
        kategorie="Wissenschaft"
        frage="Wie viele Aggregatzustände gibt es?"
        richtigeAntwort="Drei"
      ></Card>
      <br></br>

      <Button></Button>
    </>
  );
}

export default App;
