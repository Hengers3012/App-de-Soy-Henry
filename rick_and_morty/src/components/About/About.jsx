import React from "react";
import styles from "./About.module.css";
export default function About(props) {
  return (
    <div className={styles.container}>
      <h1>Sean Bienvenidos</h1>
      <p>
        La App de Rick and Morty es muy divertida, aqui podemos obsevar a los
        personajes de toda la serie y sus descripciones.
      </p>
      <img src="https://wallpapercave.com/wp/wp8729574.jpg" alt="Not found" />
      <h3>
        Es una App Realizada por Hengers Rosario, estudiante de Soy Henry!!!
      </h3>
    </div>
  );
}
