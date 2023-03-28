import styles from "./Card.module.css";

export default function Card({ name, species, image, gender, onClose }) {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorBtnX}>
        <button className={styles.buttonX} onClick={onClose}>
          X
        </button>
      </div>
      <div className={styles.contenedorImage}>
        <h2 className={styles.namePersonaje}>{name}</h2>
        <img src={image} alt="Not found" />
      </div>
      <div className={styles.propsDContenedor}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}
