import "./App.css";
//import Card from "./components/Card/Card.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
//import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters, { Rick } from "./data.js";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        {/* <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        /> */}
        <Nav />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Cards characters={characters} />
      </div>
      <hr />
      <div>
        {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      </div>
    </div>
  );
}

export default App;
