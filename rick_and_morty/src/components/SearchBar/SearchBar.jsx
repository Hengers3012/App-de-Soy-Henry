import styles from "./SearchBar.module.css";
export default function SearchBar(props) {
  return (
    <div className={styles.contendeorPrincipal}>
      <input className={styles.inputAgregar} id="search" type="search" />
      <button
        className={styles.buttonAgregar}
        onClick={() => props.onSearch("Aquin recibo un ID")}
      >
        Agregar
      </button>
    </div>
  );
}
