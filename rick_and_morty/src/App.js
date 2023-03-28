import "./App.css";
import { useState } from "react";
//import Card from "./components/Card/Card.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
//import SearchBar from "./components/SearchBar/SearchBar.jsx";
//import characters, { Rick } from "./data.js";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        //Accedemos a la data
        (
          data.name
            ? characters.filter((char) => char.id === data.id).length === 0
            : ""
        )
          ? setCharacters([...characters, data])
          : alert("Personaje no encontrado");
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

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
        <Nav onSearch={onSearch} />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Cards characters={characters} onClose={onClose} />
      </div>
      <hr />
      <div>
        {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      </div>
    </div>
  );
}

export default App;
