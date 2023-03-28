import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, species, image, gender, onClose }) {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorBtnX}>
        <button className={styles.buttonX} onClick={onClose}>
          X
        </button>
      </div>
      <Link to={`/detail/${id}`} className={styles.link}>
        <div className={styles.contenedorImage}>
          <h2 className={styles.namePersonaje}>{name}</h2>
          <img src={image} alt="" />
        </div>
      </Link>
      <div className={styles.propsDContenedor}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>{" "}
    </div>
  );
}
