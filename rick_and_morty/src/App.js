//import SearchBar from "./components/SearchBar/SearchBar.jsx";
//import characters, { Rick } from "./data.js";import "./App.css";
//import Card from "./components/Card/Card.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import "./App.css";

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
          : alert("Este personaje ya existe en la lista");
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        /> */}
      <Nav onSearch={onSearch} />

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      </Routes>
    </div>
  );
}

export default App;
