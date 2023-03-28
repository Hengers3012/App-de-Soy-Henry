import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addMyFavorite, deleteFavorite } from "../../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  image,
  gender,
  onClose,
  deleteFavorite,
  addMyFavorite,
  misFavoritas,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      deleteFavorite(id);
    } else {
      setIsFavorite(true);
      addMyFavorite({ id, name, species, image, gender, onClose });
    }
  };
  useEffect(() => {
    misFavoritas.forEach((favorit) => {
      if (favorit.id === id) {
        setIsFavorite(true);
      }
    });
  }, [misFavoritas]);

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorBtnFav}>
        {isFavorite ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <div className={styles.contenedorBtnX}>
        {isFavorite ? null : (
          <button onClick={onClose} className={styles.buttonX}>
            X
          </button>
        )}
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

const mapStateToProps = (state) => {
  return {
    misFavoritas: state.misFavoritas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMyFavorite: (character) => {
      dispatch(addMyFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
