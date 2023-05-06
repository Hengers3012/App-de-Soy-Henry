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
  allCharacters,
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
    allCharacters.forEach((favorit) => {
      if (favorit.id === id) {
        setIsFavorite(true);
      }
    });
  }, [allCharacters, id]);

  return (
    <div className={styles.contenedor}>
      <div className={styles.actionButtons}>
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
              ❌
            </button>
          )}
        </div>
      </div>
      <Link to={`/detail/${id}`} className={styles.link}>
        <div className={styles.contenedorImage}>
          <img src={image} alt="" />
        </div>
      </Link>
      <div className={styles.propsDContenedor}>
        <h2 className={styles.namePersonaje}>{name}</h2>
        {/* <h2>{species}</h2>
        <h2>{gender}</h2> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allCharacters: state.allCharacters,
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
