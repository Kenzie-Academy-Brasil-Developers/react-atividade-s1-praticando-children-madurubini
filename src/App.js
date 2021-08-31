import "./App.css";
import Card from "./components/CenteredCard/CenteredCard";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Card>
          <h1 className="Primeiro-filho">Jogar Truco</h1>
        </Card>
        <Card>
          <h1>Dançar na Chuva</h1>
        </Card>
        <Card>
          <h1>Cozinhar</h1>
        </Card>
      </div>
    </div>
  );
}

export default App;
