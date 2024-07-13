import Button from "./Button";
import Card from "./Card";

function App() {
  return (
    <>
      <h1>Fragerunde1</h1>
      <Card
        classname="Karte Tierreich"
        kategorie="Tierreich"
        frage="Was ist das schnellte Säugetier?"
      ></Card>

      <Card
        classname="Karte Sport"
        kategorie="Sport"
        frage="Wer wurde 1990 Weltmeister?"
      ></Card>

      <Card
        classname="Karte Wissenschaft"
        kategorie="Wissenschaft"
        frage="Wie viele Aggregatzustände gibt es?"
      ></Card>

      <Button></Button>
    </>
  );
}

export default App;
