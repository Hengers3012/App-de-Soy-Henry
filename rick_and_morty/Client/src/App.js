//import SearchBar from "./components/SearchBar/SearchBar.jsx";
//import characters, { Rick } from "./data.js";import "./App.css";
//import Card from "./components/Card/Card.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Formulario/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  //-------------------------------------------------------------------------------
  //      Constantes de User y Pass para la APP sin Express en el Server
  //-------------------------------------------------------------------------------
  // const userName = "hengersrosario@soyhenry.com";
  // const password = "30Heng12";
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  //-------------------------------------------------------------------------------
  //                Versión sin Express en el Server
  //-------------------------------------------------------------------------------
  // const login = (userData) => {
  //   // {userName : "hengersrosario@soyhenry.com", password: "30Heng12"}
  //   if (userData.userName === userName && userData.password === password) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // };

  const logOut = () => {
    access && setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        /> */}
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      </Routes>
    </div>
  );
}

export default App;
