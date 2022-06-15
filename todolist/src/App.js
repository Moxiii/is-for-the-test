import "./App.css";
import "./engine";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>TODOLIST EN REACT</h1>
          <div className="container">
            <form className="list-form" id="list-form">
            <input type="text" id="element" name="element" required></input>
            <button id="submit" name="submit">
              Envoyer
            </button>
            <button id="reset" name="reset">
              Reset
            </button>
            </form>
          </div>

            
          <div id="list-container">
            <div id="list-content">
              <article id="itm"></article>
            </div>
          </div>
        </header>
      </div>
      <div className="App-header">
        <h3 className="contact"> Voir mon travail sur github</h3>
      </div>
    </>
  );
}

export default App;
