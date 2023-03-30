import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");
  const handleInputChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div className={styles.contendeorPrincipal}>
      <input
        className={styles.inputAgregar}
        id="search"
        type="search"
        onChange={handleInputChange}
      />
      <button
        id="logOut"
        className={styles.buttonAgregar}
        onClick={() => props.onSearch(character)}
      >
        Agregar
      </button>
    </div>
  );
}
